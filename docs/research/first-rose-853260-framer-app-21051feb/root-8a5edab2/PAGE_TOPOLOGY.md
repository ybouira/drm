# Page Topology — Drommer (first-rose-853260.framer.app/)

Source: https://first-rose-853260.framer.app/
Built route: `/` (`src/app/page.tsx`)
Page height: **9455px** at a 1707px content width.

All values below were measured on the live site via `getComputedStyle` and real
interaction probing. Per-component detail lives in `components/*.spec.md`; global
behavior lives in `BEHAVIORS.md`.

## Structure

The page is one flex column of **15 direct children**. The navbar is child 0 (inside a
`position: fixed` wrapper) and the footer is child 14 (a `display: contents` wrapper).

| # | Component | Page top | Height | Background | Interaction |
| - | --------- | -------- | ------ | ---------- | ----------- |
| 0 | **Navbar** | fixed | `58` | `rgba(0,0,0,0.45)` + `blur(8px)` | static |
| 1 | **Hero** | `0` | `945` | `#0d0d0f` + bottom gradient | static |
| 2 | **BuildFirstStartup** | `945` | `773` | `#0d0d0f` | static |
| 3 | **MarqueeStrip** | `1719` | `52` | `linear-gradient(90deg,#0d0d0f,#2a1262 54.3%,#0d0d0f)` | static |
| 4 | **WhatMakesDifferent** | `1771` | `599` | `#0d0d0f` | static |
| 5 | **Mission** | `2369` | `531` | `linear-gradient(#0d0d0f,#41208c 54.8%)` | static |
| 6 | **ProgramPhases** | `2900` | `937` | `#f8f8f8` | static |
| 7 | **ProgramOverview** | `3837` | `1002` | `#f8f8f8` | static |
| 8 | **CaseStudies** | `4839` | `1422` | `#ffffff` | static |
| 9 | **BuiltWith** | `6261` | `268` | transparent | static |
| 10 | **ReunionBanner** | `6529` | `649` | `#ffffff` | static |
| 11 | **VentureBuilderStudio** | `7178` | `594` | `#ffffff` (dark `#161616` card) | static |
| 12 | **Faq** | `7772` | `635` collapsed | `#f8f8f8` | **click accordion** |
| 13 | **FinalCta** | `8485` | `600` | `#0d0d0f` | static |
| 14 | **Footer** | `9085` | `449` | `#0d0d0f` | static |

**Only the FAQ is interactive.** Every other section is static — no scroll-driven
switching, no tabs, no carousels, no entrance animations. See `BEHAVIORS.md`.

## Corrections to the first-pass build

The initial clone was built by visual estimation. Re-extracting from the live DOM found
the following material errors, all now captured in the specs:

1. **`MarqueeStrip` was missing entirely** — a 52px strip of 10 labelled pills between
   BuildFirstStartup and WhatMakesDifferent. It was skipped because section discovery
   filtered out elements under 100px tall.
2. **Accent colour is `#7138F2`** (`rgb(113,56,242)`), not `#7c3aed`. A second purple,
   `#7844EE` (`rgb(120,68,238)`), is used for the Case Studies eyebrow and tag pills.
3. **BuildFirstStartup is a single row of four 300×450 cards** (`space-between`), not a 2×2 grid.
4. **WhatMakesDifferent is a single centered row of four cards** (`gap: 15px`) with a
   `0 0 30px rgba(113,56,242,0.7)` purple glow, not a 2×2 grid.
5. **Mission is a dark→purple gradient section** with the image on the **left**, not a
   white section.
6. **ProgramPhases** is a free-form absolutely-positioned stage. Its connector is a real
   `1164×263` SVG (previously hand-drawn), its ghost numerals are **gradient-filled text
   in Inter**, there is **no phase 01 label**, and phase 04 has **no body copy**.
7. **ProgramOverview's CTA is a purple button below both cards**, not a text link inside
   the "Who it's for" card.
8. **CaseStudies is 1 full-width card + 2 half-width cards**, not a 3-across row.
9. **BuiltWith logos have no grayscale/hover treatment** — `filter: none`, `opacity: 1`.
   The previous grayscale-to-color hover was invented.
10. **The FAQ `+` becomes a `−`, not an `×`** (the vertical bar is removed, nothing
    rotates), and **multiple rows can be open at once** — it is not single-open.
11. **FinalCta has no radial glow**; the purple is card B's own
    `linear-gradient(270deg,#41208c,#7138F2)`.
12. **Footer has 4 socials**, and TikTok is an `<img>`
    (`Dx3NDQRbBFXMEHBi12YiSiAcoOo.png`) — the file previously logged as "unused".
13. **Hero** is `#0d0d0f` with a `60px/60px` headline and a **1px solid white** secondary
    button border (drawn on `::after`), not `white/30`.

## Global notes

- Fonts: **Plus Jakarta Sans** (nearly everything) and **Inter** (only the ProgramPhases
  ghost numerals), loaded via `next/font/google` in `src/app/layout.tsx`.
- Section rails are capped at `max-width: 1440px`, **except `ProgramOverview` and
  `BuiltWith`**, which run to the full content width inside their padding.
- Most sections use `padding: 60px 100px`. Exceptions: ProgramPhases `100px 0`,
  FinalCta `100px`, BuiltWith `0` (inner `60px 0`), Footer `64px 60px 50px`.
- Framer draws several borders on `::after` at `0.666667px` (1 device pixel at dpr 1.5).
  Implement these as `1px`.
- Breakpoints (from the site's own CSSOM): desktop `≥1440px`, tablet `810–1439px`,
  mobile `≤809px`.

## Excluded from the clone

Framer's own platform chrome at the bottom of the live page — the "Made in Framer" badge
(`.__framer-badge`) and the "Create a free website with Framer… Edit Content" strip. These
are not Drommer content.
