import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "../lib/gsap.js";

/**
 * Reveal — fades + slides its children in the first time they scroll into
 * view. Wraps content in a <div> (or any tag via `as`).
 *
 * Uses `opacity` + transform only (never visibility/display), so wrapped
 * content stays accessible, selectable and text-extractable at all times.
 */
export default function Reveal({
  as: Tag = "div",
  children,
  className = "",
  delay = 0,
  y = 28,
  duration = 0.8,
  ...rest
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const tween = gsap.fromTo(
      el,
      { opacity: 0, y },
      {
        opacity: 1,
        y: 0,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [delay, y, duration]);

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  );
}
