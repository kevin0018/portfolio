import {useEffect, useRef, useState} from "react";
import type {CaseStudy, Language} from "../data/caseStudies";

type CaseStudySectionProps = {
  caseStudy: CaseStudy;
  language: Language;
};

export function CaseStudySection({caseStudy, language}: CaseStudySectionProps) {
  const [activeStep, setActiveStep] = useState(0);
  const storyRef = useRef<HTMLDivElement>(null);
  const hasMediaSequence = caseStudy.steps.every((step) => Boolean(step.media));
  const activeMedia = caseStudy.steps[activeStep]?.media;

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
  }, [caseStudy.slug]);

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

      <div className="case-study__story page-shell" ref={storyRef}>
        <div className="case-study__evidence">
          <figure className={`project-visual${hasMediaSequence ? " project-visual--sequence" : ""}`}>
            <div className="project-visual__stage">
              {hasMediaSequence ? caseStudy.steps.map((step, index) => {
                const media = step.media!;

                return (
                  <img
                    className={activeStep === index ? "is-active" : ""}
                    src={media.src}
                    width={media.width}
                    height={media.height}
                    alt={activeStep === index ? media.alt[language] : ""}
                    aria-hidden={activeStep !== index}
                    decoding="async"
                    loading="lazy"
                    key={step.id}
                  />
                );
              }) : (
                <img src={caseStudy.image} alt={caseStudy.imageAlt[language]} loading="lazy" />
              )}
            </div>
            <figcaption>
              <span>{activeMedia?.caption[language] ?? (language === "es" ? "Interfaz actual · captura real" : "Current interface · real capture")}</span>
              <span>{String(activeStep + 1).padStart(2, "0")} / {String(caseStudy.steps.length).padStart(2, "0")}</span>
            </figcaption>
          </figure>

          <ol className="system-trace" aria-label={language === "es" ? "Flujo del sistema" : "System flow"}>
            {caseStudy.traceLabels[language].map((label, index) => (
              <li className={activeStep === index ? "is-active" : ""} key={label} aria-current={activeStep === index ? "step" : undefined}>
                <span>{String(index + 1).padStart(2, "0")}</span>{label}
              </li>
            ))}
          </ol>
        </div>

        <div className="case-study__steps">
          {caseStudy.steps.map((step, index) => (
            <article className={`story-step${activeStep === index ? " is-active" : ""}`} data-story-step={index} key={step.id}>
              <div className="story-step__mobile-visual">
                <img
                  src={step.media?.src ?? caseStudy.image}
                  width={step.media?.width}
                  height={step.media?.height}
                  alt={step.media?.alt[language] ?? caseStudy.imageAlt[language]}
                  decoding="async"
                  loading="lazy"
                />
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
