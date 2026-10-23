# Kevin Hernández — implemented design system

## Visual direction

Immersive project cinema, based on the second visual concept selected by Kevin.
The portfolio presents his actual work as large illuminated interface planes.
The reference informed the composition; the website itself is built with React,
CSS and real project screenshots, not a flattened generated image.

This replaces the earlier cobalt-and-sand poster direction. The selected reference
has priority over Taste Skill's default restrictions on violet, gradients,
shadows, outlines and accent words. Those effects establish the stage's light
and depth; they are not a new random direction draw.

## Tokens and typography

| Role | Value | Use |
| --- | --- | --- |
| Ground | `#0a0b10` | Main page |
| Surface | `#111218` | Experience and dialogs |
| Raised surface | `#191b24` | Gallery controls |
| Ink | `#f4f3f5` | Titles and primary text |
| Secondary ink | `#a6a6b2` | Supporting copy |
| Accent | `#ffbe64` | Actions and warm lighting |
| Cool light | `#a475ff` | Architectural depth |

Onest is the single font family. Headings use medium weight and tight tracking;
body text uses regular weight and generous leading. The mobile text floor is
13px for small controls; running copy stays at 16px or above.

## Composition

- Header: KH monogram, name, three navigation links, motion and locale controls.
- Hero: introduction on the left; a large perspective product interface on the
  right, with architectural planes, amber and violet light, floor and reflection.
  Four named buttons select the active project. The phone stacks the introduction
  and stage while keeping all four project controls available.
- Projects: four complete product previews paired with summaries, stack and case
  study links. Desktop alternates the image position; the phone uses a single
  reading column. Screenshots use `object-fit: contain` to preserve their content.
- Experience: employment details and responsibilities, with a portrait and
  expandable practice areas. Education and certifications follow in the same
  section. All content comes from the verified typed modules.
- Contact: a large invitation and direct contact links; three receding light
  planes echo the opening stage.
- Case study: a native dialog with real screenshot galleries, project links,
  engineering decisions, contribution and attribution notes.

## Motion and interaction

- Opening: staged introduction, architectural plane entrances and camera arrival.
- Ambient movement: a floating project frame, breathing light, a traveling floor
  line, screen reflection and occasional light sweep.
- Project selection: a new real screenshot enters with depth; its lighting comes
  from `src/data/projectScenes.ts`.
- Pointer: small camera rotations on mouse movement; reset on pointer exit.
- Scroll: the hero introduction and camera travel separately as the hero leaves;
  later headings, text and images enter individually through Web Animations.
- Open project: the camera straightens and advances before the hash opens the
  corresponding dialog. Modified clicks retain native link behavior.
- Gallery, accordion, links and buttons provide immediate interaction feedback.
- The header pause control and reduced-motion preference remove movement without
  hiding content or changing which projects can be reached.

Native document flow remains in place throughout; there are no pinned sections
requiring several empty screens of scrolling.

## Content and media

Only wikiLoL, Blog de Viajes, Huellas and PokeShop are shown. Their full case data,
real galleries and team attribution are retained. Other project data remains
available in the repository for future work and is not rendered in this shell.

The site keeps Spanish and English, persisted language preference, direct case
hashes, native dialog focus handling, CV and contact links. Assets respect Vite's
`BASE_URL` for GitHub Pages. League of Legends media remains attributed to Riot
Games inside the wikiLoL case; Huellas retains the team's named contributions.

Concept sketches, working notes, critiques and browser captures stay in ignored
`.taste-skill/`. This file documents the implemented system, not a work plan.
