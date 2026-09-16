# Mission Specification

## Overview
- **Target file:** `src/components/sites/first-rose-853260-framer-app-21051feb/root-8a5edab2/Mission.tsx`
- **Screenshot:** `docs/design-references/first-rose-853260-framer-app-21051feb/root-8a5edab2/desktop-mission.png`
- **Interaction model:** static

## DOM Structure

```
section  (gradient background, flex column, gap 60px, padding 60px 100px)
└── div  (rail, max-width 1440px, flex ROW, gap 60px, align-items flex-start)
    ├── div  318 x 411  (image, border-radius 10px)
    └── div  1062 x 394 (text column, gap 60px)
        ├── div  (gap 30px)
        │   ├── div  (gap 30px)
        │   │   ├── p  "MISSION"
        │   │   └── p  "Young founders in. Startups out."
        │   └── div  (two paragraphs)
        └── a  "More about us"
```

## Computed Styles (exact, from getComputedStyle)

### Section
- display: `flex`, flex-direction: `column`
- justify-content: `center`, align-items: `center`
- gap: `60px`
- padding: `60px 100px`
- overflow: `clip`
- height: `531px`
- **background-image:**
  ```
  linear-gradient(rgb(13, 13, 15) 0%, rgb(65, 32, 140) 54.8077%)
  ```
  **This is a dark-to-purple gradient section, not a white one.** There is no
  `background-color`; the gradient carries it.

### Rail
- width / max-width: `1440px`
- display: `flex`, flex-direction: `row`
- justify-content: `flex-start`, align-items: `flex-start`
- gap: `60px`
- height: `411px`

### Image column (LEFT)
- Size: `318 x 411`
- border-radius: `10px`
- Inner: absolutely-positioned wrapper → `img` `318 x 411`, `object-fit: cover`,
  `border-radius: 10px`, `overflow: clip`
- File: `Ki2ol2ETbANpiUuw2Sb8TDgnGdQ.png`, `alt=""`

**The image is on the left and the text on the right.**

### Text column (RIGHT)
- Size: `1062 x 394`
- display: `flex`, flex-direction: `column`
- justify-content: `flex-start`, align-items: `flex-start`
- gap: `60px`

### "MISSION"
- font-size: `12px`, line-height: `14.4px`, font-weight: `700`
- letter-spacing: `2.4px`
- color: `rgb(255, 255, 255)`
- Rendered box: `69 x 14`

### "Young founders in. Startups out."
- font-size: `40px`, line-height: `48px`, font-weight: `700`
- color: `rgb(255, 255, 255)`
- Rendered box: `369 x 96` (wraps to two lines)

### Body paragraphs (two, each identical styling)
- font-size: `18px`, line-height: `21.6px`, font-weight: `400`
- color: `rgb(255, 255, 255)` (full opacity)
- Rendered box: `670 x 65` each

### "More about us" button
- Size: `132 x 34`
- display: `flex`, flex-direction: `row`, justify-content: `center`, align-items: `center`, gap: `15px`
- background-color: `rgb(255, 255, 255)`
- padding: `10px 20px`
- border-radius: `5px`
- Label: `14px` / line-height `14px` / weight `600` / letter-spacing `-0.28px` / color `rgb(0, 0, 0)`
- href: `./about-us`

## States & Behaviors
- **Scroll:** N/A — static.
- **Hover:** not specified by the source; do not invent.

## Assets
- `public/sites/first-rose-853260-framer-app-21051feb/root-8a5edab2/images/Ki2ol2ETbANpiUuw2Sb8TDgnGdQ.png`
- No icons.

## Text Content (verbatim)
```
MISSION
Young founders in. Startups out.
Drommer is a venture builder studio based in Ticino (CH). We run the Founder Program to find, develop and co-build incredible ventures with the next generation of entrepreneurs in Europe.
We don't teach entrepreneurship. We practice it. Everyone who enters the program works on real problems, gets real feedback, and builds toward a real company, with a team of other founders.
More about us
```

## Responsive Behavior
- **Desktop (≥1440px):** two columns, image `318px` fixed on the left, text fluid on the right, gap `60px`.
- **Tablet (810–1439px):** columns persist, text column narrows.
- **Mobile (≤809px):** stacks to a single column; image goes full-width above the text.
- Not visually confirmed at tablet/mobile — see the tooling note in `BEHAVIORS.md`.
