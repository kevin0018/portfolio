import {useEffect, useState} from "react";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

function App() {
    const [showMain, setShowMain] = useState(false);
    const [fade, setFade] = useState(false);
    const [idioma, setIdioma] = useState<"es" | "en">("es");

    useEffect(() => {
        if (!showMain) {
            const handleScroll = (e: WheelEvent) => {
                if (e.deltaY > 0) {
                    setFade(true);
                    setTimeout(() => {
                        setShowMain(true);
                        setFade(false);
                        window.scrollTo(0, 0);
                    }, 350);
                }
            };
            window.addEventListener("wheel", handleScroll, {passive: false});
            return () => window.removeEventListener("wheel", handleScroll);
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
                    <div>
                        <Sidebar
                            idioma={idioma}
                            onInicioClick={handleGoHero}
                        />
                        <MainContent idioma={idioma} setShowMain={setShowMain} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;