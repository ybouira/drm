# Footer Specification

## Overview
- **Target file:** `src/components/sites/first-rose-853260-framer-app-21051feb/root-8a5edab2/Footer.tsx`
- **Screenshot:** (not captured — see `docs/design-references/first-rose-853260-framer-app-21051feb/root-8a5edab2/` for the sections that were)
- **Interaction model:** static

## DOM Structure

```
footer  (#0d0d0f, padding 64px 60px 50px, flex column, center, gap 75px)
└── div  (rail, max-width 1440px, flex column, gap 75px)
    ├── div  (top row, 1440 x 134, flex row, align-items flex-start, GAP 349px)
    │   ├── div  wordmark   230 x 40
    │   ├── div  "Company"       column  116 x 134, gap 20px
    │   └── div  "Opportunities" column   95 x  80, gap 20px
    ├── div  (social row, 162 x 34, flex row, center, gap 20px)
    │   ├── a Instagram  23 x 23
    │   ├── a YouTube    26 x 18
    │   ├── a LinkedIn   19 x 18
    │   └── a TikTok     34 x 34   (an <img>, not an SVG)
    └── div  (bottom row, 1440 x 17, flex row, justify-content space-between, align-items center)
        └── p copyright
```

## Computed Styles (exact, from getComputedStyle)

### Footer
- Size: `1692 x 449` (starts at page y `9085`)
- background-color: `rgb(13, 13, 15)`
- padding: `64px 60px 50px`
- display: `flex`, flex-direction: `column`
- justify-content: `center`, align-items: `center`
- gap: `75px`

### Rail
- max-width: `1440px`, display `flex`, flex-direction `column`, gap `75px`

### Top row
- Size: `1440 x 134`
- display: `flex`, flex-direction: `row`
- justify-content: `flex-start`, align-items: `flex-start`
- **gap: `349px`**

### Wordmark
- Size: `230 x 40`
- Use `DrommerWordmarkLarge` from `../shared/icons` (viewBox `0 0 230 40`, recovered
  verbatim from the site's `background-image` data URI). This is the **large** wordmark —
  a different asset from the `95 x 18` one in the navbar.

### Link columns
- Both: display `flex`, flex-direction `column`, gap `20px`
- "Company" column: `116 x 134`
- "Opportunities" column: `95 x 80`

### Column heading
- `14px` / `16.8px` / weight `500` / color `rgb(255, 255, 255)`

### Column link
- `14px` / `16.8px` / weight `400` / color `rgb(147, 147, 147)`
- **Hover: `#7138F2`.** The live anchors set
  `--framer-link-hover-text-color: #7138f2` (and `--framer-link-text-color: gray`).
  An earlier pass reported footer links as having no hover because it only looked for
  component `:hover` rules; the colour lives in these Framer link custom properties.

### Social row
- Size: `162 x 34`
- display: `flex`, flex-direction: `row`, justify-content: `center`, align-items: `center`
- gap: `20px`

| Platform | Size | Implementation | href |
| -------- | ---- | -------------- | ---- |
| Instagram | `23 x 23` | `InstagramIcon` (SVG) | `https://www.instagram.com/drommer.ch` |
| YouTube   | `26 x 18` | `YouTubeIcon` (SVG)   | `https://youtube.com/@drommerhq` |
| LinkedIn  | `19 x 18` | `LinkedInIcon` (SVG)  | `https://www.linkedin.com/company/drommerch/` |
| TikTok    | `34 x 34` | **`<img>`** — `Dx3NDQRbBFXMEHBi12YiSiAcoOo.png` | `https://www.tiktok.com/@drommer.ch` |

**TikTok is an image, not an SVG.** The file `Dx3NDQRbBFXMEHBi12YiSiAcoOo.png` was
previously logged in `ARTIFACT_MANIFEST.md` as an "unused UI image" — it is the TikTok
icon and must be placed here.

The three SVG icons compute `fill: rgb(0, 0, 0)` on the `<svg>` element, but they render
visibly on the dark footer — the fill is carried by the inner paths. Render them at the
sizes above without recolouring; verify against the screenshot.

### Bottom row
- Size: `1440 x 17`
- display: `flex`, flex-direction: `row`, justify-content: `space-between`, align-items: `center`
- Contains a single `219 x 17` text block (left-aligned by the space-between)

### Copyright — TWO-TONE
- `14px` / `16.8px` / weight `400`
- `Drommer 2026 ` is wrapped in a `<span>` forced to **`rgb(255, 255, 255)`**;
  the trailing `Built for founders` inherits the grey **`rgb(147, 147, 147)`**.
- Markup: `<span style="--framer-text-color: rgb(255,255,255)">Drommer 2026 </span> Built for founders`

## Text Content (verbatim)

```
Company
  Founder Program    -> ./#program-phases
  For Companies      -> ./#for-companies
  Case Studies       -> ./case-studies
  About Us           -> ./about-us

Opportunities
  Start a project    -> https://schedule.fillout.com/t/uGGCRZmyGvus
  Apply now          -> https://forms.fillout.com/t/cP5KQYqyDdus

Drommer 2026 Built for founders
```

The copyright line renders exactly as `Drommer 2026 Built for founders` — no `©`, no
separators.

## States & Behaviors
- **Scroll:** N/A — static.
- **Hover:** not specified by the source; do not invent.

## Excluded from the clone
The live page renders Framer's own platform chrome below the footer — the
"Made in Framer" badge (`.__framer-badge`, stuck at `opacity: 0.001`) and the
"Create a free website with Framer…" strip. These are **not** Drommer content and are
correctly omitted.

## Assets
- `public/sites/first-rose-853260-framer-app-21051feb/root-8a5edab2/images/Dx3NDQRbBFXMEHBi12YiSiAcoOo.png`
- Icons from `../shared/icons`: `DrommerWordmarkLarge`, `InstagramIcon`, `YouTubeIcon`, `LinkedInIcon`

## Responsive Behavior — measured

The top row (`.framer-cj70fk`) does **not** stay a row below desktop. Its responsive
variants set `flex-direction: column; gap: 50px`, and the rail is `align-items: flex-start`,
so everything stacks hard left:

| Tier | Top row |
| ---- | ------- |
| **≥1440px** | `flex-direction: row`, `gap: 349px`, `align-items: flex-start` |
| **<1440px** | `flex-direction: column`, **`gap: 50px`**, left-aligned |

Measured at 958px: rail `align-items: flex-start`, `gap: 75px` between the three rows;
top row `823 x 354` column with `gap: 50px`; social row `162 x 34` (so it sits flush left
inside the flex-start rail, despite its own `justify-content: center`); copyright row
`823 x 17`.

Stacking order is wordmark → Company → Opportunities → socials → copyright.
