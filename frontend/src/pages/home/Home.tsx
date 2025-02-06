// src/pages/home/Home.tsx
import React from 'react';
import styles from './Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bienvenido a mi Portafolio</h1>
      <p className={styles.description}>En este portafolio estoy utilizando React, TypeScript, Django, DDD, TDD, CQRS y Arquitectura Hexagonal.</p>
    </div>
  );
};

export default Home;