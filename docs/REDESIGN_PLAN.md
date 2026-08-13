<!-- Hallmark · pre-emit critique: P5 H5 E4 S5 R5 V4 -->

# Plan de rediseño del portfolio

## Estado

- Preparación técnica completada con pnpm, dependencias actualizadas y lockfile.
- Rediseño visual todavía no iniciado.
- Próximo paso: confirmar la dirección visual y comenzar el primer checkpoint de implementación.

## Objetivo

Transformar el portfolio actual en una experiencia mobile-first, bilingüe y
orientada a contratación que demuestre el trabajo mediante dos casos de estudio
principales. El scroll debe construir una narrativa, no actuar como navegación
forzada ni como una colección de efectos.

## Contexto de diseño asumido

Estas decisiones se consideran una hipótesis inicial y deben confirmarse antes
de cerrar el sistema visual:

- **Audiencia:** recruiters, engineering managers y desarrolladores que evalúan
  experiencia full-stack.
- **Acción principal:** entender rápidamente el nivel del trabajo y abrir un
  proyecto, el CV o una vía de contacto.
- **Tono:** editorial y técnico; sobrio, directo y con personalidad propia.
- **Estructura:** una página principal continua con scrollytelling concentrado
  en los proyectos destacados.
- **Contenido principal:** wikiLoL y Blog de Viajes.

## Principios no negociables

1. Scroll nativo. No interceptar `wheel`, no saltar vistas automáticamente y no
   usar `scroll-snap` para controlar la lectura.
2. Mobile-first real. La experiencia base es una columna legible y táctil; el
   sticky narrativo aparece únicamente cuando el viewport lo permite.
3. El contenido manda sobre el efecto. Cada transición debe explicar un cambio
   de producto, una decisión técnica o una relación entre ambos.
4. Movimiento limitado a `transform` y `opacity`, con soporte completo para
   `prefers-reduced-motion`.
5. Capturas reales sin marcos falsos de navegador, teléfono o editor.
6. Copy verificable. No inventar métricas, resultados, testimonios ni procesos
   que los repositorios no puedan demostrar.
7. Una sola voz visual para el portfolio, permitiendo que cada caso de estudio
   aporte su propio color y material gráfico.

## Fuentes de verdad de los casos de estudio

### wikiLoL

- Repositorio: <https://github.com/kevin0018/wikiLoL>
- Demo: <https://wiki-lol-k.vercel.app/>
- Producto: búsqueda de Riot ID, rangos, maestrías, comparación de jugadores,
  archivo de campeones y leaderboard Challenger.
- Ingeniería a destacar: React y TypeScript, Express como BFF, contratos Zod
  compartidos, casos de uso CQRS, value objects, validación de upstream, caché y
  proxy estable de assets.
- Narrativa propuesta: **datos externos complejos → contrato propio → experiencia
  de búsqueda estable**.

### Blog de Viajes

- Repositorio: <https://github.com/kevin0018/Blog-de-Viajes>
- Demo: <https://kevin0018.github.io/Blog-de-Viajes/>
- Producto: descubrimiento de destinos, filtros, guías editoriales y construcción
  de itinerarios persistentes y compartibles.
- Ingeniería a destacar: Nuxt 3 y Vue 3, contenido tipado, estado en URL y
  localStorage versionado, generación estática, SEO estructurado, pipeline AVIF
  y WebP, pruebas unitarias, de componentes y E2E.
- Narrativa propuesta: **inspiración editorial → selección práctica → itinerario
  reproducible**.

El contenido del portfolio no debe duplicar literalmente los README. Debe
resumirlos para la lectura de un recruiter y enlazar a la documentación completa.

## Arquitectura de información propuesta

### 1. Navegación compacta

- Identidad de Kevin.
- Enlaces a trabajo, perfil y contacto.
- Selector ES/EN accesible.
- Estado visible al navegar con teclado.
- Sin sidebar permanente en móvil.

### 2. Hero

- Posicionamiento profesional específico, evitando frases genéricas sobre pasión
  e innovación.
- CTA principal hacia los casos de estudio.
- CTA secundario hacia contacto o CV.
- Resumen breve de especialidad y disponibilidad cuando esté verificado.
- Altura definida por el contenido; no bloquear la primera vista a `100vh`.

### 3. Caso de estudio: wikiLoL

En móvil, cuatro bloques apilados. En escritorio, captura sticky y narrativa a
su lado.

1. Qué puede hacer una persona con el producto.
2. Qué complejidad presentan Riot API y Data Dragon.
3. Cómo el BFF, los contratos compartidos y la caché estabilizan la aplicación.
4. Demo, repositorio y acceso al caso técnico completo.

### 4. Caso de estudio: Blog de Viajes

