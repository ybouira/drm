# VentureBuilderStudio Specification

## Overview
- **Target file:** `src/components/sites/first-rose-853260-framer-app-21051feb/root-8a5edab2/VentureBuilderStudio.tsx`
- **Screenshot:** `docs/design-references/first-rose-853260-framer-app-21051feb/root-8a5edab2/desktop-venture-studio.png`
- **Interaction model:** static

## DOM Structure

```
section  (WHITE background, flex column, center, gap 60px, padding 60px 100px)
└── div  (DARK card, 1440 x 474, #161616, radius 10px, padding 40px, flex ROW, gap 60px)
    ├── div  (text column, 798 x 394, flex column, gap 60px)   ← LEFT
    │   ├── div
    │   │   ├── p  "VENTURE BUILDER STUDIO"
    │   │   ├── p  headline
    │   │   └── two body paragraphs
    │   └── a  "Start building with us →"
    └── div  → img  (502 x 394, radius 10px)                   ← RIGHT
```

**The section background is white; the content sits inside a dark `#161616` card.** All
the white text belongs to that card, not to the section.

## Computed Styles (exact, from getComputedStyle)

### Section
- display: `flex`, flex-direction: `column`, justify-content: `center`, align-items: `center`
- gap: `60px`
- padding: `60px 100px`
- background-color: `rgb(255, 255, 255)`
- height: `594px`

### Card
- Size: `1440 x 474`, max-width `1440px`
- background-color: **`rgb(22, 22, 22)`**
- border-radius: `10px`
- padding: `40px`
- display: `flex`, flex-direction: `row`
- justify-content: `flex-start`, align-items: `flex-start`
- gap: `60px`

### Text column (left, offset `40px` from card edge)
- Size: `798 x 394`
- display: `flex`, flex-direction: `column`, gap: `60px`

### "VENTURE BUILDER STUDIO"
- `12px` / `14.4px` / weight `700` / letter-spacing `2.4px` / color `rgb(255, 255, 255)`

### Headline — "Not just a founder program. We build companies too."
- `40px` / `48px` / weight `700` / color `rgb(255, 255, 255)`
- Rendered as two runs with no space at the join ("program.We build") — reproduce as two
  lines / a `<br>`.

### Body paragraphs (two)
- `18px` / `21.6px` / weight `400` / color `rgb(255, 255, 255)`

### "Start building with us →" button
- Size: `187 x 34`
- background-color: `rgb(255, 255, 255)`
- padding: `10px 20px`, border-radius: `5px`
- Label: `14px` / `14px` / weight `600` / letter-spacing `-0.28px` / color `rgb(0, 0, 0)`
- href: `https://schedule.fillout.com/t/uGGCRZmyGvus`

### Image (right, offset `898px` from card edge)
- File: `vjgh5nFn3fu3gvShiInOR0ILTs.png`
- Rendered `502 x 394`, `object-fit: cover`, `border-radius: 10px`
- `alt=""`

## States & Behaviors
- **Scroll:** N/A — static.
- **Hover:** not specified by the source; do not invent.

## Assets
- `public/sites/first-rose-853260-framer-app-21051feb/root-8a5edab2/images/vjgh5nFn3fu3gvShiInOR0ILTs.png`
- No icons.

## Text Content (verbatim)
```
VENTURE BUILDER STUDIO
Not just a founder program.
We build companies too.
Beyond the Founder Program, Drommer works with startups and companies that need an operational partner to design, build and launch digital products.
If you have an initiative that needs to move fast and you don't want to build an internal team from scratch, we can build it with you.
Start building with us →
```

## Responsive Behavior
- **Desktop (≥1440px):** card `1440 x 474`, text left (`798px`), image right (`502px`), gap `60px`.
- **Tablet (810–1439px):** card fluid; text and image columns narrow.
- **Mobile (≤809px):** card stacks to a single column — text first, image below full-width.
- Not visually confirmed at tablet/mobile — see the tooling note in `BEHAVIORS.md`.
