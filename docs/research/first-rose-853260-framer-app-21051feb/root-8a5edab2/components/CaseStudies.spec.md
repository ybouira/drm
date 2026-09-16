# CaseStudies Specification

## Overview
- **Target file:** `src/components/sites/first-rose-853260-framer-app-21051feb/root-8a5edab2/CaseStudies.tsx`
- **Screenshot:** (not captured — see `docs/design-references/first-rose-853260-framer-app-21051feb/root-8a5edab2/` for the sections that were)
- **Interaction model:** static (cards are links)

## DOM Structure

```
section  (white, flex column, gap 50px, padding 60px 100px)
└── div  (rail, max-width 1440px, gap 50px)
    ├── div  (header, align-items flex-start, gap 10px)
    │   ├── p "CASE STUDY"
    │   ├── p "Companies we've build with founders"
    │   └── p subtitle
    ├── div  (cards column, flex column, gap 20px)
    │   ├── a  full-width card   1440 x 522
    │   └── div (flex row, gap 20px)
    │       ├── a  card  710 x 522
    │       └── a  card  710 x 522
    └── a  "All case studies →"
```

**Layout:** one **full-width** card on the first row, then **two half-width** cards side
by side — not a 3-across row of small cards.

## Computed Styles (exact, from getComputedStyle)

### Section
- display: `flex`, flex-direction: `column`, justify-content: `center`, align-items: `center`
- gap: `50px`
- padding: `60px 100px`
- background-color: `rgb(255, 255, 255)`
- overflow: `clip`
- height: `1422px`

### Rail
- width / max-width: `1440px`, gap: `50px`

### Header
- display: `flex`, flex-direction: `column`, align-items: `flex-start`, gap: `10px`
  (an outer wrapper reports `gap: 30px` but has a single child, so it is inert)

### "CASE STUDY"
- `12px` / `14.4px` / weight `700` / letter-spacing `2.4px` / color **`rgb(120, 68, 238)`**
- Rendered box: `98 x 14`

### "Companies we've build with founders"
- `40px` / `48px` / weight `700` / color `rgb(13, 13, 15)`
- Text is verbatim from the site, including the grammatical slip ("we've build").

### Subtitle — "From idea to launch, these are the ventures that started inside Drommer."
- `18px` / `21.6px` / weight `400` / color `rgb(80, 80, 80)`

### Card (all three share this)
- padding: `40px`
- border-radius: `10px`
- display: `flex`, flex-direction: `column`
- justify-content: `space-between`, align-items: **`flex-end`**

`align-items: flex-end` puts the **tag pill at the top-RIGHT** (measured pill left = 1279
on the 1440 card = 1440 − 40 − 121). The **content block below is `width: 100%`** with
`align-items: flex-start; justify-content: flex-end; gap: 20px; height: 169px`, so the
brand mark and description sit bottom-**left**. The description spans the full 1360px
content width.
- Layer stack:
  1. `div` absolute → background `img`, `object-fit: cover`, radius `10px`
  2. `div` absolute gradient overlay, radius `10px`, `overflow: clip`:
     ```
     linear-gradient(
       rgba(255, 255, 255, 0) 0%,
       rgba(0, 0, 0, 0) 51.1736%,
       rgba(0, 0, 0, 0.25) 61.4645%,
       rgba(0, 0, 0, 0.7) 76.7427%,
       rgba(0, 0, 0, 0.75) 100%
     )
     ```
  3. Tag pill (top)
  4. Content block (bottom): brand mark image + description

### Tag pill
- Size: `121 x 34`
- background-color: **`rgb(120, 68, 238)`**
- padding: `10px 20px`
- border-radius: `100px`
- Label: `14px` / `14px` / weight `700` / letter-spacing `2.8px` / color `rgb(255, 255, 255)`

### Card description
- `20px` / `24px` / weight `400` / color `rgb(255, 255, 255)`

### "All case studies →" button
- Size: `151 x 34`
- background-color: **`rgb(113, 56, 242)`**
- padding: `10px 20px`, border-radius: `5px`
- Label: `14px` / `14px` / weight `600` / letter-spacing `-0.28px` / color `rgb(255, 255, 255)`
- href: `./case-studies`
- **Centered**, not left-aligned — the `max-width: 1440px` rail is `align-items: center`
  (measured button left = 644 ≈ (1440 − 151) / 2)

> Two distinct purples are in use on this section: `rgb(120, 68, 238)` for the eyebrow and
> tag pills, `rgb(113, 56, 242)` for the button. Keep them separate.

## Per-Card Content (verbatim)

| # | Size | href | Background image | Brand mark (object-fit contain) | Tag | Description |
| - | ---- | ---- | ---------------- | ------------------------------- | --- | ----------- |
| 1 | `1440 x 522` | `./case-studies/kaleba` | `B1VEekKzR9KhSWNlSPWgytTjbSY.webp` (nat 1440×960) | `XbHlR61qEHpYzyb07CuA6Yz7rM.webp` rendered `530 x 125` | `STARTUP` | `A WhatsApp-based non-profit bringing digital education to emerging countries, with real impact.` |
| 2 | `710 x 522`  | `./case-studies/okrogito` | `EZnEUxq21CuRRiCWmG8QqlK7Xoo.webp` | `dRFWThY0BX0AqgVC4AO5yvkTNxQ.webp` rendered `246 x 125` | `STARTUP` | `An agent to buy and sell your home, completely private-to-private.` |
| 3 | `710 x 522`  | `./case-studies/prisma-ai-group` | `AMNFRegqg923K5mIFUmvbSjNV4.webp` | `aWxOXQ9PiPsYwsifpLTqpAEhRAE.webp` rendered `246 x 125` | `STARTUP` | `Turn your content creation into an AI-powered business.` |

All background images use `object-fit: cover`; all brand marks use `object-fit: contain`.
All `alt` attributes are empty on the live site.

## States & Behaviors
- **Scroll:** N/A — static.
- **Hover:** not specified by the source; do not invent.

## Assets
Base path `public/sites/first-rose-853260-framer-app-21051feb/root-8a5edab2/images/`:
`B1VEekKzR9KhSWNlSPWgytTjbSY.webp`, `XbHlR61qEHpYzyb07CuA6Yz7rM.webp`,
`EZnEUxq21CuRRiCWmG8QqlK7Xoo.webp`, `dRFWThY0BX0AqgVC4AO5yvkTNxQ.webp`,
`AMNFRegqg923K5mIFUmvbSjNV4.webp`, `aWxOXQ9PiPsYwsifpLTqpAEhRAE.webp`

## Responsive Behavior
- **Desktop (≥1440px):** 1 full-width + 2 half-width cards, gap `20px`.
- **Tablet (810–1439px):** same structure, cards narrow proportionally.
- **Mobile (≤809px):** all three stack full-width; card height reduces.
- Not visually confirmed at tablet/mobile — see the tooling note in `BEHAVIORS.md`.
