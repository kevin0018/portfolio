export type Language = "es" | "en";

type LocalizedText = Record<Language, string>;

export type CaseStudyStep = {
  id: string;
  label: LocalizedText;
  title: LocalizedText;
  body: LocalizedText;
  evidence: LocalizedText;
  media?: {
    src: string;
    width: number;
    height: number;
    alt: LocalizedText;
    caption: LocalizedText;
  };
};

export type CaseStudy = {
  slug: string;
  index: string;
  name: string;
  descriptor: LocalizedText;
  summary: LocalizedText;
  image: string;
  imageAlt: LocalizedText;
  demoUrl?: string;
  videoUrl?: string;
  contribution?: LocalizedText;
  repositoryUrl: string;
  stack: string[];
  traceLabels: Record<Language, readonly string[]>;
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
  traceLabels: {
    es: ["Interfaz", "Contrato", "Aplicación", "Infraestructura"],
    en: ["Interface", "Contract", "Application", "Infrastructure"],
  },
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
      media: {
        src: `${import.meta.env.BASE_URL}assets/images/wikilol/01-search.png`,
        width: 1583,
        height: 954,
        alt: {
          es: "Portada de wikiLoL con el formulario de búsqueda por Riot ID y región",
          en: "wikiLoL home page with the Riot ID and region search form",
        },
        caption: {
          es: "Buscar · Riot ID y región",
          en: "Search · Riot ID and region",
        },
      },
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
      media: {
        src: `${import.meta.env.BASE_URL}assets/images/wikilol/02-champion-archive.png`,
        width: 1578,
        height: 1253,
        alt: {
          es: "Archivo de campeones de wikiLoL con búsqueda, filtros por rol y fichas resumidas",
          en: "wikiLoL champion archive with search, role filters, and summary dossiers",
        },
        caption: {
          es: "Archivo · modelos de campeón normalizados",
          en: "Archive · normalized champion models",
        },
      },
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
      media: {
        src: `${import.meta.env.BASE_URL}assets/images/wikilol/03-champion-detail.png`,
        width: 1581,
        height: 1255,
        alt: {
          es: "Ficha de Ekko en wikiLoL con lore, roles y una galería de aspectos",
          en: "Ekko dossier in wikiLoL with lore, roles, and a skin gallery",
        },
        caption: {
          es: "Ficha · lore, roles y galería",
          en: "Dossier · lore, roles, and gallery",
        },
      },
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
      media: {
        src: `${import.meta.env.BASE_URL}assets/images/wikilol/04-player-compare.png`,
        width: 1570,
        height: 1251,
        alt: {
          es: "Comparación de dos perfiles de League of Legends con rango, puntos y rendimiento",
          en: "Comparison of two League of Legends profiles with rank, league points, and performance",
        },
        caption: {
          es: "Comparar · dos perfiles en una URL",
          en: "Compare · two profiles in one URL",
        },
      },
    },
  ],
};

