import {useRef, useState, type PointerEvent} from "react";
import {huellasCaseStudy, travelBlogCaseStudy, wikiLolCaseStudy, type Language} from "../data/caseStudies";

const projects = [wikiLolCaseStudy, travelBlogCaseStudy, huellasCaseStudy];

export function ProjectStage({language}: {language: Language}) {
  const [selected, setSelected] = useState(2);
  const stageRef = useRef<HTMLDivElement>(null);

  function move(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--tilt-x", `${(event.clientX - rect.left - rect.width / 2) / rect.width * 12}deg`);
    event.currentTarget.style.setProperty("--tilt-y", `${-(event.clientY - rect.top - rect.height / 2) / rect.height * 10}deg`);
  }

  function reset() {
    stageRef.current?.style.setProperty("--tilt-x", "0deg");
    stageRef.current?.style.setProperty("--tilt-y", "0deg");
  }

  return (
    <div className="project-stage" ref={stageRef} onPointerMove={move} onPointerLeave={reset}>
      <div className="project-stage__orbit" aria-hidden="true"><span>FRONTEND</span><span>BACKEND</span></div>
      <div className="project-stage__deck">
        {projects.map((project, index) => {
          const active = selected === index;
          const className = `project-stage__screen project-stage__screen--${(index - selected + projects.length) % projects.length}`;
          const content = <>
            <img src={project.image} alt={project.imageAlt[language]} width="1440" height="900" />
            <span className="project-stage__caption"><strong>{project.name}</strong><span>{active ? (language === "es" ? "Explorar proyecto" : "Explore project") : (language === "es" ? "Ver proyecto" : "Preview project")} ↗</span></span>
          </>;
          return active ? (
            <a href={`#${project.slug}`} className={className} key={project.slug} aria-label={`${language === "es" ? "Explorar" : "Explore"} ${project.name}`}>
              {content}
            </a>
          ) : (
            <button type="button" className={className} key={project.slug} onClick={() => setSelected(index)} aria-label={`${language === "es" ? "Mostrar" : "Show"} ${project.name}`}>
              {content}
            </button>
          );
        })}
      </div>
      <div className="project-stage__selector" role="group" aria-label={language === "es" ? "Vista previa del proyecto" : "Project preview"}>
        {projects.map((project, index) => <button type="button" key={project.slug} aria-pressed={selected === index} onClick={() => setSelected(index)}>{project.name}</button>)}
      </div>
    </div>
  );
}

export function SelectedWork({language}: {language: Language}) {
  return (
    <section className="selected-work page-shell" id="proyectos" aria-labelledby="selected-work-title">
      <div className="selected-work__heading"><h2 id="selected-work-title">{language === "es" ? "Ideas llevadas a la práctica." : "Ideas brought to life."}</h2><span>{language === "es" ? "Tres proyectos, por dentro" : "Inside three projects"} ↙</span></div>
      <div className="selected-work__list">
        {projects.map(project => <a className={`work-link work-link--${project.slug}`} href={`#${project.slug}`} key={project.slug}>
          <figure><img src={project.image} alt={project.imageAlt[language]} loading="lazy" width="1440" height="900" /></figure>
          <div><span className="work-link__descriptor">{project.descriptor[language]}</span><h3>{project.name}<span aria-hidden="true">↗</span></h3><p>{project.stack.slice(0, 3).join(" / ")}</p></div>
        </a>)}
      </div>
    </section>
  );
}
