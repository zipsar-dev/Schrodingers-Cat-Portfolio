import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, LoaderCircle } from "lucide-react";
import { contact } from "../content.js";
import SectionHeading from "../components/SectionHeading.jsx";
import ImagePlaceholder from "../components/ImagePlaceholder.jsx";
import Reveal from "../components/Reveal.jsx";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const { heading, intro, form, imageAlt } = contact;

  const [values, setValues] = useState({ username: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  // {{CONTACT_FORM_ENDPOINT}} — wire `form.endpoint` in src/content.js to a
  // real service (Formspree, an API route, an email service) once decided.
  const endpoint = form.endpoint;

  const setField = (name) => (e) => {
    setValues((v) => ({ ...v, [name]: e.target.value }));
    if (errors[name]) {
      setErrors((er) => ({ ...er, [name]: undefined }));
    }
  };

  function validate() {
    const next = {};
    if (values.username.trim().length < 2) next.username = form.fields.username.error;
    if (!EMAIL_RE.test(values.email.trim())) next.email = form.fields.email.error;
    if (values.message.trim().length < 10) next.message = form.fields.message.error;
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");

    try {
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      } else {
        // No endpoint configured yet — simulate a successful submission.
        await new Promise((r) => setTimeout(r, 900));
      }
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const fieldClasses = (hasError) =>
    `w-full rounded-md border bg-bg px-4 py-3 text-sm text-text placeholder:text-text-muted/70 focus-visible:outline-2 focus-visible:outline-offset-0 ${
      hasError ? "border-red-500" : "border-border"
    }`;

  if (status === "success") {
    return (
      <main>
        <section className="bg-surface-muted">
          <div className="mx-auto w-full max-w-[1280px] px-6 py-16 md:px-10 md:py-24">
            <SectionHeading eyebrow={heading.eyebrow} title={heading.title} icon={heading.icon} />
            <div className="mt-10 max-w-xl rounded-lg border border-border bg-white p-8 text-center">
              <CheckCircle2
                size={40}
                className="mx-auto text-primary"
                aria-hidden="true"
              />
              <h2 className="mt-4 font-heading text-2xl font-bold text-text">
                {form.successHeading}
              </h2>
              <p className="mt-2 text-text-muted">{form.successText}</p>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="bg-surface-muted">
        <div className="mx-auto w-full max-w-[1280px] px-6 py-16 md:px-10 md:py-24">
          <Reveal>
            <SectionHeading eyebrow={heading.eyebrow} title={heading.title} icon={heading.icon} />
            <p className="mt-6 max-w-3xl leading-relaxed text-text-muted">{intro}</p>
          </Reveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            {/* Form */}
            <form onSubmit={handleSubmit} noValidate className="rounded-2xl border border-border bg-white p-6 shadow-sm md:p-8">
              <div className="space-y-5">
                <div>
                  <label htmlFor="contact-username" className="mb-1.5 block text-sm font-semibold text-text">
                    {form.fields.username.label}
                  </label>
                  <input
                    id="contact-username"
                    name="username"
                    type="text"
                    value={values.username}
                    onChange={setField("username")}
                    placeholder={form.fields.username.placeholder}
                    aria-invalid={Boolean(errors.username)}
                    aria-describedby={errors.username ? "username-error" : undefined}
                    className={fieldClasses(Boolean(errors.username))}
                  />
                  {errors.username && (
                    <p id="username-error" className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600">
                      <AlertCircle size={13} aria-hidden="true" />
                      {errors.username}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-email" className="mb-1.5 block text-sm font-semibold text-text">
                    {form.fields.email.label}
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={setField("email")}
                    placeholder={form.fields.email.placeholder}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={fieldClasses(Boolean(errors.email))}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600">
                      <AlertCircle size={13} aria-hidden="true" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-message" className="mb-1.5 block text-sm font-semibold text-text">
                    {form.fields.message.label}
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={values.message}
                    onChange={setField("message")}
                    placeholder={form.fields.message.placeholder}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={`${fieldClasses(Boolean(errors.message))} resize-y`}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600">
                      <AlertCircle size={13} aria-hidden="true" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {status === "error" && (
                  <p role="alert" className="flex items-center gap-2 rounded-md bg-red-50 px-4 py-3 text-sm text-red-700">
                    <AlertCircle size={16} aria-hidden="true" />
                    {form.failureText}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-light disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {status === "sending" ? (
                    <>
                      <LoaderCircle size={16} className="animate-spin" aria-hidden="true" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} aria-hidden="true" />
                      {form.submitLabel}
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Image / map placeholder */}
            <Reveal delay={0.1} className="w-full lg:h-full">
              <ImagePlaceholder
                src={contact.image}
                ratio="4/3"
                alt={imageAlt}
                className="h-full min-h-[300px] w-full lg:min-h-[420px]"
              />
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
