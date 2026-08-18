import { club } from "../content.js";
import SectionHeading from "../components/SectionHeading.jsx";
import Icon from "../components/Icon.jsx";
import Reveal from "../components/Reveal.jsx";
import RevealStagger from "../components/RevealStagger.jsx";

export default function Club() {
  const { heading, clubs } = club;

  return (
    <main>
      <section className="bg-surface-muted">
        <div className="mx-auto w-full max-w-[1280px] px-6 py-16 md:px-10 md:py-24">
          <Reveal>
            <SectionHeading eyebrow={heading.eyebrow} title={heading.title} icon={heading.icon} />
            <p className="mt-6 max-w-3xl leading-relaxed text-text-muted">{heading.intro}</p>
          </Reveal>

          {/* 2×2 club grid */}
          <RevealStagger className="mt-10 grid gap-6 sm:grid-cols-2" stagger={0.1}>
            {clubs.map((item, i) => (
              <article
                key={i}
                className="rounded-2xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 md:p-8"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary shadow-sm shadow-primary/10">
                  <Icon name={item.icon} size={24} strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 font-heading text-xl font-bold text-text">{item.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted md:text-base">
                  {item.description}
                </p>
              </article>
            ))}
          </RevealStagger>
        </div>
      </section>
    </main>
  );
}
