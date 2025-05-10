const proyectos = [
    {
        nombre: "Blog de Viaje",
        imagen: "/assets/images/blog-viaje.jpg",
        lenguajes: [
            { nombre: "Nuxt", icono: "/assets/icons/nuxt.svg" },
            { nombre: "Vue", icono: "/assets/icons/vue.svg" },
            { nombre: "Tailwind", icono: "/assets/icons/tailwind.svg" }
        ],
        enlaceWeb: "https://blogdeviaje.com",
        enlaceGithub: "https://github.com/kevin0018/blog-viaje"
    },
    // Puedes añadir más proyectos aquí...
];

// Ejemplo de habilidades
const habilidades = [
    { nombre: "HTML", icono: "/assets/icons/html.svg" },
    { nombre: "CSS", icono: "/assets/icons/css.svg" },
    { nombre: "JavaScript", icono: "/assets/icons/javascript.svg" },
    { nombre: "TypeScript", icono: "/assets/icons/typescript.svg" },
    { nombre: "React", icono: "/assets/icons/react.svg" },
    { nombre: "Vue", icono: "/assets/icons/vue.svg" },
    { nombre: "Nuxt", icono: "/assets/icons/nuxt.svg" },
];

const correo = "akevin.2215@gmail.com";

const MainContent = ({ idioma }: { idioma: "es" | "en" }) => {
    // Copiar correo
    const copiarCorreo = () => {
        navigator.clipboard.writeText(correo);
        alert("Correo copiado al portapapeles");
    };

    // Enviar correo
    const enviarCorreo = () => {
        window.location.href = `mailto:${correo}`;
    };

    return (
        <main className="md:ml-64 flex flex-col w-full min-h-screen bg-black text-white transition-colors duration-500">
            {/* Sobre mí */}
            <section id="sobremi" className="flex flex-col justify-center items-center min-h-screen px-4">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-4 text-teal-400">
                        {idioma === "es" ? "Sobre mí" : "About Me"}
                    </h2>
                    <p className="text-lg text-gray-300">
                        {idioma === "es"
                            ? "Kevin Hernández Deras. Desarrollador Full Stack apasionado por el diseño elegante, la eficiencia y la innovación. Enfocado en buenas prácticas como TDD y DDD. Busco oportunidades para seguir mejorando mis habilidades y contribuir en el desarrollo de aplicaciones escalables."
                            : "Kevin Hernández Deras. Full Stack developer passionate about elegant design, efficiency, and innovation. Focused on best practices such as TDD and DDD. I am seeking opportunities to continue improving my skills and contribute to the development of scalable applications."}
                    </p>
                </div>
            </section>

            {/* Proyectos */}
            <section id="proyectos" className="flex flex-col items-center justify-center min-h-screen px-4">
                <div className="max-w-4xl w-full">
                    <h2 className="text-4xl font-bold mb-8 text-teal-400 text-center">
                        {idioma === "es" ? "Proyectos" : "Projects"}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {proyectos.map((proyecto, i) => (
                            <div key={i} className="bg-neutral-900 border border-neutral-800 rounded-xl shadow-md flex flex-col h-full overflow-hidden max-w-xs mx-auto">
                                <img src={proyecto.imagen} alt={proyecto.nombre} className="w-full h-32 object-cover" />
                                <div className="p-4 flex flex-col flex-1">
                                    <h3 className="text-xl font-semibold mb-2 text-teal-300">{proyecto.nombre}</h3>
                                    <div className="flex items-center gap-3 mb-3">
                                        {proyecto.lenguajes.map((l, idx) => (
                                            <img key={idx} src={l.icono} alt={l.nombre} title={l.nombre} className="w-6 h-6" />
                                        ))}
                                    </div>
                                    <div className="flex flex-row items-center gap-3 mt-auto">
                                        {proyecto.enlaceWeb && (
                                            <a href={proyecto.enlaceWeb} target="_blank" rel="noopener noreferrer"
                                               className="text-teal-400 hover:underline flex items-center gap-1 text-sm">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                                                          d="M14 3h7v7m0 0L10 21l-7-7 11-11z"/>
                                                </svg>
                                                {idioma === "es" ? "Web" : "Live"}
                                            </a>
                                        )}
                                        <a href={proyecto.enlaceGithub} target="_blank" rel="noopener noreferrer"
                                           className="text-teal-400 hover:underline flex items-center gap-1 text-sm">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2C6.476 2 2 6.486 2 12.021c0 4.426 2.868 8.185 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.07 1.533 1.034 1.533 1.034.893 1.532 2.341 1.09 2.91.833.092-.647.35-1.09.636-1.342-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.27.098-2.647 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.377.202 2.394.1 2.647.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.579.688.481C19.135 20.203 22 16.444 22 12.021 22 6.486 17.523 2 12 2z"/>
                                            </svg>
                                            GitHub
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Habilidades */}
            <section id="habilidades" className="flex flex-col items-center justify-center min-h-screen px-4">
                <h2 className="text-4xl font-bold mb-8 text-teal-400 text-center">
                    {idioma === "es" ? "Habilidades" : "Skills"}
                </h2>
                <div className="flex flex-wrap justify-center gap-8 max-w-3xl">
                    {habilidades.map((h, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <img src={h.icono} alt={h.nombre} title={h.nombre} className="w-16 h-16 mb-2" />
                            <span className="text-lg text-gray-300">{h.nombre}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contacto */}
            <section id="contacto" className="flex flex-col items-center justify-center min-h-screen px-4">
                <h2 className="text-4xl font-bold mb-8 text-teal-400 text-center">
                    {idioma === "es" ? "Contacto" : "Contact"}
                </h2>
                <div className="bg-neutral-900 border border-neutral-700 rounded-lg shadow-lg p-8 flex flex-col items-center">
                    <p className="text-lg mb-4 text-gray-300">{correo}</p>
                    <div className="flex gap-4">
                        <button
                            onClick={enviarCorreo}
                            className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded transition"
                        >
                            {idioma === "es" ? "Enviar correo" : "Send Email"}
                        </button>
                        <button
                            onClick={copiarCorreo}
                            className="bg-gray-700 hover:bg-gray-600 text-gray-100 px-4 py-2 rounded transition"
                        >
                            {idioma === "es" ? "Copiar correo" : "Copy Email"}
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default MainContent;