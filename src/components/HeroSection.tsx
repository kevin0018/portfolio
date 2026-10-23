import { useLayoutEffect, useRef, useState, type CSSProperties, type MouseEvent, type PointerEvent } from "react";
import { featuredCaseStudies, type Language } from "../data/caseStudies";
import { projectScenes } from "../data/projectScenes";
import { WikiLolPreview } from "./WikiLolPreview";

// Project the live HTML plane onto the four measured corners of the approved sketch.
// The source is 1000 × 720; normalized corners follow the 1536 × 832 stage.
function portalProjection(width: number, height: number) {
  const [p0, p1, p2, p3] = [[573 / 1536, 158 / 832], [1508 / 1536, 20 / 832], [1497 / 1536, 731 / 832], [534 / 1536, 694 / 832]].map(([x, y]) => [x * width, y * height]);
  const dx1 = p1[0] - p2[0], dx2 = p3[0] - p2[0], dx3 = p0[0] - p1[0] + p2[0] - p3[0];
  const dy1 = p1[1] - p2[1], dy2 = p3[1] - p2[1], dy3 = p0[1] - p1[1] + p2[1] - p3[1];
  const divisor = dx1 * dy2 - dx2 * dy1;
  const g = (dx3 * dy2 - dx2 * dy3) / divisor;
  const h = (dx1 * dy3 - dx3 * dy1) / divisor;
  const a = p1[0] - p0[0] + g * p1[0], b = p3[0] - p0[0] + h * p3[0];
  const d = p1[1] - p0[1] + g * p1[1], e = p3[1] - p0[1] + h * p3[1];
  return `matrix3d(${[a / 1000, d / 1000, 0, g / 1000, b / 720, e / 720, 0, h / 720, 0, 0, 1, 0, p0[0], p0[1], 0, 1].join(",")})`;
}

export function HeroSection({ language, paused = false }: { language: Language; paused?: boolean }) {
  const [active, setActive] = useState(0);
  const stage = useRef<HTMLDivElement>(null);
  const space = useRef<HTMLDivElement>(null);
  const entering = useRef(false);
  const project = featuredCaseStudies[active];
  const scene = projectScenes[project.slug];

  useLayoutEffect(() => {
    const node = space.current;
    if (!node) return;
    const resize = () => {
      const { width, height } = node.getBoundingClientRect();
      stage.current?.style.setProperty("--portal-projection", portalProjection(width, height));
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

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
    <section className="cinema-hero" id="inicio" aria-labelledby="hero-heading" style={{ "--scene-light": scene.light, "--scene-secondary": scene.secondary } as CSSProperties}>
      <div className="cinema-hero__space" ref={space} onPointerMove={move} onPointerLeave={reset}>
        <div className="cinema-hero__intro">
          <h1 id="hero-heading">{language === "es" ? <>Ideas que<br /><span>cobran vida.</span></> : <>Ideas come<br /><span>to life.</span></>}</h1>
          <p>{language === "es" ? "Soy Kevin, desarrollador full stack en Barcelona." : "I’m Kevin, a full stack developer in Barcelona."}</p>
          <a className="outline-link" href="#proyectos">{language === "es" ? "Ver proyectos" : "Explore projects"}<span aria-hidden="true">↗</span></a>
        </div>
        <div className="portal-environment" aria-hidden="true">
          <img className="cinema-backplate" src={`${import.meta.env.BASE_URL}assets/images/stage/cinema-environment.png`} alt="" fetchPriority="high" />
          <div className="cinema-light cinema-light--warm" />
          <div className="cinema-light cinema-light--cool" />
        </div>
        <div className="portal-position" ref={stage}>
          <div className="portal-camera"><div className="portal-float">
            <div className="portal-layer portal-layer--back" aria-hidden="true" />
            <div className="portal-layer portal-layer--middle" aria-hidden="true" />
            <a className="project-portal" key={project.slug} href={`#${project.slug}`} onClick={enterProject} aria-label={`${language === "es" ? "Explorar" : "Explore"} ${project.name}`}>
              {project.slug === "wikilol" ? <WikiLolPreview /> : <img src={scene.image} alt={scene.alt[language]} width="1583" height="954" />}
              <span className="project-portal__shine" aria-hidden="true" />
              <span className="project-portal__open" aria-hidden="true">{language === "es" ? "Entrar en" : "Step into"} {project.name}<span aria-hidden="true">↗</span></span>
            </a>
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
