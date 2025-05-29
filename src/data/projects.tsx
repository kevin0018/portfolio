const projects = [
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
            es: "Algoritmo de navegación para resolver laberintos con un robot virtual en Java.",
            en: "Navigation algorithm to solve mazes with a virtual robot in Java."
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