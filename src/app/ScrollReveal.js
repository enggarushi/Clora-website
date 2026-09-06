"use client";
import { useEffect, useRef } from "react";

/**
 * ScrollReveal — fires ONLY when the element scrolls into view.
 * The hidden state is applied by JS right before observation starts,
 * so SSR / first paint shows elements normally (no flash of invisible content).
 */
export default function ScrollReveal({
  animation = "fade-up",
  delay = "0ms",
  duration = "650ms",
  threshold = 0.12,
  className = "",
  as: Tag = "div",
  children,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Set CSS variables for timing
    el.style.setProperty("--rv-delay",    delay);
    el.style.setProperty("--rv-duration", duration);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Already visible on first paint — just animate in
          el.removeAttribute("data-reveal");
          requestAnimationFrame(() => el.setAttribute("data-reveal-in", "1"));
          io.disconnect();
        } else {
          // Element is off-screen — apply hidden state NOW (JS-only, not SSR)
          el.setAttribute("data-reveal", animation);
        }
      },
      { threshold }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [animation, delay, duration, threshold]);

  return <Tag ref={ref} className={className}>{children}</Tag>;
}
