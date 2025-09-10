import React, { useState } from "react";
import projects from "../data/projects.tsx";
import { skillsByName } from "../data/skills.tsx";

type AllProjectsPageProps = {
    language: "es" | "en";
    onBack: () => void;
};

const AllProjectsPage: React.FC<AllProjectsPageProps> = ({
    language,
    onBack,
}) => {
    const [currentProject, setCurrentProject] = useState(0);

    const nextProject = () => {
        setCurrentProject((prev) => (prev + 1) % projects.length);
    };

    const prevProject = () => {
        setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const currentProjectData = projects[currentProject];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-neutral-900 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header with back button */}
                <div className="flex items-center justify-between mb-8">
                    <button
                        onClick={onBack}
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        <span className="font-medium">{language === "es" ? "Volver" : "Back"}</span>
                    </button>
                    
                    <h1 className="text-3xl md:text-4xl font-bold text-teal-600 dark:text-teal-400">
                        {language === "es" ? "Todos los Proyectos" : "All Projects"}
                    </h1>
                    
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                        {currentProject + 1} / {projects.length}
                    </div>
                </div>

                {/* Main carousel container */}
                <div className="relative">
                    {/* Navigation buttons */}
                    <button
                        onClick={prevProject}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-neutral-800 hover:bg-gray-50 dark:hover:bg-neutral-700 border border-gray-200 dark:border-neutral-600 rounded-full p-3 shadow-lg transition-all duration-200"
                    >
                        <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    
                    <button
                        onClick={nextProject}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-neutral-800 hover:bg-gray-50 dark:hover:bg-neutral-700 border border-gray-200 dark:border-neutral-600 rounded-full p-3 shadow-lg transition-all duration-200"
                    >
                        <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Project card */}
                    <div className="bg-white dark:bg-neutral-800 rounded-3xl shadow-xl overflow-hidden border border-gray-200 dark:border-neutral-700">
                        <div className="flex flex-col lg:flex-row">
                            {/* Project image - larger display */}
                            <div className="lg:w-3/5 relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-neutral-700 dark:to-neutral-600">
                                <div className="aspect-video lg:aspect-auto lg:h-96 flex items-center justify-center p-6">
                                    <img
                                        src={currentProjectData.image}
                                        alt={currentProjectData.name}
                                        className="w-full h-full object-contain drop-shadow-lg transition-transform duration-500 hover:scale-105"
                                    />
                                </div>
                            </div>
                            
                            {/* Project content */}
                            <div className="lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center">
                                <div className="mb-6">
                                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                                        {currentProjectData.name}
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                                        {currentProjectData.description[language]}
                                    </p>
                                </div>
                                
                                {/* Technologies */}
                                <div className="mb-8">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                                        {language === "es" ? "Tecnologías" : "Technologies"}
                                    </h3>
                                    <div className="flex flex-wrap gap-3">
                                        {currentProjectData.languages.map((tech, index) => {
                                            const skill = skillsByName[tech];
                                            return (
                                                <div key={index} className="flex items-center gap-2 bg-gray-100 dark:bg-neutral-700 px-4 py-2 rounded-xl">
                                                    {skill?.icon && (
                                                        <span
                                                            style={{ color: skill.color }}
                                                            className="w-5 h-5 flex items-center justify-center"
                                                        >
                                                            {skill.icon}
                                                        </span>
                                                    )}
                                                    <span className="text-gray-700 dark:text-gray-300 font-medium">{tech}</span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                                
                                {/* Action buttons */}
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a
                                        href={currentProjectData.webLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 bg-teal-600 hover:bg-teal-700 text-white py-4 px-6 rounded-xl font-semibold text-center transition-colors inline-flex items-center justify-center gap-3"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                                            <path strokeWidth="2" d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20"/>
                                        </svg>
                                        {language === "es" ? "Ver Proyecto" : "View Project"}
                                    </a>
                                    <a
                                        href={currentProjectData.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 text-white py-4 px-6 rounded-xl font-semibold transition-colors inline-flex items-center justify-center gap-3"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                        {language === "es" ? "Ver Código" : "View Code"}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Project indicators */}
                <div className="flex justify-center gap-2 mt-8">
                    {projects.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentProject(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-200 ${
                                index === currentProject
                                    ? "bg-teal-600 dark:bg-teal-400"
                                    : "bg-gray-300 dark:bg-neutral-600 hover:bg-gray-400 dark:hover:bg-neutral-500"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllProjectsPage;
