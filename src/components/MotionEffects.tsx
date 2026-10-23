import { useEffect } from "react";

export function MotionEffects({ paused }: { paused: boolean }) {
  useEffect(() => {
    let frame = 0;
    const hero = document.querySelector<HTMLElement>(".cinema-hero");
    const render = () => {
      frame = 0;
      if (!hero) return;
      const progress = paused ? 0 : Math.min(1, Math.max(0, -hero.getBoundingClientRect().top / hero.offsetHeight));
      hero.style.setProperty("--hero-progress", String(progress));
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(render); };
    render();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        if (!paused) entry.target.animate([
          { transform: "translateY(36px)", opacity: 0.15 },
          { transform: "translateY(0)", opacity: 1 },
        ], { duration: 1000, easing: "cubic-bezier(.16,1,.3,1)", fill: "none", delay: Number((entry.target as HTMLElement).dataset.delay ?? 0) });
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.1 });
    document.querySelectorAll("[data-reveal]").forEach(node => observer.observe(node));
    if (paused) document.getAnimations().forEach(animation => animation.cancel());
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [paused]);
  return null;
}
