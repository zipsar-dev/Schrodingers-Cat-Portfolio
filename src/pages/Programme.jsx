import { useState } from "react";
import { programme } from "../content.js";
import SectionHeading from "../components/SectionHeading.jsx";
import Card from "../components/Card.jsx";
import Reveal from "../components/Reveal.jsx";
import RevealStagger from "../components/RevealStagger.jsx";

export default function Programme() {
  const [activeTab, setActiveTab] = useState(programme.tabs[0].id);
  const { heading, tabs, programmes } = programme;
  const cta = { label: "Know More", to: "/contact", href: "" };

  const visible =
    activeTab === "all"
      ? programmes
      : programmes.filter((p) => p.id === activeTab);

  return (
    <main>
      <section className="bg-surface-muted">
        <div className="mx-auto w-full max-w-[1280px] px-6 py-16 md:px-10 md:py-24">
          <Reveal>
            <SectionHeading eyebrow={heading.eyebrow} title={heading.title} icon={heading.icon} />
          </Reveal>

          {/* Filter tabs */}
          <div
            role="tablist"
            aria-label="Filter programmes"
            className="mt-8 flex flex-wrap gap-2"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full border px-5 py-2 text-sm font-semibold transition-colors ${
                  activeTab === tab.id
                    ? "border-primary bg-primary text-white"
                    : "border-border bg-bg text-text-muted hover:border-primary hover:text-primary"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Programme grid */}
          <RevealStagger className="mt-10 grid gap-6 md:grid-cols-2" stagger={0.1}>
            {visible.map((p, i) => (
              <Card
                key={i}
                image={p.image}
                imageAlt={p.imageAlt}
                title={p.name}
                excerpt={p.description}
                cta={cta}
                imageRatio="3/2"
              />
            ))}
          </RevealStagger>
        </div>
      </section>
    </main>
  );
}
