import { Link } from "react-router-dom";

const variantClasses = {
  primary:
    "bg-primary text-white shadow-sm shadow-primary/25 hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-md hover:shadow-primary/30",
  outline:
    "border border-primary/70 text-primary hover:bg-primary hover:text-white hover:-translate-y-0.5",
  ghost:
    "text-primary hover:bg-primary-soft",
};

/**
 * Button — renders a <Link> when given `to`, an <a> when given `href`,
 * otherwise a <button>. Variants: "primary" | "outline" | "ghost".
 */
export default function Button({
  variant = "primary",
  to,
  href,
  onClick,
  type,
  className = "",
  children,
  ...rest
}) {
  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2",
    variantClasses[variant] || variantClasses.primary,
    className,
  ].join(" ");

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type={type || "button"} onClick={onClick} className={classes} {...rest}>
      {children}
    </button>
  );
}
