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

### Ticker behavior — IMPORTANT
This is a Framer Ticker component, but it **does not animate**. The track's transform was
sampled 8 times over 2 seconds while the section was in the viewport and stayed at a
constant `matrix(1, 0, 0, 1, -60, 0)`.

**Build it as a static row with a `-60px` horizontal offset and `overflow: clip`.** Do not
add a marquee/scrolling animation. The `-60px` offset means the first logo is partially
clipped at the left edge (its left edge sits at `-60px`).

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
- **Scroll:** N/A — static; the ticker does not move.
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
