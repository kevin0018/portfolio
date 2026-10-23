import { useEffect, useState } from "react";
import { CaseStudyDialog } from "./components/CaseStudySection";
import { HeroSection } from "./components/HeroSection";
import { ProfessionalJourney } from "./components/ProfessionalJourney";
import { MotionEffects } from "./components/MotionEffects";
import { SelectedWork } from "./components/ProjectStage";
import { ProjectArchive } from "./components/ProjectArchive";
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
  const [language, setLanguage] = useState<Language>(initialLanguage);
  const [motionPaused, setMotionPaused] = useState(false);
  const [projectSlug, setProjectSlug] = useState(() => location.hash.slice(1));
  const project = featuredCaseStudies.find((item) => item.slug === projectSlug);

  useEffect(() => {
    document.documentElement.lang = language;
    try {
      localStorage.setItem("portfolio-language", language);
    } catch {
      /* Keep the language in memory. */
    }
  }, [language]);

  useEffect(() => {
    const sync = () => setProjectSlug(location.hash.slice(1));
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  function closeProject() {
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
      />
      <main id="contenido">
        <HeroSection language={language} />
        <SelectedWork language={language} />
        <ProfessionalJourney language={language} />
        <ProjectArchive language={language} />
      </main>
      <footer className="contact-stage" id="contacto">
        <div className="contact-stage__image" aria-hidden="true">
          <img
            src={`${import.meta.env.BASE_URL}assets/images/wikilol/02-champion-archive.png`}
            alt=""
            width="1578"
            height="1253"
            loading="lazy"
          />
        </div>
        <div className="contact-sheet" data-reveal>
          <h2>{language === "es" ? "Hablemos" : "Let’s talk"}</h2>
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
        <div className="contact-signature" aria-hidden="true">
          HERNÁNDEZ
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
        />
      )}
    </div>
  );
}

export default App;
