import type {Language} from "../data/caseStudies";

type HeroSectionProps = {language: Language};

const copy = {
  es: {
    kicker: "Full-stack developer",
    title: "Construyo productos que explican su ingeniería.",
    body: "Trabajo entre producto, frontend y backend. Aquí enseño qué construí, qué decisiones lo sostienen y dónde viven los compromisos técnicos.",
    work: "Ver caso destacado",
    cv: "Descargar CV",
    availability: "Producto · Frontend · Backend",
    trace: ["Interfaz", "Contrato", "Sistema"],
  },
  en: {
    kicker: "Full-stack developer",
    title: "I build products that explain their engineering.",
    body: "I work across product, frontend, and backend. Here I show what I built, which decisions hold it together, and where the technical trade-offs live.",
    work: "View featured case",
    cv: "Download résumé",
    availability: "Product · Frontend · Backend",
    trace: ["Interface", "Contract", "System"],
  },
} as const;

export function HeroSection({language}: HeroSectionProps) {
  const text = copy[language];

  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
        <div className="hero__inner">
          <div className="hero__copy">
            <p className="hero__kicker">{text.kicker}</p>
            <h1 id="hero-title">{text.title}</h1>
            <p className="hero__body">{text.body}</p>
            <div className="hero__actions">
              <a className="button button--primary" href="#wikilol">{text.work}</a>
              <a
                className="button button--text"
                href={`${import.meta.env.BASE_URL}assets/files/CV_Kevin_Hernandez_Deras.pdf`}
                download
              >
                {text.cv}<span aria-hidden="true">↓</span>
              </a>
            </div>
            <p className="hero__scope">{text.availability}</p>
          </div>

          <div className="hero-trace" aria-hidden="true">
            <div className="hero-trace__index">KHD / 26</div>
            <ol>
              {text.trace.map((item, index) => (
                <li key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </div>
    </section>
  );
}
