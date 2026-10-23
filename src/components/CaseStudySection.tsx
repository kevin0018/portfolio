import { useEffect, useRef, useState } from "react";
import type { CaseStudy, Language } from "../data/caseStudies";
import { projectGallery } from "../data/projectGallery";

type Props = { caseStudy: CaseStudy; language: Language; onClose: () => void; minimized: boolean; onMinimize: () => void };

export function CaseStudyDialog({
  caseStudy: project,
  language,
  onClose,
  minimized,
  onMinimize,
}: Props) {
  const dialog = useRef<HTMLDialogElement>(null);
  const scrollPosition = useRef(0);
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState(0);
  const [openDecisions, setOpenDecisions] = useState<string[]>([]);
  const gallery = projectGallery[project.slug] ?? [];
  const view = gallery[selected];

  useEffect(() => {
    if (minimized) return;
    const node = dialog.current;
    const previous =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    node?.showModal();
    if (node) node.scrollTop = scrollPosition.current;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      if (node) scrollPosition.current = node.scrollTop;
      node?.close();
      document.body.style.overflow = overflow;
      previous?.focus({ preventScroll: true });
    };
  }, [minimized]);

  return (
    <dialog
      ref={dialog}
      className={`case-dialog${expanded ? " case-dialog--expanded" : ""}`}
      aria-labelledby="case-title"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="case-dialog__bar">
        <div className="case-window-controls">
          <button type="button" className="case-window-control case-window-control--close" onClick={onClose}
            aria-label={language === "es" ? "Cerrar ventana" : "Close window"} title={language === "es" ? "Cerrar" : "Close"}><span aria-hidden="true">×</span></button>
          <button type="button" className="case-window-control case-window-control--minimize" onClick={onMinimize}
            aria-label={language === "es" ? "Minimizar ventana" : "Minimize window"} title={language === "es" ? "Minimizar" : "Minimize"}><span aria-hidden="true">−</span></button>
          <button type="button" className="case-window-control case-window-control--expand" onClick={() => setExpanded((value) => !value)} aria-pressed={expanded}
            aria-label={language === "es" ? (expanded ? "Restaurar tamaño" : "Ampliar ventana") : (expanded ? "Restore size" : "Expand window")} title={language === "es" ? (expanded ? "Restaurar tamaño" : "Ampliar") : (expanded ? "Restore size" : "Expand")}><span aria-hidden="true">{expanded ? "↙" : "↗"}</span></button>
        </div>
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
      <div className="case-dialog__sheet">
        <p className="case-handnote">{language === "es" ? "Mis notas del proyecto" : "My project notes"}</p>
        <h2 id="case-title"><span>{project.name}</span></h2>
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
            <div className="case-gallery__frame">
              <div className="case-gallery__chrome" aria-hidden="true"><span className="case-window-dots"><i /><i /><i /></span></div>
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
            </div>
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
            {project.steps.map((step) => {
              const open = openDecisions.includes(step.id);
              const panelId = `case-decision-${project.slug}-${step.id}`;
              return <div className={`case-decision${open ? " case-decision--open" : ""}`} key={step.id}>
                <button type="button" aria-expanded={open} aria-controls={panelId}
                  onClick={() => setOpenDecisions((current) => open ? current.filter((id) => id !== step.id) : [...current, step.id])}>
                  {step.title[language]}
                  <span aria-hidden="true">+</span>
                </button>
                <div className="case-decision__body" id={panelId} aria-hidden={!open} inert={!open}>
                  <div className="case-decision__content">
                    <p>{step.body[language]}</p>
                    <p className="case-evidence">{step.evidence[language]}</p>
                  </div>
                </div>
              </div>;
            })}
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
