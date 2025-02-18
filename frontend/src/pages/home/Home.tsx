import React, {useEffect} from 'react';
import {useTheme} from '../../shared/components/ThemeProvider/ThemeProvider';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSun, faMoon} from '@fortawesome/free-solid-svg-icons';
import styles from './Home.module.css';

const Home: React.FC = () => {
    const {isDarkMode, toggleDarkMode} = useTheme();

    useEffect(() => {
        console.log('Home component isDarkMode:', isDarkMode);
    }, [isDarkMode]);

    return (
        <div className={`${styles.container} ${!isDarkMode ? styles.lightMode : ''}`}>
            <button className={styles.iconButton} onClick={toggleDarkMode}>
                <FontAwesomeIcon
                    icon={isDarkMode ? faSun : faMoon}
                    className={isDarkMode ? styles.sunIcon : ''}
                />
            </button>
            <h1 className={styles.title}>Bienvenido a mi Portafolio</h1>
            <p className={styles.description}>En este portafolio estoy utilizando React, TypeScript, Django, DDD, TDD,
                CQRS y Arquitectura Hexagonal.</p>
        </div>
    );
};

export default Home;