export const travelBlogCaseStudy: CaseStudy = {
  slug: "blog-de-viajes",
  index: "02",
  name: "Blog de Viajes",
  descriptor: {
    es: "Experiencia editorial · Planificador local",
    en: "Editorial experience · Local-first planner",
  },
  summary: {
    es: "Un blog estático convertido en producto: seis destinos filtrables, guías tipadas y un itinerario persistente y compartible que no necesita cuenta ni backend.",
    en: "A static blog turned into a product: six filterable destinations, typed guides, and a persistent, shareable itinerary with no account or backend required.",
  },
  image: `${import.meta.env.BASE_URL}assets/images/blog-de-viajes-preview.jpg`,
  imageAlt: {
    es: "Portada actual de Blog de Viajes con una ruta trazada sobre un paisaje",
    en: "Current Blog de Viajes home page with a route drawn over a landscape",
  },
  demoUrl: "https://kevin0018.github.io/Blog-de-Viajes/",
  repositoryUrl: "https://github.com/kevin0018/Blog-de-Viajes",
  stack: ["Nuxt 3", "Vue 3", "TypeScript", "Tailwind 4", "Playwright"],
  traceLabels: {
    es: ["Descubrir", "Contenido", "Itinerario", "Entrega"],
    en: ["Discover", "Content", "Itinerary", "Delivery"],
  },
  steps: [
    {
      id: "discovery",
      label: {es: "Descubrir", en: "Discover"},
      title: {
        es: "La inspiración empieza con restricciones reales",
        en: "Inspiration starts with real constraints",
      },
      body: {
        es: "Seis destinos pueden filtrarse por duración, temporada, presupuesto y estilo de viaje. La exploración conduce a guías de ciudad completas en lugar de terminar en una cuadrícula de fotografías.",
        en: "Six destinations can be filtered by duration, season, budget, and travel style. Exploration leads into complete city guides instead of ending at a grid of photographs.",
      },
      evidence: {
        es: "Filtros combinables · rutas dinámicas · estados vacíos propios.",
        en: "Composable filters · dynamic routes · purposeful empty states.",
      },
      media: {
        src: `${import.meta.env.BASE_URL}assets/images/blog-de-viajes-preview.jpg`,
        width: 1440,
        height: 900,
        alt: {
          es: "Portada de Blog de Viajes con una ruta dibujada sobre un paisaje y accesos para comenzar a planificar",
          en: "Blog de Viajes home page with a route drawn over a landscape and actions to start planning",
        },
        caption: {
          es: "Portada · descubrir y comenzar una ruta",
          en: "Home · discover and start a route",
        },
      },
    },
    {
      id: "content",
      label: {es: "Contenido", en: "Content"},
      title: {
        es: "Una sola fuente tipada alimenta toda la experiencia",
        en: "One typed source powers the whole experience",
      },
      body: {
        es: "Artículos y destinos viven en módulos TypeScript compartidos. Listados, detalles, filtros, metadatos, sitemap y rutas generadas derivan de esos datos sin duplicar el contenido entre capas.",
        en: "Articles and destinations live in shared TypeScript modules. Listings, details, filters, metadata, sitemap entries, and generated routes all derive from that data without duplication.",
      },
      evidence: {
        es: "Tipos públicos · canonical · JSON-LD · sitemap sincronizado.",
        en: "Public types · canonical URLs · JSON-LD · synchronized sitemap.",
      },
      media: {
        src: `${import.meta.env.BASE_URL}assets/images/blog-de-viajes/destinations.png`,
        width: 1574,
        height: 1262,
        alt: {
          es: "Catálogo de seis destinos con filtros de duración, temporada, presupuesto y estilo",
          en: "Catalogue of six destinations with duration, season, budget, and travel-style filters",
        },
        caption: {
          es: "Destinos · filtros sobre contenido tipado",
          en: "Destinations · filters over typed content",
        },
      },
    },
    {
      id: "itinerary",
      label: {es: "Estado", en: "State"},
      title: {
        es: "El itinerario viaja en la URL",
        en: "The itinerary travels in the URL",
      },
      body: {
        es: "El usuario crea rutas de 1, 3 o 5 días, reordena paradas y recupera su trabajo desde localStorage versionado. Al abrir un enlace compartido, la URL tiene prioridad y las ediciones posteriores sincronizan ambas representaciones.",
        en: "Users build 1, 3, or 5-day routes, reorder stops, and restore their work from versioned localStorage. A shared URL takes precedence, then later edits synchronize both representations.",
      },
      evidence: {
        es: "Utilidades puras separadas de Vue y del almacenamiento del navegador.",
        en: "Pure utilities kept separate from Vue and browser storage.",
      },
      media: {
        src: `${import.meta.env.BASE_URL}assets/images/blog-de-viajes/destination-preview.png`,
        width: 1576,
        height: 1248,
        alt: {
          es: "Vista rápida de Londres con duración recomendada, mejor temporada y un plan inicial",
          en: "London quick view with a recommended stay, best season, and an initial plan",
        },
        caption: {
          es: "Vista rápida · contexto antes de planificar",
          en: "Quick view · context before planning",
        },
      },
    },
    {
      id: "delivery",
      label: {es: "Entrega", en: "Delivery"},
      title: {
        es: "Todo se genera antes de que llegue el visitante",
        en: "Everything is generated before the visitor arrives",
      },
      body: {
        es: "Nuxt genera el sitio completo para GitHub Pages. La canalización produce imágenes AVIF responsivas con fallback WebP, mientras CI valida lint, tipos, unidades, componentes y cinco recorridos de navegador.",
        en: "Nuxt generates the complete site for GitHub Pages. The pipeline produces responsive AVIF images with WebP fallbacks while CI validates lint, types, units, components, and five browser journeys.",
      },
      evidence: {
        es: "Generación estática · Sharp · Vitest · Playwright · GitHub Actions.",
        en: "Static generation · Sharp · Vitest · Playwright · GitHub Actions.",
      },
      media: {
        src: `${import.meta.env.BASE_URL}assets/images/blog-de-viajes/journal.png`,
        width: 1589,
        height: 1258,
        alt: {
          es: "Portada editorial de Travel Journal con artículos de planificación y presupuesto",
          en: "Travel Journal editorial page with planning and budget articles",
        },
        caption: {
          es: "Revista · contenido prerenderizado",
          en: "Journal · prerendered content",
        },
      },
    },
  ],
};

