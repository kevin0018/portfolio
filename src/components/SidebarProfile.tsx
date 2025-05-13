import React, { useState } from "react";

type Language = "es" | "en";

type EducationItem = {
    title: string;
    date: string;
    institution: string;
};

type ExperienceItem = {
    jobTitle: string;
    company: string;
    date: string;
    details: React.ReactNode;
};

const educationData: Record<Language, EducationItem[]> = {
    es: [
        {
            title: "Ciclo Formativo de Grado Superior, Desarrollo de Aplicaciones Web",
            date: "sept. 2022 - may. 2024",
            institution: "Escola del Treball"
        },
        {
            title: "Ciclo Formativo de Grado Medio, Sistemas Microinformáticos y Redes",
            date: "sept. 2020 - jun. 2022",
            institution: "Escola del Treball"
        }
    ],
    en: [
        {
            title: "Higher Vocational Training, Web Application Development",
            date: "Sep 2022 - May 2024",
            institution: "Escola del Treball"
        },
        {
            title: "Intermediate Vocational Training, Microcomputer Systems and Networks",
            date: "Sep 2020 - Jun 2022",
            institution: "Escola del Treball"
        }
    ]
};

const experienceData: Record<Language, ExperienceItem[]> = {
    es: [
        {
            jobTitle: "Full Stack Developer",
            company: "Coneptum",
            date: "jul. 2024 - feb. 2025",
            details: (
                <ul className="list-disc pl-5 mt-2 text-gray-600 dark:text-gray-400 text-left">
                    <li>Desarrollo y mantenimiento de proyectos backend con Django Rest Framework.</li>
                    <li>Desarrollo y mantenimiento de proyectos frontend con Vue.js.</li>
                    <li>Implementación de soluciones escalables en Python, C# y TypeScript,
                        aplicando metodologías como DDD (Domain-Driven Design), TDD (Test-Driven
                        Development) con pytest y unittest, así como CQRS (Command Query
                        Responsibility Segregation) para mejorar la arquitectura y calidad del
                        software.
                    </li>
                    <li>Gestión y optimización de bases de datos, principalmente PostgreSQL.</li>
                </ul>
            )
        }
    ],
    en: [
        {
            jobTitle: "Full Stack Developer",
            company: "Coneptum",
            date: "Jul 2024 - Feb 2025",
            details: (
                <ul className="list-disc pl-5 mt-2 text-gray-600 dark:text-gray-400 text-left">
                    <li>Development and maintenance of backend projects with Django Rest Framework.</li>
                    <li>Development and maintenance of frontend projects with Vue.js.</li>
                    <li>Implementation of scalable solutions in Python, C# and TypeScript, applying
                        methodologies such as DDD (Domain-Driven Design), TDD (Test-Driven
                        Development) with pytest and unittest, as well as CQRS (Command Query
                        Responsibility Segregation) to improve software architecture and quality.
                    </li>
                    <li>Database management and optimization, mainly PostgreSQL.</li>
                </ul>
            )
        }
    ]
};

const SidebarProfile = ({ language }: { language: Language }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="flex-1 flex flex-col justify-center items-start bg-gray-100 dark:bg-neutral-800 rounded-xl p-8 shadow-lg mt-12 md:mt-0 md:ml-12 w-full max-w-lg">
            {/* Education Timeline */}
            <h3 className="text-2xl font-semibold text-teal-500 mb-6 text-left">
                {language === "es" ? "Formación" : "Education"}
            </h3>
            <ol className="relative border-l-2 border-teal-500 mb-8">
                {educationData[language].map((item, i) => (
                    <li key={i} className="mb-10 ml-6">
                        <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-teal-500 rounded-full ring-8 ring-gray-100 dark:ring-neutral-800"></span>
                        <h4 className="font-bold text-gray-900 dark:text-white text-left">{item.title}</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-left">
                            {item.institution} ({item.date})
                        </p>
                    </li>
                ))}
            </ol>

            {/* Experience Timeline */}
            <h3 className="text-2xl font-semibold text-teal-500 mb-6 text-left">
                {language === "es" ? "Experiencia" : "Experience"}
            </h3>
            <ol className="relative border-l-2 border-teal-500">
                {experienceData[language].map((item, i) => (
                    <li key={i} className="mb-10 ml-6">
                        <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-teal-500 rounded-full ring-8 ring-gray-100 dark:ring-neutral-800"></span>
                        <button
                            className="font-bold text-gray-900 dark:text-white text-left focus:outline-none w-full flex justify-between items-center"
                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            aria-expanded={openIndex === i}
                        >
                            {item.jobTitle}
                            <span className="ml-2 text-teal-500 transition-transform duration-300">{openIndex === i ? "▲" : "▼"}</span>
                        </button>
                        <p className="text-gray-600 dark:text-gray-400 text-left">
                            {item.company} ({item.date})
                        </p>
                        {/* Animation */}
                        <div
                            className={`grid transition-all duration-300 ease-in-out ${
                                openIndex === i
                                    ? "grid-rows-[1fr] opacity-100 mt-2"
                                    : "grid-rows-[0fr] opacity-0 mt-0"
                            }`}
                            style={{ overflow: "hidden" }}
                        >
                            <div className="overflow-hidden">
                                {item.details}
                            </div>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default SidebarProfile;