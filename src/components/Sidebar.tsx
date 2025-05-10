import React, { useState } from "react";

interface SidebarProps {
    idioma: "es" | "en";
    onInicioClick: () => void;
}

const navLinks = [
    {
        href: "#inicio",
        label: { es: "Inicio", en: "Home" },
        icon: (
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 12l9-9 9 9v9a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4a2 2 0 00-2-2h-2a2 2 0 00-2 2v4a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                />
            </svg>
        )
    },
    {
        href: "#sobremi",
        label: { es: "Sobre mí", en: "About Me" },
        icon: (
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.121 17.804A12.072 12.072 0 0112 15.5c2.485 0 4.797.757 6.879 2.045M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
            </svg>
        )
    },
    {
        href: "#proyectos",
        label: { es: "Proyectos", en: "Projects" },
        icon: (
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                />
            </svg>
        )
    },
    {
        href: "#habilidades",
        label: { es: "Habilidades", en: "Skills" },
        icon: (
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                />
            </svg>
        )
    },
    {
        href: "#contacto",
        label: { es: "Contacto", en: "Contact" },
        icon: (
            <svg strokeWidth={2} className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                />
            </svg>
        )
    },
];

const Sidebar: React.FC<SidebarProps> = ({ idioma, onInicioClick }) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Botón menú hamburguesa */}
            <button
                className="fixed top-4 left-4 z-50 p-2 bg-teal-500 rounded-full shadow-lg md:hidden"
                onClick={() => setOpen(true)}
                aria-label="Abrir menú"
            >
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                </svg>
            </button>

            {/* Sidebar deslizable */}
            {open && (
                <>
                    {/* Overlay */}
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 md:hidden"
                        onClick={() => setOpen(false)}
                    ></div>
                    {/* Sidebar móvil */}
                    <aside
                        className={`
                            fixed top-0 left-0 h-screen w-64
                            bg-white dark:bg-neutral-900 border-r border-gray-200 dark:border-neutral-700
                            py-8 px-4 z-50 flex flex-col
                            transition-transform duration-300
                            md:hidden
                        `}
                    >
                        {/* Botón cerrar */}
                        <button
                            className="absolute top-4 right-4 text-gray-500 hover:text-teal-500"
                            onClick={() => setOpen(false)}
                            aria-label="Cerrar menú"
                        >
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <nav className="flex flex-col gap-6 mt-10">
                            {navLinks.map(link =>
                                link.href === "#inicio" ? (
                                    <button
                                        key={link.href}
                                        onClick={() => {
                                            onInicioClick();
                                            setOpen(false);
                                        }}
                                        className="flex items-center text-lg font-bold text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 transition"
                                    >
                                        {link.icon}
                                        {link.label[idioma]}
                                    </button>
                                ) : (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        className="flex items-center text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-teal-600 dark:hover:text-teal-300 transition-colors"
                                        onClick={() => setOpen(false)}
                                    >
                                        {link.icon}
                                        {link.label[idioma]}
                                    </a>
                                )
                            )}
                        </nav>
                    </aside>
                </>
            )}

            {/* Sidebar PC/tablet */}
            <aside
                className={`
                    hidden
                    md:fixed md:top-0 md:left-0 md:h-screen md:w-64
                    md:bg-white md:dark:bg-neutral-900 md:border-r md:border-gray-200 md:dark:border-neutral-700
                    md:py-8 md:px-4 md:z-50 md:flex md:flex-col
                `}
            >
                <nav className="flex flex-col gap-6 mt-10">
                    {navLinks.map(link =>
                        link.href === "#inicio" ? (
                            <button
                                key={link.href}
                                onClick={onInicioClick}
                                className="flex items-center text-lg font-bold text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 transition"
                            >
                                {link.icon}
                                {link.label[idioma]}
                            </button>
                        ) : (
                            <a
                                key={link.href}
                                href={link.href}
                                className="flex items-center text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-teal-600 dark:hover:text-teal-300 transition-colors"
                            >
                                {link.icon}
                                {link.label[idioma]}
                            </a>
                        )
                    )}
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;