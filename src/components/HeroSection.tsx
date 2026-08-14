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
    body: "Desarrollo producto e integraciones con Python, Django, Vue.js y TypeScript.",
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
    body: "I build products and integrations with Python, Django, Vue.js and TypeScript.",
    contact: "Contact me",
    cv: "Download CV",
    next: "View projects",
  },
} as const;

export function HeroSection({language}: HeroSectionProps) {
  const text = copy[language];

  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <HeroOpeningSequence />
      <div className="hero__inner">
        <div className="hero__mast">
          <p className="hero__kicker">{text.kicker}</p>
          <h1 id="hero-title" aria-label={text.titleLabel}>
            {text.title.map((line, index) => (
              <span className={`hero-title__mask hero-title__mask--${index + 1}`} key={line} aria-hidden="true">
                <span>{line}{index === 1 && <span className="hero-title__stop">.</span>}</span>
              </span>
            ))}
          </h1>
        </div>

        <div className="hero__lower">
          <p className="hero__current">
            <span>{text.currentLabel}</span>
            <strong>{text.current}</strong>
          </p>
          <p className="hero__body">{text.body}</p>
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

        <a className="hero__scroll" href="#wikilol">
          <span>{text.next}</span>
          <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
