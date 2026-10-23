import { useRef, useState, type CSSProperties, type MouseEvent, type PointerEvent } from "react";
import { featuredCaseStudies, type Language } from "../data/caseStudies";
import { projectScenes } from "../data/projectScenes";

export function HeroSection({ language, paused = false }: { language: Language; paused?: boolean }) {
  const [active, setActive] = useState(0);
  const stage = useRef<HTMLDivElement>(null);
  const entering = useRef(false);
  const project = featuredCaseStudies[active];
  const scene = projectScenes[project.slug];

  function move(event: PointerEvent<HTMLDivElement>) {
    if (paused || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    stage.current?.style.setProperty("--pointer-x", `${((event.clientX - bounds.left) / bounds.width - 0.5) * 9}deg`);
    stage.current?.style.setProperty("--pointer-y", `${((event.clientY - bounds.top) / bounds.height - 0.5) * -6}deg`);
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
    <section className="cinema-hero" id="inicio" aria-labelledby="hero-heading" style={{ "--scene-light": scene.light, "--scene-secondary": scene.secondary } as CSSProperties}>
      <div className="cinema-hero__space" onPointerMove={move} onPointerLeave={reset}>
        <div className="cinema-hero__intro">
          <h1 id="hero-heading">{language === "es" ? <>Ideas que<br /><span>cobran vida.</span></> : <>Ideas come<br /><span>to life.</span></>}</h1>
          <p>{language === "es" ? "Soy Kevin, desarrollador full stack en Barcelona." : "I’m Kevin, a full stack developer in Barcelona."}</p>
          <a className="outline-link" href="#proyectos">{language === "es" ? "Ver proyectos" : "Explore projects"}<span aria-hidden="true">↗</span></a>
        </div>
        <div className="portal-environment" aria-hidden="true">
          <div className="ambient-light ambient-light--warm" />
          <div className="ambient-light ambient-light--cool" />
          <div className="architecture architecture--one" />
          <div className="architecture architecture--two" />
          <div className="architecture architecture--three" />
          <div className="stage-floor"><div /><div /><div /><div /></div>
        </div>
        <div className="portal-position" ref={stage}>
          <div className="portal-camera"><div className="portal-float">
            <div className="portal-layer portal-layer--back" aria-hidden="true" />
            <div className="portal-layer portal-layer--middle" aria-hidden="true" />
            <a className="project-portal" key={project.slug} href={`#${project.slug}`} onClick={enterProject} aria-label={`${language === "es" ? "Explorar" : "Explore"} ${project.name}`}>
              <img src={scene.image} alt={scene.alt[language]} width="1583" height="954" fetchPriority={active === 0 ? "high" : "auto"} />
              <span className="project-portal__shine" aria-hidden="true" />
              <span className="project-portal__open" aria-hidden="true">{language === "es" ? "Entrar en" : "Step into"} {project.name}<span aria-hidden="true">↗</span></span>
            </a>
            <div className="portal-reflection" aria-hidden="true" key={`${project.slug}-reflection`}><img src={scene.image} alt="" /></div>
          </div></div>
        </div>
      </div>
      <div className="cinema-hero__footer">
        <div className="project-selector" role="group" aria-label={language === "es" ? "Cambiar proyecto en el escenario" : "Change the project on stage"}>
          {featuredCaseStudies.map((item, index) => <button type="button" key={item.slug} aria-pressed={active === index} onClick={() => setActive(index)}><span>{item.name}</span><span className="project-selector__line" aria-hidden="true" /></button>)}
        </div>
        <a className="scroll-invitation" href="#proyectos"><span>{language === "es" ? "Sigue explorando" : "Keep exploring"}</span><span aria-hidden="true">↓</span></a>
      </div>
    </section>
  );
}
