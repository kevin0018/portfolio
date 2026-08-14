import type {Language} from "../data/caseStudies";
import {projectArchive} from "../data/projectArchive";

type ProjectArchiveProps = {
  language: Language;
};

export function ProjectArchive({language}: ProjectArchiveProps) {
  return (
    <section className="project-register" id="archivo" aria-labelledby="project-register-title">
      <div className="project-register__inner page-shell">
        <header className="project-register__header">
          <h2 id="project-register-title">{language === "es" ? "Otros proyectos" : "Other projects"}</h2>
          <p>
            {language === "es"
              ? "Proyectos anteriores y experimentos que amplían el recorrido sin necesitar un caso de estudio completo."
              : "Earlier projects and experiments that extend the record without requiring a full case study."}
          </p>
        </header>

        <ol className="project-register__list">
          {projectArchive.map((project, index) => (
            <li className="project-register__item" key={project.slug}>
              <span className="project-register__index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>

              <figure className="project-register__preview" aria-hidden="true">
                <img src={project.image} alt="" loading="lazy" decoding="async" />
              </figure>

              <div className="project-register__content">
                <p className="project-register__category">{project.category[language]}</p>
                <h3>{project.name}</h3>
                <p className="project-register__summary">{project.summary[language]}</p>
                <ul className="project-register__stack" aria-label={language === "es" ? "Tecnologías principales" : "Core technologies"}>
                  {project.stack.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
              </div>

              {(project.demoUrl || project.repositoryUrl) && (
                <div className="project-register__links">
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noreferrer">
                      {language === "es" ? "Abrir" : "Open"}<span aria-hidden="true">↗</span>
                    </a>
                  )}
                  {project.repositoryUrl && (
                    <a href={project.repositoryUrl} target="_blank" rel="noreferrer">
                      {language === "es" ? "Código" : "Code"}<span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
