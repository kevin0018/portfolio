import { useEffect } from "react";

const clamp = (value: number, min = 0, max = 1) =>
  Math.min(max, Math.max(min, value));

export function MotionEffects({ paused }: { paused: boolean }) {
  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const hero = document.querySelector<HTMLElement>(".hero-poster");
    const root = document.documentElement;
    const render = () => {
      frame = 0;
      const reduced = paused || media.matches;
      root.dataset.motionReduced = String(reduced);
      if (hero) {
        const bounds = hero.getBoundingClientRect();
        const progress = reduced
          ? 0
          : clamp(-bounds.top / Math.max(1, bounds.height));
        hero.style.setProperty("--hero-shift", `${progress * -12}px`);
        hero.style.setProperty("--hero-rotation", `${progress * -1}deg`);
      }
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(render);
    };
    render();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    media.addEventListener("change", schedule);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          if (!paused && !media.matches)
            entry.target.animate(
              [
                { transform: "translateY(34px)", clipPath: "inset(0 0 8% 0)" },
                { transform: "translateY(0)", clipPath: "inset(0 0 0 0)" },
              ],
              {
                duration: 850,
                easing: "cubic-bezier(.16,1,.3,1)",
                fill: "none",
              },
            );
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12 },
    );
    document
      .querySelectorAll("[data-reveal]")
      .forEach((node) => observer.observe(node));
    if (paused)
      document.getAnimations().forEach((animation) => animation.cancel());
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      media.removeEventListener("change", schedule);
    };
  }, [paused]);
  return null;
}
