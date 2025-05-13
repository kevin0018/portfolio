import {useRef} from "react";
import {groupBySkills} from "../data/skills.tsx";
import type {groupSkills} from "../data/skills.tsx";
import SidebarProfile from "./SidebarProfile";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection.tsx";

const correo = "akevin.2215@gmail.com";

const grupos: { group: groupSkills; title: string; color: string }[] = [
    {group: "frontend", title: "Frontend", color: "border-cyan-500 dark:border-cyan-400"},
    {group: "backend", title: "Backend", color: "border-purple-600 dark:border-purple-400"},
    {group: "otras", title: "Otras", color: "border-amber-500 dark:border-amber-400"},
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
            <section
                id="sobremi"
                className="min-h-screen flex flex-col md:flex-row justify-center items-center snap-start px-4"
            >
                {/* Columna izquierda: Sobre mí */}
                <div className="flex-1 flex flex-col justify-center items-center max-w-xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-teal-600 dark:text-teal-400">
                        {idioma === "es" ? "Sobre mí" : "About Me"}
                    </h2>
                    <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 text-left">
                        {idioma === "es" ? (
                            <>
                                Soy una persona <b>responsable</b>, <b>eficaz</b> y con gran capacidad de adaptación.
                                Intento aprender cada día algo nuevo y disfruto afrontando tanto el
                                desarrollo <b>frontend</b> como <b>backend</b>, aplicando buenas prácticas
                                como <b>TDD</b> y los principios <b>SOLID</b> para lograr aplicaciones sólidas y
                                mantenibles. Además, tengo conocimientos en <b>DDD</b> (Domain-Driven Design) y
                                experiencia implementando patrones como <b>CQRS</b> (Command Query Responsibility
                                Segregation), lo que me permite abordar proyectos con arquitecturas limpias y
                                escalables. Me gusta trabajar en equipo, compartir ideas y contribuir al desarrollo de
                                proyectos de calidad, siempre con una actitud resolutiva y colaborativa.<br/><br/>
                                Busco oportunidades donde pueda seguir desarrollando mis skills <b>Full Stack</b> y
                                contribuir en el diseño, desarrollo y despliegue de aplicaciones innovadoras.
                            </>
                        ) : (
                            <>
                                <b>Responsible</b> and <b>efficient</b> professional with strong adaptability and a
                                constant drive to learn something new every day. Experienced in
                                both <b>frontend</b> and <b>backend</b> development, consistently applying best
                                practices such as <b>TDD</b> and <b>SOLID</b> principles to deliver robust and
                                maintainable applications. Knowledgeable in <b>DDD</b> (Domain-Driven Design) and
                                experienced in implementing patterns like <b>CQRS</b> (Command Query Responsibility
                                Segregation), enabling the development of clean and scalable architectures. Thrive in
                                team environments, sharing ideas and contributing to high-quality projects with a
                                proactive and collaborative approach.<br/><br/>
                                Seeking opportunities to further develop <b>Full Stack</b> skills and contribute to the
                                design, development, and deployment of innovative applications.
                            </>
                        )}
                    </p>
                </div>

                {/* Columna derecha: Formación y Experiencia */}
                <SidebarProfile language={idioma} />
            </section>

            {/* Proyectos */}
            <ProjectsSection
                language={idioma}
            />

            {/* Habilidades */}
            <SkillsSection
                language={idioma}
                groups={grupos}
                groupBySkills={groupBySkills}
            />

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