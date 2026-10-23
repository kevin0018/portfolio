# Kevin Hernández — implemented design system

## Direction and scope

The selected direction is the second concept: an immersive graphite stage with
amber and violet lighting. The hero presents only wikiLoL. The primary “Ver
proyectos” / “Explore projects” action reaches the existing project section,
which retains wikiLoL, Blog de Viajes, Huellas and PokeShop.

The hero has no project selector, rotation, autoplay or carousel state. The
current refinement is scoped to the hero and header; project, experience,
education and case-study layouts retain their previous implementation.

## Visual system

| Role | Value |
| --- | --- |
| Main background | `#0a0b10` |
| Section/dialog surface | `#111218` |
| Raised controls | `#191b24` |
| Text | `#f4f3f5` |
| Secondary text | `#a6a6b2` |
| Warm light and actions | `#ffbe64` |
| Cool light | `#a475ff` |

Onest is the page's font family. The page headline stays on two lines. The
approved reference takes priority over Taste Skill's default restrictions on
violet, lighting, accent words and thin screen outlines.

## Hero composition

The reference canvas is 1536 × 1024: an 80px header, an 832px stage and a 112px
project-caption band. Smaller screens stack the introduction and project frame.
The stage fills the viewport width at every desktop size. The project frame
keeps its native 1000:740 aspect ratio and fits the available stage height; the
background covers the stage independently. Typography scales continuously with
width and available height, with no alternate large-screen layout at 1600px.

- Header: a geometric KH monogram drawn as SVG paths, a separate name, navigation,
  language and motion controls. Desktop navigation is centered in the viewport;
  all header items are vertically centered. Letter spacing cannot distort the monogram.
- Introduction: Kevin's name in a neutral two-line title, with a bilingual
  first-person description of his role and location and a thin accent line.
  The projects action uses a fixed SVG arrow rather than a font-dependent glyph.
- Architecture: the background plate generated from the approved concept retains
  its lighting, columns, floor and plants.
- Project: the exact approved project fragment includes the Ekko illustration,
  wikiLoL symbol, interface presentation, dark chrome, bevels and glowing edges.
  A standalone image keeps its native aspect ratio in the responsive frame.
  The clip includes a little surrounding light so the bevel is not cut off, and
  restricts the link's clickable area.
- Footer: a right-aligned “Sigue explorando” link with a downward arrow, leading to projects.

Only the project presentation is raster artwork. The portfolio itself remains a
working interface with separate navigation, copy, SVG graphics, links and dialogs.
The project image is concept artwork, not presented as a current product capture.
The case study continues to display the actual wikiLoL screenshot gallery.

## Motion and behavior

The introduction and project plane enter separately. Light breathes, the frame
floats slightly, and pointer movement tilts it. Opening the project advances the
camera and navigates to `#wikilol`; modified clicks retain native link behavior.
Scroll moves the introduction and project plane independently as the hero leaves.
The pause control and reduced-motion preference preserve a still complete layout.

There are no pinned sections or empty scroll holds. Spanish/English preference,
direct case hashes, focus restoration, CV and contact links remain available.

## Assets and provenance

- `public/assets/images/stage/cinema-environment.png`: generated with the built-in
  image tool from the approved concept, removing UI layers and reconstructing the
  architecture. This is a generated reconstruction rather than an exact extraction.
- `public/assets/images/stage/wikilol-project-frame.png`: a 1000 × 740 transparent
  crop of the approved second concept containing only its project frame and light.
  Pixels outside the frame polygon are removed from the asset itself. The complete
  concept is not shipped. The same proportional image serves desktop and mobile.
- `HeroGraphics.tsx`: independent vector paths for KH and the projects arrow.
- Existing actual project screenshots remain in the project section and galleries.
  Team contributions and Riot Games attribution remain in the case-study data.

All assets respect Vite's production base path. Generated concept explorations,
working notes, critiques and browser captures stay in ignored `.taste-skill/`.
This file documents the implemented visual system, not an implementation plan.
