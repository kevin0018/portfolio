<!-- Hallmark · pre-emit critique: P5 H5 E4 S5 R5 V4 -->

# Plan de rediseño del portfolio

## Estado

- Preparación técnica completada con pnpm, dependencias actualizadas y lockfile.
- Shell mobile-first, sistema visual y scroll nativo implementados.
- Casos iniciales de wikiLoL y Blog de Viajes implementados con una primera
  narrativa técnica.
- README bilingüe y workflow de GitHub Pages actualizados.
- Próximo foco: cambiar la jerarquía de **proyectos primero** a **perfil
  profesional primero** y enriquecer cada caso con media específica por paso.

## Objetivo

Transformar el portfolio en una presentación profesional mobile-first y
bilingüe de Kevin. La página debe explicar primero quién es, qué hace actualmente
y cuál es su especialidad; los proyectos seleccionados actúan después como
evidencia de criterio de producto e ingeniería.

El scroll debe construir una narrativa, no actuar como navegación forzada ni
como una colección de efectos.

## Revisión de enfoque — persona primero

La tesis revisada es:

> **El portfolio presenta a Kevin. La experiencia profesional establece su
> identidad y los proyectos demuestran cómo piensa y construye.**

Esto cambia la jerarquía sin quitar valor a los casos de estudio:

1. **Identidad:** Full Stack Developer con experiencia profesional desde julio
   de 2024.
2. **Especialidad:** Python, Django y Django REST Framework en backend; Vue.js y
   TypeScript en frontend; PostgreSQL como base de datos principal.
3. **Trabajo actual:** desarrollo de producto, integraciones y procesamiento de
   datos en Inmatic.
4. **Forma de trabajar:** TDD, testing unitario, SOLID, DDD, CQRS y arquitectura
   hexagonal cuando el contexto lo justifica.
5. **Evidencia pública:** Blog de Viajes, wikiLoL y un archivo selectivo de otros
   proyectos.
6. **Trayectoria:** experiencia, estudios, aprendizaje continuo y contacto.

Los proyectos no deben ocupar la primera lectura como si Kevin todavía tuviera
que definirse únicamente por trabajo académico o personal. Su experiencia en
Inmatic es ahora la señal profesional principal.

## Perfil profesional verificado

### Posicionamiento principal

- **Rol:** Desarrollador Full Stack.
- **Experiencia profesional:** desde julio de 2024.
- **Stack principal:** Python · Django · Django REST Framework · Vue.js ·
  TypeScript · PostgreSQL.
- **Tecnologías complementarias:** C# · JavaScript · PHP · Laravel · MySQL.
- **Ámbitos de trabajo:** backend, frontend, integraciones entre sistemas,
  procesamiento de datos y reporting.

No conviene presentar todas las tecnologías al mismo nivel. Python/Django y
Vue/TypeScript construyen la identidad; PostgreSQL completa el núcleo técnico.
El resto demuestra amplitud y capacidad de integración.

### Experiencia actual

**Full Stack Developer — Inmatic**

Julio de 2024 – Actualidad · Barcelona · Presencial

Las responsabilidades deben agruparse por problemas, no publicarse como una
lista extensa de palabras clave:

1. **Backend y dominio:** lógica de negocio con Python y Django, APIs REST,
   modelado de casos de uso y aplicación de CQRS, DDD y arquitectura hexagonal.
2. **Calidad:** desarrollo guiado por pruebas, pruebas unitarias y refactorización
   orientada a mantenibilidad.
3. **Frontend de producto:** interfaces con Vue.js y TypeScript, incluyendo
   componentes reutilizables como tablas de datos y modales.
4. **Integraciones y datos:** servicios entre plataformas, procesamiento de
   facturas mediante APIs y XML, sincronización bidireccional en C#, reporting y
   exportación a Excel.
5. **Persistencia:** modelado de datos y optimización de consultas con PostgreSQL.

La redacción pública deberá mantenerse a este nivel y no revelar reglas de
negocio, clientes, volúmenes, arquitectura interna o resultados confidenciales
que no estén aprobados para publicación.

### Estudios y aprendizaje continuo

- **Grado en Ingeniería Informática — Universitat Oberta de Catalunya.** Febrero
  de 2026 – Actualidad. Ingeniería de software, arquitectura, diseño de sistemas
  y fundamentos de informática.
- **CFGS Desarrollo de Aplicaciones Web — Institut Escola del Treball.**
  Noviembre de 2022 – Junio de 2024. Formación full-stack, bases de datos, Git,
  metodologías ágiles y diseño mobile-first.
