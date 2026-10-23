type ProductArchitecture = {
  front: string;
  contract: string;
  back: string;
  data: string;
};

// Implementation boundaries from the verified case studies, keyed by stable slug.
export const projectArchitecture: Record<string, ProductArchitecture> = {
  wikilol: {
    front: "React + TanStack Query",
    contract: "Zod contracts",
    back: "Express BFF",
    data: "Riot + Data Dragon",
  },
  "blog-de-viajes": {
    front: "Nuxt + Vue",
    contract: "Typed content",
    back: "Pure itinerary utilities",
    data: "URL + localStorage",
  },
  huellas: {
    front: "React + TypeScript",
    contract: "REST + Socket.IO",
    back: "Express + Prisma",
    data: "MySQL + Redis",
  },
  pokeshop: {
    front: "Vue + Pinia",
    contract: "REST API",
    back: "FastAPI + SQLAlchemy",
    data: "PostgreSQL + PokéAPI",
  },
};
