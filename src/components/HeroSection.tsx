import { useState } from "react";
import { featuredCaseStudies, type Language } from "../data/caseStudies";
import { projectArchitecture } from "../data/projectArchitecture";


export function HeroSection({ language }: { language: Language }) {
  const [selected, setSelected] = useState(3);
  const [inside, setInside] = useState(false);
  const project = featuredCaseStudies[selected];
  const system = projectArchitecture[project.slug];

  return (
    <section
      className="hero-poster scene"
      id="inicio"
      data-scene="name-poster"
      aria-labelledby="hero-name"
    >
      <div className="hero-poster__stage">
        <h1 id="hero-name" aria-label="Kevin Hernández">
          <span className="name-rise">KEVIN</span>
        </h1>
        <div className="hero-poster__middle">
          <div className="hero-poster__intro">
            <p className="hero-role" data-reveal>
              Full Stack <br />
              Developer
            </p>
            <p data-reveal>
              {language === "es"
                ? "Desarrollo interfaces con Vue, APIs con Django e integraciones entre sistemas. De la primera idea al producto funcionando."
                : "I build Vue interfaces, Django APIs and integrations between systems, taking products from their first idea to working software."}
            </p>
            <a className="solid-link" href="#proyectos" data-reveal>
              {language === "es" ? "Ver proyectos" : "Explore projects"}
              <span aria-hidden="true">↘</span>
            </a>
            <a
              className="hero-cv"
              href={`${import.meta.env.BASE_URL}assets/files/CV_Kevin_Hernandez_Deras.pdf`}
              target="_blank"
              rel="noreferrer"
              data-reveal
            >
              {language === "es" ? "Descargar CV" : "Download résumé"}
            </a>
          </div>
          <div className="hero-product" data-reveal>
            <div
              className={`product-flip ${inside ? "product-flip--inside" : ""}`}
            >
              <div className="product-flip__object">
                <div className="product-flip__front" aria-hidden={inside}>
                  <img
                    key={project.slug}
                    src={project.image}
                    alt={project.imageAlt[language]}
                    width="1440"
                    height="900"
                    fetchPriority="high"
                  />
                </div>
                <div className="product-flip__back" aria-hidden={!inside}>
                  <p>{project.name}</p>
                  <div className="system-flow">
                    <strong>{system.front}</strong>
                    <span aria-hidden="true">↓</span>
                    <span>{system.contract}</span>
                    <span aria-hidden="true">↓</span>
                    <strong>{system.back}</strong>
                    <span aria-hidden="true">↓</span>
                    <span>{system.data}</span>
                  </div>
                  <span>
                    {language === "es"
                      ? "De la interfaz a los datos"
                      : "From interface to data"}
                  </span>
                </div>
              </div>
            </div>
            <div className="hero-product__controls">
              <div
                className="product-picker"
                role="group"
                aria-label={
                  language === "es" ? "Elegir proyecto" : "Choose project"
                }
              >
                {featuredCaseStudies.map((item, index) => (
                  <button
                    type="button"
                    key={item.slug}
                    onClick={() => setSelected(index)}
                    aria-pressed={selected === index}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
              <button
                type="button"
                className="flip-control"
                onClick={() => setInside((value) => !value)}
                aria-pressed={inside}
              >
                {inside
                  ? language === "es"
                    ? "Ver producto"
                    : "See product"
                  : language === "es"
                    ? "Ver por dentro"
                    : "Look inside"}{" "}
                <span aria-hidden="true">⤾</span>
              </button>
            </div>
          </div>
        </div>
        <p className="hero-surname" aria-hidden="true">
          HERNÁNDEZ
        </p>
        <div className="hero-edge">
          <span>Barcelona</span>
          <span>
            {language === "es"
              ? "Frontend, backend y lo que los conecta."
              : "Frontend, backend, and what connects them."}
          </span>
        </div>
      </div>
    </section>
  );
}