- **Working With DevOps Mindset — University of California, Davis.**
- **Introducing DevOps Concepts — University of California, Davis.**

Los dos bootcamps quedan fuera de la narrativa principal por ahora. Solo se
añadirán si aportan una especialización relevante que no esté ya mejor respaldada
por la experiencia profesional o los estudios reglados.

## Contexto de diseño asumido

Estas decisiones se consideran una hipótesis inicial y deben confirmarse antes
de cerrar el sistema visual:

- **Audiencia:** recruiters, engineering managers y desarrolladores que evalúan
  experiencia full-stack.
- **Acción principal:** entender rápidamente el perfil profesional de Kevin y,
  desde ahí, profundizar en experiencia, proyectos, CV o contacto.
- **Tono:** editorial y técnico; sobrio, directo y con personalidad propia.
- **Estructura:** una página principal continua con scrollytelling concentrado
  en los proyectos destacados.
- **Contenido principal:** perfil profesional, experiencia actual y dos pruebas
  de trabajo seleccionadas: Blog de Viajes y wikiLoL.

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
- Enlaces a perfil, experiencia, trabajo y contacto.
- Selector ES/EN accesible.
- Estado visible al navegar con teclado.
- Sin sidebar permanente en móvil.

### 2. Hero

- Posicionamiento explícito: Full Stack Developer especializado en
  Python/Django y Vue/TypeScript.
- Línea de contexto breve: actualmente en Inmatic, con experiencia profesional
  desde julio de 2024.
- CTA principal hacia experiencia o perfil profesional.
- CTA secundario hacia contacto o CV.
- Altura definida por el contenido; no bloquear la primera vista a `100vh`.

### 3. Experiencia profesional

- Inmatic aparece antes que los proyectos personales.
- Presentar periodo, rol y ubicación de forma directa.
- Agrupar el trabajo en backend y dominio, frontend, integraciones, datos y
  calidad.
- Conectar tecnologías con tareas concretas, sin convertir la sección en una
  nube de keywords.
- No inventar métricas ni exponer información confidencial para compensar la
  ausencia de capturas del trabajo profesional.

### 4. Capacidades y forma de trabajar

- **Núcleo:** Python · Django · Django REST Framework · Vue.js · TypeScript ·
  PostgreSQL.
- **Diseño de software:** SOLID · DDD · CQRS · arquitectura hexagonal.
- **Calidad:** TDD · pruebas unitarias · refactorización.
- **Integración:** APIs · XML · sincronización entre sistemas · procesamiento y
  exportación de datos.
- **Complementarias:** C# · JavaScript · PHP · Laravel · MySQL · Git.

Esta sección debe demostrar jerarquía. No usar una pared uniforme de iconos ni
dar el mismo peso visual a una tecnología principal y a otra usada de forma
puntual.

### 5. Caso de estudio: wikiLoL

En móvil, cuatro bloques apilados. En escritorio, captura sticky y narrativa a
su lado.

1. Qué puede hacer una persona con el producto.
2. Qué complejidad presentan Riot API y Data Dragon.
3. Cómo el BFF, los contratos compartidos y la caché estabilizan la aplicación.
4. Demo, repositorio y acceso al caso técnico completo.

### 6. Caso de estudio: Blog de Viajes

1. De blog editorial a herramienta de planificación.
2. Filtrado y construcción del itinerario.
3. Prioridad del estado compartido por URL sobre la persistencia local.
4. Generación estática, SEO, media responsive y enlaces finales.

El orden final de los dos casos queda por decidir. Abrir con Blog de Viajes
reforzaría inmediatamente Vue; abrir con wikiLoL priorizaría arquitectura y
complejidad de integración. En ambos casos, la experiencia en Inmatic ya habrá
establecido antes el stack profesional principal.

### 7. Otros proyectos

- Archivo compacto en lugar de carrusel.
- Mostrar nombre, categoría, año, rol, stack esencial y estado del proyecto.
- Destacar únicamente proyectos con repositorio, demo o explicación defendible.
- Verificar Huellas y el resto antes de redactar afirmaciones nuevas.

### 8. Trayectoria y formación

- Mostrar UOC y CFGS con fechas y estado.
- Las certificaciones DevOps pueden formar un bloque compacto de aprendizaje
  continuo, sin competir con la experiencia laboral.
- Omitir los bootcamps de la página principal mientras no aporten una
  especialización diferencial.
- Mantener el CV como documento complementario; el portfolio selecciona y
  explica, no duplica todo el historial.

