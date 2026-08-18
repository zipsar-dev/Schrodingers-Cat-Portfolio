import ImagePlaceholder from "./ImagePlaceholder.jsx";
import Button from "./Button.jsx";

/**
 * Card — generic content card (blog posts, programmes, etc.).
 * If `cta.to`/`cta.href` is empty the button renders inert (client wires
 * destinations later without touching markup).
 */
export default function Card({ image, imageAlt, title, excerpt, cta, imageRatio = "16/9" }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
      <ImagePlaceholder
        src={image}
        ratio={imageRatio}
        alt={imageAlt}
        icon="image"
        className="w-full"
        imgClassName="transition-transform duration-500 group-hover:scale-105"
      />
      <div className="flex flex-1 flex-col pt-5">
        <h3 className="font-heading text-lg font-bold leading-snug text-text">{title}</h3>
        {excerpt && (
          <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">{excerpt}</p>
        )}
        {cta && (
          <div className="mt-5">
            <Button variant="outline" to={cta.to} href={cta.href}>
              {cta.label}
            </Button>
          </div>
        )}
      </div>
    </article>
  );
}
