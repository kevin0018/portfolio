import type { CSSProperties } from "react";
import { featuredCaseStudies, type Language } from "../data/caseStudies";
import { projectScenes } from "../data/projectScenes";

export function SelectedWork({ language }: { language: Language }) {
  return (
    <section className="selected-projects page-gutter" id="proyectos" aria-labelledby="work-heading">
      <header className="selected-projects__heading">
        <h2 className="section-heading" id="work-heading" data-reveal>{language === "es" ? "Del concepto al producto." : "From concept to product."}</h2>
        <p data-reveal data-delay="80">{language === "es" ? "Cuatro proyectos para explorar por fuera. Y por dentro." : "Four projects to explore on the surface. And under the hood."}</p>
      </header>
      <div className="selected-projects__list">
        {featuredCaseStudies.map(project => {
          const scene = projectScenes[project.slug];
          return <article className="project-feature" key={project.slug} style={{ "--scene-light": scene.light, "--scene-secondary": scene.secondary } as CSSProperties}>
            <a className="project-feature__image" href={`#${project.slug}`} aria-label={`${language === "es" ? "Explorar" : "Explore"} ${project.name}`} data-reveal>
              <div className="project-feature__frame"><img src={scene.image} alt={scene.alt[language]} width="1583" height="954" loading="lazy" /></div>
              <span className="project-feature__open" aria-hidden="true">↗</span>
            </a>
            <div className="project-feature__copy">
              <p className="project-feature__descriptor" data-reveal>{project.descriptor[language]}</p>
              <h3 data-reveal data-delay="70">{project.name}</h3>
              <p data-reveal data-delay="140">{project.summary[language]}</p>
              <p className="project-feature__stack" data-reveal>{project.stack.slice(0, 4).join(" / ")}</p>
              <a className="text-link" href={`#${project.slug}`} data-reveal>{language === "es" ? "Explorar proyecto" : "Explore project"}<span aria-hidden="true">↗</span></a>
            </div>
            <span className="project-feature__ambient" aria-hidden="true" />
          </article>;
        })}
      </div>
    </section>
  );
}

export function ProjectStage({ language }: { language: Language }) { return <SelectedWork language={language} />; }
