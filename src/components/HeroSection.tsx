import type {Language} from "../data/caseStudies";
import {HeroSystemTrace} from "./HeroSystemTrace";

type HeroSectionProps = {language: Language};

const copy = {
  es: {
    kicker: "Kevin Hernández · Full Stack Developer",
    title: ["Del dominio", "a la interfaz"],
    titleLabel: "Del dominio a la interfaz.",
    body: "Construyo lógica de negocio con Python y Django, e interfaces con Vue.js y TypeScript. Actualmente desarrollo producto, integraciones y procesamiento de datos en Inmatic.",
    work: "Explorar mi trabajo",
    cv: "Descargar CV",
    scope: "Python / Django · Vue / TypeScript · PostgreSQL",
  },
  en: {
    kicker: "Kevin Hernández · Full Stack Developer",
    title: ["From domain logic", "to interface"],
    titleLabel: "From domain logic to interface.",
    body: "I build business logic with Python and Django, and interfaces with Vue.js and TypeScript. I currently work on product development, integrations, and data processing at Inmatic.",
    work: "Explore my work",
    cv: "Download résumé",
    scope: "Python / Django · Vue / TypeScript · PostgreSQL",
  },
} as const;

export function HeroSection({language}: HeroSectionProps) {
  const text = copy[language];

  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
        <div className="hero__inner">
          <div className="hero__copy">
            <p className="hero__kicker">{text.kicker}</p>
            <h1 id="hero-title" aria-label={text.titleLabel}>
              {text.title.map((line, index) => (
                <span className={`hero-title__mask hero-title__mask--${index + 1}`} key={line} aria-hidden="true">
                  <span>{line}{index === 1 && <span className="hero-title__stop">.</span>}</span>
                </span>
              ))}
            </h1>
            <p className="hero__body">{text.body}</p>
            <div className="hero__actions">
              <a className="button button--primary" href="#wikilol">{text.work}</a>
              <a
                className="button button--text"
                href={`${import.meta.env.BASE_URL}assets/files/CV_Kevin_Hernandez_Deras.pdf`}
                download
              >
                {text.cv}<span aria-hidden="true">↓</span>
              </a>
            </div>
            <p className="hero__scope">{text.scope}</p>
          </div>
          <HeroSystemTrace language={language} />
        </div>
    </section>
  );
}
