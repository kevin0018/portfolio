import { useRef, type PointerEvent } from "react";
import type { Language } from "../data/caseStudies";

const asset = (name: string) => `${import.meta.env.BASE_URL}assets/images/${name}`;

function SketchArrow({ className = "" }: { className?: string }) {
  return <svg className={`desk-sketch-arrow ${className}`} viewBox="0 0 100 100" fill="none" aria-hidden="true">
    <path d="M13 12C70 22 24 75 82 79M66 65l18 15-22 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>;
}

function BrowserPreview({ project, image, alt }: { project: string; image: string; alt: string }) {
  return <div className="desk-browser">
    <div className="desk-browser__bar" aria-hidden="true"><i /><i /><i /></div>
    <img src={asset(image)} alt={alt} fetchPriority={project === "wikiLoL" ? "high" : "auto"} draggable={false} />
  </div>;
}

export function HeroSection({ language, paused = false }: { language: Language; paused?: boolean }) {
  const stage = useRef<HTMLDivElement>(null);
  const es = language === "es";
  function move(event: PointerEvent<HTMLDivElement>) {
    if (paused || event.pointerType !== "mouse") return;
    const box = event.currentTarget.getBoundingClientRect();
    stage.current?.style.setProperty("--desk-pointer-x", `${((event.clientX - box.left) / box.width - .5) * 3}deg`);
    stage.current?.style.setProperty("--desk-pointer-y", `${((event.clientY - box.top) / box.height - .5) * -2}deg`);
  }
  function reset() {
    stage.current?.style.setProperty("--desk-pointer-x", "0deg");
    stage.current?.style.setProperty("--desk-pointer-y", "0deg");
  }
  return <section className="desk-hero" id="inicio" aria-labelledby="hero-heading">
    <div className="desk-stage" ref={stage} onPointerMove={move} onPointerLeave={reset}>
      <div className="desk-identity" data-reveal>
        <p>Kevin Hernández</p>
        <span>{es ? "Desarrollador full stack" : "Full stack developer"}</span>
        <svg className="desk-identity__marks" viewBox="0 0 40 40" aria-hidden="true"><path d="m8 20 9-15M20 29l15-7" /></svg>
      </div>
      <div className="desk-intro">
        <h1 id="hero-heading" data-reveal>{es ? <>Así construyo<br />mis <span>proyectos.</span></> : <>How I build<br />my <span>projects.</span></>}</h1>
        <p data-reveal data-delay="100">{es ? "Desarrollo aplicaciones web. Aquí puedes explorar mis proyectos y las decisiones que hay detrás." : "I build web applications. Explore my projects and the decisions behind them."}</p>
        <SketchArrow className="desk-intro__arrow" />
      </div>
      <a className="desk-window desk-window--wiki" href="#wikilol" aria-label={es ? "Explorar wikiLoL" : "Explore wikiLoL"}>
        <BrowserPreview project="wikiLoL" image="wikilol/01-search.png" alt={es ? "Interfaz de wikiLoL: búsqueda de jugadores y archivo de campeones" : "wikiLoL interface: player search and champion archive"} />
      </a>
      <div className="desk-note desk-note--wiki" aria-hidden="true"><span>wikiLoL</span><svg className="desk-sketch-arrow" viewBox="0 0 100 100" fill="none"><path d="M76 12C90 54 58 65 15 73M31 57 15 73l22 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
      <a className="desk-window desk-window--travel" href="#blog-de-viajes" aria-label={es ? "Explorar Blog de Viajes" : "Explore Blog de Viajes"}>
        <BrowserPreview project="Blog de Viajes" image="blog-de-viajes-preview.jpg" alt={es ? "Blog de Viajes: descubre destinos y crea itinerarios compartibles" : "Blog de Viajes: discover destinations and create shareable itineraries"} />
      </a>
      <div className="desk-note desk-note--travel" aria-hidden="true"><span>Blog de<br />Viajes</span><SketchArrow /></div>
      <svg className="desk-star" viewBox="0 0 100 110" aria-hidden="true"><path d="M50 0C60 28 70 43 100 55 70 66 60 82 50 110 40 82 30 66 0 55 30 43 40 28 50 0Z" /></svg>
      <svg className="desk-scribble" viewBox="0 0 220 190" fill="none" aria-hidden="true"><path d="M5 89c77 75 202-100 125-72-63 24-80 164-10 155" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
      <a className="desk-explore" href="#proyectos" aria-label={es ? "Ver mis proyectos" : "View my projects"}><svg viewBox="0 0 60 60" fill="none" aria-hidden="true"><path d="M12 30h36M34 16l14 14-14 14" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
      <svg className="desk-dashes" viewBox="0 0 100 70" aria-hidden="true"><path d="m15 40-7-30m34 30L57 7M65 52l24-22" /></svg>
    </div>
    <div className="desk-footer">
      <span className="desk-location"><svg viewBox="0 0 24 28" fill="none" aria-hidden="true"><path d="M21 10c0 7-9 16-9 16S3 17 3 10a9 9 0 1 1 18 0Z" /><circle cx="12" cy="10" r="3" /></svg>{es ? "Desarrollo full stack · Barcelona" : "Full stack development · Barcelona"}</span>
      <a className="desk-footer__project" href="#wikilol">wikiLoL</a>
      <a className="desk-footer__project" href="#blog-de-viajes">Blog de Viajes</a>
      <a className="hero-explore-link" href="#proyectos">{es ? "Sigue explorando" : "Keep exploring"}<span aria-hidden="true">↓</span></a>
    </div>
  </section>;
}
