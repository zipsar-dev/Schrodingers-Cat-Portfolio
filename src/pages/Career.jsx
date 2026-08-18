import { ArrowRight } from "lucide-react";
import { career, site } from "../content.js";
import SectionHeading from "../components/SectionHeading.jsx";
import ImagePlaceholder from "../components/ImagePlaceholder.jsx";
import Button from "../components/Button.jsx";
import Reveal from "../components/Reveal.jsx";

const orbitDots = (
  <>
    <span aria-hidden="true" className="orbit-dot absolute left-[10%] top-8 opacity-30" />
    <span aria-hidden="true" className="orbit-dot absolute right-[8%] bottom-10 opacity-25" />
  </>
);


export default function Career() {
  const { heading, intro, cta, lifeAtOrg, whyWork } = career;

  return (
    <main>
      {/* ---------------- Work with us ---------------- */}
      <section className="bg-surface-muted">
        <div className="mx-auto w-full max-w-[1280px] px-6 py-16 md:px-10 md:py-24">
          <Reveal>
            <SectionHeading eyebrow={heading.eyebrow} title={heading.title} icon={heading.icon} />
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-text-muted">{intro}</p>
          </Reveal>
        </div>
      </section>

      {/* ---------------- CTA banner ---------------- */}
      <section className="relative overflow-hidden bg-primary">
        <div className="pointer-events-none absolute inset-0">{orbitDots}</div>
        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 py-16 text-center md:px-10 md:py-20">
          <Reveal>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">{cta.heading}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-white/85">{cta.text}</p>
          </Reveal>
          <Reveal delay={0.2} className="relative z-20 mt-8">
            <Button
              to={cta.buttonTo}
              variant="primary"
              className="hover:bg-primary/90 focus-visible:outline-white"
              // className="bg-white text-primary shadow-lg hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-xl focus-visible:outline-white"
            >
              {cta.buttonLabel}
              <ArrowRight size={16} aria-hidden="true" />
            </Button>
          </Reveal>
        </div>
      </section>

      {/* ---------------- Life at org ---------------- */}
      <section className="bg-bg">
        <div className="mx-auto w-full max-w-[1280px] px-6 py-16 md:px-10 md:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal className="w-full">
              <ImagePlaceholder
                src={lifeAtOrg.image}
                ratio="4/3"
                alt={lifeAtOrg.imageAlt}
                className="w-full shadow-sm"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <SectionHeading
                eyebrow={lifeAtOrg.eyebrow}
                title={lifeAtOrg.title}
                icon={lifeAtOrg.icon}
              />
              <p className="mt-6 leading-relaxed text-text-muted">{lifeAtOrg.text}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- Why work with us ---------------- */}
      <section className="bg-surface-muted">
        <div className="mx-auto w-full max-w-[1280px] px-6 py-16 md:px-10 md:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal delay={0.1} className="lg:order-2">
              <ImagePlaceholder
                src={whyWork.image}
                ratio="4/3"
                alt={whyWork.imageAlt}
                className="w-full shadow-sm"
              />
            </Reveal>
            <Reveal className="lg:order-1">
              <SectionHeading
                eyebrow={whyWork.eyebrow}
                title={whyWork.title}
                icon={whyWork.icon}
              />
              <p className="mt-6 leading-relaxed text-text-muted">{whyWork.text}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- Apply strip ---------------- */}
      <section className="bg-bg">
        <div className="mx-auto w-full max-w-[1280px] px-6 py-14 text-center md:px-10">
          <p className="text-text-muted">
            Not sure which role fits? Write to{" "}
            <a href={`mailto:${site.email}`} className="font-semibold text-primary hover:underline">
              {site.email}
            </a>{" "}
            and we&apos;ll find one together.
          </p>
        </div>
      </section>
    </main>
  );
}
