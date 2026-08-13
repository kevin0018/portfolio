export type Language = "es" | "en";

type LocalizedText = Record<Language, string>;

export type CaseStudyStep = {
  id: string;
  label: LocalizedText;
  title: LocalizedText;
  body: LocalizedText;
  evidence: LocalizedText;
  traceNode: "interface" | "contract" | "application" | "infrastructure";
};

export type CaseStudy = {
  slug: string;
  index: string;
  name: string;
  descriptor: LocalizedText;
  summary: LocalizedText;
  image: string;
  imageAlt: LocalizedText;
  demoUrl: string;
  repositoryUrl: string;
  stack: string[];
  steps: CaseStudyStep[];
};

export const wikiLolCaseStudy: CaseStudy = {
  slug: "wikilol",
  index: "01",
  name: "wikiLoL",
  descriptor: {
    es: "Producto full-stack · Riot Games",
    en: "Full-stack product · Riot Games",
  },
  summary: {
    es: "Una reconstrucción completa para consultar perfiles, comparar jugadores y explorar campeones sin exponer al navegador la complejidad de las APIs de Riot.",
    en: "A full rebuild for looking up profiles, comparing players, and exploring champions without exposing Riot API complexity to the browser.",
  },
  image: `${import.meta.env.BASE_URL}assets/images/wikiLoL-preview.png`,
  imageAlt: {
    es: "Interfaz actual de wikiLoL inspirada en los archivos de Runeterra",
    en: "Current wikiLoL interface inspired by the archives of Runeterra",
  },
  demoUrl: "https://wiki-lol-k.vercel.app/",
  repositoryUrl: "https://github.com/kevin0018/wikiLoL",
  stack: ["React 19", "Express 5", "TypeScript", "Zod", "TanStack Query"],
  steps: [
    {
      id: "product",
      label: {es: "Problema", en: "Problem"},
      title: {
        es: "Una búsqueda que habla el idioma del jugador",
        en: "A search flow that speaks the player's language",
      },
      body: {
        es: "El producto parte del Riot ID y la región que el usuario ya conoce. Desde ahí compone nivel, rangos y maestrías en una sola lectura, con estados de carga, vacío y error diseñados para cada caso.",
        en: "The product starts with the Riot ID and region users already know. It then composes level, ranks, and masteries into one readable view, with purposeful loading, empty, and error states.",
      },
      evidence: {
        es: "Interfaz bilingüe con preferencia persistida y URLs compartibles.",
        en: "Bilingual UI with a persisted preference and shareable URLs.",
      },
      traceNode: "interface",
    },
    {
      id: "contracts",
      label: {es: "Contrato", en: "Contract"},
      title: {
        es: "Frontend y backend comparten una frontera verificable",
        en: "Frontend and backend share a verifiable boundary",
      },
      body: {
        es: "Un paquete propio de contratos Zod define la API pública para ambos lados. El cliente recibe modelos del producto; las respuestas internas de Riot y Data Dragon permanecen encapsuladas.",
        en: "A dedicated Zod contracts package defines the public API for both sides. The client receives product models while internal Riot and Data Dragon responses remain encapsulated.",
      },
      evidence: {
        es: "@wikilol/contracts · DTOs y esquemas compartidos.",
        en: "@wikilol/contracts · shared DTOs and schemas.",
      },
      traceNode: "contract",
    },
    {
      id: "application",
      label: {es: "Aplicación", en: "Application"},
      title: {
        es: "Casos de uso pequeños en lugar de rutas inteligentes",
        en: "Small use cases instead of intelligent routes",
      },
      body: {
        es: "Las rutas validan y despachan consultas. Cada operación vive en un Query y Handler con dependencias inyectadas desde una única raíz de composición, manteniendo el flujo fácil de probar y sustituir.",
        en: "Routes validate and dispatch queries. Each operation lives in a Query and Handler with dependencies injected from one composition root, keeping the flow easy to test and replace.",
      },
      evidence: {
        es: "CQRS pragmático · value objects para región y cola.",
        en: "Pragmatic CQRS · value objects for region and queue.",
      },
      traceNode: "application",
    },
    {
      id: "infrastructure",
      label: {es: "Infraestructura", en: "Infrastructure"},
      title: {
        es: "Riot queda detrás de una capa estable",
        en: "Riot stays behind a stable layer",
      },
      body: {
        es: "Repositorios adaptan Riot y Data Dragon, validan cada respuesta y traducen errores de forma consistente. Versiones, Riot IDs resueltos y recursos visuales se cachean detrás de URLs propias.",
        en: "Repositories adapt Riot and Data Dragon, validate every response, and translate errors consistently. Versions, resolved Riot IDs, and visual assets are cached behind owned URLs.",
      },
      evidence: {
        es: "Express BFF · proxy de recursos · caché de versión.",
        en: "Express BFF · asset proxy · version cache.",
      },
      traceNode: "infrastructure",
    },
  ],
};
