# Faq Specification

## Overview
- **Target file:** `src/components/sites/first-rose-853260-framer-app-21051feb/root-8a5edab2/Faq.tsx`
- **Screenshot:** `docs/design-references/first-rose-853260-framer-app-21051feb/root-8a5edab2/desktop-faq-collapsed.jpg`,
  `desktop-faq-expanded.png`
- **Interaction model:** **click-driven accordion — INDEPENDENT toggles, multiple rows may be open at once.**

This is the only interactive component on the page. The model was verified by clicking
rows on the live site: opening row 2 did **not** close row 1 — both showed the open
(`−`) state and a `99px` height simultaneously. Do **not** implement single-open
("only one at a time") behavior.

All rows start **collapsed** on load.

## DOM Structure

```
section  (#f8f8f8, flex column, center, gap 60px, padding 60px 100px)
└── div  (rail, max-width 1440px, flex ROW, gap 60px)
    ├── div  (header column, 560 x 67, flex column, gap 30px)   ← LEFT
    │   ├── p "FAQ"
    │   └── p "Everything you need to know"
    └── div  (list, 820 wide, flex column, gap 5px)             ← RIGHT
        └── 8 x item
```

Each item:

```
div  (item, 820 x 60 collapsed / 820 x 99 open, overflow HIDDEN,
      ::after border-bottom 1px solid #d2d2d2)
├── div  (header, 820 x 60, padding 10px 0 0, cursor POINTER)
│   ├── p   question (780 x 18)
│   └── div icon  (+ / −)
└── div  (answer, 800 x 39)
```

## Computed Styles (exact, from getComputedStyle)

### Section
- display: `flex`, flex-direction: `column`, justify-content: `center`, align-items: `center`
- gap: `60px`
- padding: `60px 100px`
- background-color: `rgb(248, 248, 248)`
- height: `635px` (all collapsed)

### Rail
- max-width: `1440px`, display `flex`, flex-direction `row`, gap `60px`
- Left header column: `560 x 67`, flex column, gap `30px`
- Right list column: `820px` wide

### "FAQ"
- `12px` / `14.4px` / weight `700` / letter-spacing `2.4px` / color `rgb(113, 56, 242)`

### "Everything you need to know"
- `40px` / `48px` / weight `700` / color `rgb(13, 13, 15)`

### List
- display: `flex`, flex-direction: `column`, **gap: `5px`**
- Height `515px` with all rows collapsed (8 × 60 + 7 × 5)

### Item
- Width `820px`
- **Collapsed height: `60px`**
- **Open height: `99px`** (60 + the 39px answer)
- **overflow: `hidden`** ← this is what clips the answer
- **Divider is on `::after`:** `border-bottom: 0.666667px solid rgb(210, 210, 210)`
  (`0.667px` is 1 device pixel at dpr 1.5 → implement as **1px solid `#d2d2d2`**)

### Item header
- Size: `820 x 60`
- padding: `10px 0px`
- **cursor: `pointer`**
- display: `flex`, flex-direction: `row`, justify-content: `space-between`, align-items: `center`
- Children: the question (`780 x 18`) and a **`40 x 40` toggle box**.
  **That 40x40 box is what makes the row 60px tall** (40 + 10 + 10). Sizing the toggle
  to the 14px bars alone yields a 38px row and a badly short section.

### Question text
- `15px` / `18px` / weight `600` / letter-spacing `-0.3px` / color `rgb(0, 0, 0)`
- Rendered box: `780 x 18`

### Answer text
- `15px` / `19.5px` / weight `400` / letter-spacing `-0.15px` / color `rgb(153, 153, 153)`
- Rendered box: `800 x 39`

### The +/− icon — built from two bars, not an SVG
The FAQ section contains **zero SVG elements**. The icon is two plain `div` bars:

| State | Bars present |
| ----- | ------------ |
| **Collapsed (`+`)** | horizontal `14 x 2`, `border-radius: 1px`, `background: rgb(0, 0, 0)` **and** vertical `2 x 14`, `border-radius: 10px`, `background: rgb(0, 0, 0)` |
| **Open (`−`)**      | **only** the horizontal `14 x 2` bar — the vertical bar is removed from the DOM |

Neither bar is rotated (`transform: none` in both states) and neither fades
(`opacity: 1`). The previous pass implemented a `+` rotating 45° into an `×` — that is
**wrong**; it is a genuine plus→minus swap.

### Transition
`transition-duration` computes to **`0s`** on the item — the expand/collapse is animated by
framer-motion (JS), not CSS. A short CSS height/opacity transition (~200–300ms ease) is an
acceptable equivalent; the source does not expose a CSS duration to copy.

## Content (verbatim, in order)

1. **How long do projects usually last?**
   `Validate: 8–12 weeks. Launch: 3–6 months. Scale: 6+ months. We define duration based on the outcome to achieve, not on billable hours.`
2. **Can you tell me more about the talent community?**
   `Yes. For selected founders, the program is completely free. Drommer co-builds with you and invests in the launch. You don't pay to be here, you earn your place.`
3. **Do I need to have an idea before applying?**
   `No. You don't need a finished idea to apply. What we look for is drive, curiosity, and the willingness to do the work. Ideas can be developed, the right mindset can't be taught. If you're serious about building, that's enough to start.`
4. **What happens if I don’t pass a phase?**
   `Each phase includes formal evaluation checkpoints. If objectives are not met, the program ends. This system is designed to maintain high standards and work only with those who can sustain the required level.`
5. **When do I start working on my own startup?**
   `From the early stages, you begin exploring and developing your own idea. As concrete signals emerge, you move into a more structured validation phase, with dedicated time and team support.`
6. **What happens if I don’t pass a phase?**
   `Each phase includes formal evaluation checkpoints. If objectives are not met, the program ends. This system is designed to maintain high standards and work only with those who can sustain the required level.`
7. **What happens when the idea is validated?**
   `If the initiative shows strong metrics, we proceed with the spin-off. Drommer invests in the launch and remains an operational partner. The startup is yours and you retain the majority.`
8. **Do I need to cover accommodation for the monthly gatherings in Chiasso?**
   `No. Accommodation and lunch during the monthly in-person gatherings are fully covered by Drommer.`

**Rows 4 and 6 are a genuine duplicate** on the live site — identical question *and*
identical answer. Keep both; do not de-duplicate.

Questions use a typographic apostrophe (`don’t`) and an en-dash in `8–12` and `3–6`.

Note that row 2's question asks about the "talent community" but its answer is about the
program being free — that mismatch is present on the live site. Reproduce it as-is.

## States & Behaviors

### Expand / collapse
- **Trigger:** click on the item header (`cursor: pointer`)
- **State A (collapsed):** item height `60px`, icon shows `+` (both bars)
- **State B (open):** item height `99px`, icon shows `−` (horizontal bar only)
- **Independence:** verified — multiple rows can be open simultaneously
- **Initial state:** all collapsed

### Hover
Not specified by the source beyond `cursor: pointer`; do not invent colour changes.

## Assets
- No images, no icons, no SVGs.

## Responsive Behavior
- **Desktop (≥1440px):** two columns — header left (`560px`), list right (`820px`), gap `60px`.
- **Tablet (810–1439px):** columns narrow; list stays to the right.
- **Mobile (≤809px):** stacks to one column — header above the list, list full-width.
- Not visually confirmed at tablet/mobile — see the tooling note in `BEHAVIORS.md`.
