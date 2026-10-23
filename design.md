# Portfolio design system

## Direction

**The pinned poster**, generated with Taste Skill (`design-taste-frontend`),
seed **1261000740**. This is the implemented visual system, not a roadmap.

Kevin's real software is the material. His name holds opposite corners of the
opening while the work passes between them. Projects are split into two views
of the same product. Opposing motion separates the title at that boundary and
reassembles it as the project centres. The visitor can turn an actual product
capture over to see its verified architecture.

The site presents a developer's work through moving posters, rather than a
chronology. Professional experience and education have distinct factual records.
No fabricated clients, testimonials, awards, counters or outcome metrics.

## Palette

The dealt palette is **Cobalt on sand**:

| Token                | Value     | Role                                     |
| -------------------- | --------- | ---------------------------------------- |
| `--bg`               | `#e6dbc7` | Main sand ground                         |
| `--surface`          | `#ddd0b9` | Open disclosures and supporting surfaces |
| `--ink` / `--accent` | `#062b8a` | Type and primary actions                 |
| `--muted`            | `#3a5aa8` | Secondary factual labels                 |
| `--field`            | `#c7d3e8` | Work and archive ground                  |
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

1. **Pinned opening:** Kevin at the upper-left, Hernández at the lower-right;
   product capture and professional introduction fill the middle. The four
   product controls change both sides of the interactive product/architecture flip.
2. **Torn-seam work:** two opposing screenshot panes and two clipped halves of
   a project title. Native scroll advances all four real projects in a three-screen
   stage; direct project controls move to each phase. The readable title phase
   dominates, with stronger tearing restricted to its entry and exit.
3. **Experience:** current employment facts beside a wide introduction, then a
   real portrait beside an interactive list of responsibilities.
4. **Education:** two records, with complete qualification, institution, period
   and description. DevOps certifications retain their individual titles.
5. **Archive:** a large project preview responds to hover, focus and selection
   of a list of additional projects.
6. **Contact:** a solid contact sheet over a moving real product capture, followed
   by the surname at monumental scale.

## Motion

The two held stages use native document scroll and `position: sticky`.
`MotionEffects` owns their progress, title displacement, pane movement, active
project semantics and reduced composition. No wheel/touch interception or loading
screen. The hero picture rotates and grows with scroll; its two faces turn in
perspective when selected. Image replacement opens with a horizontal wipe.

Section parts enter independently with the Web Animations API. Buttons move in
response to hover, disclosures open to their real content, the case-study dialog
enters from below, and the footer capture drifts slowly. Motion tokens live beside
the colour tokens. A pause control and reduced-motion preference expose every
project as a normal flowing section and keep all content reachable.

The title tear uses a fourth-power envelope: the two halves align for most of the
project's phase and separate near its boundaries. It does not cover the action.

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

The actual capture comes before the professional introduction; the name remains
split between the corners. Project navigation wraps into a two-by-two selector.
The split-screen project scene retains its opposing panes with a shorter title
excursion. Employment facts follow the introduction, education records stack,
and archive preview becomes a full-width image above the list. The contact sheet
fills the available width. The case-study dialog uses the entire phone viewport.

## References and scope

Taste Skill supplied the direction, type, palette and section geometry. Its
portrait-parade about section was exchanged for the side-facts blueprint because
this portfolio introduces one developer. Actual project captures replace the
photograph slots. No stock pictures were introduced. Existing React, TypeScript,
Vite and Tailwind tooling are retained.

`design.md` is a versioned design specification. Generated direction sheets,
implementation notes, measurement reports, scene captures and critique rounds
remain local under ignored `.taste-skill/`.
