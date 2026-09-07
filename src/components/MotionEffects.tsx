import {useEffect} from "react";

/** Decorative motion never changes scroll position or hides readable content. */
export function MotionEffects({paused}: {paused: boolean}) {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let cleanup = () => {};
    function configure() {
      cleanup();
      if (paused || preference.matches) return;
      let frame = 0;
      const update = () => {
        frame = 0;
        const range = document.documentElement.scrollHeight - window.innerHeight;
        document.documentElement.style.setProperty("--scroll-progress", String(range > 0 ? window.scrollY / range : 0));
      };
      const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
      const animations = new Set<Animation>();
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          const animation = entry.target.animate([
            {transform: "translateY(36px)", opacity: 0.35},
            {transform: "translateY(0)", opacity: 1},
          ], {duration: 850, easing: "cubic-bezier(0.22, 1, 0.36, 1)"});
          animations.add(animation);
          animation.onfinish = () => animations.delete(animation);
          observer.unobserve(entry.target);
        });
      }, {threshold: 0.12});
      document.querySelectorAll(".case-study__intro, .selected-work__heading, .professional-record__header").forEach(el => observer.observe(el));
      window.addEventListener("scroll", onScroll, {passive: true});
      window.addEventListener("resize", onScroll);
      update();
      cleanup = () => {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
        cancelAnimationFrame(frame);
        observer.disconnect();
        animations.forEach(animation => animation.cancel());
      };
    }
    configure();
    preference.addEventListener("change", configure);
    return () => { cleanup(); preference.removeEventListener("change", configure); };
  }, [paused]);
  return <div className="reading-progress" aria-hidden="true" />;
}
