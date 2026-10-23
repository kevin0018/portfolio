# Portfolio design system

## Direction

The visual identity originated in Taste Skill’s **The pinned poster** direction,
seed **1261000740**. The implemented layout retains its palette and typography
with complete screenshots, intact headings and normal document flow.

Kevin's real software is the material. The opening places his name around a
complete product capture and an introduction. A visitor can turn each product
over to see its verified architecture. Project images, titles, summaries and
actions occupy separate layout tracks and remain available in document flow.

The portfolio currently shows **only wikiLoL, Blog de Viajes, Huellas and
PokeShop**. Other project data is retained in source for future work, but its
archive component is not rendered. Professional experience and education have
distinct factual records.

## Palette

The dealt palette is **Cobalt on sand**:

| Token                | Value     | Role                                     |
| -------------------- | --------- | ---------------------------------------- |
| `--bg`               | `#e6dbc7` | Main sand ground                         |
| `--surface`          | `#ddd0b9` | Open disclosures and supporting surfaces |
| `--ink` / `--accent` | `#062b8a` | Type and primary actions                 |
| `--muted`            | `#3a5aa8` | Secondary factual labels                 |
| `--field`            | `#c7d3e8` | Project section ground                   |
| `--field-deep`       | `#b6c7e4` | Inactive project controls                |

All interface colour and font roles are defined in `tokens.css`. Product captures
retain their real colours. There are no decorative gradients, floating card
shadows, fake browser frames or decorative index numbers.

## Typography

- **Unbounded 800:** monumental name, project titles and section headings.
- **Onest 400/500:** explanatory copy, links, controls and professional records.
- Display leading: 0.95–1.12; tracking: -0.03 to -0.065em.
- Body: 17–19px, with 18px first-screen supporting copy.
- Long qualifications are preserved as body text beneath concise field headings.

The normal desktop frame uses equal responsive gutters of 16–32px. Real image
captures are unframed and square-cornered. Buttons use one solid rectangular
shape; secondary actions are text links.

## Composition

1. **Opening:** Kevin above the introduction and product capture; Hernández below.
   CSS Grid and normal document flow size the composition to its content. The
   picture keeps its complete proportions. Product controls sit below its frame.
2. **Selected work:** four complete project features. A large real capture is
   paired with the intact name, product summary, stack and case-study action.
   Desktop alternates the image and copy; phone layouts put the image first.
   There is no split title, screenshot seam, pinned gallery or hidden project.
3. **Experience:** current employment facts beside a wide introduction, then a
   real portrait beside an interactive list of responsibilities.
4. **Education:** full qualifications, institutions, periods and individual DevOps
   certification titles.
5. **Contact:** a solid contact sheet over a moving real product capture, followed
   by the surname at monumental scale.

## Motion

The product-to-architecture flip retains perspective. Screenshot replacements
open with a horizontal wipe. Section parts enter independently with the Web
Animations API, images respond to hover and the contact image drifts slowly.
Scroll adds limited movement to the opening capture without controlling layout
or hiding content. There are no tall empty scroll holds or split animated titles.

The pause control and reduced-motion preference stop decorative movement without
changing the document's composition. Motion tokens live in `tokens.css`.

## Product exploration

The four featured projects open a native modal dialog through stable hashes:
`#wikilol`, `#blog-de-viajes`, `#huellas`, `#pokeshop`. Each includes a three-screen
gallery, full-size image links, live demo, source, complete technical decisions,
and attribution. Escape closes it, scroll position is retained and focus returns
to the opening link. Direct hashes and browser history work with the same dialog.

Huellas retains the contribution of Kevin Hernández, Adriana Elias, Aroa Granja,
and Fernanda Montalvan; original design and branding belong to Aroa Granja.
PokeShop remains a fictional educational shop with no payments or real orders.

## Phone composition

The complete product capture precedes the introduction. Controls wrap below the
picture. The surname follows the content instead of occupying a fixed viewport
position. Each featured project stacks its screenshot, title, summary and action.
Employment facts follow the introduction, and education records stack. The contact
sheet fills the available width. The case-study dialog uses the phone viewport.

## References and scope

Taste Skill supplied the initial direction, Unbounded/Onest typography and
Cobalt on sand palette. The implemented composition has been adapted to the
actual screen content: complete products and intact titles take priority over
split-poster effects. Only the four finished case studies are presented.

`design.md` describes the implemented design. Generated direction sheets,
implementation notes and screenshots remain local under ignored `.taste-skill/`.
