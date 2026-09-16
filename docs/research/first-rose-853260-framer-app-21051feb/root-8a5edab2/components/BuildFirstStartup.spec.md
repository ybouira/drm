# BuildFirstStartup Specification

## Overview
- **Target file:** `src/components/sites/first-rose-853260-framer-app-21051feb/root-8a5edab2/BuildFirstStartup.tsx`
- **Screenshot:** `docs/design-references/first-rose-853260-framer-app-21051feb/root-8a5edab2/desktop-build-first-startup.jpg`
- **Interaction model:** static

## DOM Structure

```
section  (#0d0d0f, flex column, gap 50px, padding 60px 100px)
└── div  (rail, max-width 1440px, gap 40px)
    ├── div  (heading block, gap 20px, align-items flex-start)
    │   ├── div  (gap 0)
    │   │   ├── p  "This is"                       (opacity 0.5)
    │   │   └── p  "Where you build your first startup."
    │   └── p  intro paragraph                     (opacity 0.8)
    └── div  (card row, flex row, JUSTIFY-CONTENT SPACE-BETWEEN)
        └── 4 x card (300 x 450)
```

**Layout correction:** this is a **single row of four 300×450 cards** with
`justify-content: space-between` — it is *not* a 2×2 grid.

## Computed Styles (exact, from getComputedStyle)

### Section
- display: `flex`, flex-direction: `column`
- justify-content: `center`, align-items: `center`
- gap: `50px`
- padding: `60px 100px`
- background-color: `rgb(13, 13, 15)`
- overflow: `clip`
- height: `773px`

### Rail
- width / max-width: `1440px`
- display: `flex`, flex-direction: `column`, gap: `40px`

### Heading block
- display: `flex`, flex-direction: `column`
- justify-content: `flex-start`, align-items: `flex-start`
- gap: `20px`

### "This is"
- font-size: `40px`, line-height: `50px`, font-weight: `400`
- color: `rgb(255, 255, 255)`, **wrapper opacity `0.5`**
- Rendered box: `980 x 50`

### "Where you build your first startup."
- font-size: `50px`, line-height: `50px`, font-weight: `700`
- color: `rgb(255, 255, 255)`, opacity `1`
- Rendered box: `980 x 50`

### Intro paragraph
- font-size: `18px`, line-height: `21.6px`, font-weight: `400`
- color: `rgb(255, 255, 255)`, **wrapper opacity `0.8`**
- Rendered box: `765 x 43`

### Card row
- display: `flex`, flex-direction: `row`
- justify-content: `space-between`, align-items: `center`
- width: `1440px`, height: `450px`

### Card (each, identical box)
- Size: `300 x 450`
- display: `flex`, flex-direction: `column`
- justify-content: `flex-end`, align-items: `center`
- gap: `10px`
- padding: `20px`
- border-radius: `10px`
- position: `relative`
- **Border via `::after`:** `2px solid rgba(80, 80, 80, 0.2)`, border-radius `10px`

Card layer stack (bottom → top):
1. `div` absolute, radius 10px → `img` 300×450, `object-fit: cover`, radius 10px
2. `div` absolute, `z-index: 0`, radius 10px, gradient overlay:
   ```
   linear-gradient(
     rgba(255, 255, 255, 0) 0%,
     rgba(255, 252, 252, 0) 46.5484%,
     rgba(0, 0, 0, 0.6) 76.1331%,
     rgba(0, 0, 0, 0.9) 100%
   )
   ```
3. `div` relative content block, `260 x 65`, flex column, align-items flex-start, gap `5px`
   - Label row: flex row, align-items center, gap `5px`
     - Dot: `6 x 6`, `border-radius: 100px`, per-card color (below)
     - Label text
   - Description wrapper: **opacity `0.5`**

### Card typography
- Label: `14px` / line-height `16.8px` / weight `700` / color `rgb(255, 255, 255)`
- Description: `12px` / line-height `14.4px` / weight `400` / color `rgb(255, 255, 255)`,
  inside a wrapper at opacity `0.5`

## Per-Card Content (verbatim)

| # | Image | Dot color | Label | Description |
| - | ----- | --------- | ----- | ----------- |
| 1 | `aCFWfbQ5WMtWDMM5k6ol6VAg.webp` (300×450) | `rgb(113, 56, 242)` | `MONTHLY GATHERINGS` | `We meet every month in Chiasso (CH). No slides, no theory. Just real conversation and real progress.` |
| 2 | `CO11nKnejqX7SCom5uOQROjyAY.webp` (300×450) | `rgb(247, 37, 100)` | `FOUNDER FRIDAYS` | `Every Friday, build in person from Drommer HQ alongside the team and other founders.` |
| 3 | `r6gBWsDGWm9WrboOehqPT3937M.webp` (300×450) | `rgb(233, 254, 107)` | `VENTURE BUILDING` | `When the model works, Drommer helps you turn it into a company.` |
| 4 | `FzybitHD0VlARAwp0jtxgsrzKg.webp` (300×400) | `rgb(33, 223, 71)`  | `FOUNDER NETWORK` | `Entrepreneurs, operators, investors. You're not alone in the room.` |

All four dots are distinct colors — purple, pink, lime, green. Do not reuse one accent.

## States & Behaviors
- **Scroll:** N/A — static, no entrance animation.
- **Hover:** not specified by the source; do not invent.

## Assets
Base path `public/sites/first-rose-853260-framer-app-21051feb/root-8a5edab2/images/`:
- `aCFWfbQ5WMtWDMM5k6ol6VAg.webp`
- `CO11nKnejqX7SCom5uOQROjyAY.webp`
- `r6gBWsDGWm9WrboOehqPT3937M.webp`
- `FzybitHD0VlARAwp0jtxgsrzKg.webp`

All four have empty `alt` on the live site (decorative).

## Text Content (verbatim)
```
This is
Where you build your first startup.
A highly selective program where young entrepreneurs validate business ideas, build their startup and grow alongside a network of other entrepreneurs, mentors and investors.
```
(The intro paragraph's full text is as rendered; see the table above for card copy.)

## Responsive Behavior
- **Desktop (≥1440px):** one row of four 300×450 cards, `space-between`, rail at 1440px.
- **Tablet (810–1439px):** cards wrap to 2×2 as the row can no longer fit 4×300 + gaps.
- **Mobile (≤809px):** single column, cards go full-width, heading sizes scale down.
- Not visually confirmed at tablet/mobile — see the tooling note in `BEHAVIORS.md`.
