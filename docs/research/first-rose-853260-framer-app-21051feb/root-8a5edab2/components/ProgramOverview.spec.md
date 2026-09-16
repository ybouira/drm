# ProgramOverview Specification

## Overview
- **Target file:** `src/components/sites/first-rose-853260-framer-app-21051feb/root-8a5edab2/ProgramOverview.tsx`
- **Screenshot:** (not captured — see `docs/design-references/first-rose-853260-framer-app-21051feb/root-8a5edab2/` for the sections that were)
- **Interaction model:** static

## DOM Structure

```
section  (#f8f8f8, flex column, gap 60px, padding 60px 100px)
├── div  (header, gap 15px, align-items center)
│   ├── div (gap 10px)
│   │   ├── p  "PROGRAM OVERVIEW"
│   │   └── p  "What you get & who it's for"
│   └── p  subtitle
├── div  (card row, flex row, justify-content center, align-items CENTER, gap 20px)
│   ├── card "What you get"   427 x 619
│   └── card "Who it's for"   427 x 432
└── a  "Explore the current challenge →"   (purple button, BELOW the cards)
```

**Correction:** the CTA is a **purple button placed below both cards**, a sibling of the
card row — it is *not* a text link inside the "Who it's for" card.

**No `max-width: 1440px` wrapper in this section.** The header and card row span the full
content width (`1492px` at a 1692px content box), bounded only by the section's
`100px` horizontal padding.

## Computed Styles (exact, from getComputedStyle)

### Section
- display: `flex`, flex-direction: `column`, justify-content: `center`, align-items: `center`
- gap: `60px`
- padding: `60px 100px`
- background-color: `rgb(248, 248, 248)`
- overflow: `clip`
- height: `1002px`

### Header
- display: `flex`, flex-direction: `column`, justify-content: `center`, align-items: `center`
- gap: `15px` (inner title group gap `10px`)

### "PROGRAM OVERVIEW"
- font-size: `12px`, line-height: `14.4px`, font-weight: `700`, letter-spacing: `2.4px`
- color: `rgb(113, 56, 242)`
- Rendered box: `168 x 14`

### "What you get & who it's for"
- font-size: `40px`, line-height: `48px`, font-weight: `700`, color: `rgb(13, 13, 15)`
- Rendered box: `521 x 48`
- Note the typographic apostrophe: `it’s`

### Subtitle — "A real program. Real access. Real people behind it."
- font-size: `18px`, line-height: `21.6px`, font-weight: `400`, color: `rgb(80, 80, 80)`
- Rendered box: `424 x 22`

### Card row
- display: `flex`, flex-direction: `row`, justify-content: `center`, align-items: `center`
- gap: `20px`
- The two cards have **different heights** (`619px` and `432px`) and are vertically centered.

### Card (both)
- Width: `427px`
- display: `flex`, flex-direction: `column`, justify-content: `center`, align-items: `flex-start`
- gap: `20px`
- padding: `30px`
- background-color: `rgb(255, 255, 255)`
- border-radius: `10px`
- **box-shadow: `rgba(113, 56, 242, 0.2) 0px 0px 30px 0px`**
  (note: `0.2` alpha here — a softer glow than the `0.7` used on the pillar cards)

### Card header row
- display: `flex`, flex-direction: `row`, justify-content: `flex-start`, align-items: `flex-start`
- gap: `20px`
- Icon box: `48 x 48`, `overflow: clip`, containing an absolutely-positioned `40 x 40` icon
- Text group: flex column, gap `5px`

### Divider (BOTH cards)
- Size: `367 x 1`
- background-color: `rgb(217, 217, 217)`
- border-radius: `100px`

Both cards carry a divider between the header block and the list. Card 2's children are
`[header (67), divider (1), 6 bullet rows]`.

