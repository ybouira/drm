# Hero Specification

## Overview
- **Target file:** `src/components/sites/first-rose-853260-framer-app-21051feb/root-8a5edab2/Hero.tsx`
- **Screenshot:** `docs/design-references/first-rose-853260-framer-app-21051feb/root-8a5edab2/desktop-hero.png`
- **Interaction model:** static

## DOM Structure

```
div  (outer, full viewport height, overflow clip)
└── div  (panel: absolute, #0d0d0f, flex column, justify-content FLEX-END)
    ├── div  (gradient overlay, absolute, full size)
    ├── div  (content rail, max-width 1440px, gap 20px)
    │   ├── div  (gap 10px)
    │   │   ├── p  eyebrow "THE FOUNDER PATH"
    │   │   └── p  headline
    │   ├── p  paragraph
    │   └── div  (button row, gap 15px)
    │       ├── a  "How we work"
    │       └── a  "Program Phases"
    └── div  (video layer, absolute, z-index 0)
        └── video  (NO SOURCE — see below)
```

Note the content is **bottom-aligned** (`justify-content: flex-end`), not centered.

## Computed Styles (exact, from getComputedStyle)

### Outer
- height: `945.333px` (= 100vh)
- display: `flex`, flex-direction: `column`, justify-content: `center`, align-items: `center`
- overflow: `clip`

### Panel
- position: `absolute`, full size
- background-color: `rgb(13, 13, 15)`  ← **not** pure black
- display: `flex`, flex-direction: `column`
- justify-content: `flex-end`, align-items: `center`
- gap: `10px`
- padding: `40px 100px 60px`

### Gradient overlay (absolute, full size, above the video layer)
```
background-image: linear-gradient(
  rgba(12, 12, 13, 0) 0%,
  rgba(12, 12, 13, 0.6) 86.6514%,
  rgb(12, 12, 13) 100%
);
```

### Content rail
- width / max-width: `1440px`
- display: `flex`, flex-direction: `column`
- justify-content: `center`, align-items: `flex-start`
- gap: `20px`
- height: `286.396px`

### Eyebrow — "THE FOUNDER PATH"
- font-size: `12px`
- line-height: `14.4px`
- font-weight: `700`
- letter-spacing: `2.4px`
- font-family: `Plus Jakarta Sans`
- color: `rgb(255, 255, 255)` — **full opacity, not white/70**
- text-transform: `none` (the copy is already uppercase)

### Headline — "We turn ambition into startups."
- font-size: `60px`
- line-height: `60px`  (ratio exactly 1.0)
- font-weight: `400`
- letter-spacing: `normal`
- color: `rgb(255, 255, 255)`
- Rendered box: `691 x 128` (wraps to two lines)
- Markup: `We <strong>turn</strong> ambition into <strong>startups</strong>.`
- `<strong>` resolves to font-weight `700`, same 60px size

### Paragraph
- font-size: `20px`
- line-height: `20px`  (tight — ratio 1.0)
- font-weight: `400`
- color: `rgb(255, 255, 255)` — **full opacity**
- Rendered box: `630 x 60`

### Button row
- display: `flex`, flex-direction: `row`, align-items: `center`
- gap: `15px`
- height: `34px`

### Button 1 — "How we work" (primary)
- Size: `127 x 34`
- background-color: `rgb(255, 255, 255)`
- padding: `10px 20px`
- border-radius: `5px`
- Label: `14px` / line-height `14px` / weight `600` / letter-spacing `-0.28px` / color `rgb(0, 0, 0)`

### Button 2 — "Program Phases" (secondary)
- Size: `145 x 34`
- background-color: `transparent`
- padding: `10px 20px`
- border-radius: `5px`
- **Border is drawn on the `::after` pseudo-element**, not the element itself:
  `border: 0.666667px solid rgb(255, 255, 255)` with `border-radius: 5px`.
  `0.667px` is 1 device pixel at dpr 1.5 → implement as a **1px solid white** border
  at full opacity (not `white/30`).
- Label: `14px` / line-height `14px` / weight `600` / letter-spacing `-0.28px` / color `rgb(255, 255, 255)`

## States & Behaviors
- **Scroll:** N/A — static.
- **Hover:** not specified by the source; do not invent.
- **Video:** the `<video>` element exists (loop, muted, playsinline, `autoplay: false`)
  but has **no source** — empty `src`, empty `currentSrc`, zero `<source>` children. There
  is no recoverable asset. Render the panel flat with the gradient; do **not** substitute
  a stand-in video or image.

## Assets
- None. (No images, no icons in this section.)

## Text Content (verbatim)
```
THE FOUNDER PATH
We turn ambition into startups.
The Founder Program is where you stop dreaming about starting a company and actually do it. Real work. Real mentorship. A team that co-builds with you.
How we work
Program Phases
```

## Links (from the live site)
- `How we work` → `./#four-pillar`
- `Program Phases` → `./#program-phases`

Both are same-page anchors with no `target`. Note the anchor is `#four-pillar`
(singular), pointing at the "What makes this different" section.

## Responsive Behavior
- **Desktop (≥1440px):** as measured; padding `40px 100px 60px`, rail capped at 1440px.
- **Tablet (810–1439px):** rail becomes fluid, horizontal padding reduces; headline scales down.
- **Mobile (≤809px):** single column, headline and paragraph scale down, buttons stay in a
  row while they fit. Not visually confirmed — see the tooling note in `BEHAVIORS.md`.
- Section height stays `100vh` at all tiers.
