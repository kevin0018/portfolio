import { useEffect, useRef, useState } from "react";
import type { CaseStudy, Language } from "../data/caseStudies";
import { projectGallery } from "../data/projectGallery";

type Props = { caseStudy: CaseStudy; language: Language; onClose: () => void };

export function CaseStudyDialog({
  caseStudy: project,
  language,
  onClose,
}: Props) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState(0);
  const gallery = projectGallery[project.slug] ?? [];
  const view = gallery[selected];

  useEffect(() => {
    const node = dialog.current;
    const previous =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    node?.showModal();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      node?.close();
      document.body.style.overflow = overflow;
      previous?.focus({ preventScroll: true });
    };
  }, []);

  return (
    <dialog
      ref={dialog}
      className="case-dialog"
      aria-labelledby="case-title"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="case-dialog__sheet">
        <div className="case-dialog__bar">
          <span>{project.descriptor[language]}</span>
          <button
            className="close-case"
            type="button"
            onClick={onClose}
            autoFocus
          >
            {language === "es" ? "Cerrar" : "Close"}
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <h2 id="case-title">{project.name}</h2>
        <div className="case-intro">
          <p>{project.summary[language]}</p>
          <div className="case-links">
            {project.demoUrl && (
              <a
                className="solid-link"
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
              >
                {language === "es" ? "Abrir demo" : "Open demo"}
                <span aria-hidden="true">↗</span>
              </a>
            )}
            <a href={project.repositoryUrl} target="_blank" rel="noreferrer">
              {language === "es" ? "Ver código" : "View source"}
            </a>
            {project.videoUrl && (
              <a href={project.videoUrl} target="_blank" rel="noreferrer">
                {language === "es" ? "Ver vídeo" : "Watch tour"}
              </a>
            )}
          </div>
        </div>
        <div className="case-stack">
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        {view && (
          <div className="case-gallery">
            <div
              className="case-gallery__tabs"
              role="group"
              aria-label={
                language === "es" ? "Pantallas del proyecto" : "Project screens"
              }
            >
              {gallery.map((item, index) => (
                <button
                  type="button"
                  key={item.image}
                  onClick={() => setSelected(index)}
                  aria-pressed={selected === index}
                >
                  {item.title[language]}
                </button>
              ))}
            </div>
            <a
              className="case-gallery__image"
              href={view.image}
              target="_blank"
              rel="noreferrer"
              aria-label={
                language === "es"
                  ? "Abrir captura a tamaño completo"
                  : "Open full-size screenshot"
              }
            >
              <img
                key={view.image}
                src={view.image}
                alt={view.alt[language]}
                width="1440"
                height="900"
              />
            </a>
            <p className="case-gallery__caption" aria-live="polite">
              {view.description[language]}
            </p>
          </div>
        )}
        <section className="case-decisions" aria-labelledby="decisions-heading">
          <h3 id="decisions-heading">
            {language === "es" ? "Las decisiones" : "The decisions"}
          </h3>
          <div>
            {project.steps.map((step) => (
              <details key={step.id}>
                <summary>
                  {step.title[language]}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{step.body[language]}</p>
                <p className="case-evidence">{step.evidence[language]}</p>
              </details>
            ))}
          </div>
        </section>
        {project.contribution && (
          <p className="case-attribution">{project.contribution[language]}</p>
        )}
        {project.slug === "wikilol" && (
          <p className="case-attribution">
            {language === "es"
              ? "Proyecto educativo independiente. Las imágenes de League of Legends pertenecen a Riot Games. Sin afiliación ni patrocinio oficial."
              : "Independent educational project. League of Legends imagery belongs to Riot Games. No official affiliation or sponsorship."}
          </p>
        )}
        <button
          className="solid-link case-back"
          type="button"
          onClick={onClose}
        >
          {language === "es" ? "Volver a proyectos" : "Back to projects"}
          <span aria-hidden="true">↙</span>
        </button>
      </div>
    </dialog>
  );
}

export function CaseStudySection({
  caseStudy,
  language,
}: {
  caseStudy: CaseStudy;
  language: Language;
}) {
  return (
    <a href={`#${caseStudy.slug}`}>
      {caseStudy.name}
      {language === "es" ? " — explorar" : " — explore"}
    </a>
  );
}
