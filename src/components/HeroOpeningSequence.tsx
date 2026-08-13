import type {Language} from "../data/caseStudies";

type HeroOpeningSequenceProps = {language: Language};

const openingCopy = {
  es: {
    context: "Portfolio · sistema full stack",
    stages: ["Dominio", "Datos", "Interfaz"],
    status: "Capas conectadas",
  },
  en: {
    context: "Portfolio · full-stack system",
    stages: ["Domain", "Data", "Interface"],
    status: "Layers connected",
  },
} as const;

export function HeroOpeningSequence({language}: HeroOpeningSequenceProps) {
  const text = openingCopy[language];

  return (
    <div className="hero-opening" aria-hidden="true">
      <div className="hero-opening__frame">
        <div className="hero-opening__meta">
          <span>KH / 2026</span>
          <span>{text.context}</span>
        </div>

        <div className="hero-opening__sequence">
          {text.stages.map((stage, index) => (
            <span className={`hero-opening__stage hero-opening__stage--${index + 1}`} key={stage}>
              {stage}
            </span>
          ))}

          <div className="hero-opening__identity">
            <strong>Kevin Hernández</strong>
            <span>Full Stack Developer</span>
          </div>
        </div>

        <div className="hero-opening__route">
          <span className="hero-opening__line" />
          <span className="hero-opening__node hero-opening__node--1" />
          <span className="hero-opening__node hero-opening__node--2" />
          <span className="hero-opening__node hero-opening__node--3" />
          <span className="hero-opening__signal" />
        </div>

        <p className="hero-opening__status"><span />{text.status}</p>
      </div>
    </div>
  );
}
