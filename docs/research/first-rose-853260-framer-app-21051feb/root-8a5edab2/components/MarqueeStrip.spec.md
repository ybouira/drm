# MarqueeStrip Specification

## Overview
- **Target file:** `src/components/sites/first-rose-853260-framer-app-21051feb/root-8a5edab2/MarqueeStrip.tsx`
- **Screenshot:** `docs/design-references/first-rose-853260-framer-app-21051feb/root-8a5edab2/desktop-build-first-startup.jpg`
  (visible as the purple band at the bottom of that capture)
- **Interaction model:** static

> **This component was entirely missing from the previous build.** It sits between
> `BuildFirstStartup` and `WhatMakesDifferent` at page y `1719`, is only `52px` tall, and
> was skipped because section discovery filtered for elements over `100px`. It is not a
> decorative divider — it carries ten text labels.

## DOM Structure

```
div  (strip, 1692 x 52, overflow clip, purple gradient background)
└── div  (1692 x 12, flex, gap 30px, overflow clip)
    └── ul  (flex, gap 30px, transform translateX(-30px))
        └── 20 x li   — alternating dot, label, dot, label, …
            ├── li → div  6 x 6   purple dot
            └── li → div  label text
```

## Computed Styles (exact, from getComputedStyle)

### Strip
- Size: `1692 x 52` (full viewport width, no `max-width`)
- display: `flex`, flex-direction: `row`
- justify-content: `flex-start`, align-items: `center`
- gap: `20px`
- padding: `20px 0px`
- **overflow: `clip`**
- **background-image:**
  ```
  linear-gradient(90deg,
    rgb(13, 13, 15) 0%,
    rgb(42, 18, 98) 54.3269%,
    rgb(13, 13, 15) 100%
  )
  ```
  (a horizontal purple glow that peaks slightly right of centre)

### Inner wrapper
- Size: `1692 x 12`
- display: `flex`, gap: `30px`, overflow: `clip`

### `ul` track
- display: `flex`, gap: `30px`
- **transform: `translateX(-30px)`**
- `list-style` removed (items render inline, no markers)

### Dot `li`
- Inner `div`: `6 x 6`
- background-color: `rgb(113, 56, 242)`
- border-radius: `100px`

### Label `li`
- font-size: `10px`
- line-height: `12px`
- font-weight: `400`
- letter-spacing: `normal`
- color: `rgb(255, 255, 255)` — **but the wrapping `div` is `opacity: 0.5`**, so the label
  reads grey against the band. Reading `color` alone on the `<p>` is misleading; the
  effective appearance is white at 50%.

## Ticker behavior — IT ANIMATES

> **Correction.** Previously recorded as static from a frozen `translateX(-30px)` reading.
> That sample came from a background tab with `requestAnimationFrame` suspended; `-30px` is
> the ticker's initial offset and ships in the server-rendered HTML.

A Framer **Ticker**, configured `tickerEffectVelocity: 50`, `tickerEffectGap: 30px`,
`tickerEffectOverflow: clip`. It scrolls **left at 50px/s and loops**.

**Implementation:** two identical groups in one track, each with a trailing `30px` gap, and
a `linear infinite` keyframe translating `0 → -50%`. One group is ~1431px plus the trailing
gap, so a pass is `(1431 + 30) / 50 ≈ 29.2s`. Disable under `prefers-reduced-motion`.

## Content (verbatim, in order)

The list alternates dot → label, starting with a dot, for 10 labels (20 `<li>` total):

| # | Label | Measured width |
| - | ----- | -------------- |
| 1 | `CHIASSO HQ`       | `64px`  |
| 2 | `FOUNDER PROGRAM`  | `102px` |
| 3 | `VENTURE BUILDING` | `94px`  |
| 4 | `PROOF TABLE`      | `67px`  |
| 5 | `MILESTONE-BASED`  | `94px`  |
| 6 | `CO-FOUNDER`       | `70px`  |
| 7 | `TIME BANK`        | `51px`  |
| 8 | `SEED VALIDATION`  | `85px`  |
| 9 | `REAL PROJECTS`    | `77px`  |
| 10| `TOP 10% ACCEPTED` | `97px`  |

All labels are already uppercase in the content — no `text-transform` is applied.

## States & Behaviors
- **Scroll:** the ticker runs continuously at 50px/s regardless of scroll position.
- **Hover:** not specified by the source; do not invent.

## Assets
- No images, no icons.

## Responsive Behavior
- **Desktop (≥1440px):** single clipped row at `52px` tall, gap `30px`, offset `-30px`.
- **Tablet (810–1439px) / Mobile (≤809px):** the row stays clipped and simply shows fewer
  labels as the viewport narrows. Keep `overflow: clip` so it never wraps or grows taller.
- Not visually confirmed at tablet/mobile — see the tooling note in `BEHAVIORS.md`.
