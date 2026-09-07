# Kevin Hernández — Portfolio

[English version](./README.md)

[![Desplegar portfolio](https://github.com/kevin0018/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/kevin0018/portfolio/actions/workflows/deploy.yml)

Un portfolio basado en evidencias que presenta proyectos full-stack como casos
de ingeniería: qué resuelve el producto, qué fronteras lo sostienen y dónde
viven sus decisiones técnicas importantes.

[Ver portfolio](https://kevin0018.github.io/portfolio/) ·
[Descargar CV](./public/assets/files/CV_Kevin_Hernandez_Deras.pdf)

[![Vista previa del portfolio de Kevin Hernández](./docs/portfolio-preview.png)](https://kevin0018.github.io/portfolio/)

## Puntos destacados

- Lee el sitio como un único documento nativo, sin interceptar rueda ni gestos.
- Cambia entre español e inglés con detección del navegador y preferencia manual
  persistida.
- Explora cada proyecto con una galería manual de capturas, explicaciones breves
  del producto y detalles técnicos desplegables.
- Revisa casos verificados de
  [wikiLoL](https://github.com/kevin0018/wikiLoL),
  [Blog de Viajes](https://github.com/kevin0018/Blog-de-Viajes) y
  [Huellas](https://github.com/kevin0018/Huellas).
- Explora una composición interactiva de capturas con profundidad al mover el
  cursor, un índice visual, entradas al hacer scroll y una banda de contacto animada.
  Las animaciones se pueden pausar desde la cabecera.
- Abre las demos de los tres proyectos, el vídeo de Huellas, los repositorios,
  el CV y las vías de contacto desde la página.
- Usa la interfaz con foco visible, objetivos mínimos de 44px y un modo específico
  de movimiento reducido.

## Arquitectura

```mermaid
flowchart LR
  visitor["Visitante"] --> app["Aplicación React"]
  app --> shell["Shell localizado del portfolio"]
  app --> cases["Datos tipados de casos"]
  cases --> story["Galería manual de proyectos"]
  observer["IntersectionObserver"] --> story
  tokens["Tokens de diseño portables"] --> shell
  tokens --> story
  vite["Build de Vite"] --> dist["Salida estática /dist"]
  dist --> pages["GitHub Pages"]
```

El modelo de contenido está separado de la presentación. Cada proyecto aporta
su narrativa localizada, enlaces, stack, etiquetas del flujo y evidencia visual
a un único componente reutilizable. JavaScript gestiona el selector de proyectos, el movimiento y la captura seleccionada;
el documento no depende de control del scroll ni de animaciones.

### Decisiones que merece la pena revisar

- El scroll nativo sustituye el anterior cambio de vista disparado por la rueda.
- Las galerías emparejan capturas reales con explicaciones breves. El visitante
  elige la pantalla y puede desplegar las decisiones técnicas.
- `IntersectionObserver` anima las entradas de sección sin controlar el scroll.
- URLs y recursos locales respetan `BASE_URL`, manteniendo consistentes el entorno
  local y el despliegue de GitHub Pages bajo `/portfolio/`.
- El idioma parte del navegador y guarda únicamente la preferencia explícita
  `es` o `en` en local storage.
- Una capa portable de tokens OKLCH define color, tipografía, espacio, tiempos,
  reglas y tipografía responsive al margen de las utilidades de Tailwind.
- `prefers-reduced-motion` elimina el scroll suave y las transiciones espaciales.

## Stack

- **Aplicación:** React 19 y TypeScript 6
- **Build:** Vite 8
- **Interfaz:** Tailwind CSS 4 y sistema CSS propio basado en tokens
- **Contenido:** módulos tipados y bilingües de casos de estudio
- **Interacción:** anclas nativas e `IntersectionObserver`
- **Entrega:** pnpm 11, GitHub Actions y GitHub Pages

## Estructura del proyecto

```text
portfolio/
├── .github/workflows/        # Despliegue verificado a Pages
├── docs/                     # Planificación y preview del repositorio
├── public/assets/            # CV y capturas reales de proyectos
├── src/components/           # Shell y secciones narrativas reutilizables
├── src/data/                 # Casos tipados y bilingües
├── design.md                 # Dirección visual y de interacción bloqueada
├── tokens.css                # Tokens de diseño portables
├── package.json
└── vite.config.ts
```

Los componentes anteriores permanecen en el repositorio mientras termina el
rediseño, pero la entrada activa ya utiliza el nuevo shell de casos de estudio.

## Desarrollo local

Requisitos:

- Node.js 22.13 o posterior
- pnpm 11

```bash
git clone https://github.com/kevin0018/portfolio.git
cd portfolio
pnpm install --frozen-lockfile
pnpm dev
```

Vite sirve el proyecto con la misma ruta base que producción:

```text
http://localhost:5173/portfolio/
```

## Comandos

```bash
pnpm dev      # Inicia el servidor de desarrollo
pnpm lint     # Ejecuta ESLint
pnpm build    # Comprueba tipos y genera producción
pnpm preview  # Previsualiza la salida de producción
pnpm deploy   # Fallback manual con gh-pages
```

## Despliegue

Cada push a `master` instala el lockfile congelado, ejecuta lint y build, y
publica `dist/` mediante GitHub Pages. El workflow también puede iniciarse
manualmente desde GitHub Actions.

El repositorio debe usar **GitHub Actions** como origen de Pages. El comando
manual `pnpm deploy` permanece como fallback de compatibilidad.

## Atribución

La vista previa contiene capturas de proyectos que he desarrollado. Las
imágenes de League of Legends que aparecen dentro de wikiLoL pertenecen a Riot
Games. wikiLoL es un proyecto educativo no comercial y no está afiliado,
respaldado ni patrocinado por Riot Games.

Huellas es un proyecto con Adriana Elias, Aroa Granja y Fernanda Montalvan. Mi
aportación abarca arquitectura, pruebas, backend y modernización posterior. El
diseño y branding originales son de Aroa. Se enlazan la [demo de Huellas](https://huellas-frontend.vercel.app/) y el vídeo del proyecto.
