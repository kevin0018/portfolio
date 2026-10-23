# Kevin Hernández — Portfolio

[English version](./README.md)

[![Desplegar portfolio](https://github.com/kevin0018/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/kevin0018/portfolio/actions/workflows/deploy.yml)

Mi portfolio full stack interactivo, con cuatro proyectos terminados, capturas
reales, una mesa de trabajo y casos de estudio animados. La portada combina
navegación lateral fija, ventanas superpuestas, marcas amarillas, tipografía
Onest y anotaciones manuscritas con Caveat.

[Ver portfolio](https://kevin0018.github.io/portfolio/) ·
[Descargar CV](./public/assets/files/CV_Kevin_Hernandez_Deras.pdf)

[![Vista previa del portfolio de Kevin Hernández](./docs/portfolio-preview.png)](https://kevin0018.github.io/portfolio/)

## Puntos destacados

- Explora cuatro productos terminados con capturas completas y explicaciones
  legibles de cada proyecto.
- La portada muestra las interfaces reales de wikiLoL y Blog de Viajes en dos
  ventanas flotantes. El cursor las inclina y cada una abre su caso de estudio.
  La flecha verde y «Sigue explorando» llevan a la sección de proyectos.
- Abre casos bilingües de [wikiLoL](https://github.com/kevin0018/wikiLoL),
  [Blog de Viajes](https://github.com/kevin0018/Blog-de-Viajes),
  [Huellas](https://github.com/kevin0018/Huellas) y
  [PokeShop](https://github.com/kevin0018/PokeShop), con galerías de pantallas,
  imágenes a tamaño completo, decisiones técnicas, demos y repositorios.
- Consulta mi trabajo actual en Inmatic, mi formación y mis certificaciones DevOps.
- Cambia entre español e inglés con preferencia persistida. Pausa el movimiento
  desde la cabecera.
- Accede a cada caso mediante su hash. Escape cierra el diálogo y el foco vuelve
  al control que lo abrió.

## Arquitectura

```mermaid
flowchart LR
  visitor["Visitante"] --> app["Shell React bilingüe"]
  app --> hero["Mesa de trabajo interactiva"]
  app --> work["Cuatro proyectos terminados"]
  work --> cases["Diálogo enlazado por hash"]
  content["Contenido tipado verificado"] --> hero
  content --> work
  content --> cases
  scroll["Scroll nativo + requestAnimationFrame"] --> hero
  observer["IntersectionObserver + Web Animations"] --> app
  tokens["Tokens de portada y contenido"] --> app
  vite["Build Vite"] --> pages["GitHub Pages"]
```

El contenido está separado de la presentación en módulos TypeScript bilingües.
Los cuatro productos comparten un componente de galería y decisiones técnicas.
La portada utiliza marcos HTML/CSS alrededor de capturas reales de los productos.
Los papeles de color, el marcador y las anotaciones son elementos CSS y SVG,
separados del texto y la navegación. Ninguna imagen del boceto sustituye una
pantalla. No hay carrusel; la sección de proyectos mantiene sus cuatro casos
mientras se revisa un nuevo diseño acorde con la portada.

### Decisiones que merece la pena revisar

- La portada y los proyectos siguen el flujo del documento. Texto y capturas
  tienen su propio espacio, sin títulos partidos ni proyectos ocultos por scroll.
- Las capturas completas conservan sus proporciones. Imagen, explicación y acción
  permanecen disponibles a la vez en todos los tamaños de pantalla.
- `MotionEffects` agrupa las actualizaciones con `requestAnimationFrame` y anima
  las entradas de las partes de cada sección con Web Animations.
- Los cuatro proyectos siempre están en el flujo normal. Pausar el movimiento
  detiene los efectos decorativos sin cambiar el contenido disponible.
- Los diálogos nativos admiten Escape, restauración del foco, hashes e historial.
- Capturas y CV respetan `BASE_URL` para el despliegue en GitHub Pages.
- `workbench.css` define la paleta clara del hero y la navegación responsive;
  `tokens.css` mantiene la paleta actual del resto de secciones.
- `projectScenes.ts` asocia las cuatro capturas reales con sus luces.
- La referencia visual elegida tiene prioridad sobre las prohibiciones estéticas
  por defecto de Taste Skill: el fondo de papel, el marcador y las anotaciones
  siguen el tercer boceto elegido.
- Las propuestas generadas, críticas y capturas quedan en `.taste-skill/`, ignorado
  por Git. El sistema de diseño implementado se versiona en `design.md`.

## Stack

- **Aplicación:** React 19 y TypeScript 6
- **Build:** Vite 8
- **Interfaz:** Tailwind CSS 4 y sistema CSS propio basado en tokens
- **Contenido:** módulos tipados y bilingües de casos de estudio
- **Interacción:** scroll, anclas y diálogos nativos, `requestAnimationFrame`,
  `IntersectionObserver` y Web Animations
- **Entrega:** pnpm 11, GitHub Actions y GitHub Pages

## Estructura del proyecto

```text
portfolio/
├── .github/workflows/        # Despliegue verificado a Pages
├── docs/                     # Vista previa real del repositorio
├── public/assets/            # CV y capturas reales de proyectos
├── src/components/           # Shell y secciones narrativas reutilizables
├── src/data/                 # Casos tipados y bilingües
├── design.md                 # Sistema visual e interacciones implementadas
├── tokens.css                # Tokens de diseño portables
├── package.json
└── vite.config.ts
```

La aplicación activa muestra solo wikiLoL, Blog de Viajes, Huellas y PokeShop.
Los datos y componentes anteriores se conservan para retomarlos más adelante;
los proyectos sin terminar no se muestran ni se promocionan en el portfolio.

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

PokeShop es una demo educativa independiente con precios y stock ficticios,
sin pagos ni pedidos reales. Los nombres e ilustraciones de Pokémon pertenecen
a sus titulares; los datos y recursos proceden de PokéAPI.
