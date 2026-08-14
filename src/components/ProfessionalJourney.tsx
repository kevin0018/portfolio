import type {Language} from "../data/caseStudies";
import {certifications, currentExperience, education} from "../data/professionalJourney";

type ProfessionalJourneyProps = {language: Language};

const copy = {
  es: {
    title: "Experiencia y formación",
    introduction: "Construyo software de producto combinando backend, frontend e integraciones, con una base técnica que sigo ampliando.",
    workLabel: "Experiencia actual",
    workDetail: "Responsabilidades principales",
    education: "Formación",
    certifications: "Certificaciones DevOps",
    certificationIssuer: "University of California, Davis",
  },
  en: {
    title: "Experience and education",
    introduction: "I build product software across backend, frontend, and integrations while continuing to deepen my engineering foundations.",
    workLabel: "Current experience",
    workDetail: "Core responsibilities",
    education: "Education",
    certifications: "DevOps certifications",
    certificationIssuer: "University of California, Davis",
  },
} as const;

export function ProfessionalJourney({language}: ProfessionalJourneyProps) {
  const text = copy[language];

  return (
    <section className="professional-record" id="experiencia" aria-labelledby="professional-record-title">
      <div className="page-shell professional-record__inner">
        <header className="professional-record__header">
          <h2 id="professional-record-title">{text.title}</h2>
          <p>{text.introduction}</p>
        </header>

        <article className="employment" aria-labelledby="employment-title">
          <div className="employment__meta">
            <p>{text.workLabel}</p>
            <time dateTime="2024-07">{currentExperience.period[language]}</time>
            <span>{currentExperience.location[language]}</span>
          </div>

          <div className="employment__body">
            <header className="employment__heading">
              <p>{currentExperience.company}</p>
              <h3 id="employment-title">{currentExperience.role}</h3>
              <p className="employment__introduction">{currentExperience.introduction[language]}</p>
            </header>

            <div className="employment__responsibilities">
              <p className="employment__responsibilities-label">{text.workDetail}</p>
              <dl>
                {currentExperience.responsibilities.map((responsibility) => (
                  <div key={responsibility.area.en}>
                    <dt>{responsibility.area[language]}</dt>
                    <dd>{responsibility.detail[language]}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </article>

        <section className="education-record" aria-labelledby="education-title">
          <h3 id="education-title">{text.education}</h3>
          <div className="education-record__list">
            {education.map((item) => (
              <article key={item.institution}>
                <time>{item.period[language]}</time>
                <div>
                  <h4>{item.qualification[language]}</h4>
                  <p className="education-record__institution">{item.institution}</p>
                  <p>{item.detail[language]}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <aside className="certification-record" aria-labelledby="certification-title">
          <div>
            <h3 id="certification-title">{text.certifications}</h3>
            <p>{text.certificationIssuer}</p>
          </div>
          <ul>
            {certifications.map((certification) => <li key={certification}>{certification}</li>)}
          </ul>
        </aside>
      </div>
    </section>
  );
}
