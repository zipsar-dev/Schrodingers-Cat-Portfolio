import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { home } from "../content.js";
import { gsap, prefersReducedMotion } from "../lib/gsap.js";
import Button from "../components/Button.jsx";
import ImagePlaceholder from "../components/ImagePlaceholder.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import NumberedStep from "../components/NumberedStep.jsx";
import PersonCard from "../components/PersonCard.jsx";
import Reveal from "../components/Reveal.jsx";
import RevealStagger from "../components/RevealStagger.jsx";
import OrbitRing from "../components/OrbitRing.jsx";

function FeedbackSlider({ testimonials }) {
  const [index, setIndex] = useState(0);
  const count = testimonials.length;
  const prev = () => setIndex((i) => (i - 1 + count) % count);
  const next = () => setIndex((i) => (i + 1) % count);

  return (
    <div>
      {/* Mobile / tablet: single-card slider */}
      <div className="lg:hidden">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {testimonials.map((t, i) => (
              <div key={i} className="w-full shrink-0 px-1">
                <PersonCard variant="testimonial" name={t.name} role={t.role} quote={t.quote} />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-5 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text transition-colors hover:bg-primary hover:text-white"
          >
            <ChevronLeft size={18} aria-hidden="true" />
          </button>
          <div className="flex gap-2" role="tablist" aria-label="Testimonial slides">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-6 bg-primary" : "w-2 bg-border hover:bg-text-muted"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text transition-colors hover:bg-primary hover:text-white"
          >
            <ChevronRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Desktop: full 3-card row */}
      <div className="hidden lg:grid lg:grid-cols-3 lg:gap-6">
        {testimonials.map((t, i) => (
          <PersonCard key={i} variant="testimonial" name={t.name} role={t.role} quote={t.quote} />
        ))}
      </div>
    </div>
  );
}

function HeroSection({ hero }) {
  const ref = useRef(null);

  // Entrance animation — staggers the hero pieces in on first paint
  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const targets = el.querySelectorAll("[data-hero]");
    const tween = gsap.fromTo(
      targets,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.05,
      }
    );
    return () => tween.kill();
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden bg-surface">
      {/* Decorative orbit ring + dots */}
      <OrbitRing data-hero className="absolute -right-16 -top-20 text-primary/15" size={340} />
      <span data-hero aria-hidden="true" className="orbit-dot absolute left-[5%] top-24 opacity-40" />
      <span data-hero aria-hidden="true" className="orbit-dot absolute left-[12%] bottom-16 opacity-25" />
      <span data-hero aria-hidden="true" className="orbit-dot-ring absolute right-[4%] top-32 opacity-30" />

      <div className="relative mx-auto w-full max-w-[1280px] px-6 py-16 md:px-10 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div data-hero className="bracket-frame">
            <p className="eyebrow text-primary">{hero.eyebrow}</p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-text sm:text-5xl">
              {hero.heading}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-text-muted">
              {hero.tagline}
            </p>
            <div className="mt-8">
              <Button href={hero.knowMoreAnchor} variant="outline">
                {hero.knowMoreLabel}
                <ArrowRight size={16} aria-hidden="true" />
              </Button>
            </div>
          </div>
          <div data-hero className="relative w-full">
            <ImagePlaceholder
              src={hero.image}
              ratio="4/3"
              alt={hero.imageAlt}
              className="w-full shadow-lg shadow-primary/10"
              eager
            />
            <p className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary shadow-md backdrop-blur">
              <span aria-hidden="true" className="orbit-dot" />
              Unboxing the possibilities
            </p>
          </div>
        </div>
      </div>

      {/* Secondary tab row */}
      <nav aria-label="On this page" className="border-t border-border bg-bg">
        <div className="mx-auto flex w-full max-w-[1280px] items-center gap-6 px-6 py-4 md:px-10">
          {hero.tabs.map((tab) => (
            <a
              key={tab.anchor}
              href={tab.anchor}
              className="text-sm font-semibold text-text-muted transition-colors hover:text-primary"
            >
              {tab.label}
            </a>
          ))}
        </div>
      </nav>
    </section>
  );
}

