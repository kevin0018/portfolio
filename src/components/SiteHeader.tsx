import type { Language } from "../data/caseStudies";

type Props = {
  language: Language;
  motionPaused: boolean;
  onMotionChange: () => void;
  onLanguageChange: (language: Language) => void;
};

export function SiteHeader({
  language,
  motionPaused,
  onMotionChange,
  onLanguageChange,
}: Props) {
  return (
    <header className="masthead">
      <a className="skip-link" href="#contenido">
        {language === "es" ? "Ir al contenido" : "Skip to content"}
      </a>
      <a
        className="masthead__brand"
        href="#inicio"
        aria-label="Kevin Hernández"
      >
        KH
      </a>
      <nav aria-label={language === "es" ? "Navegación" : "Navigation"}>
        <a href="#proyectos">{language === "es" ? "Proyectos" : "Projects"}</a>
        <a href="#experiencia">
          {language === "es" ? "Experiencia" : "Experience"}
        </a>
        <a href="#formacion">{language === "es" ? "Formación" : "Education"}</a>
        <a href="#contacto">{language === "es" ? "Contacto" : "Contact"}</a>
      </nav>
      <div className="masthead__controls">
        <button
          className="motion-control"
          onClick={onMotionChange}
          type="button"
          aria-pressed={motionPaused}
          aria-label={
            language === "es"
              ? motionPaused
                ? "Activar movimiento"
                : "Pausar movimiento"
              : motionPaused
                ? "Play motion"
                : "Pause motion"
          }
        >
          <span aria-hidden="true">{motionPaused ? "▷" : "Ⅱ"}</span>
        </button>
        <button
          type="button"
          className="locale-control"
          onClick={() => onLanguageChange(language === "es" ? "en" : "es")}
          aria-label={
            language === "es" ? "Switch to English" : "Cambiar a español"
          }
        >
          {language === "es" ? "EN" : "ES"}
        </button>
      </div>
    </header>
  );
}