### 9. Contacto y cierre

- Correo, LinkedIn, GitHub y CV.
- Cierre tipográfico, sin tarjeta genérica ni footer de cuatro columnas.
- Copiar correo con feedback accesible y no mediante `alert()`.

## Estrategia de scrollytelling

### Nombre del patrón

La idea propuesta no es un carrusel tradicional. El término más preciso es
**tour de producto dirigido por scroll** o **scrollytelling con escenario de
media sticky**.

Cada proyecto mantiene cuatro pasos narrativos y cada paso activa una evidencia
visual diferente:

1. **Producto:** portada o vista que explica qué puede hacer una persona.
2. **Flujo:** captura de la interacción principal o una secuencia corta.
3. **Ingeniería:** diagrama real, vista de datos o evidencia vinculada a la
   decisión técnica explicada.
4. **Calidad y entrega:** estado responsive, testing, accesibilidad, despliegue o
   resultado final verificable.

No se debe usar la misma captura recortada cuatro veces. Cada paso necesita una
imagen, vídeo corto o diagrama que realmente añada información. Si un proyecto
solo dispone de dos evidencias buenas, tendrá dos cambios de media en lugar de
rellenar cuatro posiciones.

### Comportamiento base

- El DOM conserva el orden de lectura completo.
- Cada paso narrativo es contenido real, enlazable y seleccionable.
- `IntersectionObserver` puede actualizar el paso activo sin controlar el scroll.
- El usuario puede seguir leyendo aunque una imagen no cargue o JavaScript esté
  desactivado.
- Los hashes permiten navegar a `#wikilol`, `#blog-de-viajes`, `#perfil` y
  `#contacto`.

### Escritorio

- Media sticky dentro de cada caso de estudio.
- El texto avanza por pasos con una indicación de progreso discreta.
- La evidencia cambia mediante crossfade cuando el paso activo entra en la zona
  de lectura.
- El progreso indica cuál de los cuatro temas está activo, pero no funciona como
  un control obligatorio.
- El sticky termina dentro de su propia sección y nunca atrapa el viewport.

### Móvil y tablet estrecha

- Contenido completamente apilado.
- Sin sticky, parallax ni media dependiente del hover.
- Cada captura aparece inmediatamente antes del texto que explica; no hay un
  carrusel separado que obligue a recordar qué imagen correspondía a cada tema.
- No depender de swipe horizontal, autoplay, drag ni pequeños indicadores.
- Controles con área táctil mínima de 44 × 44 CSS px.

### Riesgo mobile del tour

El tour tiene un riesgo de interacción y rendimiento mayor que una sección
estática: varias imágenes, estado activo y cambios visuales durante el scroll.
La simplificación obligatoria es:

- Web responsive para navegadores iOS y Android; React/Vite como implementación.
- Navegación mediante documento y anchors, sin tabs, drawer ni gestos propios.
- En móvil, media inline y lectura lineal; el escenario sticky solo existe en
  escritorio amplio.
- Imágenes responsive, carga diferida y dimensiones reservadas para evitar
  saltos de layout.
- El modo reducido elimina crossfades espaciales y cambios automáticos no
  esenciales.

### Movimiento permitido

Máximo tres primitivas globales:

1. Crossfade entre capturas de un caso de estudio.
2. Desplazamiento corto y opacidad para la entrada inicial del hero.
3. Cambio de progreso mediante color u opacidad.

Con movimiento reducido, las transiciones espaciales desaparecen y cualquier
cambio visual se limita a una opacidad breve.

## Sistema visual vigente

El sistema actual está documentado en `design.md` y `tokens.css`:

- Paleta de papel frío, tinta azul-negra y acentos por proyecto.
- Barlow Condensed para display, IBM Plex Sans para cuerpo e IBM Plex Mono para
  metadatos.
- Escala de espacios de 4 px.
- Escala tipográfica fluida.
- Scroll nativo, foco visible, objetivos táctiles mínimos y movimiento reducido.
- Capturas reales sin navegador o dispositivo falsos.

La revisión persona-primero modifica la jerarquía y el contenido, no obliga a
descartar esta identidad visual. Cualquier cambio posterior debe actualizar
primero `design.md` y los tokens, no introducir valores aislados en componentes.

## Modelo de contenido propuesto

El contenido debe separar el perfil profesional de los proyectos:

```text
ProfessionalProfile
├── headline.es / headline.en
├── summary.es / summary.en
├── primaryStack[]
├── supportingStack[]
├── practices[]
├── currentRole
├── experience[]
├── education[]
├── certifications[]
└── contactLinks
```

