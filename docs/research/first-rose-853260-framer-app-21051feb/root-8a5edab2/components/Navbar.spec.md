# Navbar Specification

## Overview
- **Target file:** `src/components/sites/first-rose-853260-framer-app-21051feb/root-8a5edab2/Navbar.tsx`
- **Screenshot:** `docs/design-references/first-rose-853260-framer-app-21051feb/root-8a5edab2/desktop-hero.png`
- **Interaction model:** static (verified across scrollY 0 → 3000; nothing changes)

## DOM Structure

```
div  (fixed wrapper: position fixed, top 0, z-index 2, full width)
└── nav  (position relative, the visible bar)
    └── div  (inner rail, max-width 1440px, space-between)
        ├── a   → wordmark SVG (95 x 18)
        ├── div (nav links, flex row, gap 30px)
        │   ├── a "Founder Program"
        │   ├── a "For Companies"
        │   ├── a "Case Studies"
        │   └── a "About Us"
        └── a   "Apply to build"  (white pill)
```

## Computed Styles (exact, from getComputedStyle)

### Fixed wrapper
- position: `fixed`
- top: `0px`
- z-index: `2`
- height: `58px`

### nav
- position: `relative`
- display: `flex`, flex-direction: `row`
- justify-content: `center`, align-items: `center`
- gap: `20px`
- height: `58px`
- padding: `12px 100px`
- background-color: `rgba(0, 0, 0, 0.45)`
- backdrop-filter: `blur(8px)`
- overflow: `hidden`

### Inner rail
- display: `flex`, flex-direction: `row`
- justify-content: `space-between`, align-items: `center`
- width: `1440px`, max-width: `1440px`
- height: `34px`
- flex: `1 0 0px`

### Wordmark
- Rendered size: `95 x 18`
- Source: inline SVG, viewBox `0 0 95.001 17.928`
- Use `DrommerWordmark` from `../shared/icons` (recovered verbatim from the site's
  `background-image` data URI — do **not** render the wordmark as styled text)

### Nav links group
- display: `flex`, flex-direction: `row`, align-items: `center`
- gap: `30px`
- Each link: height `28px`, background transparent, padding `0`, border-radius `0`

### Nav link text (all four identical)
- font-size: `14px`
- line-height: `28px`
- font-weight: `500`
- letter-spacing: `-0.14px`
- font-family: `Plus Jakarta Sans`
- color: `rgb(255, 255, 255)`
- Measured widths: Founder Program `115px`, For Companies `100px`, Case Studies `86px`, About Us `60px`

### "Apply to build" button
- Size: `129 x 34`
- background-color: `rgb(255, 255, 255)`
- padding: `10px 20px`
- border-radius: `5px`
- Label: font-size `14px`, line-height `14px`, font-weight `600`,
  letter-spacing `-0.28px`, color `rgb(0, 0, 0)`

## States & Behaviors

### Scroll
**N/A — verified static.** Background, backdrop-filter, radius, shadow, transform and
height are byte-identical at scrollY 0, 100, 400, 1200 and 3000. Do not implement a
scrolled/floating variant.

### Hover
**Not specified by the source.** The page defines no component-level `:hover` CSS. Do not
invent hover effects (no `hover:opacity-90`, no color shifts) unless separately verified.

## Assets
- Icons: `DrommerWordmark` from `src/components/sites/first-rose-853260-framer-app-21051feb/shared/icons.tsx`
- No images.

## Text Content (verbatim)
- `Founder Program` → `./#program-phases`
- `For Companies` → `./#for-companies`
- `Case Studies` → `./case-studies`
- `About Us` → `./about-us`
- `Apply to build` → `https://forms.fillout.com/t/cP5KQYqyDdus`

## Responsive Behavior
- **Desktop (≥1440px):** as measured above; `padding: 12px 100px`, inner rail capped at 1440px.
- **Tablet (810–1439px):** horizontal padding reduces; inner rail becomes fluid (no 1440 cap reached).
- **Mobile (≤809px):** link row is not shown in the desktop arrangement; reduce to
  wordmark + "Apply to build". Not visually confirmed — see the tooling note in
  `BEHAVIORS.md`. Keep the bar height and translucent background identical.
