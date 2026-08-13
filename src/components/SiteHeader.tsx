import type {Language} from "../data/caseStudies";

type SiteHeaderProps = {
  language: Language;
  onLanguageChange: (language: Language) => void;
};

export function SiteHeader({language, onLanguageChange}: SiteHeaderProps) {
  const contactLabel = language === "es" ? "Contacto" : "Contact";

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="wordmark" href="#inicio" aria-label="Kevin Hernández — inicio">
          <span className="wordmark__short" aria-hidden="true">KH.</span>
          <span className="wordmark__full">Kevin Hernández</span>
        </a>

        <div className="site-header__actions">
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
