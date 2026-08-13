import {useEffect, useRef, useState} from "react";
import type {CaseStudy, Language} from "../data/caseStudies";

type CaseStudySectionProps = {
  caseStudy: CaseStudy;
  language: Language;
};

const traceLabels = {
  es: ["Interfaz", "Contrato", "Aplicación", "Infraestructura"],
  en: ["Interface", "Contract", "Application", "Infrastructure"],
} as const;

export function CaseStudySection({caseStudy, language}: CaseStudySectionProps) {
  const [activeStep, setActiveStep] = useState(0);
  const storyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const story = storyRef.current;
    if (!story || !("IntersectionObserver" in window)) return;

    const elements = Array.from(story.querySelectorAll<HTMLElement>("[data-story-step]"));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActiveStep(Number((visible.target as HTMLElement).dataset.storyStep));
      },
      {rootMargin: "-28% 0px -44%", threshold: [0.1, 0.35, 0.6]},
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="case-study" id={caseStudy.slug} aria-labelledby={`${caseStudy.slug}-title`}>
      <div className="case-study__intro page-shell">
        <div className="case-study__marker">
          <span>{caseStudy.index}</span>
          <span>{caseStudy.descriptor[language]}</span>
        </div>
        <div className="case-study__heading">
          <h2 id={`${caseStudy.slug}-title`}>{caseStudy.name}</h2>
          <p>{caseStudy.summary[language]}</p>
        </div>
        <div className="case-study__links">
          <a className="button button--project" href={caseStudy.demoUrl} target="_blank" rel="noreferrer">
            {language === "es" ? "Abrir demo" : "Open demo"}<span aria-hidden="true">↗</span>
          </a>
          <a className="button button--project-text" href={caseStudy.repositoryUrl} target="_blank" rel="noreferrer">
            {language === "es" ? "Ver código" : "View code"}<span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <div className="case-study__story page-shell" ref={storyRef}>
        <div className="case-study__evidence">
          <figure className={`project-visual project-visual--step-${activeStep + 1}`}>
            <img src={caseStudy.image} alt={caseStudy.imageAlt[language]} loading="lazy" />
            <figcaption>
              <span>{language === "es" ? "Interfaz actual · captura real" : "Current interface · real capture"}</span>
              <span>{String(activeStep + 1).padStart(2, "0")} / {String(caseStudy.steps.length).padStart(2, "0")}</span>
            </figcaption>
          </figure>

          <ol className="system-trace" aria-label={language === "es" ? "Flujo del sistema" : "System flow"}>
            {traceLabels[language].map((label, index) => (
              <li className={activeStep === index ? "is-active" : ""} key={label} aria-current={activeStep === index ? "step" : undefined}>
                <span>{String(index + 1).padStart(2, "0")}</span>{label}
              </li>
            ))}
          </ol>
        </div>

        <div className="case-study__steps">
          {caseStudy.steps.map((step, index) => (
            <article className="story-step" data-story-step={index} key={step.id}>
              <div className="story-step__mobile-visual">
                <img src={caseStudy.image} alt="" loading="lazy" />
                <span>{String(index + 1).padStart(2, "0")} / {String(caseStudy.steps.length).padStart(2, "0")}</span>
              </div>
              <p className="story-step__label">{String(index + 1).padStart(2, "0")} · {step.label[language]}</p>
              <h3>{step.title[language]}</h3>
              <p className="story-step__body">{step.body[language]}</p>
              <p className="story-step__evidence">{step.evidence[language]}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="case-study__stack page-shell" aria-label={language === "es" ? "Tecnologías principales" : "Core technologies"}>
        {caseStudy.stack.map((item) => <span key={item}>{item}</span>)}
      </div>
    </section>
  );
}
