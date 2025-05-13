import React, { useState } from "react";

type Skill = {
    name: string;
    icon: React.ReactNode;
    color: string;
};

type SkillGroup = {
    group: string;
    title: string;
    color: string;
};

type SkillsSectionProps = {
    language: "es" | "en";
    groups: SkillGroup[];
    groupBySkills: Record<string, Skill[]>;
};

const SkillsSection: React.FC<SkillsSectionProps> = ({
    language,
    groups,
    groupBySkills,
}) => {
    const [openGroup, setOpenGroup] = useState<string | null>(null);

    const handleToggleGroup = (group: string) => {
        setOpenGroup((prev) => (prev === group ? null : group));
    };

    return (
        <section
            id="skills"
            className="min-h-screen flex flex-col justify-center items-center snap-start px-4"
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-teal-600 dark:text-teal-400 text-center">
                {language === "es" ? "Habilidades" : "Skills"}
            </h2>
            <div className="w-full max-w-3xl flex flex-col gap-8">
                {groups.map(({ group, title, color }) => (
                    <div key={group}>
                        <button
                            type="button"
                            className="flex items-center gap-2 mb-4 group w-full focus:outline-none"
                            aria-expanded={openGroup === group}
                            onClick={() => handleToggleGroup(group)}
                        >
                            <div className={`h-8 border-l-4 ${color} mr-2`} />
                            <h3 className="text-xl font-bold text-left tracking-wide flex-1">
                                {title}
                            </h3>
                            <span
                                className={`transform transition-transform duration-200 ${
                                    openGroup === group ? "rotate-90" : ""
                                }`}
                            >
                                <svg
                                    className="w-5 h-5 text-gray-600 dark:text-gray-300"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </span>
                        </button>
                        <div
                            className={`transition-all overflow-hidden duration-300 ${
                                openGroup === group
                                    ? "max-h-[1000px] opacity-100"
                                    : "max-h-0 opacity-0"
                            }`}
                        >
                            <div className="flex flex-wrap justify-start gap-6 md:gap-8 py-2">
                                {groupBySkills[group].map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="flex flex-col items-center bg-white dark:bg-black border border-gray-100 dark:border-gray-800 rounded-2xl shadow-lg p-4 min-w-[110px] max-w-[110px] min-h-[130px] max-h-[130px] transition hover:scale-105 hover:shadow-xl"
                                        style={{
                                            width: "110px",
                                            height: "130px",
                                        }}
                                    >
                                        <span
                                            style={{ color: skill.color }}
                                            className="w-12 h-12 flex items-center justify-center"
                                        >
                                            {skill.icon}
                                        </span>
                                        <span className="text-base md:text-lg text-gray-700 dark:text-gray-300 mt-3 text-center">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SkillsSection;