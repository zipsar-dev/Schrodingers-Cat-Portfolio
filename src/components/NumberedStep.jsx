import Icon from "./Icon.jsx";

/**
 * NumberedStep — one step in the "Our Model" row (01–05).
 */
export default function NumberedStep({ number, icon, title, description }) {
  return (
    <div className="flex h-full flex-col items-start gap-4 rounded-2xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
      <div className="flex w-full items-center justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary shadow-sm shadow-primary/10">
          <Icon name={icon} size={22} strokeWidth={1.75} />
        </span>
        <span className="font-heading text-sm font-bold tracking-[0.2em] text-primary-light">
          {number}
        </span>
      </div>
      <h3 className="font-heading text-base font-bold leading-snug text-text">{title}</h3>
      <p className="text-sm leading-relaxed text-text-muted">{description}</p>
    </div>
  );
}
