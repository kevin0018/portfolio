import { useEffect } from "react";

const clamp = (value: number, min = 0, max = 1) =>
  Math.min(max, Math.max(min, value));

export function MotionEffects({ paused }: { paused: boolean }) {
  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const hero = document.querySelector<HTMLElement>(".hero-poster");
    const work = document.querySelector<HTMLElement>(".work-posters");
    const root = document.documentElement;
    const posters = Array.from(
      document.querySelectorAll<HTMLElement>(".project-poster"),
    );
    const switches = Array.from(
      document.querySelectorAll<HTMLButtonElement>("[data-switch-index]"),
    );
    const render = () => {
      frame = 0;
      const reduced = paused || media.matches;
      root.dataset.motionReduced = String(reduced);
      for (const scene of [hero, work]) {
        scene?.classList.toggle("is-live", !reduced);
        scene?.classList.toggle("is-rest", reduced);
      }
      if (hero) {
        const progress = reduced
          ? 0
          : clamp(
              -hero.getBoundingClientRect().top /
                (hero.offsetHeight - innerHeight),
            );
        hero.style.setProperty("--hero-progress", String(progress));
        hero.style.setProperty("--hero-shift", `${progress * -80}px`);
        hero.style.setProperty("--hero-rotation", `${progress * -6}deg`);
        hero.style.setProperty("--hero-scale", String(1 + progress * 0.12));
      }
      if (work) {
        const progress = clamp(
          -work.getBoundingClientRect().top /
            Math.max(1, work.offsetHeight - innerHeight),
        );
        const active = Math.min(3, Math.floor(progress * 4));
        posters.forEach((poster, index) => {
          const local = clamp(progress * 4 - index);
          const visible = reduced || index === active;
          poster.style.setProperty(
            "--seam-travel",
            `${reduced ? 0 : Math.sign(local - 0.5) * Math.pow(Math.abs(local - 0.5) * 2, 4) * 3}vh`,
          );
          poster.style.setProperty(
            "--pane-travel",
            `${reduced ? 0 : (local - 0.5) * 9}vh`,
          );
          poster.style.setProperty(
            "--picture-scale",
            String(reduced ? 1 : 1.09 - local * 0.06),
          );
          poster.style.opacity = visible ? "1" : "0";
          poster.style.visibility = visible ? "visible" : "hidden";
          poster.inert = !visible;
        });
        switches.forEach((button, index) =>
          button.setAttribute("aria-pressed", String(active === index)),
        );
        work.style.setProperty("--work-progress", String(progress));
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
