import {useRef} from "react";
import proyectos from "../data/proyectos";
import {habilidadesPorNombre, habilidadesPorGrupo} from "../data/habilidades";
import type {GrupoHabilidad} from "../data/habilidades";

const correo = "akevin.2215@gmail.com";

const grupos: { grupo: GrupoHabilidad; titulo: string; color: string }[] = [
    {grupo: "frontend", titulo: "Frontend", color: "border-cyan-500 dark:border-cyan-400"},
    {grupo: "backend", titulo: "Backend", color: "border-purple-600 dark:border-purple-400"},
    {grupo: "otras", titulo: "Otras", color: "border-amber-500 dark:border-amber-400"},
];

const MainContent = ({
                         idioma,
                         setShowMain
                     }: {
    idioma: "es" | "en",
    setShowMain: (show: boolean) => void
}) => {
    // Copiar correo
    const copiarCorreo = () => {
        navigator.clipboard.writeText(correo);
        alert(idioma === "es" ? "Correo copiado al portapapeles" : "Email copied to clipboard");
    };

    // Enviar correo
    const enviarCorreo = () => {
        window.location.href = `mailto:${correo}`;
    };

    // Referencia al contenedor principal
    const mainRef = useRef<HTMLDivElement>(null);

    function handleMainWheel(e: React.WheelEvent<HTMLDivElement>) {
        if (mainRef.current) {
            const scrollTop = mainRef.current.scrollTop;
            const sectionHeight = window.innerHeight;
            const currentSection = Math.round(scrollTop / sectionHeight);

            if (currentSection === 0 && scrollTop === 0 && e.deltaY < 0) {
                setShowMain(false);
                e.preventDefault();
            }
        }
    }

    return (
        <main
            className="
                md:ml-64
                h-screen
                overflow-y-scroll
                snap-y snap-mandatory
                bg-white text-black dark:bg-black dark:text-white
                transition-colors duration-500
                block
                "
            ref={mainRef}
            onWheel={handleMainWheel}
        >
            {/* Sobre mí */}
            <section id="sobremi" className="min-h-screen flex flex-col justify-center items-center snap-start px-4">
                <div className="w-full max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-teal-600 dark:text-teal-400">
                        {idioma === "es" ? "Sobre mí" : "About Me"}
                    </h2>
                    <p className="text-base md:text-lg text-gray-700 dark:text-gray-300">
                        {idioma === "es" ? (
                            <>
                                <strong>Responsable, eficaz y trabajador.</strong> Con capacidad de adaptación y
                                aprendizaje, resolutivo y con buenas habilidades sociales. Enfocado en buenas prácticas
                                como TDD y DDD. Busco oportunidades para seguir mejorando mis habilidades y contribuir
                                en el desarrollo de aplicaciones escalables.
                            </>
                        ) : (
                            <>
                                <strong>Responsible, efficient, and hardworking.</strong> Adaptable and eager to learn,
                                resourceful and with good social skills. Focused on best practices such as TDD and DDD.
                                I am seeking opportunities to continue improving my skills and contribute to the
                                development of scalable applications.
                            </>
                        )}
                    </p>
                </div>
            </section>

            {/* Proyectos */}
            <section id="proyectos"
                     className="min-h-screen flex flex-col justify-center items-center snap-start px-2 sm:px-4">
                <div className="w-full max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-teal-600 dark:text-teal-400 text-center">
                        {idioma === "es" ? "Proyectos" : "Projects"}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {proyectos.map((proyecto, i) => (
                            <div
                                key={i}
                                className="bg-gray-100 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-xl shadow-md flex flex-col h-full overflow-hidden max-w-xs mx-auto"
                            >
                                <img src={proyecto.imagen} alt={proyecto.nombre} className="w-full h-36 object-cover"/>
                                <div className="p-4 flex flex-col flex-1">
                                    <h3 className="text-xl md:text-2xl font-bold mb-4 text-teal-300">{proyecto.nombre}</h3>
                                    <div className="flex flex-wrap items-center gap-4 mb-6">
                                        {proyecto.lenguajes.map((nombre, idx) => {
                                            const h = habilidadesPorNombre[nombre];
                                            return h ? (
                                                <span key={idx} style={{color: h.color}} title={h.nombre}
                                                      className="w-7 h-7">
                                                    {h.icono}
                                                </span>
                                            ) : (
                                                <span key={idx}>{nombre}</span>
                                            );
                                        })}
                                    </div>
                                    <div className="flex flex-row flex-wrap items-center gap-4 mt-auto">
                                        {proyecto.enlaceWeb && (
                                            <a
                                                href={proyecto.enlaceWeb}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-teal-400 hover:underline flex items-center gap-2 text-base md:text-lg"
                                            >
                                                {/* Icono globo terráqueo SVG */}
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor"
                                                     viewBox="0 0 24 24">
                                                    <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                                                    <path strokeWidth="2"
                                                          d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20"/>
                                                </svg>
                                                {idioma === "es" ? "Web" : "Live"}
                                            </a>
                                        )}
                                        <a
                                            href={proyecto.enlaceGithub}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-teal-400 hover:underline flex items-center gap-2 text-base md:text-lg"
                                        >
                                            {/* Icono GitHub */}
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2C6.476 2 2 6.486 2 12.021c0 4.426 2.868 8.185 6.839 9.504.5.092.682-.217.682-.482
                                                     0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.157-1.11-1.466-1.11-1.466
                                                     -.908-.62.069-.608.069-.608 1.004.07 1.533 1.034 1.533 1.034.893 1.532 2.341 1.09 2.91.833.092-.647.35-1.09.636-1.342
                                                     -2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.27.098-2.647
                                                     0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295
                                                     2.748-1.025 2.748-1.025.546 1.377.202 2.394.1 2.647.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337
                                                     4.695-4.566 4.944.359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.579.688.481C19.135
                                                     20.203 22 16.444 22 12.021 22 6.486 17.523 2 12 2z"/>
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
            <section id="habilidades"
                     className="min-h-screen flex flex-col justify-center items-center snap-start px-4"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-teal-600 dark:text-teal-400 text-center">
                    {idioma === "es" ? "Habilidades" : "Skills"}
                </h2>
                <div className="w-full max-w-3xl flex flex-col gap-12">
                    {grupos.map(({grupo, titulo, color}) => (
                        <div key={grupo}>
                            <div className={`flex items-center gap-2 mb-6`}>
                                <div className={`h-8 border-l-4 ${color} mr-2`}/>
                                <h3 className="text-xl font-bold text-left tracking-wide">
                                    {titulo}
                                </h3>
                            </div>
                            <div className="flex flex-wrap justify-start gap-8">
                                {habilidadesPorGrupo[grupo].map((h) => (
                                    <div
                                        key={h.nombre}
                                        className="flex flex-col items-center bg-white dark:bg-black border border-gray-100 dark:border-gray-800 rounded-2xl shadow-lg p-6 min-w-[110px] transition hover:scale-105 hover:shadow-xl"
                                    >
                            <span style={{color: h.color}}
                                  className="w-12 h-12 flex items-center justify-center">
                                {h.icono}
                            </span>
                                        <span
                                            className="text-base md:text-lg text-gray-700 dark:text-gray-300 mt-3 text-center">
                                {h.nombre}
                            </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contacto */}
            <section id="contacto" className="min-h-screen flex flex-col justify-center items-center snap-start px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-teal-600 dark:text-teal-400 text-center">
                    {idioma === "es" ? "Contacto" : "Contact"}
                </h2>
                <div
                    className="bg-gray-100 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-lg shadow-lg p-6 md:p-8 flex flex-col items-center w-full max-w-xs"
                >
                    <p className="text-base md:text-lg mb-4 text-gray-700 dark:text-gray-300 break-all text-center">{correo}</p>
                    <div className="flex flex-col xs:flex-row gap-3 w-full">
                        <button
                            onClick={enviarCorreo}
                            className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded transition w-full"
                        >
                            {idioma === "es" ? "Enviar correo" : "Send Email"}
                        </button>
                        <button
                            onClick={copiarCorreo}
                            className="bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-100 px-4 py-2 rounded transition w-full"
                        >
                            {idioma === "es" ? "Copiar correo" : "Copy Email"}
                        </button>
                        <a
                            href="http://linkedin.com/in/kevin-hern%C3%A1ndez-deras-218b03205"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition w-full flex items-center justify-center gap-2"
                        >
                            {/* Icono de LinkedIn SVG */}
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.5 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.8-1.75-1.73s.79-1.73 1.75-1.73c.97 0 1.75.8 1.75 1.73s-.78 1.73-1.75 1.73zm13.5 11.27h-3v-5.4c0-1.29-.02-2.96-1.8-2.96-1.8 0-2.07 1.4-2.07 2.85v5.51h-3v-10h2.89v1.36h.04c.4-.76 1.38-1.56 2.85-1.56 3.05 0 3.61 2.01 3.61 4.62v5.58z"/>
                            </svg>
                            {idioma === "es" ? "LinkedIn" : "LinkedIn"}
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default MainContent;