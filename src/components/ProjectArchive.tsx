import { useState } from "react";
import { projectArchive } from "../data/projectArchive";
import type { Language } from "../data/caseStudies";

const projects = projectArchive.filter((project) => project.slug !== "huellas");

export function ProjectArchive({ language }: { language: Language }) {
  const [active, setActive] = useState(0);
  return (
    <section
      className="archive-section page-gutter"
      aria-labelledby="archive-heading"
    >
      <div className="archive-preview" data-reveal>
        <img
          key={projects[active].slug}
          src={projects[active].image}
          alt={projects[active].name}
          width="1200"
          height="900"
          loading="lazy"
        />
      </div>
      <div className="archive-list">
        <h2 className="section-heading" id="archive-heading" data-reveal>
          {language === "es" ? "Más proyectos" : "More projects"}
        </h2>
        {projects.map((project, index) => (
          <article
            key={project.slug}
            className={
              active === index
                ? "archive-item archive-item--active"
                : "archive-item"
            }
            data-reveal
            onMouseEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
          >
            <button
              type="button"
              onClick={() => setActive(index)}
              aria-pressed={active === index}
            >
              {project.name}
              <span aria-hidden="true">{active === index ? "−" : "+"}</span>
            </button>
            <div className="archive-item__body" hidden={active !== index}>
              <div>
                <p>{project.summary[language]}</p>
                <p>{project.stack.join(" · ")}</p>
                <div className="archive-item__links">
                  {project.repositoryUrl && (
                    <a
                      href={project.repositoryUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {language === "es" ? "Código" : "Source"}
                    </a>
                  )}
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noreferrer">
                      {project.slug === "liftpath"
                        ? language === "es"
                          ? "Descargar app"
                          : "Download app"
                        : "Demo"}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
