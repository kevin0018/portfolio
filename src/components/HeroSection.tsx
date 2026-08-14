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
    roles: ["Backend", "Integraciones", "Frontend"],
    rolesLabel: "Backend, integraciones y frontend",
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
    roles: ["Backend", "Integrations", "Frontend"],
    rolesLabel: "Backend, integrations and frontend",
    body: "I build end-to-end solutions: I model business logic and APIs with Python and Django, connect platforms and data, and create maintainable interfaces with Vue.js and TypeScript.",
    portraitAlt: "Black and white illustration of Kevin Hernández",
    contact: "Contact me",
    cv: "Download CV",
    next: "View projects",
  },
} as const;

export function HeroSection({language}: HeroSectionProps) {
  const text = copy[language];

  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
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

        <a className="hero__scroll" href="#wikilol">
          <span>{text.next}</span>
          <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
