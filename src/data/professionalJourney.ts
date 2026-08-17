import type {Language} from "./caseStudies";

type LocalizedText = Record<Language, string>;

export type Responsibility = {
  area: LocalizedText;
  detail: LocalizedText;
};

export type EducationItem = {
  qualification: LocalizedText;
  institution: string;
  period: LocalizedText;
  detail: LocalizedText;
};

export const currentExperience = {
  role: "Full Stack Developer",
  company: "Inmatic",
  period: {es: "Julio 2024 — actualidad", en: "July 2024 — present"},
  location: {es: "Barcelona · Presencial", en: "Barcelona · On-site"},
  introduction: {
    es: "Desarrollo producto de principio a fin: desde la lógica de negocio y las APIs hasta las interfaces, las integraciones entre sistemas y el tratamiento de datos.",
    en: "I build products end to end: from business logic and APIs to interfaces, system integrations, and data processing.",
  },
  responsibilities: [
    {
      area: {es: "Backend y dominio", en: "Backend and domain"},
      detail: {
        es: "Lógica de negocio y APIs REST con Python, Django y Django REST Framework, aplicando CQRS, DDD y arquitectura hexagonal cuando el contexto lo requiere.",
        en: "Business logic and REST APIs with Python, Django, and Django REST Framework, applying CQRS, DDD, and hexagonal architecture when the context calls for them.",
      },
    },
    {
      area: {es: "Frontend de producto", en: "Product frontend"},
      detail: {
        es: "Desarrollo y refactorización de interfaces con Vue.js y TypeScript, incluyendo componentes reutilizables como tablas de datos y modales.",
        en: "Development and refactoring of interfaces with Vue.js and TypeScript, including reusable components such as data tables and modals.",
      },
    },
    {
      area: {es: "Integraciones y datos", en: "Integrations and data"},
      detail: {
        es: "Conexión entre plataformas mediante APIs y XML, procesamiento de facturas, sincronización bidireccional en C# y módulos de reporting y exportación a Excel.",
        en: "Connecting platforms through APIs and XML, invoice processing, bidirectional synchronization in C#, and reporting and Excel export modules.",
      },
    },
    {
      area: {es: "Calidad y persistencia", en: "Quality and persistence"},
      detail: {
        es: "TDD, pruebas unitarias, modelado de datos y optimización de consultas con PostgreSQL para mantener el software comprensible y sostenible.",
        en: "TDD, unit testing, data modelling, and PostgreSQL query optimization to keep the software understandable and sustainable.",
      },
    },
  ] satisfies Responsibility[],
} as const;

export const education: EducationItem[] = [
  {
    qualification: {es: "Grado en Ingeniería Informática", en: "Bachelor's Degree in Computer Engineering"},
    institution: "Universitat Oberta de Catalunya",
    period: {es: "Febrero 2026 — actualidad", en: "February 2026 — present"},
    detail: {
      es: "Formación en ingeniería de software, arquitectura, diseño de sistemas y fundamentos de informática.",
      en: "Focused on software engineering, architecture, systems design, and computer science fundamentals.",
    },
  },
  {
    qualification: {es: "CFGS Desarrollo de Aplicaciones Web", en: "Higher Diploma in Web Application Development"},
    institution: "Institut Escola del Treball",
    period: {es: "Noviembre 2022 — junio 2024", en: "November 2022 — June 2024"},
    detail: {
      es: "Desarrollo frontend y backend, bases de datos, Git, metodologías ágiles y diseño Mobile First.",
      en: "Frontend and backend development, databases, Git, agile methods, and Mobile First design.",
    },
  },
];

export const certifications = [
  "DevOps Culture and Mindset",
  "Using DevOps to Speed Up Time to Market",
  "Keeping Work Organized with DevOps",
  "Working With DevOps Mindset",
  "Introducing DevOps Concepts",
] as const;
