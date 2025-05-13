# Portafolio Web - Kevin Hernández

Este es mi portafolio web personal, desarrollado con React, TypeScript y Tailwind CSS, desplegado en **GitHub Pages**.

## 🚀 Vista previa

[🔗 Ver portafolio online](https://kevin0018.github.io/portfolio/)

---

## 📋 Características

- Diseño responsive y moderno
- Secciones: Hero, Sobre mí, Proyectos, Habilidades, Contacto
- Sidebar adaptable
- Soporte para español e inglés
- Descarga de CV en PDF
- Animaciones suaves con Tailwind CSS
- Carrusel de proyectos interactivo usando Swiper.js (con paginación, navegación y efecto coverflow)
- Sección de habilidades plegable
- Fácil despliegue en GitHub Pages

---

## 🛠️ Tecnologías usadas

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Swiper.js](https://swiperjs.com/)
- [Vite](https://vitejs.dev/)
- [GitHub Pages](https://pages.github.com/)

---

## 📦 Instalación y desarrollo local

1. **Clonar el repositorio:**
    ```powershell
    git clone https://github.com/kevin0018/portfolio
    cd portfolio
    ```

2. **Instalar dependencias:**
    ```powershell
    npm install
    ```

3. **Iniciar el servidor local:**
    ```powershell
    npm run dev
    ```
   Luego abre [http://localhost:5173](http://localhost:5173) en tu navegador.

---

## 🚢 Despliegue en GitHub Pages

1. **Configura la base en `vite.config.ts`**  
   (Por ejemplo: `base: '/portfolio/'`)

2. **Agrega la URL de homepage en `package.json`:**
    ```json
    "homepage": "https://kevin0018.github.io/portfolio/"
    ```

3. **Despliega con:**
    ```powershell
    npm run deploy
    ```

---

## 📝 Notas

- Puedes personalizar los datos en los archivos de la carpeta `/data`.
- Para cambiar el idioma por defecto o añadir más, revisa la configuración del contexto de idioma.
- La sección de habilidades es plegable para mejor experiencia en dispositivos móviles.
- El carrusel de proyectos está implementado con Swiper.js e incluye navegación lateral y paginación personalizada.
  Puedes ajustar el efecto (por ejemplo, coverflow) y los estilos en el componente correspondiente.
- Para personalizar los estilos de Swiper, revisa el archivo `index.css` donde puedes modificar el color de las flechas
  y el comportamiento de la paginación.

---

## 📄 Licencia

Este proyecto es de uso libre para fines personales y educativos.

---

**Desarrollado por [Kevin Hernández](https://github.com/kevin0018)**