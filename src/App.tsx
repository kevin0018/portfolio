import {useEffect, useState} from "react";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

function App() {
    const [showMain, setShowMain] = useState(false);
    const [fade, setFade] = useState(false);
    const [idioma, setIdioma] = useState<"es" | "en">("es");

    // Scroll hacia abajo en Hero: pasar a MainContent
    useEffect(() => {
        if (!showMain) {
            const handleScroll = (e: WheelEvent) => {
                if (e.deltaY > 0) {
                    setFade(true);
                    setTimeout(() => {
                        setShowMain(true);
                        setFade(false);
                        window.scrollTo(0, 0);
                    }, 350); // Duración de la animación (ms)
                }
            };
            window.addEventListener("wheel", handleScroll, {passive: false});
            return () => window.removeEventListener("wheel", handleScroll);
        }
    }, [showMain]);

    // Scroll hacia arriba en MainContent: volver al Hero
    useEffect(() => {
        if (showMain) {
            const handleScrollUp = (e: WheelEvent) => {
                if (window.scrollY === 0 && e.deltaY < 0) {
                    setFade(true);
                    setTimeout(() => {
                        setShowMain(false);
                        setFade(false);
                        window.scrollTo(0, 0);
                    }, 350);
                }
            };
            window.addEventListener("wheel", handleScrollUp, {passive: false});
            return () => window.removeEventListener("wheel", handleScrollUp);
        }
    }, [showMain]);

    const handleGoHero = () => setShowMain(false);

    return (
        <div className="bg-white text-black dark:bg-black dark:text-white min-h-screen transition-colors duration-500">
            <div className={`transition-opacity duration-350 ${fade ? "opacity-0" : "opacity-100"}`}>
                {!showMain ? (
                    <Hero
                        idioma={idioma}
                        setIdioma={setIdioma}
                        onDownClick={() => {
                            setFade(true);
                            setTimeout(() => {
                                setShowMain(true);
                                setFade(false);
                            }, 350);
                        }}
                    />
                ) : (
                    <>
                        <Sidebar
                            idioma={idioma}
                            setIdioma={setIdioma}
                            onInicioClick={handleGoHero}
                        />
                        <MainContent idioma={idioma}/>
                    </>
                )}
            </div>
        </div>
    );
}

export default App;