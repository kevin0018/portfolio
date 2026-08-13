<!-- hallmark: portfolio-redesign-v1 -->
# Portfolio design direction

## Intent

This portfolio is a recruiter-facing engineering document, not a gallery of
technology logos. It should let a hiring manager understand Kevin's product
judgement quickly, then give a technical reviewer enough evidence to inspect
the decisions behind each project.

## Visual thesis

**Cold paper, engineering ink, visible evidence.** The site uses an editorial
layout with a restrained technical trace that connects product claims to their
implementation. The interface avoids dashboard cards, fake browser chrome,
ambient gradients, and scroll hijacking.

- **Audience:** recruiters, engineering managers, and senior developers.
- **Primary action:** inspect a case study and open its live demo or source.
- **Voice:** direct, specific, bilingual, and defensible.
- **Macrostructure:** feature stack with one continuous native document scroll.
- **Navigation:** compact edge-aligned identity, language control, and contact.
- **Signature element:** a vertical system trace joining interface, contract,
  application, and infrastructure evidence.

## Composition

The hero is left-biased and content-led. It establishes Kevin as a full-stack
developer who can explain how product and architecture support each other.
Projects then become full-width editorial chapters. On larger screens, each
chapter pairs sticky visual evidence with scrolling technical decisions. On
small screens, evidence and explanation stay in the same linear reading flow.

No section requires a viewport height. No wheel, touch, or keyboard event is
intercepted. The footer closes with a direct collaboration statement rather
than a second sitemap.

## Typography

- **Display:** Barlow Condensed, 700–800. Compact, assertive project headlines.
- **Body:** IBM Plex Sans, 400–600. Clear long-form technical explanations.
- **Code/metadata:** IBM Plex Mono, 400–500. Architecture labels and evidence.

System fallbacks preserve the layout if web fonts are unavailable. Display
headlines use balanced wrapping and body copy stays within 66 characters where
possible.

## Colour and material

The base is cold off-white rather than pure white. Blue-black ink replaces pure
black. Verification blue is the only site-wide accent. Each case study may add
one scoped project accent; wikiLoL uses archive gold. Colour is never the sole
carrier of state.

## Motion and interaction

Motion only clarifies state: links shift by a few pixels, the active trace node
changes, and visual framing follows the active story step. All transitions use
short opacity/transform timing. `prefers-reduced-motion` removes animation and
smooth scrolling. Touch targets are at least 44px, focus is visible, and no
essential affordance depends on hover.

## Responsive behaviour

- **320–767px:** single column; each decision carries its own nearby screenshot;
  no sticky project media; header contact is available through the document.
- **768–1099px:** wider editorial rhythm; hero trace becomes more explicit.
- **1100px and above:** sticky case-study evidence beside scrolling decisions.

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
    "paper": {"$value": "oklch(0.97 0.008 235)"},
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