Los casos de estudio mantienen un modelo propio:

```text
ProjectCaseStudy
├── slug
├── name
├── category
├── year
├── role
├── summary.es / summary.en
├── problem.es / problem.en
├── storySteps[]
│   ├── theme
│   ├── title.es / title.en
│   ├── body.es / body.en
│   ├── evidence.es / evidence.en
│   └── media
├── engineeringDecisions[]
├── stack[]
├── liveUrl
├── repositoryUrl
└── featured
```

La información profesional parte únicamente del resumen facilitado por Kevin y
de contenido aprobado para publicación. Los textos de wikiLoL y Blog de Viajes
se derivan de sus repositorios verificados. Los demás proyectos mantendrán copy
conservador hasta revisarlos.

## Plan de implementación

### Checkpoint 1 — sistema y shell mobile-first — completado

- Definir tokens, tipografías y estilos base.
- Sustituir la máquina de estados que cambia Hero/Main por un documento continuo.
- Crear navegación, hero y landmarks semánticos.
- Mantener temporalmente los componentes antiguos sin borrarlos.
- Verificar 320, 375, 414 y 768 px antes de continuar.

### Checkpoint 2 — vertical slice de wikiLoL — completado

- Crear el modelo de datos de casos de estudio.
- Implementar la sección completa de wikiLoL.
- Resolver sticky progresivo, cambios de media y reduced motion.
- Validar teclado, touch, anchors y lectura sin JavaScript de animación.
- Usar este checkpoint para confirmar el patrón antes de duplicarlo.

### Checkpoint 3 — Blog de Viajes — completado

- Aplicar el patrón narrativo sin copiar exactamente la composición de wikiLoL.
- Integrar fotografía y acento propio dentro del sistema común.
- Redactar producto, estado, generación estática y media pipeline.
- Verificar que ambos casos se sienten relacionados pero no clonados.

### Checkpoint 4 — identidad y experiencia profesional — siguiente

- Replantear hero, navegación y orden del documento alrededor de Kevin.
- Crear el bloque de experiencia en Inmatic sin información confidencial.
- Separar stack principal, prácticas de ingeniería y tecnologías
  complementarias.
- Integrar formación y certificaciones con una jerarquía secundaria.
- Revisar copy ES/EN antes de implementar.

### Checkpoint 5 — tours de producto, archivo y contacto

- Reunir hasta cuatro evidencias visuales útiles para cada proyecto.
- Asociar cada media a un paso concreto; eliminar repeticiones decorativas.
- Implementar el cambio de media en escritorio y la secuencia inline en móvil.
- Crear archivo compacto de proyectos secundarios.
- Sustituir `alert()` por feedback accesible al copiar el correo.
- Construir el cierre y footer.

### Checkpoint 6 — calidad y entrega

- Añadir pruebas de interacción y smoke tests responsive.
- Revisar accesibilidad, contraste, foco y reduced motion.
- Revisar carga y dimensiones de todas las imágenes.
- Sincronizar metadata, favicon, Open Graph, idioma del documento y sitemap si
  aplica al despliegue.
- Actualizar README y README.es.md siguiendo el estándar de los proyectos.
- Verificar lint, typecheck, build y despliegue de GitHub Pages.

## Archivos probables para el siguiente checkpoint

Esta lista sigue siendo orientativa. No autoriza todavía cambios de código.

### Crear

- `src/data/profile.ts`
- `src/components/ProfessionalProfileSection.tsx`
- `src/components/ExperienceSection.tsx`
- `src/components/ProjectArchive.tsx`
- utilidades o hooks de progreso únicamente si son necesarios

### Modificar

- `src/App.tsx`
- `src/components/SiteHeader.tsx`
- `src/components/HeroSection.tsx`
- `src/components/CaseStudySection.tsx`
- `src/data/caseStudies.ts`
- `src/index.css`
- `design.md` únicamente cuando se confirme la nueva jerarquía
- `README.md` y `README.es.md` después de implementar el perfil

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

- La experiencia en Inmatic aparece antes de los proyectos personales.
- Python/Django y Vue/TypeScript se leen como especialidad principal;
  PostgreSQL completa el núcleo y el resto figura como complementario.
- Responsabilidades, estudios y certificaciones coinciden con la información
  facilitada y no revelan detalles confidenciales.
- wikiLoL y Blog de Viajes reflejan sus stacks y arquitecturas actuales.
- Cada cambio de media añade evidencia real al tema activo; no se repite una
  captura solo para simular un tour.
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
