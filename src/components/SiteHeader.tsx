import type { Language } from "../data/caseStudies";
import { KevinMonogram } from "./HeroGraphics";

type Props = {
  language: Language;
  motionPaused: boolean;
  onMotionChange: () => void;
  onLanguageChange: (language: Language) => void;
  theme: "light" | "dark";
  onThemeChange: () => void;
};

export function SiteHeader({
  language,
  motionPaused,
  onMotionChange,
  onLanguageChange,
  theme,
  onThemeChange,
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
        <span className="masthead__monogram"><KevinMonogram /></span>
      </a>
      <nav aria-label={language === "es" ? "Navegación" : "Navigation"}>
        <a href="#proyectos">{language === "es" ? "Proyectos" : "Projects"}</a>
        <a href="#experiencia">{language === "es" ? "Sobre mí" : "About me"}</a>
        <a href="#contacto">{language === "es" ? "Contacto" : "Contact"}</a>
      </nav>
      <div className="masthead__controls">
        <button className="theme-control" type="button" onClick={onThemeChange} aria-pressed={theme === "dark"}
          aria-label={language === "es" ? `Cambiar a modo ${theme === "dark" ? "claro" : "oscuro"}` : `Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          title={language === "es" ? `Modo ${theme === "dark" ? "claro" : "oscuro"}` : `${theme === "dark" ? "Light" : "Dark"} mode`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            {theme === "dark" ? <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" /></> : <path d="M20.6 13.2A9 9 0 0 1 10.8 3.4a9 9 0 1 0 9.8 9.8Z" />}
          </svg>
        </button>
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
