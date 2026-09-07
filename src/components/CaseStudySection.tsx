import {useState} from "react";
import {projectGallery} from "../data/projectGallery";
import type {CaseStudy, Language} from "../data/caseStudies";

type CaseStudySectionProps = {
  caseStudy: CaseStudy;
  language: Language;
};

export function CaseStudySection({caseStudy, language}: CaseStudySectionProps) {
  const [activeStep, setActiveStep] = useState(0);
  const views = projectGallery[caseStudy.slug];
  const activeView = views[activeStep];

  return (
    <section className={`case-study case-study--${caseStudy.slug}`} id={caseStudy.slug} aria-labelledby={`${caseStudy.slug}-title`}>
      <div className="case-study__intro page-shell">
        <div className="case-study__marker">
          <span>{caseStudy.index}</span>
          <span>{caseStudy.descriptor[language]}</span>
        </div>
        <div className="case-study__heading">
          <h2 id={`${caseStudy.slug}-title`}>{caseStudy.name}</h2>
          <p>{caseStudy.summary[language]}</p>
        </div>
        {caseStudy.contribution && <p className="case-study__contribution">{caseStudy.contribution[language]}</p>}
        <div className="case-study__links">
          <a className="button button--project" href={caseStudy.demoUrl ?? caseStudy.videoUrl} target="_blank" rel="noreferrer">
            {caseStudy.videoUrl ? (language === "es" ? "Ver vídeo · 3:10" : "Watch tour · 3:10") : (language === "es" ? "Abrir demo" : "Open demo")}<span aria-hidden="true">↗</span>
          </a>
          <a className="button button--project-text" href={caseStudy.repositoryUrl} target="_blank" rel="noreferrer">
            {language === "es" ? "Ver código" : "View code"}<span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <div className="project-gallery page-shell">
        <div className="project-gallery__choices" role="group" aria-label={language === "es" ? "Explorar pantallas" : "Explore screens"}>
          {views.map((view, index) => (
            <button type="button" key={view.image} aria-pressed={activeStep === index} aria-controls={`${caseStudy.slug}-screen`} onClick={() => setActiveStep(index)}>
              {view.title[language]}
            </button>
          ))}
        </div>
        <div className="project-gallery__view" id={`${caseStudy.slug}-screen`}>
          <figure>
            <a href={activeView.image} target="_blank" rel="noreferrer" aria-label={language === "es" ? "Abrir captura a tamaño completo" : "Open full-size screenshot"}>
              <img key={activeView.image} src={activeView.image} alt={activeView.alt[language]} width="1440" height="900" loading="lazy" />
              <span className="project-gallery__zoom" aria-hidden="true">↗</span>
            </a>
            <figcaption>{language === "es" ? "Captura real · ampliar ↗" : "Real screenshot · enlarge ↗"}</figcaption>
          </figure>
          <div className="project-gallery__description" aria-live="polite">
            <h3>{activeView.title[language]}</h3>
            <p>{activeView.description[language]}</p>
          </div>
        </div>
        <details className="project-decisions">
          <summary>{language === "es" ? "Decisiones técnicas y mi aportación" : "Technical decisions and my contribution"}</summary>
          <div className="project-decisions__list">
            {caseStudy.steps.map(step => <article key={step.id}><h3>{step.title[language]}</h3><p>{step.body[language]}</p></article>)}
          </div>
        </details>
      </div>

      <div className="case-study__stack page-shell" aria-label={language === "es" ? "Tecnologías principales" : "Core technologies"}>
        {caseStudy.stack.map((item) => <span key={item}>{item}</span>)}
      </div>
    </section>
  );
}