### List row
- Width `367`. Card 1 rows measure `65 / 65 / 79 / 65 / 79`; card 2 rows measure `27` each.
- display: `flex`, flex-direction: `row`, gap: `10px`
- **align-items: `flex-start`** on card 1 (multi-line rows, check top-aligned).
  Card 2's single-line bullets read as centered because the row is only 27px tall.
- The check sits in a **`27 x 27` flex-centered box** (this is what produces the
  "367 x 27" row measurement), with `ListCheckIcon` rendered `11 x 8` inside
  (viewBox `-1 -1 13 10`, stroke `#7138F2`).
- **Card 1's body paragraph is authored at a fixed `width: 256px`** (computed
  `256px`, `max-width: none`). This is what drives the 65px / 79px row heights —
  without it the text wraps to fewer lines and the card comes out ~58px short.

### Card typography
- Card title: `24px` / line-height `28.8px` / weight `700` / color `rgb(13, 13, 15)`
- Card intro: `14px` / line-height `16.8px` / weight `400` / color `rgb(13, 13, 15)`
- Item title: `14px` / line-height `16.8px` / weight `700` / color `rgb(13, 13, 15)`
- Item body: `12px` / line-height `14.4px` / weight `400` / color `rgb(80, 80, 80)`
- Bullet text (card 2): `12px` / line-height `14.4px` / weight `400` / color `rgb(80, 80, 80)`

### CTA button — "Explore the current challenge →"
- Size: `241 x 34`
- background-color: **`rgb(113, 56, 242)`**
- padding: `10px 20px`
- border-radius: `5px`
- Label: `14px` / line-height `14px` / weight `600` / color `rgb(255, 255, 255)`
- href: `https://forms.fillout.com/t/cP5KQYqyDdus`
- The `→` is part of the text content.

## Card Content (verbatim)

### Card 1 — "What you get" (icon `WhatYouGetIcon`, rendered `40 x 40`)
Intro: `Everything you need to go from idea to launch, and nothing you don't.The program is free for selected founders.`
(rendered as two runs with no space at the join — reproduce as two lines)

Then a divider, then 5 items each with a `ListCheckIcon`:

1. **Mentoring & Expert Support** — `Regular 1:1 support from the Drommer team and selected experts to challenge decisions, unblock problems and move faster.`
2. **Weekly Workshops** — `Practical sessions every week focused on validation, offer design, pricing, go-to-market and sales.`
3. **Drommer HQ Access** — `Workspace in Chiasso (CH), monthly in-person gatherings with accommodation and lunch covered, and direct access to the Drommer founder community.`
4. **Founder Fridays** — `One day every week to build in person from Drommer HQ alongside the team and the other founders.`
5. **Full Venture Support** — `Hands-on support across strategy, operations, legal, accounting and fundraising as the venture evolves and reaches the next stage.`

### Card 2 — "Who it's for" (icon `WhoItsForIcon`, rendered `40 x 36`)
Intro: `We look for people who are serious about building, not just thinking about it.`

6 bullets, each with a `ListCheckIcon` (no bold titles, single line each):

1. `You're 21–28 and want to build something real`
2. `You want to launch a startup in 10 weeks`
3. `You have drive, but maybe not yet a clear idea`
4. `You're coachable and willing to be challenged`
5. `You want to work alongside people who are already doing it`
6. `You're ready to move, not wait`

Note the en-dash in `21–28` and the typographic apostrophes.

## States & Behaviors
- **Scroll:** N/A — static.
- **Hover:** not specified by the source; do not invent.

## Assets
- No images.
- Icons from `../shared/icons`: `WhatYouGetIcon`, `WhoItsForIcon`, `ListCheckIcon` (×11).

## Responsive Behavior
- **Desktop (≥1440px):** two cards side by side, centered, gap `20px`, different heights.
- **Tablet (810–1439px):** cards narrow; may stack depending on available width.
- **Mobile (≤809px):** single column, full-width cards, CTA below.
- Not visually confirmed at tablet/mobile — see the tooling note in `BEHAVIORS.md`.
