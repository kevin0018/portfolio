# Portfolio visual system

## Current direction

Kevin selected the original third concept, “Mesa de trabajo”, for the hero.
It replaces the cinematic hero with a theme-aware paper field, a navigation rail,
large black typography and overlapping windows containing actual project captures.
The projects section follows the selected second light-gallery concept: wikiLoL
is featured beside its description, with three supporting product previews below.

## Hero and navigation

- Desktop navigation is a fixed left rail. At 900px and below it becomes a sticky
  horizontal header; all section destinations remain visible while scrolling.
- The KH mark is an independent SVG with an ink-colored K and yellow right-hand stroke.
  Kevin's full name appears once in the hero identity block.
- The title is “Así construyo mis proyectos.” with an English equivalent. A yellow
  marker shape sits behind the last word, matching the selected concept. The
  supporting text describes the work in first person, without a sales slogan.
- Two actual product captures appear in independently positioned browser windows:
  wikiLoL above a lavender backing sheet, Blog de Viajes above a yellow sheet.
  The windows open their real case studies. There is no carousel or automatic
  project switching. Huellas and PokeShop remain in the projects section.
- Hand-drawn arrows and graphic accents are inline SVG. The paper texture is an
  SVG noise filter. Neither the reference mockup nor a generated screen is used
  as the page interface. Window dimensions retain their image proportions.
- The bottom row contains the Barcelona location, project links and the existing
  “Sigue explorando” action. The green arrow is also a real projects link.

## Type and colour

Onest carries the interface and large title; Caveat is reserved for handwritten
project annotations. The hero's scoped palette is paper `#faf7f0`, ink `#080d16`,
secondary ink `#5f6474`, yellow `#ffda32`, lavender `#cdb0ff`, green `#34b66d` and
coral `#ff5147`. Dark mode uses charcoal `#17191f`, off-white ink and softened
secondary text, while retaining the colored sheets and original product captures.
`tokens.css` supplies matching light/dark colors to the rest of the page and case
dialogs; `src/theme.css` handles the workbench-specific adjustments. The theme
control sits in the navigation. Its first value follows a saved choice, otherwise
the system preference. A small head script applies it before React renders, and
manual changes persist under `portfolio-theme`, with a storage-blocked fallback.

## Selected projects

`src/projects.css` presents the chosen featured-project gallery. A large wikiLoL
preview sits beside its factual description, stack, case link and repository.
Blog de Viajes, Huellas and PokeShop follow in three columns, each with a real
interface preview, short caption and links. Huellas keeps its team attribution;
PokeShop is identified as a demo. Small colored backing sheets, browser chrome
and a handwritten note continue the hero. On phones the feature and supporting
projects stack vertically. All previews and text remain independent HTML/CSS.

## Motion and responsive behavior

The browser windows float gently out of phase and tilt with mouse movement.
Hover lifts the selected window. Scroll moves the introduction slightly and
triggers the existing staggered content reveals. The exploration arrow keeps
its continuous small bounce. The pause control and reduced-motion preference
preserve the static composition and functional links.

Desktop layers occupy a fluid work area. Tablet and phone move the introduction
above the windows, which retain their angle and colored backing sheets. The
navigation and footer reflow for touch. No large-screen breakpoint crops a whole
mockup or changes the project imagery.

## Assets and provenance

- `public/assets/images/wikilol/01-search.png`: real wikiLoL search interface.
- `public/assets/images/blog-de-viajes-preview.jpg`: real travel project preview;
  its hero is cropped by CSS within a proportional browser window.
- `src/components/HeroGraphics.tsx`: vector KH monogram and navigation arrow.
- `src/components/HeroSection.tsx`: live HTML, inline SVG annotations and real
  screenshot references. The original concept stays in ignored `.taste-skill/`.
- Case-study galleries keep actual product screenshots and team/Riot attribution.

The unused cinematic background and cropped concept screen have been removed.
Design explorations, browser captures and working notes remain local and ignored.
This file describes the implemented system, not a future implementation plan.
