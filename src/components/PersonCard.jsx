import ImagePlaceholder from "./ImagePlaceholder.jsx";

/**
 * PersonCard — for team/advisory/partner cards.
 * `quote` turns the card into a testimonial-style card.
 */
export default function PersonCard({
  name,
  role,
  quote,
  image,
  imageAlt,
  variant = "team",
}) {
  const isAdvisory = variant === "advisory";

  return (
    <article
      className={`flex flex-col rounded-2xl border border-border bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 ${
        isAdvisory ? "md:p-7" : ""
      }`}
    >
      <ImagePlaceholder
        src={image}
        ratio={isAdvisory ? "3/2" : "1/1"}
        alt={imageAlt || `Portrait of ${name}`}
        icon="user"
        className="w-full"
      />
      <div className="mt-4 flex flex-1 flex-col">
        <h3 className="font-heading text-lg font-bold text-text">{name}</h3>
        <p className="mt-0.5 text-sm font-medium text-primary">{role}</p>
        {quote && (
          <blockquote className="mt-4 flex-1 border-t border-border pt-4 text-sm leading-relaxed text-text-muted">
            <span aria-hidden="true" className="mb-1 block text-2xl leading-none text-primary-light">
              "
            </span>
            {quote}
          </blockquote>
        )}
      </div>
    </article>
  );
}