export const huellasCaseStudy: CaseStudy = {
  slug: "huellas",
  index: "03",
  name: "Huellas",
  descriptor: {es: "Cuidado de mascotas · Proyecto en equipo", en: "Pet care · Team project"},
  summary: {
    es: "La salud de cada mascota, en un solo lugar: historial, citas y un plan preventivo que se calcula a partir de los cuidados registrados.",
    en: "Every pet’s health in one place: records, appointments, and a preventive plan calculated from recorded care.",
  },
  contribution: {
    es: "Proyecto de Kevin Hernández, Adriana Elias, Aroa Granja y Fernanda Montalvan. Mi aportación: arquitectura, pruebas y backend, además de la modernización posterior. Diseño y branding originales: Aroa Granja.",
    en: "A project by Kevin Hernández, Adriana Elias, Aroa Granja, and Fernanda Montalvan. My contribution: architecture, testing, and backend, plus subsequent modernization. Original design and branding: Aroa Granja.",
  },
  image: `${import.meta.env.BASE_URL}assets/images/huellas/health-book.png`,
  imageAlt: {es: "Cartilla de salud de Huellas con datos ficticios de demostración", en: "Huellas health book with fictional demonstration data"},
  videoUrl: "https://github.com/kevin0018/Huellas/blob/main/docs/media/huellas-tour.mp4",
  repositoryUrl: "https://github.com/kevin0018/Huellas",
  stack: ["React 19", "TypeScript", "Express", "Prisma", "MySQL", "Redis", "Playwright"],
  traceLabels: {es: ["Historial", "Prevención", "Privacidad"], en: ["Records", "Prevention", "Privacy"]},
  steps: [
    {
      id: "health-book",
      label: {es: "Historial", en: "Records"},
      title: {es: "Una historia de cuidados que se puede consultar", en: "A care history you can actually follow"},
      body: {
        es: "Cada mascota reúne eventos de salud, alergias, medicación y citas en un perfil persistente. La cartilla admite documentos privados y un resumen exportable en HTML para llevar la información fuera de la aplicación.",
        en: "Each pet brings health events, allergies, medication, and appointments together in a persistent profile. The health book supports private documents and an exportable HTML summary to take the information beyond the app.",
      },
      evidence: {es: "React · servicios de aplicación · Prisma y MySQL · interfaz ES / EN / CA.", en: "React · application services · Prisma and MySQL · ES / EN / CA interface."},
    },
    {
      id: "preventive-plan",
      label: {es: "Prevención", en: "Prevention"},
      title: {es: "El siguiente cuidado nace del historial", en: "The next care action starts with the history"},
      body: {
        es: "El plan calcula fechas y estados a partir de los cuidados registrados, la edad, la recurrencia y las ventanas configuradas. Así, el historial y lo pendiente comparten una misma lógica en lugar de mantener estados editables que pueden contradecirse.",
        en: "The plan derives dates and statuses from recorded care, age, recurrence, and configured windows. History and upcoming care share the same logic instead of relying on editable statuses that can contradict each other.",
      },
      evidence: {es: "Reglas de negocio aisladas · monolito modular · pruebas de recorridos principales.", en: "Isolated business rules · modular monolith · core user journey tests."},
    },
    {
      id: "selective-sharing",
      label: {es: "Privacidad", en: "Privacy"},
      title: {es: "Compartir una parte, durante un tiempo", en: "Share a selection, for a limited time"},
      body: {
        es: "El propietario elige secciones y fechas del resumen y genera un enlace con caducidad que puede revocar. Los adjuntos permanecen privados; la autorización también se comprueba en el servidor para el chat autenticado.",
        en: "Owners choose summary sections and date ranges, then create an expiring link they can revoke. Attachments remain private; authorization is also checked on the server for authenticated chat.",
      },
      evidence: {es: "Controles de acceso · enlaces revocables · Socket.IO autenticado.", en: "Access controls · revocable links · authenticated Socket.IO."},
    },
  ],
};
