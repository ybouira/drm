# ReunionBanner Specification

## Overview
- **Target file:** `src/components/sites/first-rose-853260-framer-app-21051feb/root-8a5edab2/ReunionBanner.tsx`
- **Screenshot:** `docs/design-references/first-rose-853260-framer-app-21051feb/root-8a5edab2/desktop-reunion.png`
- **Interaction model:** static

## DOM Structure

```
section  (white, flex column, center, gap 10px, padding 60px 100px)
└── div  (card, 1440 x 529, radius 10px, padding 40px, justify-content FLEX-END, align-items FLEX-START)
    ├── div  (absolute) → img (1440 x 529, cover, radius 10px)
    └── div  (content, 500 x 190, flex column, gap 40px)
        ├── div  pill  "Drommer - Chiasso, Switzerland"
        ├── p    headline
        └── a    "Join us →"
```

## Computed Styles (exact, from getComputedStyle)

### Section
- display: `flex`, flex-direction: `column`, justify-content: `center`, align-items: `center`
- gap: `10px`
- padding: `60px 100px`
- background-color: `rgb(255, 255, 255)`
- height: `649px`

### Card
- Size: `1440 x 529`
- padding: `40px`
- border-radius: `10px`
- position: `relative`, overflow: `visible`
- display: `flex`, flex-direction: `column`
- justify-content: `flex-end`, align-items: `flex-start`
- gap: `10px`

### Background image
- File: `cHX3vgQDeka0MHfC6PQMQijswWI.png`
- Rendered `1440 x 529`, `object-fit: cover`, `border-radius: 10px`
- Wrapped in an absolutely-positioned layer

**There is no gradient overlay and no CSS darkening filter** — `filter: none`,
`opacity: 1`, no `mix-blend-mode`, and no gradient layer anywhere in the card. The photo
is simply dark on its own. Do not add a scrim.

### Content block
- Size: `500 x 190`
- display: `flex`, flex-direction: `column`, gap: `40px`
- position: `relative` (sits above the image layer)

### Location pill
- Size: `200 x 26`
- background-color: `rgb(113, 56, 242)`
- padding: `6px 12px`
- border-radius: `100px`
- gap: `5px`, flex row, align-items center
- Icon: `LocationPinIcon` from `../shared/icons`, rendered `12 x 14`
- Label: `10px` / `12px` / weight `700` / color `rgb(255, 255, 255)`

### Headline
- `40px` / `40px` / weight `400` / color `rgb(255, 255, 255)`
- Rendered box: `500 x 80` (wraps to two lines)

### "Join us →" button
- Size: `95 x 34`
- background-color: `rgb(255, 255, 255)`
- padding: `10px 20px`, border-radius: `5px`
- Label: `14px` / `14px` / weight `600` / letter-spacing `-0.28px` / color `rgb(0, 0, 0)`
- href: `https://schedule.fillout.com/t/uGGCRZmyGvus`

## States & Behaviors
- **Scroll:** N/A — static.
- **Hover:** not specified by the source; do not invent.

## Assets
- `public/sites/first-rose-853260-framer-app-21051feb/root-8a5edab2/images/cHX3vgQDeka0MHfC6PQMQijswWI.png`
- Icon: `LocationPinIcon`

## Text Content (verbatim)
```
Drommer - Chiasso, Switzerland
Spend a day with us at the next Drommer Reunion
Join us →
```
Note the pill uses a plain hyphen (`-`), not an en-dash.

## Responsive Behavior
- **Desktop (≥1440px):** card capped at `1440 x 529`, content bottom-left.
- **Tablet (810–1439px):** card becomes fluid; height reduces.
- **Mobile (≤809px):** card full-width, headline scales down, content stays bottom-left.
- Not visually confirmed at tablet/mobile — see the tooling note in `BEHAVIORS.md`.
