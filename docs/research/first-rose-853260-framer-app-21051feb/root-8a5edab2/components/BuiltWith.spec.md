# BuiltWith Specification

## Overview
- **Target file:** `src/components/sites/first-rose-853260-framer-app-21051feb/root-8a5edab2/BuiltWith.tsx`
- **Screenshot:** (not captured — see `docs/design-references/first-rose-853260-framer-app-21051feb/root-8a5edab2/` for the sections that were)
- **Interaction model:** static

## DOM Structure

```
section  (transparent, flex column, gap 30px, padding 0)
└── div  (inner, padding 60px 0, flex column, align-items center, gap 40px)
    ├── div  (header, align-items center, gap 10px)
    │   ├── p "BUILT WITH DROMMER"
    │   └── p "Projects we've been part of"
    └── div  (logo strip, 1692 x 36, overflow CLIP)
        └── div (track, transform translateX(-60px), flex row, gap 60px)
            └── 9 x img
```

## Computed Styles (exact, from getComputedStyle)

### Section
- display: `flex`, flex-direction: `column`, justify-content: `center`, align-items: `flex-start`
- gap: `30px`
- padding: `0px`
- background-color: **transparent** (inherits the page white)
- height: `268px`

### Inner
- padding: `60px 0px`
- display: `flex`, flex-direction: `column`, align-items: `center`, gap: `40px`

### Header
- display: `flex`, flex-direction: `column`, align-items: `center`, gap: `10px`
- Height `72px`

### "BUILT WITH DROMMER"
- `12px` / `14.4px` / weight `700` / letter-spacing `2.4px` / color `rgb(113, 56, 242)`

### "Projects we've been part of"
- `40px` / `48px` / weight `700` / color `rgb(13, 13, 15)`

### Logo strip
- Size: `1692 x 36` (full content width; no `max-width` cap)
- display: `flex`, flex-direction: `row`
- justify-content: `flex-start`, align-items: `center`
- gap: `60px`
- **overflow: `clip`**
- Inner track: `max-width: 100%`, **`transform: translateX(-60px)`**

### Ticker behavior — IT ANIMATES

> **Correction.** This was previously recorded as static because the track's transform read
> as a constant `translateX(-60px)`. That sample was taken in a background tab with
> `requestAnimationFrame` suspended. `-60px` is the ticker's *initial* offset — it is
> already in the server-rendered HTML.

A Framer **Ticker**, configured `tickerEffectVelocity: 50`, `tickerEffectGap: 60px`,
`tickerEffectOverflow: clip`, `tickerEffectDraggable: false`. It scrolls **left at a
constant 50px/s and loops**.

**Implementation:** two identical groups in one track, each with a trailing `60px` gap, and
a `linear infinite` keyframe translating the track `0 → -50%`. One group measures ~1229px
of logos plus the trailing gap, so a pass is `(1229 + 60) / 50 ≈ 25.8s`. Disable under
`prefers-reduced-motion: reduce`.

## Logos (9, in order)

Each logo has its **own rendered size** — they are not uniformly scaled. `object-fit: cover`,
no filter, `opacity: 1`.

| # | File | Rendered | Natural | Left offset in strip |
| - | ---- | -------- | ------- | -------------------- |
| 1 | `evFt8dWV1fAgwyCIUy9TIChg.png`    | `71 x 36`  | `258 x 129` | `-60` |
| 2 | `Z0PfjoMyRrLcr0cBNthXtaeJVc.png`  | `100 x 22` | `100 x 22`  | `71`  |
| 3 | `iuLZKqKR3zA2zCPleN6hBxkDS2I.png` | `125 x 26` | `124 x 26`  | `231` |
| 4 | `cKfXcRIQyWSu88488VFPgx9Z6lE.png` | `97 x 23`  | `97 x 23`   | `416` |
| 5 | `Qcupcm3xzW4DEddi1G5Wp9oJvbY.png` | `41 x 28`  | `141 x 98`  | `573` |
| 6 | `jTvdO3C8DYBwDzKPwUlvfyXIM.png`  | `89 x 14`  | `89 x 13`   | `674` |
| 7 | `ndP5UuTVxgvYNieoa4TanR2sk.png`   | `50 x 33`  | `512 x 336` | `823` |
| 8 | `4qYjIqqmRFZbKj43XEJ4oF3RPiQ.webp`| `65 x 25`  | `65 x 25`   | `933` |
| 9 | `LQBHYIlIjbvd5DSWiR2hDaHmc.webp`  | `111 x 26` | `111 x 25`  | `1058`|

All have empty `alt`. All are `loading="lazy"` on the live site.

## States & Behaviors
- **Scroll:** the ticker runs continuously at 50px/s regardless of scroll position.
- **Hover:** **none.** The logos render at `opacity: 1` with `filter: none`.
  The previous pass applied a grayscale-to-color hover effect — that was **invented** and
  must be removed.

## Assets
Base path `public/sites/first-rose-853260-framer-app-21051feb/root-8a5edab2/images/` —
all nine files listed above are already downloaded.

## Text Content (verbatim)
```
BUILT WITH DROMMER
Projects we've been part of
```

## Responsive Behavior
- **Desktop (≥1440px):** single clipped row, gap `60px`, track offset `-60px`.
- **Tablet (810–1439px) / Mobile (≤809px):** the row stays clipped; fewer logos are
  visible as the viewport narrows. Consider allowing wrap below `810px`.
- Not visually confirmed at tablet/mobile — see the tooling note in `BEHAVIORS.md`.
