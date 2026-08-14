import {useEffect, useState} from "react";
import {CaseStudySection} from "./components/CaseStudySection";
import {HeroSection} from "./components/HeroSection";
import {ProjectArchive} from "./components/ProjectArchive";
import {SiteHeader} from "./components/SiteHeader";
import {travelBlogCaseStudy, wikiLolCaseStudy, type Language} from "./data/caseStudies";

function getInitialLanguage(): Language {
  const stored = window.localStorage.getItem("portfolio-language");
  if (stored === "es" || stored === "en") return stored;
  return window.navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
}

function App() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem("portfolio-language", language);
  }, [language]);

  return (
    <div className="site-frame">
      <SiteHeader language={language} onLanguageChange={setLanguage} />
      <main>
        <HeroSection language={language} />
        <CaseStudySection caseStudy={wikiLolCaseStudy} language={language} />
        <CaseStudySection caseStudy={travelBlogCaseStudy} language={language} />
        <ProjectArchive language={language} />
      </main>
      <footer className="site-footer" id="contacto">
        <div className="page-shell site-footer__inner">
          <p>{language === "es" ? "¿Construimos algo que merezca ser explicado?" : "Shall we build something worth explaining?"}</p>
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
