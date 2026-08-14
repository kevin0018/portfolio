import type {Language} from "./caseStudies";

type LocalizedText = Record<Language, string>;

export type ArchivedProject = {
  slug: string;
  name: string;
  category: LocalizedText;
  summary: LocalizedText;
  image: string;
  stack: string[];
  demoUrl?: string;
  repositoryUrl?: string;
};

export const projectArchive: ArchivedProject[] = [
  {
    slug: "huellas",
    name: "Huellas",
    category: {es: "Producto web", en: "Web product"},
    summary: {
      es: "Plataforma para centralizar la gestión de salud de propietarios y sus mascotas mediante perfiles diferenciados.",
      en: "A platform that centralizes health management for pet owners and their pets through distinct profiles.",
    },
    image: `${import.meta.env.BASE_URL}assets/images/huellas.png`,
    stack: ["React", "TypeScript", "Express", "Prisma"],
    demoUrl: "https://huellas-frontend.vercel.app/",
    repositoryUrl: "https://github.com/kevin0018/Huellas",
  },
  {
    slug: "liftpath",
    name: "LiftPath",
    category: {es: "Aplicación móvil", en: "Mobile application"},
    summary: {
      es: "Planificador de entrenamiento para registrar el progreso diario, organizar la semana y crear rutinas personalizadas.",
      en: "A workout planner for logging daily progress, organizing the week, and creating custom routines.",
    },
    image: `${import.meta.env.BASE_URL}assets/images/lift_path.png`,
    stack: ["React Native", "TypeScript", "Expo", "Firebase"],
    demoUrl: "https://github.com/kevin0018/LiftPath/releases/tag/v1.0.0",
    repositoryUrl: "https://github.com/kevin0018/LiftPath",
  },
  {
    slug: "instrumento-virtual",
    name: "Instrumento virtual",
    category: {es: "Web interactiva", en: "Interactive web"},
    summary: {
      es: "Proyecto en equipo para tocar un piano y una guitarra virtuales desde una interfaz web.",
      en: "A team project for playing a virtual piano and guitar through a web interface.",
    },
    image: `${import.meta.env.BASE_URL}assets/images/instrumento_virtual.png`,
    stack: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://kevin0018.github.io/Instrumento-virtual/",
    repositoryUrl: "https://github.com/kevin0018/Instrumento-virtual",
  },
  {
    slug: "livechat-gpt",
    name: "LiveChat GPT",
    category: {es: "Experimento en tiempo real", en: "Real-time experiment"},
    summary: {
      es: "Chat en tiempo real con una integración de IA para generar respuestas automáticas.",
      en: "A real-time chat experiment with an AI integration for generating automatic replies.",
    },
    image: `${import.meta.env.BASE_URL}assets/images/LiveChat-GPT.png`,
    stack: ["Node.js", "MongoDB", "Docker"],
    repositoryUrl: "https://github.com/kevin0018/LiveChat-GPT",
  },
  {
    slug: "netflix-clone",
    name: "Netflix Clone",
    category: {es: "Proyecto full-stack", en: "Full-stack project"},
    summary: {
      es: "Recreación formativa de una experiencia de catálogo y reproducción construida con Laravel.",
      en: "A learning-focused recreation of a catalogue and playback experience built with Laravel.",
    },
    image: `${import.meta.env.BASE_URL}assets/images/jenkins.jpg`,
    stack: ["Laravel", "PHP", "MySQL", "jQuery"],
    repositoryUrl: "https://github.com/kevin0018/jenkins",
  },
];
