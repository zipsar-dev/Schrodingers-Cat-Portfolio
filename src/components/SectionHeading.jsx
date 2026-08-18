import Icon from "./Icon.jsx";

/**
 * SectionHeading — the consistent icon-next-to-heading pattern used at the
 * top of nearly every content block.
 */
export default function SectionHeading({
  eyebrow,
  title,
  icon,
  iconSize = 22,
  id,
  className = "",
  align = "left",
}) {
  const alignClasses =
    align === "center"
      ? "items-center text-center"
      : "items-start text-left";

  return (
    <div id={id} className={`flex flex-col gap-3 ${alignClasses} ${className}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2.5 eyebrow text-primary">
          <span aria-hidden="true" className="h-px w-6 bg-primary" />
          {eyebrow}
          <span aria-hidden="true" className="orbit-dot" style={{ width: 6, height: 6 }} />
        </span>
      )}
      <div className="flex items-center gap-4">
        {icon && (
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-soft text-primary shadow-sm shadow-primary/10">
            <Icon name={icon} size={iconSize} strokeWidth={1.75} />
          </span>
        )}
        <h2 className="text-2xl font-bold text-text sm:text-3xl">{title}</h2>
      </div>
    </div>
  );
}
