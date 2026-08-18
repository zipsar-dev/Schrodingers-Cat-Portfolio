import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "../lib/gsap.js";

/**
 * RevealStagger — animates the direct children of the wrapper one after
 * another (stagger) the first time the wrapper scrolls into view. Great for
 * card grids and step rows.
 *
 * Children with the `data-no-reveal` attribute are skipped.
 */
export default function RevealStagger({
  as: Tag = "div",
  children,
  className = "",
  delay = 0,
  y = 24,
  stagger = 0.07,
  duration = 0.45,
  ...rest
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const items = [...el.children].filter(
      (child) =>
        child.nodeType === 1 && !child.hasAttribute("data-no-reveal")
    );
    if (!items.length) return;

    const tween = gsap.fromTo(
      items,
      { opacity: 0, y },
      {
        opacity: 1,
        y: 0,
        duration,
        delay,
        stagger,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [delay, y, stagger, duration]);

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  );
}
