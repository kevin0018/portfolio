import React from "react";
import projects from "../data/projects.tsx";
import {skillsByName} from "../data/skills.tsx";

type ProjectsSectionProps = {
    language: "es" | "en";
    onShowAllProjects?: () => void;
};

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
    language,
    onShowAllProjects,
}) => {
    // Get featured projects: wikiLoL, Blog de Viaje, Huellas
    const featuredProjects = [projects[2], projects[3], projects[0]]; // wikiLoL, Blog de Viaje, Huellas

    return (
        <section
            id="projects"
            className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8"
        >
            <div className="w-full max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-teal-600 dark:text-teal-400 text-center">
                    {language === "es" ? "Proyectos Destacados" : "Featured Projects"}
                </h2>
                
                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                    {/* Top Row - Two smaller projects */}
                    {featuredProjects.slice(0, 2).map((project, index) => (
                        <div key={index} className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                            {/* Project Image */}
                            <div className="relative overflow-hidden bg-gray-50 dark:bg-neutral-800 flex items-center justify-center">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-48 object-contain group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            
                            {/* Project Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                    {project.name}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                                    {project.description[language]}
                                </p>
                                
                                {/* Technologies */}
                                <div className="mb-6">
                                    <div className="flex flex-wrap gap-2">
                                        {project.languages.slice(0, 4).map((tech, techIndex) => {
                                            const skill = skillsByName[tech];
                                            return (
                                                <div key={techIndex} className="flex items-center gap-2 bg-gray-100 dark:bg-neutral-800 px-3 py-1 rounded-lg text-xs">
                                                    {skill?.icon && (
                                                        <span
                                                            style={{color: skill.color}}
                                                            className="w-3 h-3 flex items-center justify-center"
                                                        >
                                                            {skill.icon}
                                                        </span>
                                                    )}
                                                    <span className="text-gray-700 dark:text-gray-300 font-medium">{tech}</span>
                                                </div>
                                            );
                                        })}
                                        {project.languages.length > 4 && (
                                            <div className="bg-gray-100 dark:bg-neutral-800 px-3 py-1 rounded-lg text-xs text-gray-700 dark:text-gray-300">
                                                +{project.languages.length - 4}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                
                                {/* Action Buttons */}
                                <div className="flex gap-3">
                                    <a
                                        href={project.webLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 bg-teal-600 hover:bg-teal-700 text-white py-3 px-4 rounded-lg font-medium text-center transition-colors inline-flex items-center justify-center gap-2"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                                            <path strokeWidth="2" d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20"/>
                                        </svg>
                                        {language === "es" ? "Web" : "Web"}
                                    </a>
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 text-white py-3 px-4 rounded-lg font-medium transition-colors inline-flex items-center justify-center gap-2"
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                    {/* Bottom Row - Large featured project */}
                    <div className="lg:col-span-2 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                        <div className="flex flex-col lg:flex-row">
                            {/* Project Image */}
                            <div className="lg:w-2/5 relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-neutral-800 dark:to-neutral-700 flex items-center justify-center p-1">
                                <img
                                    src={featuredProjects[2].image}
                                    alt={featuredProjects[2].name}
                                    className="w-full h-auto min-h-64 lg:min-h-72 object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            
                            {/* Project Content */}
                            <div className="lg:w-3/5 p-8 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                                        {featuredProjects[2].name}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                                        {featuredProjects[2].description[language]}
                                    </p>
                                    
                                    {/* Technologies */}
                                    <div className="mb-6">
                                        <div className="flex flex-wrap gap-2">
                                            {featuredProjects[2].languages.map((tech, techIndex) => {
                                                const skill = skillsByName[tech];
                                                return (
                                                    <div key={techIndex} className="flex items-center gap-2 bg-gray-100 dark:bg-neutral-800 px-3 py-2 rounded-lg text-sm">
                                                        {skill?.icon && (
                                                            <span
                                                                style={{color: skill.color}}
                                                                className="w-4 h-4 flex items-center justify-center"
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
                                </div>
                                
                                {/* Action Buttons */}
                                <div className="flex gap-4">
                                    <a
                                        href={featuredProjects[2].webLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 bg-teal-600 hover:bg-teal-700 text-white py-3 px-6 rounded-lg font-medium text-center transition-colors inline-flex items-center justify-center gap-2"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                                            <path strokeWidth="2" d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20"/>
                                        </svg>
                                        {language === "es" ? "Web" : "Web"}
                                    </a>
                                    <a
                                        href={featuredProjects[2].githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 text-white py-3 px-6 rounded-lg font-medium transition-colors inline-flex items-center justify-center gap-2"
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* View More Projects Button - Functional */}
                <div className="text-center">
                    <button 
                        onClick={onShowAllProjects}
                        className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 cursor-pointer transition-colors bg-transparent border-none p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800"
                    >
                        <span className="text-lg font-medium">{language === "es" ? "Más proyectos" : "More projects"}</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
