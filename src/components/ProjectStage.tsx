import { featuredCaseStudies, type CaseStudy, type Language } from "../data/caseStudies";
import { projectScenes } from "../data/projectScenes";
import { NorthEastArrow } from "./HeroGraphics";

const captions: Record<string, Record<Language, string>> = {
  wikilol: { es: "Perfiles, comparativas y archivo de campeones.", en: "Player profiles, comparisons and a champion archive." },
  "blog-de-viajes": { es: "Itinerarios que puedo guardar y compartir.", en: "Itineraries I can save and share." },
  huellas: { es: "Agenda de cuidados de mascotas.", en: "A pet care agenda." },
  pokeshop: { es: "Catálogo y carrito de Pokémon.", en: "A Pokémon catalogue and shopping cart." },
};

function ProjectImage({ project, language, featured = false }: { project: CaseStudy; language: Language; featured?: boolean }) {
  const scene = projectScenes[project.slug];
  return <a className="work-preview" href={`#${project.slug}`} aria-label={`${language === "es" ? "Ver proyecto" : "View project"}: ${project.name}`}>
    <div className="work-preview__browser">
      <div className="work-preview__bar" aria-hidden="true"><i /><i /><i /></div>
      <img src={featured ? project.image : scene.image} alt={scene.alt[language]} loading="lazy" width="1440" height="900" />
    </div>
  </a>;
}

function ProjectLinks({ project, language, featured = false }: { project: CaseStudy; language: Language; featured?: boolean }) {
  return <div className={`work-links${featured ? " work-links--featured" : ""}`}>
    <a className="work-open" href={`#${project.slug}`}>
      {featured && <span className="work-open__circle" aria-hidden="true">→</span>}
      <span>{language === "es" ? "Ver proyecto" : "View project"}</span><NorthEastArrow />
    </a>
    <a href={project.repositoryUrl} target="_blank" rel="noreferrer">GitHub<NorthEastArrow /></a>
  </div>;
}

export function SelectedWork({ language }: { language: Language }) {
  const [featured, ...others] = featuredCaseStudies;
  const es = language === "es";
  return <section className="work-selection" id="proyectos" aria-labelledby="work-heading">
    <div className="work-selection__inner">
      <header className="work-selection__heading">
        <h2 id="work-heading" data-reveal><span>{es ? "Proyectos" : "Projects"}</span></h2>
        <p data-reveal data-delay="80">{es ? "Una selección de mi trabajo." : "A selection of my work."}</p>
      </header>
      <article className="work-highlight">
        <div className="work-highlight__visual" data-reveal><ProjectImage project={featured} language={language} featured /></div>
        <div className="work-highlight__copy">
          <span className="work-handnote" aria-hidden="true">{es ? "Mi trabajo\npor dentro" : "Behind\nthe screen"}<svg viewBox="0 0 80 50" fill="none"><path d="M72 7C44 4 28 17 12 36m1-14L11 37l17-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
          <h3 data-reveal>{featured.name}</h3>
          <p className="work-highlight__description" data-reveal data-delay="80">{captions[featured.slug][language]}</p>
          <p className="work-highlight__detail" data-reveal data-delay="120">{es ? "Una aplicación full stack sobre las APIs de Riot, con contratos compartidos entre frontend y backend." : "A full stack application built on Riot APIs, with shared frontend and backend contracts."}</p>
          <p className="work-stack" data-reveal>{featured.stack.slice(0, 3).join(" · ")}</p>
          <div data-reveal><ProjectLinks project={featured} language={language} featured /></div>
        </div>
      </article>
      <div className="work-gallery">
        {others.map(project => <article className={`work-project work-project--${project.slug}`} key={project.slug}>
          <div data-reveal><ProjectImage project={project} language={language} /></div>
          <h3 data-reveal data-delay="60">{project.name}</h3>
          <p className="work-project__description" data-reveal data-delay="100">{captions[project.slug][language]}</p>
          <p className="work-stack" data-reveal>{project.slug === "huellas" ? (es ? "Proyecto en equipo" : "Team project") : project.slug === "pokeshop" ? (es ? "Tienda de demostración" : "Demo shop") : project.stack.slice(0, 3).join(" · ")}</p>
          <div data-reveal><ProjectLinks project={project} language={language} /></div>
        </article>)}
      </div>
    </div>
  </section>;
}

export function ProjectStage({ language }: { language: Language }) { return <SelectedWork language={language} />; }