1. De blog editorial a herramienta de planificación.
2. Filtrado y construcción del itinerario.
3. Prioridad del estado compartido por URL sobre la persistencia local.
4. Generación estática, SEO, media responsive y enlaces finales.

### 5. Otros proyectos

- Archivo compacto en lugar de carrusel.
- Mostrar nombre, categoría, año, rol, stack esencial y estado del proyecto.
- Destacar únicamente proyectos con repositorio, demo o explicación defendible.
- Verificar Huellas y el resto antes de redactar afirmaciones nuevas.

### 6. Perfil y forma de trabajar

- Experiencia y formación resumidas.
- Capacidades conectadas con evidencia de los proyectos.
- Evitar una pared de logos de tecnologías.
- Mantener el CV como documento complementario, no como contenido duplicado.

### 7. Contacto y cierre

- Correo, LinkedIn, GitHub y CV.
- Cierre tipográfico, sin tarjeta genérica ni footer de cuatro columnas.
- Copiar correo con feedback accesible y no mediante `alert()`.

## Estrategia de scrollytelling

### Comportamiento base

- El DOM conserva el orden de lectura completo.
- Cada paso narrativo es contenido real, enlazable y seleccionable.
- `IntersectionObserver` puede actualizar el paso activo sin controlar el scroll.
- Los hashes permiten navegar a `#wikilol`, `#blog-de-viajes`, `#perfil` y
  `#contacto`.

### Escritorio

- Media sticky dentro de cada caso de estudio.
- El texto avanza por pasos con una indicación de progreso discreta.
- Una captura puede cambiar por otra mediante crossfade cuando el contenido lo
  justifique.
- El sticky termina dentro de su propia sección y nunca atrapa el viewport.

### Móvil y tablet estrecha

- Contenido completamente apilado.
- Sin sticky, parallax ni media dependiente del hover.
- Captura inmediatamente asociada al texto que explica.
- Controles con área táctil mínima de 44 × 44 CSS px.

### Movimiento permitido

Máximo tres primitivas globales:

1. Crossfade entre capturas de un caso de estudio.
2. Desplazamiento corto y opacidad para la entrada inicial del hero.
3. Cambio de progreso mediante color u opacidad.

Con movimiento reducido, las transiciones espaciales desaparecen y cualquier
cambio visual se limita a una opacidad breve.

## Sistema visual pendiente de confirmar

Antes del primer componente deben quedar decididos y documentados:

- Paleta neutral del portfolio y reglas para los acentos de cada proyecto.
- Pareja tipográfica display/body y posible tipografía mono para metadatos.
- Escala de espacios de 4 px.
- Escala tipográfica fluida.
- Radios, bordes, focus ring y voz de los CTA.
- Tratamiento de capturas y fondos.
- Si se mantiene un único tema visual o vuelve el selector claro/oscuro.

Las decisiones se exportarán como tokens antes de distribuir valores por los
componentes. No se introducirán colores o fuentes aisladas dentro del render.

## Modelo de contenido propuesto

La fuente `src/data/projects.tsx` debe evolucionar desde una lista de tarjetas a
un modelo apto para casos de estudio:

```text
ProjectCaseStudy
├── slug
├── name
├── category
├── year
├── role
├── summary.es / summary.en
├── problem.es / problem.en
├── productSteps[]
├── engineeringDecisions[]
├── stack[]
├── media[]
├── liveUrl
├── repositoryUrl
└── featured
```

Los textos de wikiLoL y Blog de Viajes se derivarán de sus repositorios
verificados. Los demás proyectos mantendrán copy conservador hasta revisarlos.

## Plan de implementación

### Checkpoint 1 — sistema y shell mobile-first

- Definir tokens, tipografías y estilos base.
- Sustituir la máquina de estados que cambia Hero/Main por un documento continuo.
- Crear navegación, hero y landmarks semánticos.
- Mantener temporalmente los componentes antiguos sin borrarlos.
- Verificar 320, 375, 414 y 768 px antes de continuar.

### Checkpoint 2 — vertical slice de wikiLoL

- Crear el modelo de datos de casos de estudio.
- Implementar la sección completa de wikiLoL.
- Resolver sticky progresivo, cambios de media y reduced motion.
- Validar teclado, touch, anchors y lectura sin JavaScript de animación.
- Usar este checkpoint para confirmar el patrón antes de duplicarlo.

### Checkpoint 3 — Blog de Viajes

- Aplicar el patrón narrativo sin copiar exactamente la composición de wikiLoL.
- Integrar fotografía y acento propio dentro del sistema común.
- Redactar producto, estado, generación estática y media pipeline.
- Verificar que ambos casos se sienten relacionados pero no clonados.

