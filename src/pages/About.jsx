import { about } from "../content.js";
import ImagePlaceholder from "../components/ImagePlaceholder.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import PersonCard from "../components/PersonCard.jsx";
import Reveal from "../components/Reveal.jsx";
import RevealStagger from "../components/RevealStagger.jsx";
import OrbitRing from "../components/OrbitRing.jsx";

export default function About() {
  const { whyName, story, team, advisory, partners, supports, govtPartners } = about;

  return (
    <main>
      {/* ---------------- Why This Name? ---------------- */}
      <section className="bg-surface-muted">
        <div className="mx-auto w-full max-w-[1280px] px-6 py-16 md:px-10 md:py-24">
          <Reveal className="mx-auto max-w-3xl">
            <div className="relative">
              <OrbitRing className="absolute -left-14 -top-16 text-primary/15" size={240} />
              <div className="bracket-frame">
                <SectionHeading
                  eyebrow={whyName.eyebrow}
                  title={whyName.title}
                  icon={whyName.icon}
                  align="center"
                />
                <p className="mt-8 text-lg leading-relaxed text-text-muted">{whyName.text}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- Our Story ---------------- */}
      <section className="bg-bg">
        <div className="mx-auto w-full max-w-[1280px] px-6 py-16 md:px-10 md:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <SectionHeading eyebrow={story.eyebrow} title={story.title} icon={story.icon} />
              <p className="mt-6 leading-relaxed text-text-muted">{story.text}</p>
            </Reveal>
            <Reveal delay={0.1} className="w-full">
              <ImagePlaceholder
                src={story.image}
                ratio="4/3"
                alt={story.imageAlt}
                className="w-full shadow-sm"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- Team ---------------- */}
      <section className="bg-surface-muted">
        <div className="mx-auto w-full max-w-[1280px] px-6 py-16 md:px-10 md:py-24">
          <Reveal className="mx-auto max-w-2xl">
            <SectionHeading eyebrow={team.eyebrow} title={team.title} icon={team.icon} align="center" />
          </Reveal>
          <RevealStagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
            {team.members.map((member, i) => (
              <PersonCard key={i} name={member.name} role={member.role} image={member.image} />
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* ---------------- Advisory Panel ---------------- */}
      <section className="bg-bg">
        <div className="mx-auto w-full max-w-[1280px] px-6 py-16 md:px-10 md:py-24">
          <Reveal className="mx-auto max-w-2xl">
            <SectionHeading
              eyebrow={advisory.eyebrow}
              title={advisory.title}
              icon={advisory.icon}
              align="center"
            />
          </Reveal>
          <RevealStagger className="mt-10 grid gap-6 lg:grid-cols-3" stagger={0.1}>
            {advisory.members.map((member, i) => (
              <PersonCard
                key={i}
                variant="advisory"
                name={member.name}
                role={member.role}
                quote={member.quote}
                image={member.image}
              />
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* ---------------- Partners ---------------- */}
      <section className="bg-surface-muted">
        <div className="mx-auto w-full max-w-[1280px] px-6 py-16 md:px-10 md:py-24">
          <Reveal>
            <SectionHeading eyebrow={partners.eyebrow} title={partners.title} icon={partners.icon} />
            <p className="mt-6 max-w-3xl leading-relaxed text-text-muted">{partners.intro}</p>
          </Reveal>
          <RevealStagger className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
            {partners.logos.map((item, i) => (
              <ImagePlaceholder
                key={i}
                ratio="16/9"
                alt={item.alt}
                label={item.label}
                className="w-full"
              />
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* ---------------- Our Supports ---------------- */}
      <section className="bg-bg">
        <div className="mx-auto w-full max-w-[1280px] px-6 py-16 md:px-10 md:py-24">
          <Reveal>
            <SectionHeading eyebrow={supports.eyebrow} title={supports.title} icon={supports.icon} />
            <p className="mt-6 max-w-3xl leading-relaxed text-text-muted">{supports.intro}</p>
          </Reveal>
          <RevealStagger className="mt-8 grid gap-6 sm:grid-cols-3" stagger={0.1}>
            {supports.logos.map((item, i) => (
              <ImagePlaceholder
                key={i}
                ratio="16/9"
                alt={item.alt}
                label={item.label}
                className="w-full"
              />
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* ---------------- Government Partners ---------------- */}
      <section className="bg-surface-muted">
        <div className="mx-auto w-full max-w-[1280px] px-6 py-16 md:px-10 md:py-24">
          <Reveal>
            <SectionHeading
              eyebrow={govtPartners.eyebrow}
              title={govtPartners.title}
              icon={govtPartners.icon}
            />
            <p className="mt-6 max-w-3xl leading-relaxed text-text-muted">{govtPartners.intro}</p>
          </Reveal>
          <RevealStagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
            {govtPartners.members.map((member, i) => (
              <PersonCard key={i} name={member.name} role={member.role} />
            ))}
          </RevealStagger>
        </div>
      </section>
    </main>
  );
}
