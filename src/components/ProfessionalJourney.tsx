import { useState } from "react";
import {
  currentExperience,
  education,
  certifications,
} from "../data/professionalJourney";
import type { Language } from "../data/caseStudies";

export function ProfessionalJourney({ language }: { language: Language }) {
  const [active, setActive] = useState(0);
  return (
    <>
      <section
        className="experience-section page-gutter"
        id="experiencia"
        aria-labelledby="experience-heading"
      >
        <h2 className="section-heading" id="experience-heading" data-reveal>
          {language === "es" ? "Experiencia" : "Experience"}
        </h2>
        <div className="experience-overview">
          <dl data-reveal>
            <div>
              <dt>{language === "es" ? "Actualmente" : "Currently"}</dt>
              <dd>{currentExperience.company}</dd>
            </div>
            <div>
              <dt>{language === "es" ? "Desde" : "Since"}</dt>
              <dd>{currentExperience.period[language]}</dd>
            </div>
            <div>
              <dt>{language === "es" ? "Dónde" : "Where"}</dt>
              <dd>{currentExperience.location[language]}</dd>
            </div>
          </dl>
          <div className="experience-statement" data-reveal>
            <h3>{currentExperience.role}</h3>
            <p>{currentExperience.introduction[language]}</p>
            <p>
              {language === "es"
                ? "Mi día a día combina Python, Django, Vue y TypeScript con integraciones en C# y PostgreSQL. Me interesa entender lo que pasa a ambos lados de una interfaz."
                : "My daily work combines Python, Django, Vue, and TypeScript with C# integrations and PostgreSQL. I want to understand what happens on both sides of an interface."}
            </p>
          </div>
        </div>
        <div className="practice">
          <div className="practice__visual" data-reveal>
            <img
              src={`${import.meta.env.BASE_URL}assets/images/avatar.jpg`}
              alt={
                language === "es"
                  ? "Mi avatar ilustrado"
                  : "My illustrated avatar"
              }
              width="800"
              height="800"
              loading="lazy"
            />
            <p>
              {language === "es"
                ? "Mi versión ilustrada"
                : "My illustrated self"}
            </p>
          </div>
          <div className="practice__list">
            <h3 data-reveal>
              {language === "es" ? "De extremo a extremo" : "From end to end"}
            </h3>
            {currentExperience.responsibilities.map((item, index) => (
              <div
                className={`practice-item ${active === index ? "practice-item--active" : ""}`}
                key={item.area.en}
                data-reveal
              >
                <button
                  type="button"
                  aria-expanded={active === index}
                  aria-controls={`practice-${index}`}
                  onClick={() => setActive(index)}
                >
                  {item.area[language]}
                  <span aria-hidden="true">{active === index ? "−" : "+"}</span>
                </button>
                <div
                  id={`practice-${index}`}
                  className="practice-item__body"
                  aria-hidden={active !== index}
                  inert={active !== index}
                >
                  <div className="practice-item__content">
                    <p>{item.detail[language]}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <section
          className="education-section"
          id="formacion"
          aria-labelledby="education-heading"
        >
          <h2 className="section-heading" id="education-heading" data-reveal>
            {language === "es" ? "Formación" : "Education"}
          </h2>
          <div className="education-records">
            {education.map((item) => (
              <article key={item.institution} data-reveal>
                <p>{item.period[language]}</p>
                <h3>
                  {item.institution.includes("Oberta")
                    ? language === "es"
                      ? "Ingeniería Informática"
                      : "Computer Engineering"
                    : language === "es"
                      ? "Desarrollo web"
                      : "Web Development"}
                </h3>
                <p>{item.qualification[language]}</p>
                <strong>{item.institution}</strong>
                <p>{item.detail[language]}</p>
              </article>
            ))}
          </div>
          <div className="certification-line" data-reveal>
            <h3>
              {language === "es"
                ? "Certificaciones DevOps"
                : "DevOps certifications"}
            </h3>
            <div>
              <p>University of California, Davis</p>
              <ul>
                {certifications.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
