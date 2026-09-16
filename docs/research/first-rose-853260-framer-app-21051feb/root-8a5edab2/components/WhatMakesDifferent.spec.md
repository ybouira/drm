# WhatMakesDifferent Specification

## Overview
- **Target file:** `src/components/sites/first-rose-853260-framer-app-21051feb/root-8a5edab2/WhatMakesDifferent.tsx`
- **Screenshot:** `docs/design-references/first-rose-853260-framer-app-21051feb/root-8a5edab2/desktop-pillars.png`
- **Interaction model:** static

## DOM Structure

```
section  (#0d0d0f, flex column, gap 60px, padding 60px 100px)
└── div  (rail, max-width 1440px, gap 60px, align-items center)
    ├── div  (heading block, gap 10px, align-items center)
    │   ├── div (gap 10px)
    │   │   ├── p  "IN 4 PILLARS"
    │   │   └── p  "What makes this different"
    │   └── p  subtitle (contains a <br>)
    └── div  (card row, flex row, justify-content CENTER, gap 15px)
        └── 4 x card
```

**Layout correction:** a **single centered row of four cards with `gap: 15px`** — not a
2×2 grid.

## Computed Styles (exact, from getComputedStyle)

### Section
- display: `flex`, flex-direction: `column`
- justify-content: `center`, align-items: `center`
- gap: `60px`
- padding: `60px 100px`
- background-color: `rgb(13, 13, 15)`
- overflow: `clip`
- height: `599px`

### Rail
- width / max-width: `1440px`
- display: `flex`, flex-direction: `column`, align-items: `center`
- gap: `60px`

### Heading block
- display: `flex`, flex-direction: `column`, justify-content: `center`, align-items: `center`
- gap: `10px`

### "IN 4 PILLARS"
- font-size: `12px`, line-height: `14.4px`, font-weight: `700`
- letter-spacing: `2.4px`
- color: `rgb(255, 255, 255)`
- Rendered box: `102 x 14`

### "What makes this different"
- font-size: `40px`, line-height: `48px`, font-weight: `700`
- color: `rgb(255, 255, 255)`
- Rendered box: `497 x 48`

### Subtitle
- font-size: `18px`, line-height: `21.6px`, font-weight: `400`
- color: `rgb(255, 255, 255)`
- Rendered box: `741 x 43`, contains an explicit `<br>`

### Card row
- display: `flex`, flex-direction: `row`
- justify-content: `center`, align-items: `center`
- gap: `15px`
- height: `293px`

### Card
- Height: `293px`. Widths are **content-driven, not equal**: card 1 is `270px`,
  cards 2–4 are `256px`. Do not force equal columns.
- display: `flex`, flex-direction: `column`
- justify-content: `space-between`, align-items: `flex-start`
- padding: `20px`
- background-color: `rgb(255, 255, 255)`
- border-radius: `10px`
- **box-shadow: `rgba(113, 56, 242, 0.7) 0px 0px 30px 0px`** — a purple glow on every card

Card internals (top → bottom):
1. Top group: flex column, justify-content flex-start, align-items flex-start, gap `15px`
   - Number (`01`–`04`)
   - Icon box `48 x 48`, `overflow: clip` (SVG renders at its natural size inside)
   - Title
2. Description block
3. Tag row: flex row, align-items center, gap `10px`
   - Check icon box `16 x 16`
   - Tag text

### Card typography
- Number: `16px` / line-height `19.2px` / weight `700` / color `rgb(113, 56, 242)`
- Title: `20px` / line-height `24px` / weight `700` / color `rgb(13, 13, 15)`
- Description: `14px` / line-height `16.8px` / weight `400` / color `rgb(13, 13, 15)`
- Tag: `12px` / line-height `18px` / weight `400` / color `rgb(113, 56, 242)`

## Per-Card Content (verbatim)

| # | Icon component | Icon render size | Title | Description | Tag |
| - | -------------- | ---------------- | ----- | ----------- | --- |
| 01 | `PillarOneIcon`   | `40 x 36` | `High quality Mentorship` | `Weekly 1:1 sessions with operators who are actively building. Not coaches but other Builders.` | `Hands-on guidance` |
| 02 | `PillarTwoIcon`   | `40 x 20` | `Milestone-Based` | `You don't advance by showing up. You advance by executing. Progress is earned, not given.` | `Results over time` |
| 03 | `PillarThreeIcon` | `39 x 39` | `Co-Built Ventures` | `When your idea is ready, Drommer builds with you. Equity model, operational support, launch resources.` | `We have skin in the game` |
| 04 | `PillarFourIcon`  | `40 x 40` | `Highly Selective` | `We accept a small cohort each cycle. Everyone in the room is serious. That changes everything.` | `Top 10% accepted` |

Cards 03 and 04 render their description across two `<p>` elements (the text wraps as
shown above); a single paragraph with the same copy is acceptable.

Every card's tag uses the same check icon: `PillarTagCheckIcon`, rendered `16 x 16`.

## States & Behaviors
- **Scroll:** N/A — static, no entrance animation.
- **Hover:** not specified by the source; do not invent.

## Assets
- No images.
- Icons from `../shared/icons`: `PillarOneIcon`, `PillarTwoIcon`, `PillarThreeIcon`,
  `PillarFourIcon`, `PillarTagCheckIcon`.
  These are the site's real SVGs (recovered verbatim); the pillar icons carry their own
  stroke colors (`#0A0A0A` / `#0D0D0F`, `stroke-width: 3`) — do not recolor them.

## Text Content (verbatim)
```
IN 4 PILLARS
What makes this different
Not a course. Not a bootcamp. A structured path to launch your own startup, with
<br>
people who've done it before.
```
(Subtitle renders across two lines via an explicit `<br>`.)

## Responsive Behavior
- **Desktop (≥1440px):** one centered row of 4 cards, gap 15px.
- **Tablet (810–1439px):** cards wrap to 2×2.
- **Mobile (≤809px):** single column, full-width cards.
- Not visually confirmed at tablet/mobile — see the tooling note in `BEHAVIORS.md`.
