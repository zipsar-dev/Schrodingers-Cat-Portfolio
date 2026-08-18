import { Play } from "lucide-react";
import { research } from "../content.js";
import SectionHeading from "../components/SectionHeading.jsx";
import Card from "../components/Card.jsx";
import ImagePlaceholder from "../components/ImagePlaceholder.jsx";
import Reveal from "../components/Reveal.jsx";
import RevealStagger from "../components/RevealStagger.jsx";

export default function Research() {
  const { blogs, videos } = research;
  const blogCta = { label: "Know More", to: "", href: "" };

  return (
    <main>
      {/* ---------------- Blogs ---------------- */}
      <section className="bg-surface-muted">
        <div className="mx-auto w-full max-w-[1280px] px-6 py-16 md:px-10 md:py-24">
          <Reveal>
            <SectionHeading eyebrow={blogs.eyebrow} title={blogs.title} icon={blogs.icon} />
          </Reveal>
          <RevealStagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
            {blogs.posts.map((post, i) => (
              <Card
                key={i}
                image={post.image}
                imageAlt={post.imageAlt}
                title={post.title}
                excerpt={post.excerpt}
                cta={blogCta}
              />
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* ---------------- Videos ---------------- */}
      <section className="bg-bg">
        <div className="mx-auto w-full max-w-[1280px] px-6 py-16 md:px-10 md:py-24">
          <Reveal>
            <SectionHeading eyebrow={videos.eyebrow} title={videos.title} icon={videos.icon} />
          </Reveal>
          <RevealStagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.1}>

            {videos.items.map((video, i) => (
              <figure key={i} className="group">
                <div className="relative">
                  <ImagePlaceholder
                    src={video.image}
                    ratio="16/9"
                    alt={video.imageAlt}
                    className="w-full"
                  />
                  <button
                    type="button"
                    aria-label={`Play video: ${video.title}`}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/85 text-white shadow-lg transition-transform duration-200 group-hover:scale-110 group-hover:bg-primary">
                      <Play size={22} className="ml-1" aria-hidden="true" />
                    </span>
                  </button>
                </div>
                <figcaption className="mt-3 text-center font-heading text-sm font-semibold text-text">
                  {video.title}
                </figcaption>
              </figure>
            ))}
          </RevealStagger>
        </div>
      </section>
    </main>
  );
}
