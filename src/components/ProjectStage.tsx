import { featuredCaseStudies, type Language } from "../data/caseStudies";
import { projectGallery } from "../data/projectGallery";

export function SelectedWork({ language }: { language: Language }) {
  return (
    <section
      className="selected-projects page-gutter"
      id="proyectos"
      aria-labelledby="work-heading"
    >
      <header className="selected-projects__heading">
        <h2 className="section-heading" id="work-heading" data-reveal>
          {language === "es" ? "Proyectos" : "Projects"}
        </h2>
        <p data-reveal>
          {language === "es"
            ? "El producto. Y cómo lo construí."
            : "The product. And how I built it."}
        </p>
      </header>
      <div className="selected-projects__list">
        {featuredCaseStudies.map((project) => (
          <article className="project-feature" key={project.slug}>
            <a
              className="project-feature__image"
              href={`#${project.slug}`}
              aria-label={`${language === "es" ? "Explorar" : "Explore"} ${project.name}`}
              data-reveal
            >
              <img
                src={projectGallery[project.slug]?.[0]?.image ?? project.image}
                alt={
                  projectGallery[project.slug]?.[0]?.alt[language] ??
                  project.imageAlt[language]
                }
                width="1440"
                height="900"
                loading="lazy"
              />
              <span className="project-feature__open" aria-hidden="true">
                ↗
              </span>
            </a>
            <div className="project-feature__copy">
              <h3 data-reveal>{project.name}</h3>
              <p className="project-feature__descriptor" data-reveal>
                {project.descriptor[language]}
              </p>
              <p data-reveal>{project.summary[language]}</p>
              <p className="project-feature__stack" data-reveal>
                {project.stack.slice(0, 4).join(" · ")}
              </p>
              <a className="solid-link" href={`#${project.slug}`} data-reveal>
                {language === "es" ? "Explorar proyecto" : "Explore project"}
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

// Compatibility with the earlier standalone hero.
export function ProjectStage({ language }: { language: Language }) {
  return <SelectedWork language={language} />;
}
