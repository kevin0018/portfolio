import React, {useEffect, useState} from "react";

interface HeroProps {
    idioma: "es" | "en";
    setIdioma: (idioma: "es" | "en") => void;
    onDownClick: () => void;
}

const textos = {
    es: {
        about: "ACERCA DE MÍ",
        saludo: "Kevin Hernández Deras",
        descripcion: "Desarrollador Full Stack apasionado por el diseño elegante, la eficiencia y la innovación. ",
        cv: "Descargar CV"
    },
    en: {
        about: "ABOUT ME",
        saludo: "Kevin Hernández Deras",
        descripcion: "Full Stack developer passionate about elegant design, efficiency, and innovation.",
        cv: "Download CV"
    }
};

const Hero: React.FC<HeroProps> = ({idioma, setIdioma, onDownClick}) => {
    const [isDark, setIsDark] = useState(false);

    // Sincroniza el tema con localStorage y prefers-color-scheme
    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (
            theme === "dark" ||
            (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            document.documentElement.classList.add("dark");
            setIsDark(true);
        } else {
            document.documentElement.classList.remove("dark");
            setIsDark(false);
        }
    }, []);

    const toggleTheme = () => {
        if (document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDark(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDark(true);
        }
    };

    return (
        <section
            className="relative flex flex-col min-h-screen w-full bg-white text-black dark:bg-black dark:text-white justify-center items-center transition-colors duration-500">
            {/* Botones arriba derecha */}
            <div className="absolute top-8 right-12 flex gap-4 z-20">
                {/* Selector de idioma */}
                <div className="flex items-center gap-1 text-lg">
                    <button
                        onClick={() => setIdioma("es")}
                        disabled={idioma === "es"}
                        className={`transition px-2 py-1 rounded
                        ${idioma === "es"
                            ? "font-extrabold text-teal-600 dark:text-teal-400 bg-teal-100 dark:bg-teal-900 cursor-default"
                            : "text-gray-600 dark:text-gray-300 hover:text-teal-600"}`}
                        aria-label="Cambiar a español"
                    >
                        ES
                    </button>
                    <span className="text-gray-400 select-none">|</span>
                    <button
                        onClick={() => setIdioma("en")}
                        disabled={idioma === "en"}
                        className={`transition px-2 py-1 rounded
                        ${idioma === "en"
                            ? "font-extrabold text-teal-600 dark:text-teal-400 bg-teal-100 dark:bg-teal-900 cursor-default"
                            : "text-gray-600 dark:text-gray-300 hover:text-teal-600"}`}
                        aria-label="Switch to English"
                    >
                        EN
                    </button>
                </div>
                {/* Botón tema */}
                <button
                    className="p-2 rounded-full border border-yellow-400 text-yellow-700 dark:text-white hover:bg-yellow-500 transition flex items-center justify-center"
                    aria-label="Cambiar tema"
                    onClick={toggleTheme}
                >
                    {isDark ? (
                        // (tema claro)
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
                            <path stroke="currentColor" strokeWidth="2"
                                  d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                        </svg>
                    ) : (
                        // (tema oscuro)
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path stroke="currentColor" strokeWidth={2}
                                  d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"/>
                        </svg>
                    )}
                </button>
            </div>
            {/* Contenido Hero */}
            <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-3xl mx-auto">
                {/* Avatar */}
                <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-12">
                    <div
                        className="w-32 h-32 rounded-full overflow-hidden border-4 border-teal-400 shadow-lg bg-gray-100 dark:bg-white/10 flex items-center justify-center">
                        <img
                            src={`${import.meta.env.BASE_URL}assets/images/avatar.jpg`}
                            alt="Avatar"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
                {/* Texto a la derecha de la imagen */}
                <div className="flex flex-col items-center md:items-start">
                    <span
                        className="text-teal-600 dark:text-teal-400 tracking-widest font-bold mb-2 uppercase">{textos[idioma].about}</span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center md:text-left">
                        {textos[idioma].saludo}
                    </h1>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-md text-center md:text-left">
                        {textos[idioma].descripcion}
                    </p>
                    {/* Redes sociales */}
                    <div className="flex gap-4 mb-4">
                        {/* GitHub */}
                        <a href="https://github.com/kevin0018"
                           className="text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300"
                           aria-label="GitHub"
                           target={"_blank"}
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M12 2C6.476 2 2 6.486 2 12.021c0 4.426 2.868 8.185 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.07 1.533 1.034 1.533 1.034.893 1.532 2.341 1.09 2.91.833.092-.647.35-1.09.636-1.342-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.27.098-2.647 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.377.202 2.394.1 2.647.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.579.688.481C19.135 20.203 22 16.444 22 12.021 22 6.486 17.523 2 12 2z"/>
                            </svg>
                        </a>
                        {/* LinkedIn */}
                        <a href="http://linkedin.com/in/kevin-hern%C3%A1ndez-deras-218b03205"
                           className="text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300"
                           aria-label="LinkedIn"
                           target={"_blank"}
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M19 0h-14c-2.761 0-5 2.238-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.762-2.238-5-5-5zm-11.75 20h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.25 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.869 0-2.156 1.459-2.156 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.762 1.379-1.564 2.838-1.564 3.036 0 3.598 2.001 3.598 4.602v5.595z"/>
                            </svg>
                        </a>
                    </div>
                    {/* Botón CV */}
                    <a
                        href={`${import.meta.env.BASE_URL}assets/files/CV_Kevin_Hernandez_Deras.pdf`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-teal-600 dark:bg-teal-500 hover:bg-teal-700 dark:hover:bg-teal-400 text-white px-6 py-2 rounded shadow-lg font-semibold transition"
                    >
                        {textos[idioma].cv}
                    </a>
                </div>
            </div>
            {/* Botón chevron abajo */}
            <button
                onClick={onDownClick}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-gray-200 dark:bg-white/10 hover:bg-teal-500 dark:hover:bg-teal-500 transition-colors text-teal-700 dark:text-white rounded-full p-4 shadow-lg"
                aria-label="Bajar"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                    <path stroke="currentColor" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
            </button>
        </section>
    );
};

export default Hero;