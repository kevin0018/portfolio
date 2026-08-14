import {useEffect, useRef} from "react";
import type {Language} from "../data/caseStudies";
import {HeroOpeningSequence} from "./HeroOpeningSequence";

type HeroSectionProps = {language: Language};

const copy = {
  es: {
    kicker: "Full Stack Developer · Barcelona",
    title: ["Kevin", "Hernández"],
    titleLabel: "Kevin Hernández.",
    currentLabel: "Actualmente",
    current: "Inmatic · julio de 2024 — presente",
    roles: ["Backend", "Frontend"],
    rolesLabel: "Backend y frontend",
    body: "Desarrollo soluciones de principio a fin: modelo la lógica de negocio y las APIs con Python y Django, conecto plataformas y datos, y construyo interfaces mantenibles con Vue.js y TypeScript.",
    portraitAlt: "Ilustración en blanco y negro de Kevin Hernández",
    contact: "Contactar",
    cv: "Descargar CV",
    next: "Ver proyectos",
  },
  en: {
    kicker: "Full Stack Developer · Barcelona",
    title: ["Kevin", "Hernández"],
    titleLabel: "Kevin Hernández.",
    currentLabel: "Currently",
    current: "Inmatic · July 2024 — present",
    roles: ["Backend", "Frontend"],
    rolesLabel: "Backend and frontend",
    body: "I build end-to-end solutions: I model business logic and APIs with Python and Django, connect platforms and data, and create maintainable interfaces with Vue.js and TypeScript.",
    portraitAlt: "Black and white illustration of Kevin Hernández",
    contact: "Contact me",
    cv: "Download CV",
    next: "View projects",
  },
} as const;

export function HeroSection({language}: HeroSectionProps) {
  const text = copy[language];
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let isNavigating = false;
    let unlockTimer: number | undefined;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleWheel = (event: WheelEvent) => {
      if (
        !heroRef.current ||
        isNavigating ||
        event.ctrlKey ||
        event.deltaY <= 12 ||
        Math.abs(event.deltaY) <= Math.abs(event.deltaX) ||
        window.scrollY > 2
      ) return;

      const nextSection = document.getElementById("wikilol");
      if (!nextSection) return;

      event.preventDefault();
      isNavigating = true;
      nextSection.scrollIntoView({
        behavior: reducedMotion.matches ? "auto" : "smooth",
        block: "start",
      });
      unlockTimer = window.setTimeout(() => {
        isNavigating = false;
      }, reducedMotion.matches ? 100 : 900);
    };

    window.addEventListener("wheel", handleWheel, {passive: false});
    return () => {
      window.removeEventListener("wheel", handleWheel);
      if (unlockTimer) window.clearTimeout(unlockTimer);
    };
  }, []);

  return (
    <section ref={heroRef} className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero__inner">
        <div className="hero__stage">
          <div className="hero__mast">
            <p className="hero__kicker">{text.kicker}</p>
            <h1 id="hero-title" aria-label={text.titleLabel}>
              {text.title.map((line, index) => (
                <span className={`hero-title__mask hero-title__mask--${index + 1}`} key={line} aria-hidden="true">
                  <span>{line}{index === 1 && <span className="hero-title__stop">.</span>}</span>
                </span>
              ))}
            </h1>

            <HeroOpeningSequence words={text.roles} label={text.rolesLabel} />

            <div className="hero__introduction">
              <p className="hero__body">{text.body}</p>
              <div className="hero__meta">
                <p className="hero__current">
                  <span>{text.currentLabel}</span>
                  <strong>{text.current}</strong>
                </p>
                <div className="hero__actions">
                  <a className="button button--primary" href="mailto:akevin.2215@gmail.com">{text.contact}</a>
                  <a
                    className="button button--text"
                    href={`${import.meta.env.BASE_URL}assets/files/CV_Kevin_Hernandez_Deras.pdf`}
                    download
                  >
                    {text.cv}<span aria-hidden="true">↓</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <figure className="hero__portrait">
            <img
              src={`${import.meta.env.BASE_URL}assets/images/avatar.jpg`}
              alt={text.portraitAlt}
            />
            <figcaption aria-hidden="true">KH / 01</figcaption>
          </figure>
        </div>

        <a className="hero__scroll" href="#wikilol" aria-label={text.next}>
          <span className="hero__scroll-arrow" aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
}
