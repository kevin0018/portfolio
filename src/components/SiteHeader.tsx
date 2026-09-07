import type {Language} from "../data/caseStudies";

type SiteHeaderProps = {
  language: Language;
  motionPaused: boolean;
  onMotionChange: () => void;
  onLanguageChange: (language: Language) => void;
};

export function SiteHeader({language, onLanguageChange, motionPaused, onMotionChange}: SiteHeaderProps) {
  const contactLabel = language === "es" ? "Contacto" : "Contact";

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="wordmark" href="#inicio" aria-label="Kevin Hernández — inicio">
          <span className="wordmark__short" aria-hidden="true">KH.</span>
          <span className="wordmark__full">Kevin Hernández</span>
        </a>

        <nav className="header-nav" aria-label={language === "es" ? "Navegación principal" : "Main navigation"}>
          <a href="#proyectos">{language === "es" ? "Proyectos" : "Work"}</a>
          <a href="#experiencia">{language === "es" ? "Experiencia" : "Experience"}</a>
        </nav>
        <div className="site-header__actions">
          <button className="motion-toggle" type="button" onClick={onMotionChange} aria-pressed={motionPaused} aria-label={language === "es" ? "Pausar animaciones" : "Pause animations"} title={language === "es" ? "Pausar / activar animaciones" : "Pause / play animations"}><span aria-hidden="true">{motionPaused ? "▶" : "Ⅱ"}</span></button>
          <div className="language-switch" aria-label={language === "es" ? "Idioma" : "Language"}>
            {(["es", "en"] as const).map((option) => (
              <button
                className="language-switch__button"
                type="button"
                key={option}
                aria-pressed={language === option}
                onClick={() => onLanguageChange(option)}
              >
                {option.toUpperCase()}
              </button>
            ))}
          </div>
          <a className="header-contact" href="#contacto">{contactLabel}</a>
        </div>
      </div>
    </header>
  );
}