### Checkpoint 4 — archivo, perfil y contacto

- Crear archivo compacto de proyectos secundarios.
- Reescribir skills como capacidades respaldadas por proyectos.
- Resumir experiencia y formación.
- Sustituir `alert()` por feedback accesible al copiar el correo.
- Construir el cierre y footer.

### Checkpoint 5 — calidad y entrega

- Añadir pruebas de interacción y smoke tests responsive.
- Revisar accesibilidad, contraste, foco y reduced motion.
- Revisar carga y dimensiones de todas las imágenes.
- Sincronizar metadata, favicon, Open Graph, idioma del documento y sitemap si
  aplica al despliegue.
- Actualizar README y README.es.md siguiendo el estándar de los proyectos.
- Verificar lint, typecheck, build y despliegue de GitHub Pages.

## Archivos previstos

Esta lista es orientativa y debe cerrarse antes del primer edit de UI.

### Crear

- `tokens.css`
- `src/data/caseStudies.ts`
- `src/components/layout/SiteHeader.tsx`
- `src/components/sections/HeroSection.tsx`
- `src/components/sections/CaseStudySection.tsx`
- `src/components/sections/ProjectArchive.tsx`
- `src/components/sections/ProfileSection.tsx`
- `src/components/sections/ContactSection.tsx`
- utilidades o hooks de progreso únicamente si son necesarios

### Modificar

- `src/App.tsx`
- `src/index.css`
- `src/main.tsx` si necesita providers o comportamiento global
- `src/data/projects.tsx` o su reemplazo explícito
- `index.html`
- `README.md`
- `README.es.md`, que todavía debe crearse

### Retirar después de validar el reemplazo

Estos archivos no deben eliminarse sin confirmación explícita:

- `src/components/Hero.tsx`
- `src/components/Sidebar.tsx`
- `src/components/MainContent.tsx`
- `src/components/ProjectsSection.tsx`
- `src/components/SkillsSection.tsx`
- `src/components/AllProjectsPage.tsx`
- `src/components/SidebarProfile.tsx`
- estilos y assets que queden realmente sin uso

## Criterios de aceptación

### Responsive

- Sin scroll horizontal a 320, 375, 414 y 768 px.
- Ningún CTA, enlace de navegación o breadcrumb ocupa dos líneas.
- Los titulares pueden romper palabras largas sin desbordar.
- Las imágenes no fuerzan el ancho de sus columnas.
- La narrativa sigue siendo comprensible sin sticky.

### Accesibilidad

- Orden de tabulación coherente y focus ring visible.
- Landmarks y headings con jerarquía correcta.
- Controles con nombre accesible y estado anunciado.
- Navegación y contenido disponibles con teclado y touch.
- Alternativas de texto útiles para cada captura.
- Soporte de `prefers-reduced-motion` verificado.

### Contenido

- wikiLoL y Blog de Viajes reflejan sus stacks y arquitecturas actuales.
- No hay métricas o resultados inventados.
- ES y EN contienen la misma información esencial.
- Todos los enlaces de demo, repositorio, CV y contacto están comprobados.

### Ingeniería

- `pnpm install --frozen-lockfile` funciona desde un clon limpio.
- `pnpm lint` y `pnpm build` pasan.
- No se introduce una librería de animación hasta demostrar que CSS e
  `IntersectionObserver` no bastan.
- Los componentes no contienen valores visuales improvisados fuera de tokens.
- El código de scrollytelling no bloquea el scroll ni depende del framerate.

## Riesgos y mitigaciones

- **Demasiada animación:** limitar primitivas globales y revisar primero con
  reduced motion.
- **Sticky frágil en móvil:** degradar a flujo normal por defecto.
- **Capturas pesadas:** generar tamaños responsive y formatos modernos.
- **Copy excesivamente técnico:** comenzar por el comportamiento del producto y
  revelar la arquitectura después.
- **Proyecto secundario desactualizado:** no destacarlo hasta verificar su estado.
- **Rediseño demasiado grande:** entregar y validar vertical slices en commits
  independientes.

## Definition of ready para comenzar coding

- [ ] Confirmar audiencia, acción principal y tono.
- [ ] Confirmar si el portfolio tendrá un único tema visual.
- [ ] Aprobar la estructura general de secciones.
- [ ] Aprobar el tratamiento sticky en escritorio y apilado en móvil.
- [ ] Confirmar los componentes antiguos que podrán eliminarse al finalizar.
- [ ] Revisar o proporcionar el CV definitivo.
- [ ] Confirmar si Huellas será el tercer proyecto visible o quedará en archivo.

Cuando estos puntos estén confirmados, el primer objetivo de implementación será
el shell mobile-first más la vertical slice completa de wikiLoL.
