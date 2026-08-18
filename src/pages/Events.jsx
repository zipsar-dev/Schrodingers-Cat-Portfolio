import { Calendar, ArrowRight } from "lucide-react";
import { events } from "../content.js";
import SectionHeading from "../components/SectionHeading.jsx";
import Button from "../components/Button.jsx";
import Reveal from "../components/Reveal.jsx";
import RevealStagger from "../components/RevealStagger.jsx";

export default function Events() {
  const { heading, list } = events;

  return (
    <main>
      <section className="bg-surface-muted">
        <div className="mx-auto w-full max-w-[1280px] px-6 py-16 md:px-10 md:py-24">
          <Reveal>
            <SectionHeading eyebrow={heading.eyebrow} title={heading.title} icon={heading.icon} />
            <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-text-muted">
              {heading.sublabel}
            </p>
          </Reveal>

          {/* Vertical stacked list */}
          <RevealStagger className="mt-10 divide-y divide-border" y={20} stagger={0.08}>

            {list.map((event, i) => (
              <article key={i} className="py-10 first:pt-2 last:pb-2">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-heading text-xl font-bold text-text sm:text-2xl">
                    {event.name}
                  </h3>
                  {event.date && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      <Calendar size={13} aria-hidden="true" />
                      {event.date}
                    </span>
                  )}
                </div>
                <p className="mt-4 max-w-3xl leading-relaxed text-text-muted">
                  {event.description}
                </p>
                <div className="mt-5">
                  <Button variant="outline" href="/contact">
                    Know More
                    <ArrowRight size={16} aria-hidden="true" />
                  </Button>
                </div>
              </article>
            ))}
          </RevealStagger>
        </div>
      </section>
    </main>
  );
}
