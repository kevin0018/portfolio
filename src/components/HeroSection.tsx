import { useRef, type MouseEvent, type PointerEvent } from "react";
import type { Language } from "../data/caseStudies";
import { WikiLolPreview } from "./WikiLolPreview";
import { NorthEastArrow } from "./HeroGraphics";

export function HeroSection({ language, paused = false }: { language: Language; paused?: boolean }) {
  const stage = useRef<HTMLDivElement>(null);
  const entering = useRef(false);

  function move(event: PointerEvent<HTMLDivElement>) {
    if (paused || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    stage.current?.style.setProperty("--pointer-x", `${((event.clientX - bounds.left) / bounds.width - 0.5) * 2}deg`);
    stage.current?.style.setProperty("--pointer-y", `${((event.clientY - bounds.top) / bounds.height - 0.5) * -1.5}deg`);
  }
  function reset() {
    stage.current?.style.setProperty("--pointer-x", "0deg");
    stage.current?.style.setProperty("--pointer-y", "0deg");
  }

  function enterProject(event: MouseEvent<HTMLAnchorElement>) {
    if (paused || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    const camera = stage.current?.firstElementChild;
    if (!(camera instanceof HTMLElement)) return;
    event.preventDefault();
    if (entering.current) return;
    entering.current = true;
    const destination = event.currentTarget.hash;
    const animation = camera.animate([
      { transform: getComputedStyle(camera).transform },
      { transform: "translateZ(180px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1.08)" },
    ], { duration: 450, easing: "cubic-bezier(.65,0,.35,1)" });
    void animation.finished.catch(() => undefined).then(() => {
      location.hash = destination;
      entering.current = false;
    });
  }

  return (
    <section className="cinema-hero" id="inicio" aria-labelledby="hero-heading">
      <div className="cinema-hero__space" onPointerMove={move} onPointerLeave={reset}>
        <div className="cinema-hero__intro">
          <h1 id="hero-heading">{language === "es" ? <>Ideas que<br /><span>cobran vida.</span></> : <>Ideas come<br /><span>to life.</span></>}</h1>
          <p>{language === "es" ? "Soy Kevin, desarrollador full stack en Barcelona." : "I’m Kevin, a full stack developer in Barcelona."}</p>
          <a className="outline-link" href="#proyectos">{language === "es" ? "Ver proyectos" : "Explore projects"}<NorthEastArrow /></a>
        </div>
        <div className="portal-environment" aria-hidden="true">
          <svg className="cinema-backplate" viewBox="0 80 1536 832" preserveAspectRatio="none">
            <image href={`${import.meta.env.BASE_URL}assets/images/stage/cinema-environment.png`} width="1536" height="1024" />
          </svg>
          <div className="cinema-light cinema-light--warm" />
          <div className="cinema-light cinema-light--cool" />
        </div>
        <div className="portal-position" ref={stage}>
          <div className="portal-camera"><div className="portal-float">
            <a className="project-portal" href="#wikilol" onClick={enterProject} aria-label={language === "es" ? "Explorar wikiLoL" : "Explore wikiLoL"}>
              <WikiLolPreview />
            </a>
          </div></div>
        </div>
      </div>
      <div className="cinema-hero__footer">
        <a className="hero-explore-link" href="#proyectos">{language === "es" ? "Sigue explorando" : "Keep exploring"}<span aria-hidden="true">↓</span></a>
      </div>
    </section>
  );
}
