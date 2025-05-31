const projects = [
    {
        name: "wikiLoL",
        image: `${import.meta.env.BASE_URL}assets/images/wikiLoL.png`,
        languages: ["Node.js", "Tailwind CSS", "Express", "HTML5", "JavaScript"],
        webLink: "https://wikilol-client.vercel.app/",
        githubLink: "https://github.com/kevin0018/wikiLoL",
        description: {
            es: "Aplicación web que consume la API de Riot Games para buscar jugadores, mostrar campeones junto con su historia y aspectos disponibles.",
            en: "Web application that consumes the Riot Games API to search for players, display champions along with their lore and available skins."
        }
    },
    {
        name: "Blog de Viaje",
        image: `${import.meta.env.BASE_URL}assets/images/blog_de_viajes.png`,
        languages: ["Nuxt", "Vue.js", "Tailwind CSS"],
        webLink: "https://kevin0018.github.io/Blog-de-Viajes/",
        githubLink: "https://github.com/kevin0018/Blog-de-Viajes",
        description: {
            es: "Una plataforma para compartir experiencias de viajes con una interfaz moderna y atractiva.",
            en: "A platform to share travel experiences with a modern and attractive interface."
        }
    },
    {
        name: "Instrumento virtual",
        image: `${import.meta.env.BASE_URL}assets/images/instrumento_virtual.png`,
        languages: ["HTML5", "CSS", "JavaScript"],
        webLink: "https://kevin0018.github.io/Instrumento-virtual/",
        githubLink: "https://github.com/kevin0018/Instrumento-virtual",
        description: {
            es: "Aplicación web interactiva desarrollada en equipo que permite a los usuarios tocar piano y guitarra virtualmente mediante una interfaz intuitiva.",
            en: "Interactive web application developed as a team that allows users to play piano and guitar virtually through an intuitive interface."
        }
    },
    {
        name: "LiveChat GPT",
        image: `${import.meta.env.BASE_URL}assets/images/LiveChat-GPT.png`,
        languages: ["Docker", "MongoDB", "Node.js", "CSS"],
        webLink: "",
        githubLink: "https://github.com/kevin0018/LiveChat-GPT",
        description: {
            es: "Chat en tiempo real con integración de IA para respuestas automáticas inteligentes.",
            en: "Real-time chat with AI integration for smart automated responses."
        }
    },
    {
        name: "Netflix 'Clone'",
        image: `${import.meta.env.BASE_URL}assets/images/jenkins.jpg`,
        languages: ["Laravel", "MySQL", "CSS", "PHP", "JQuery", "Bootstrap"],
        webLink: "",
        githubLink: "https://github.com/kevin0018/jenkins",
        description: {
            es: "Recreación de la interfaz y funcionalidades principales de Netflix usando Laravel.",
            en: "Recreation of Netflix's interface and main functionalities using Laravel."
        }
    },
    {
        name: "Robot Maze",
        image: `${import.meta.env.BASE_URL}assets/images/finchRobot.jpg`,
        languages: ["Java"],
        webLink: "",
        githubLink: "https://github.com/kevin0018/robot-maze-java",
        description: {
            es: "Algoritmo de navegación para resolver laberintos con un robot en Java.",
            en: "Navigation algorithm to solve mazes with a robot in Java."
        }
    },
    {
        name: "Portfolio",
        image: `${import.meta.env.BASE_URL}assets/images/portfolio.png`,
        languages: ["React", "Tailwind CSS", "TypeScript", "Swiper"],
        webLink: "https://kevin0018.github.io/portfolio/",
        githubLink: "https://github.com/kevin0018/portfolio",
        description: {
            es: "Sitio web personal mostrando proyectos y habilidades técnicas con diseño responsive.",
            en: "Personal website showcasing projects and technical skills with responsive design."
        }
    }
];

export default projects;