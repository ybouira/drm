# FinalCta Specification

## Overview
- **Target file:** `src/components/sites/first-rose-853260-framer-app-21051feb/root-8a5edab2/FinalCta.tsx`
- **Screenshot:** (not captured — see `docs/design-references/first-rose-853260-framer-app-21051feb/root-8a5edab2/` for the sections that were)
- **Interaction model:** static

## DOM Structure

```
section  (#0d0d0f, flex column, center, gap 40px, padding 100px)
└── div  (row, max-width 1440px, flex row, gap 40px)
    ├── div  card A  700 x 400  (white)
    └── div  card B  700 x 400  (purple gradient)
```

## Computed Styles (exact, from getComputedStyle)

### Section
- display: `flex`, flex-direction: `column`, justify-content: `center`, align-items: `center`
- gap: `40px`
- padding: **`100px`** (all sides)
- background-color: `rgb(13, 13, 15)`
- height: `600px`

**There is no purple radial glow on this section** — the section background is a flat
`rgb(13, 13, 15)`. The purple comes from card B's own gradient.

### Row
- width / max-width: `1440px`
- display: `flex`, flex-direction: `row`, gap: `40px`
- height: `400px`

### Card A — "Let's build together" (white)
- Size: `700 x 400`
- background-color: `rgb(255, 255, 255)`
- border-radius: `10px`
- padding: `40px`
- display: `flex`, flex-direction: `column`
- justify-content: `space-between`, align-items: `flex-start`

Typography:
- Headline: `60px` / `60px` / weight `700` / color `rgb(0, 0, 0)`
- Body (two paragraphs): `20px` / `24px` / weight `400` / color `rgb(80, 80, 80)`

Button — "Start a project →":
- Size: `145 x 34`
- background-color: **`rgb(113, 56, 242)`**
- padding: `10px 20px`, border-radius: `5px`
- Label: `14px` / `14px` / weight `600` / letter-spacing `-0.28px` / color `rgb(255, 255, 255)`
- href: `https://schedule.fillout.com/t/uGGCRZmyGvus`

### Card B — "Become an entrepreneur" (purple gradient)
- Size: `700 x 400`
- background-color: transparent; **background-image:**
  ```
  linear-gradient(270deg, rgb(65, 32, 140) 0%, rgb(113, 56, 242) 100%)
  ```
- border-radius: `10px`
- padding: `40px`
- display: `flex`, flex-direction: `column`
- justify-content: `space-between`, align-items: `flex-start`

Typography:
- Headline: `60px` / `60px` / weight `700` / color `rgb(255, 255, 255)`
- Body (two paragraphs): `20px` / `24px` / weight `400` / color `rgb(255, 255, 255)`

Button — "Apply now →":
- Size: `121 x 34`
- background-color: `rgb(255, 255, 255)`
- padding: `10px 20px`, border-radius: `5px`
- Label: `14px` / `14px` / weight `600` / letter-spacing `-0.28px` / color `rgb(0, 0, 0)`
- href: `https://forms.fillout.com/t/cP5KQYqyDdus`

## States & Behaviors
- **Scroll:** N/A — static.
- **Hover:** not specified by the source; do not invent.

## Assets
- No images, no icons.

## Text Content (verbatim)

### Card A
```
Let’s build together
You have an initiative that needs to move. We bring the team, the process, and the execution. No internal
structures to build from scratch, just results.
Start a project →
```

### Card B
```
Become an entrepreneur
You have the drive. We have the program, the network, and the team to build with you.
Apply for the next cohort, spots are limited.
Apply now →
```

Both card bodies render as two separate `<p>` elements. Card A uses a typographic
apostrophe in `Let’s`.

## Responsive Behavior — measured

The cards **stack below 1440px**, they do not narrow side by side. The row
(`.framer-axhh5c`) is `flex-direction: column` under
`(min-width: 810px) and (max-width: 1439.98px)` and again under `(max-width: 809.98px)`.

| | ≥1440px | 810–1439px |
| - | ------- | ---------- |
| Section padding | `100px` | `100px 40px` |
| Row direction | `row`, gap `40px` | **`column`**, gap `40px` |
| Card | `700 x 400` | `863 x 336` (fluid width) |
| Card padding | `40px` | `40px` |
| Card layout | `justify-content: space-between`, no gap | **`justify-content: center`, `gap: 60px`** |
| Headline | `60px / 60px` | **`60px / 60px` — does not scale down** |

Measured at 958px. Keeping the cards side by side below 1440px (as an earlier pass did)
collapses the headline onto three lines and drives the button into the body copy.
