import type {Language} from "../data/caseStudies";

type HeroSystemTraceProps = {language: Language};

const traceCopy = {
  es: {
    label: "Foco profesional actual",
    current: "Inmatic · desde julio de 2024",
    flowLabel: "Flujo entre especialidades",
    nodes: [
      {label: "Backend y dominio", detail: "Python · Django · DRF"},
      {label: "Integraciones y datos", detail: "APIs · XML · PostgreSQL"},
      {label: "Frontend de producto", detail: "Vue.js · TypeScript"},
    ],
  },
  en: {
    label: "Current professional focus",
    current: "Inmatic · since July 2024",
    flowLabel: "Flow across specialties",
    nodes: [
      {label: "Backend and domain", detail: "Python · Django · DRF"},
      {label: "Integrations and data", detail: "APIs · XML · PostgreSQL"},
      {label: "Product frontend", detail: "Vue.js · TypeScript"},
    ],
  },
} as const;

export function HeroSystemTrace({language}: HeroSystemTraceProps) {
  const text = traceCopy[language];

  return (
    <aside className="hero-system" aria-label={text.flowLabel}>
      <div className="hero-system__header">
        <span>{text.label}</span>
        <span className="hero-system__status"><span aria-hidden="true" />{text.current}</span>
      </div>

      <div className="hero-system__flow">
        <div className="hero-system__track" aria-hidden="true">
          <span className="hero-system__signal" />
        </div>
        <ol>
          {text.nodes.map((node, index) => (
            <li className={`hero-system__node hero-system__node--${index + 1}`} key={node.label}>
              <span className="hero-system__marker" aria-hidden="true" />
              <span className="hero-system__index">{String(index + 1).padStart(2, "0")}</span>
              <span className="hero-system__node-copy">
                <strong>{node.label}</strong>
                <span>{node.detail}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </aside>
  );
}
