import React, {createContext, useContext, useEffect, useState} from 'react';
import './ThemeProvider.module.css';

interface ThemeContextType {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Verifica el tema guardado en localStorage o usa la preferencia del sistema
        const savedTheme = localStorage.getItem('isDarkMode');
        const initialMode = savedTheme ? JSON.parse(savedTheme) : window.matchMedia('(prefers-color-scheme: dark)').matches;
        console.log('Initial isDarkMode:', initialMode);
        return initialMode;
    });

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e: MediaQueryListEvent) => {
            console.log('Media query changed:', e.matches);
            setIsDarkMode(e.matches);
        };
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    useEffect(() => {
        console.log('Applying isDarkMode:', isDarkMode);
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';
        } else {
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
        }
        // Verifica las clases aplicadas al body
        console.log('Body classes:', document.body.classList);
        // Verifica el color de fondo del body
        const bodyBackgroundColor = window.getComputedStyle(document.body).backgroundColor;
        console.log('Body background color:', bodyBackgroundColor);
        // Guarda la preferencia del usuario en localStorage
        localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode((prevMode: boolean) => {
            const newMode = !prevMode;
            console.log('Toggling dark mode to:', newMode);
            return newMode;
        });
    };

    return (
        <ThemeContext.Provider value={{isDarkMode, toggleDarkMode}}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;