export default function Home() {
  const { hero, vision, mission, ensure, model, reach, impact, feedback } = home;

  return (
    <main>
      {/* ---------------- Hero ---------------- */}
      <HeroSection hero={hero} />

      {/* ---------------- Vision & Mission ---------------- */}
      <section id="vision-mission" className="scroll-mt-24 bg-bg">
        <div className="mx-auto w-full max-w-[1280px] px-6 py-16 md:px-10 md:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal className="w-full lg:order-1">
              <ImagePlaceholder
                src={vision.image}
                ratio="4/3"
                alt={vision.imageAlt}
                className="w-full shadow-sm"
              />
            </Reveal>
            <Reveal delay={0.1} className="lg:order-2">
              <SectionHeading eyebrow={vision.eyebrow} title={vision.title} icon={vision.icon} />
              <div className="mt-6 space-y-4">
                {vision.text.map((line, i) => (
                  <p key={i} className="leading-relaxed text-text-muted">
                    {line}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="mt-16 grid items-center gap-10 lg:mt-24 lg:grid-cols-2">
            <Reveal>
              <SectionHeading eyebrow={mission.eyebrow} title={mission.title} icon={mission.icon} />
              <div className="mt-6 space-y-4">
                {mission.text.map((line, i) => (
                  <p key={i} className="leading-relaxed text-text-muted">
                    {line}
                  </p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1} className="w-full">
              <ImagePlaceholder
                src={mission.image}
                ratio="4/3"
                alt={mission.imageAlt}
                className="w-full shadow-sm"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- We Ensure That ---------------- */}
      <section className="bg-surface">
        <div className="mx-auto w-full max-w-[1280px] px-6 py-16 md:px-10 md:py-24">
          <Reveal>
            <SectionHeading eyebrow={ensure.eyebrow} title={ensure.title} icon={ensure.icon} />
          </Reveal>
          <RevealStagger className="mt-10 grid gap-6 md:grid-cols-3">
            {ensure.items.map((item, i) => (
              <div key={i} className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                <h3 className="font-heading text-lg font-bold text-text">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{item.description}</p>
              </div>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* ---------------- Our Model ---------------- */}
      <section className="bg-bg">
        <div className="mx-auto w-full max-w-[1280px] px-6 py-16 md:px-10 md:py-24">
          <Reveal>
            <SectionHeading eyebrow={model.eyebrow} title={model.title} icon={model.icon} />
          </Reveal>
          <RevealStagger
            className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5"
            stagger={0.08}
          >
            {model.steps.map((step) => (
              <NumberedStep key={step.number} {...step} />
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* ---------------- Our Reach / Our Impact ---------------- */}
      <section className="bg-surface">
        <div className="mx-auto w-full max-w-[1280px] px-6 py-16 md:px-10 md:py-24">
          <div className="grid gap-10 md:grid-cols-2">
            <Reveal>
              <SectionHeading eyebrow={reach.eyebrow} title={reach.title} icon={reach.icon} />
              <div className="mt-6 space-y-4">
                {reach.text.map((line, i) => (
                  <p key={i} className="leading-relaxed text-text-muted">
                    {line}
                  </p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <SectionHeading eyebrow={impact.eyebrow} title={impact.title} icon={impact.icon} />
              <div className="mt-6 space-y-4">
                {impact.text.map((line, i) => (
                  <p key={i} className="leading-relaxed text-text-muted">
                    {line}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal className="mt-12 w-full">
            <ImagePlaceholder
              src="/images/reach.jpg"
              ratio="16/9"
              alt="A city skyline at dusk, where our research hubs and debates take place"
              className="w-full shadow-sm"
            />
          </Reveal>
        </div>
      </section>

      {/* ---------------- Feedback ---------------- */}
      <section id="feedback" className="scroll-mt-24 bg-bg">
        <div className="mx-auto w-full max-w-[1280px] px-6 py-16 md:px-10 md:py-24">
          <Reveal className="mx-auto max-w-2xl">
            <SectionHeading
              eyebrow={feedback.eyebrow}
              title={feedback.title}
              icon={feedback.icon}
              align="center"
            />
          </Reveal>
          <RevealStagger className="mt-10" y={32}>
            <FeedbackSlider testimonials={feedback.testimonials} />
          </RevealStagger>
        </div>
      </section>
    </main>
  );
}
