# Tablet tier (810–1439px) — measured spec

Measured on the live site at an inner width of **958px**. Every value here comes from
`getComputedStyle` on https://first-rose-853260.framer.app/.

> Why this file exists: earlier passes measured only the desktop tier and *reasoned* about
> tablet/mobile. That was wrong in almost every section — the live site restyles type,
> padding and layout at this tier. The clone's tablet page was **11896px** tall against the
> live site's **10873px**.

Target section heights at 958px (this is the acceptance test):

| Section | Live height |
| ------- | ----------- |
| Hero | `992` |
| BuildFirstStartup | `1251` |
| MarqueeStrip | `52` |
| WhatMakesDifferent | `890` |
| Mission | `531` |
| ProgramPhases | `780` |
| ProgramOverview | `1440` |
| CaseStudies | `1164` |
| BuiltWith | `256` |
| ReunionBanner | `649` |
| VentureBuilderStudio | `537` |
| Faq | `750` |
| FinalCta | `912` |
| **Document** | **`10873`** |

## 1. Global type scale — applies to EVERY section

| Role | Desktop (≥1440) | **Tablet (810–1439)** |
| ---- | --------------- | --------------------- |
| Eyebrow (`PROGRAM PHASES`, `IN 4 PILLARS`, …) | `12px / 14.4px` w700, ls `2.4px` | **`10px / 12px`** w700 |
| Section headline | `40px / 48px` w700 | **`32px / 38.4px`** w700 |
| Subtitle & 18px body copy | `18px / 21.6px` w400 | **`16px / 19.2px`** w400 |
| BuildFirst `This is` | `40px / 50px` w400 | **`38px / 50px`** w400 |
| BuildFirst `Where you build…` | `50px / 50px` w700 | **`48px / 48px`** w700 |
| ReunionBanner headline | `40px / 40px` w400 | `40px / 40px` (unchanged) |
| Buttons | `14px / 14px` w600 | `14px / 14px` (unchanged) |
| FinalCta headline | `60px / 60px` w700 | `60px / 60px` (unchanged) |

Card-level type (pillar titles, list items, FAQ rows, case-study descriptions) is
**unchanged** from desktop unless a section below says otherwise.

## 2. Section padding & gap at tablet

| Section | padding | section gap | inner rail |
| ------- | ------- | ----------- | ---------- |
| Hero | `0` (the panel carries its own) | `10px` | content rail `863` wide, gap `20px` |
| BuildFirstStartup | `60px 40px` | `50px` | rail gap `40px` |
| MarqueeStrip | `20px 0` | `20px` | unchanged |
| WhatMakesDifferent | `60px 40px` | `60px` | rail gap `60px` |
| Mission | `60px 40px` | `60px` | rail **row**, gap `60px`, align-start |
| ProgramPhases | `60px 0` | `60px` | see §4 |
| ProgramOverview | `60px 40px` | `60px` | cards **column**, gap `20px` |
| CaseStudies | `60px 40px` | `50px` | rail gap `50px` |
| BuiltWith | `0` | `30px` | inner gap `40px`, strip row gap `60px` |
| ReunionBanner | `60px 20px` | `10px` | card `903 x 529` |
| VentureBuilderStudio | `60px 20px` | `60px` | card **row**, gap `60px`, card padding `20px` |
| Faq | `60px 40px` | `60px` | rail **column**, gap `60px`, align-start |
| FinalCta | `100px 40px` | `40px` | cards **column**, gap `40px` |

## 3. Per-section layout at tablet

### BuildFirstStartup
- Cards become a **2-column CSS grid**, `grid-template-columns: 416.5px 416.5px`,
  **`gap: 30px`** (i.e. two equal fluid columns). Two rows.
- Card block is `863 x 930`; heading block `863 x 161`.

### WhatMakesDifferent
- Cards become a **2-column grid**, `424px 424px`, **`gap: 15px`**.
- Each card measures `424 x 293` — the height is unchanged from desktop.
- Card block `863 x 601`; heading block `863 x 109`.

