import { useRef, type CSSProperties } from "react";
import { featuredCaseStudies, type Language } from "../data/caseStudies";
import { projectGallery } from "../data/projectGallery";

export function SelectedWork({ language }: { language: Language }) {
  const scene = useRef<HTMLElement>(null);

  function select(index: number) {
    const root = scene.current;
    if (!root) return;
    if (document.documentElement.dataset.motionReduced === "true") {
      const poster = root.querySelectorAll(".project-poster").item(index);
      poster?.scrollIntoView({ behavior: "instant", block: "center" });
      return;
    }
    const travel = root.offsetHeight - window.innerHeight;
    window.scrollTo({
      top:
        root.getBoundingClientRect().top +
        scrollY +
        travel * (index / 4 + 0.08),
      behavior: "smooth",
    });
  }

  return (
    <section
      ref={scene}
      className="work-posters scene"
      id="proyectos"
      data-scene="project-seam"
      aria-labelledby="work-heading"
    >
      <div className="work-posters__stage">
        <div className="work-posters__mast">
          <h2 id="work-heading">
            {language === "es" ? "Proyectos" : "Projects"}
          </h2>
          <p>
            {language === "es"
              ? "Del producto a sus decisiones."
              : "From the product to its decisions."}
          </p>
        </div>
        <div className="project-posters">
          {featuredCaseStudies.map((project, index) => {
            const second = projectGallery[project.slug]?.[1];
            const name =
              project.slug === "blog-de-viajes" ? (
                <>
                  Blog de
                  <br />
                  Viajes
                </>
              ) : (
                project.name
              );
            return (
              <article
                className={`project-poster project-poster--${project.slug}`}
                key={project.slug}
                data-project-index={index}
                style={{ "--project-index": index } as CSSProperties}
              >
                <div className="project-poster__pane project-poster__pane--left">
                  <img
                    src={project.image}
                    alt={project.imageAlt[language]}
                    width="1440"
                    height="900"
                    loading="lazy"
                  />
                </div>
                <div className="project-poster__pane project-poster__pane--right">
                  <img
                    src={second?.image ?? project.image}
                    alt={second?.alt[language] ?? project.imageAlt[language]}
                    width="1440"
                    height="900"
                    loading="lazy"
                  />
                </div>
                <div className="project-poster__center">
                  <h3>
                    <span className="seam-title seam-title--left">{name}</span>
                    <span
                      className="seam-title seam-title--right"
                      aria-hidden="true"
                    >
                      {name}
                    </span>
                  </h3>
                  <p>{project.descriptor[language]}</p>
                  <a className="solid-link" href={`#${project.slug}`}>
                    {language === "es"
                      ? "Explorar proyecto"
                      : "Explore project"}
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
                <div className="project-poster__foot">
                  <p>{project.summary[language]}</p>
                  <span>{project.stack.slice(0, 3).join(" · ")}</span>
                </div>
              </article>
            );
          })}
        </div>
        <div
          className="work-switcher"
          role="group"
          aria-label={language === "es" ? "Ir al proyecto" : "Go to project"}
        >
          {featuredCaseStudies.map((project, index) => (
            <button
              type="button"
              key={project.slug}
              data-switch-index={index}
              onClick={() => select(index)}
              aria-label={`${language === "es" ? "Ver" : "View"} ${project.name}`}
              aria-pressed={index === 0}
            >
              {project.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

// Retained for the earlier standalone hero while the current shell uses the poster.
export function ProjectStage({ language }: { language: Language }) {
  return <SelectedWork language={language} />;
}
