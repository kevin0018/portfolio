<!-- hallmark: portfolio-redesign-v1 -->
# Portfolio design direction

## Intent

This portfolio is a recruiter-facing professional introduction, not a gallery
of technology logos. It should let a hiring manager understand Kevin's role,
current experience, and primary stack quickly, then give a technical reviewer
enough evidence to inspect the decisions behind each project.

## Visual thesis

**Working software on a kinetic blue stage.** The opening pairs Kevin's name
with real screenshots of all three featured projects. A selectable deck moves
in perspective with the pointer; its active screenshot links into the case study.
The existing Barlow Condensed / IBM Plex identity remains recognizable.

- Audience: recruiters, engineering managers, and technical interviewers.
- Macrostructure: Marquee Hero adapted around an interactive evidence deck.
- Navigation: N5 floating navigation with work, experience, language, and motion controls.
- Footer: Ft8 kinetic contact marquee with direct email and social links.

The visual work index precedes the three case studies; professional experience
follows them and remains directly accessible from the desktop navigation.
Scroll remains native for mouse, touch, and keyboard. Project previews use real
captures without invented browser chrome. Huellas carries visible team attribution
and links to its recorded tour instead of an undocumented public demo.

## Typography

- **Display:** Barlow Condensed, 700–800. Compact, assertive project headlines.
- **Body:** IBM Plex Sans, 400–600. Clear long-form technical explanations.
- **Code/metadata:** IBM Plex Mono, 400–500. Architecture labels and evidence.

System fallbacks preserve the layout if web fonts are unavailable. Display
headlines use balanced wrapping and body copy stays within 66 characters where
possible.

## Colour and material

The hero and contact stage use deep blue, pale blue type, and slate-blue rules.
The project index and experience use the original cool paper. Case studies
carry scoped accents: gold for wikiLoL, warm travel paper, and botanical green
for Huellas. All values live in `tokens.css`; state also uses labels and shape.

## Motion and interaction

The opening combines typography entrances with a pointer-responsive project deck.
Project switching animates depth and rotation; section introductions enter once
with the Web Animations API. The footer marquee pauses on hover and focus.
A header toggle pauses CSS motion and cancels active entrance animations.
Reduced-motion preferences disable spatial transitions and smooth scrolling.
Content remains visible if decorative observers are unavailable.

## Responsive behaviour

- 320–767px: stacked introduction and project deck; a single-column work index;
  each case-study decision has inline visual evidence.
- 768–1099px: split hero and staggered three-project index.
- 1100px and above: sticky case-study captures beside their explanations.

## Component rules

- Buttons use sentence case and never wrap.
- Screenshots are real interface captures without decorative browser shells.
- Architecture diagrams are semantic HTML/CSS, not illustrative filler.
- Numbering is reserved for genuine narrative sequences.
- Rounded containers are limited to controls and media, never used as a default
  page grammar.

## Exports

### CSS

The canonical implementation is [`tokens.css`](./tokens.css).

### Tailwind v4

```css
@theme {
  --color-paper: var(--color-paper);
  --color-ink: var(--color-ink);
  --color-muted: var(--color-ink-muted);
  --color-accent: var(--color-accent);
  --color-project: var(--color-project-accent);
  --font-display: var(--font-display);
  --font-body: var(--font-body);
  --font-mono: var(--font-mono);
}
```

### DTCG tokens.json

```json
{
  "color": {
    "$type": "color",
    "paper": {"$value": "oklch(0.935 0.014 235)"},
    "ink": {"$value": "oklch(0.19 0.025 245)"},
    "accent": {"$value": "oklch(0.55 0.18 245)"},
    "projectAccent": {"$value": "oklch(0.78 0.15 80)"}
  },
  "space": {
    "$type": "dimension",
    "1": {"$value": {"value": 0.25, "unit": "rem"}},
    "4": {"$value": {"value": 1, "unit": "rem"}},
    "8": {"$value": {"value": 2, "unit": "rem"}}
  }
}
```

### shadcn/ui variables

```css
:root {
  --background: var(--color-paper);
  --foreground: var(--color-ink);
  --primary: var(--color-ink);
  --primary-foreground: var(--color-paper-raised);
  --muted: var(--color-paper-deep);
  --muted-foreground: var(--color-ink-muted);
  --accent: var(--color-accent);
  --border: var(--color-rule);
  --radius: var(--radius-control);
}
```