### Mission
- **Stays two columns** — rail is `flex-direction: row`, `gap: 60px`, `align-items: flex-start`.
- Rail `863 x 411`; the text column is `528 x 338`, gap `40px`. Image keeps its `318 x 411` box.

### ProgramOverview
- The two cards **stack**: container is `flex-direction: column`, `gap: 20px`,
  `align-items: center`.
- Each card keeps its **fixed `427px` width** and its desktop height
  (`427 x 619` and `427 x 432`) — do not let them stretch.
- Card block `863 x 1071`; header `863 x 95`.
- **This is the single biggest error in the current build** (cards are side by side, making
  the section 944px instead of 1440px).

### CaseStudies
- Card height drops to **`400px`** (desktop is `522px`).
- Featured card is full width (`863 x 400`); the two secondary cards stay **side by side**
  in a row with `gap: 20px`, also `400` tall.
- Cards column `863 x 820`, gap `20px`; header `863 x 90`, gap `30px`.

### BuiltWith
- Section padding `0`, gap `30px`; inner gap `40px`.
- Logo strip stays one clipped row with `gap: 60px` — the ticker keeps running.
- Header block `943 x 60`.

### ReunionBanner
- Section padding `60px 20px`; card `903 x 529`.

### VentureBuilderStudio
- **Stays two columns** — the dark card is `903 x 417`, `flex-direction: row`,
  `gap: 60px`, `align-items: flex-start`, and its **padding drops to `20px`**.
- Text column `492 x 377`, gap `60px`. Image is the second child.
- Currently the clone stacks this, making it `1002px` instead of `537px`.

### Faq
- The two columns **stack**: rail is `flex-direction: column`, `gap: 60px`,
  `align-items: flex-start`.
- Header column `448 x 55` (gap `30px`); the accordion list is `863 x 515` — row metrics
  (60px collapsed, 5px gap) are unchanged from desktop.

### FinalCta
- Already corrected: cards stack, section padding `100px 40px`, card `justify-content: center`
  with `gap: 60px`, headline held at `60px/60px`.

## 4. ProgramPhases at tablet — a THIRD layout

Not the desktop stage reflowed, and not the mobile stack. At tablet the site renders a
**smaller absolutely-positioned S-curve stage**: `810 x 486`, horizontally centred in the
`943`-wide diagram area (offset `L67`).

Header differs too:
- Headline: `How the Founder Program actually works`
- **Subtitle: `Two phases. Milestone-based progression.`** — different copy from the
  desktop `Four steps to turn a real problem into an AI-native service business.`

Stage contents (coordinates are relative to the `810 x 486` stage):

| Element | left | top | size |
| ------- | ---- | --- | ---- |
| Connector SVG | `52` | `128` | `703 x 159` |
| Node 1 (`PhaseOneIcon` 23×33) | `20` | `252` | `69 x 70` |
| Node 2 (`PhaseTwoIcon` 30×30) | `172` | `146` | `69 x 70` |
| Node 3 (`PhaseThreeIcon` 32×33) | `427` | `222` | `69 x 70` |
| Node 4 (`PhaseFourIcon` 25×26) | `715` | `167` | `69 x 70` |
| `01 Founder Exploration` | `70` | `330` | `198 x 96` |
| `02 Proof Table` | `219` | `37` | `111 x 96` |
| `03 Analysis Phase` | `474` | `294` | `149 x 96` |
| `04 Venture Building` | `616` | `17` | `162 x 96` |

Each text block is **numeral + title only — no body copy at this tier**, stacked with
`gap: 0`. The numeral keeps the gradient-filled Inter treatment (`66 x 72`), the title is
`20px / 24px` w700 (`24px` tall).

The four phase names here are the full set (`Founder Exploration`, `Proof Table`,
`Analysis Phase`, `Venture Building`), not the desktop stage's partial set.

## 5. Mobile (≤809px)

**Still not measured** — the viewport could not be resized below this. The mobile variant
of ProgramPhases is known from the compiled source to be a vertical stack carrying the full
body copy for all four phases (see `components/ProgramPhases.spec.md`). Everything else at
mobile remains reasoned, not measured.
