import Icon from "./Icon.jsx";

/**
 * ImagePlaceholder — renders a real image when `src` is provided, otherwise a
 * light-grey box standing in for photography until the asset arrives.
 * `ratio` keeps aspect ratios consistent per section so swapping in real
 * images never breaks the layout.
 *
 * Props:
 *  - src:    path to a real image (optional; falls back to the placeholder)
 *  - ratio:  "16/9" | "4/3" | "3/2" | "1/1" | "2/3" | "3/4" | "21/9" (or any CSS aspect-ratio)
 *  - alt:    accessibility text
 *  - icon:   optional icon name shown only in the placeholder state
 *  - label:  optional short label shown only in the placeholder state
 *  - eager:  set to true to disable lazy loading (e.g. above-the-fold images)
 *  - imgClassName: extra classes for the <img> element
 */
export default function ImagePlaceholder({
  ratio = "4/3",
  alt,
  src,
  icon = "image",
  label,
  className = "",
  imgClassName = "",
  iconSize = 28,
  eager = false,
}) {
  const ratios = {
    "16/9": "16/9",
    "4/3": "4/3",
    "3/2": "3/2",
    "1/1": "1/1",
    "2/3": "2/3",
    "3/4": "3/4",
    "21/9": "21/9",
  };

  if (src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`overflow-hidden rounded-xl bg-placeholder/40 ${className}`}
        style={{ aspectRatio: ratios[ratio] || ratio }}
      >
        <img
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          className={`h-full w-full object-cover ${imgClassName}`}
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={`flex flex-col items-center justify-center gap-2 overflow-hidden rounded-xl border border-dashed border-border bg-placeholder/50 text-text-muted ${className}`}
      style={{ aspectRatio: ratios[ratio] || ratio }}
    >
      {icon && <Icon name={icon} size={iconSize} strokeWidth={1.5} />}
      {label && <span className="text-xs font-medium tracking-wide">{label}</span>}
    </div>
  );
}
