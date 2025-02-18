import React, {useEffect} from 'react';
import {useTheme} from '../../shared/components/ThemeProvider/ThemeProvider';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSun, faMoon} from '@fortawesome/free-solid-svg-icons';

const Home: React.FC = () => {
    const {isDarkMode, toggleDarkMode} = useTheme();

    useEffect(() => {
        console.log('Home component isDarkMode:', isDarkMode);
    }, [isDarkMode]);

    return (
        <div
            className={`min-h-screen flex flex-col items-center justify-center ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
            <div className="absolute top-4 right-4">
                <button className="p-2" onClick={toggleDarkMode}>
                    <FontAwesomeIcon
                        icon={isDarkMode ? faSun : faMoon}
                        className="text-2xl"
                    />
                </button>
            </div>
            <div className="text-center">
                <h1 className="text-4xl font-bold mt-4">Hola! Me llamo Kevin y soy un programador full stack junior</h1>
            </div>
        </div>
    );
};

export default Home;