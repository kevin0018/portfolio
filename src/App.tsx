import { useEffect, useState } from "react";
import { CaseStudyDialog } from "./components/CaseStudySection";
import { HeroSection } from "./components/HeroSection";
import { ProfessionalJourney } from "./components/ProfessionalJourney";
import { MotionEffects } from "./components/MotionEffects";
import { SelectedWork } from "./components/ProjectStage";
import { SiteHeader } from "./components/SiteHeader";
import { featuredCaseStudies, type Language } from "./data/caseStudies";

function initialLanguage(): Language {
  try {
    const stored = localStorage.getItem("portfolio-language");
    if (stored === "es" || stored === "en") return stored;
  } catch {
    /* Browser storage can be unavailable in private contexts. */
  }
  return navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
}

function App() {
  const [theme, setTheme] = useState<"light" | "dark">(() => document.documentElement.dataset.theme === "dark" ? "dark" : "light");
  const [language, setLanguage] = useState<Language>(initialLanguage);
  const [motionPaused, setMotionPaused] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  const [projectSlug, setProjectSlug] = useState(() => location.hash.slice(1));
  const [minimizedSlug, setMinimizedSlug] = useState<string | null>(null);
  const activeProject = featuredCaseStudies.find((item) => item.slug === projectSlug);
  const project = activeProject ?? featuredCaseStudies.find((item) => item.slug === minimizedSlug);
  const minimized = !activeProject && Boolean(project);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#17191f" : "#faf7f0");
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {
      /* The selected theme remains available when storage is blocked. */
    }
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = language;
    try {
      localStorage.setItem("portfolio-language", language);
    } catch {
      /* Keep the language in memory. */
    }
  }, [language]);

  useEffect(() => {
    const sync = () => {
      const slug = location.hash.slice(1);
      setProjectSlug(slug);
      if (featuredCaseStudies.some((item) => item.slug === slug)) setMinimizedSlug(null);
    };
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  function closeProject() {
    setMinimizedSlug(null);
    hideProject();
  }

  function hideProject() {
    history.replaceState(
      null,
      "",
      `${location.pathname}${location.search}#proyectos`,
    );
    setProjectSlug("");
  }

  return (
    <div className="portfolio" data-motion-paused={motionPaused}>
      <MotionEffects paused={motionPaused} />
      <SiteHeader
        language={language}
        onLanguageChange={setLanguage}
        motionPaused={motionPaused}
        onMotionChange={() => setMotionPaused((value) => !value)}
        theme={theme}
        onThemeChange={() => setTheme((value) => value === "light" ? "dark" : "light")}
      />
      <main id="contenido">
        <HeroSection language={language} paused={motionPaused} />
        <SelectedWork language={language} />
        <ProfessionalJourney language={language} />
      </main>
      <footer className="contact-stage" id="contacto">
        <div className="contact-horizon" aria-hidden="true"><div /><div /><div /></div>
        <div className="contact-sheet" data-reveal>
          <h2>{language === "es" ? <>La próxima idea.<br />¿La construimos?</> : <>The next idea.<br />Shall we build it?</>}</h2>
          <p>
            {language === "es"
              ? "Si tienes un proyecto o una oportunidad en mente, me gustaría conocerla."
              : "If you have a project or an opportunity in mind, I’d like to hear about it."}
          </p>
          <a className="contact-email" href="mailto:akevin.2215@gmail.com">
            akevin.2215@gmail.com
          </a>
          <div className="contact-socials">
            <a
              href="https://github.com/kevin0018"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/kevin-hernandez-deras"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href={`${import.meta.env.BASE_URL}assets/files/CV_Kevin_Hernandez_Deras.pdf`}
              target="_blank"
              rel="noreferrer"
            >
              {language === "es" ? "Mi CV" : "My résumé"}
            </a>
          </div>
          <a className="solid-link" href="mailto:akevin.2215@gmail.com">
            {language === "es" ? "Escríbeme" : "Email me"}
            <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="footer-credit">
          <span>Kevin Hernández © {new Date().getFullYear()}</span>
          <a href="#inicio">
            {language === "es" ? "Volver arriba" : "Back to top"} ↑
          </a>
        </div>
      </footer>
      {project && (
        <CaseStudyDialog
          key={project.slug}
          caseStudy={project}
          language={language}
          onClose={closeProject}
          minimized={minimized}
          onMinimize={() => { setMinimizedSlug(project.slug); hideProject(); }}
        />
      )}
      {minimized && project && (
        <button className="case-dock" type="button"
          aria-label={`${language === "es" ? "Restaurar" : "Restore"} ${project.name}`}
          onClick={() => { location.hash = project.slug; }}>
          <span className="case-dock__dot" aria-hidden="true" />
          {project.name}<span aria-hidden="true">↗</span>
        </button>
      )}
    </div>
  );
}

export default App;
