import {useEffect, useState} from "react";
import {CaseStudySection} from "./components/CaseStudySection";
import {HeroSection} from "./components/HeroSection";
import {ProfessionalJourney} from "./components/ProfessionalJourney";
import {MotionEffects} from "./components/MotionEffects";
import {SelectedWork} from "./components/ProjectStage";
import {SiteHeader} from "./components/SiteHeader";
import {featuredCaseStudies, type Language} from "./data/caseStudies";

function getInitialLanguage(): Language {
  const stored = window.localStorage.getItem("portfolio-language");
  if (stored === "es" || stored === "en") return stored;
  return window.navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
}

function App() {
  const [motionPaused, setMotionPaused] = useState(false);
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem("portfolio-language", language);
  }, [language]);

  return (
    <div className="site-frame" data-motion-paused={motionPaused}>
      <MotionEffects paused={motionPaused} />
      <SiteHeader language={language} onLanguageChange={setLanguage} motionPaused={motionPaused} onMotionChange={() => setMotionPaused(value => !value)} />
      <main>
        <HeroSection language={language} />
        <SelectedWork language={language} />
        {featuredCaseStudies.map(caseStudy => <CaseStudySection key={caseStudy.slug} caseStudy={caseStudy} language={language} />)}
        <ProfessionalJourney language={language} />
      </main>
      <footer className="site-footer" id="contacto">
        <div className="footer-marquee" aria-hidden="true"><div><span>{language === "es" ? "Hablemos. Construyamos." : "Let’s talk. Let’s build."} ↗ </span><span>{language === "es" ? "Hablemos. Construyamos." : "Let’s talk. Let’s build."} ↗ </span></div></div>
        <div className="page-shell site-footer__inner">
          <p>{language === "es" ? "¿Buscas un desarrollador Full Stack? Hablemos." : "Looking for a Full Stack Developer? Let's talk."}</p>
          <a href="mailto:akevin.2215@gmail.com">akevin.2215@gmail.com<span aria-hidden="true">↗</span></a>
          <div className="site-footer__meta">
            <span>Kevin Hernández · 2026</span>
            <a href="https://github.com/kevin0018" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/kevin-hernandez-deras" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
