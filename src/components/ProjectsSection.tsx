import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";

import 'swiper/swiper-bundle.css';

import projects from "../data/projects.tsx";
import {skillsByName} from "../data/skills.tsx";

type ProjectsSectionProps = {
    language: "es" | "en";
};

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
    language,
}) => {
    return (
        <section
            id="projects"
            className="min-h-screen flex flex-col justify-center items-center snap-start px-2 sm:px-4"
        >
            <div className="w-full max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-teal-600 dark:text-teal-400 text-center">
                    {language === "es" ? "Proyectos" : "Projects"}
                </h2>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={32}
                    slidesPerView={1}
                    navigation
                    pagination={{clickable: true}}
                    className="pb-10 w-full"
                >
                    {projects.map((project, i) => (
                        <SwiperSlide key={i}>
                            <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-2xl shadow-lg transition-all hover:shadow-xl">
                                <div className="flex flex-col lg:flex-row min-h-[500px]">
                                    {/* Imagen del proyecto */}
                                    <div className="w-full lg:w-1/2 h-[280px] lg:h-auto flex items-center justify-center bg-gray-50 dark:bg-neutral-800 rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none p-4 lg:p-8">
                                        <div className="w-72 h-52 md:w-96 md:h-72 lg:w-80 lg:h-60 xl:w-96 xl:h-72 flex items-center justify-center border border-gray-200 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-900">
                                            <img
                                                src={project.image}
                                                alt={project.name}
                                                className="w-full h-full object-contain rounded-lg"
                                            />
                                        </div>
                                    </div>
                                    
                                    {/* Contenido del proyecto */}
                                    <div className="w-full lg:w-1/2 p-8 flex flex-col justify-between">
                                        <div>
                                            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-teal-500">
                                                {project.name}
                                            </h3>

                                            <div className="mb-6">
                                                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                                    {language === "es" ? project.description?.es : project.description?.en}
                                                </p>
                                            </div>

                                            <div className="mb-8">
                                                <h4 className="text-lg md:text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                                                    {language === "es" ? "Tecnologías utilizadas" : "Technologies used"}
                                                </h4>
                                                <div className="flex flex-wrap gap-3">
                                                    {project.languages.map((lang, idx) => {
                                                        const skill = skillsByName[lang];
                                                        return skill ? (
                                                            <div
                                                                key={idx}
                                                                className="flex items-center gap-3 bg-gray-50 dark:bg-neutral-800 px-4 py-3 rounded-xl border border-gray-100 dark:border-neutral-700 hover:bg-gray-100 dark:hover:bg-neutral-700 transition-colors"
                                                                title={skill.name}
                                                            >
                                                                <span
                                                                    style={{color: skill.color}}
                                                                    className="w-6 h-6 flex items-center justify-center"
                                                                >
                                                                    {skill.icon}
                                                                </span>
                                                                <span className="text-sm md:text-base font-medium text-gray-700 dark:text-gray-300">
                                                                    {skill.name}
                                                                </span>
                                                            </div>
                                                        ) : (
                                                            <div key={idx} className="flex items-center gap-3 bg-gray-50 dark:bg-neutral-800 px-4 py-3 rounded-xl border border-gray-100 dark:border-neutral-700">
                                                                <span className="w-6 h-6 flex items-center justify-center text-gray-400">
                                                                    ?
                                                                </span>
                                                                <span className="text-sm md:text-base font-medium text-gray-700 dark:text-gray-300">
                                                                    {lang}
                                                                </span>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Enlaces */}
                                        <div className="flex flex-row flex-wrap items-center gap-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                                            {project.webLink && (
                                                <a
                                                    href={project.webLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-3 bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-xl font-medium transition-all hover:shadow-lg hover:scale-105"
                                                >
                                                    <svg
                                                        className="w-5 h-5" fill="none" stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                                                        <path
                                                            strokeWidth="2"
                                                            d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20"
                                                        />
                                                    </svg>
                                                    {language === "es" ? "Ver Proyecto" : "View Project"}
                                                </a>
                                            )}
                                            <a
                                                href={project.githubLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-3 border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white px-6 py-3 rounded-xl font-medium transition-all hover:shadow-lg hover:scale-105"
                                            >
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path
                                                        d="M12 2C6.476 2 2 6.486 2 12.021c0 4.426 2.868 8.185 6.839 9.504.5.092.682-.217.682-.482
                                                    0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.157-1.11-1.466-1.11-1.466
                                                    -.908-.62.069-.608.069-.608 1.004.07 1.533 1.034 1.533 1.034.893 1.532 2.341 1.09 2.91.833.092-.647.35-1.09.636-1.342
                                                    -2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.27.098-2.647
                                                    0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295
                                                    2.748-1.025 2.748-1.025.546 1.377.202 2.394.1 2.647.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337
                                                    4.695-4.566 4.944.359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.579.688.481C19.135
                                                    20.203 22 16.444 22 12.021 22 6.486 17.523 2 12 2z"/>
                                                </svg>
                                                {language === "es" ? "Ver Código" : "View Code"}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default ProjectsSection;