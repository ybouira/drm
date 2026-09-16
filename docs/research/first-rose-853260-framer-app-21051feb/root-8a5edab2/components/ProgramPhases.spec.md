# ProgramPhases Specification

## Overview
- **Target file:** `src/components/sites/first-rose-853260-framer-app-21051feb/root-8a5edab2/ProgramPhases.tsx`
- **Screenshot:** `docs/design-references/first-rose-853260-framer-app-21051feb/root-8a5edab2/desktop-program-phases.png`
- **Interaction model:** **static** — verified. Scrolling through the section changes
  nothing; the nodes have no click handlers and no active/inactive states. Do not build
  this as tabs, an accordion, or a scroll-driven stepper.

## DOM Structure

```
section  (#f8f8f8, flex column, gap 60px, padding 100px 0)
└── div  (rail, max-width 1440px)
    ├── div  (header, gap 15px, align-items center)
    │   ├── div (gap 10px)
    │   │   ├── p  "PROGRAM PHASES"
    │   │   └── p  "How the Founder Program works"
    │   └── p  subtitle (contains a <strong>)
    └── div  (diagram frame, 1440 x 567, #f8f8f8, overflow clip)
        └── div  (STAGE, 1233 x 567, position relative)
            ├── connector SVG   (absolute)
            ├── 4 x node circle (absolute)
            └── 3 x text block  (absolute)
```

**The diagram is a free-form absolutely-positioned stage**, not a flex/grid row. All
coordinates below are offsets inside the `1233 x 567` stage.

## Computed Styles (exact, from getComputedStyle)

### Section
- display: `flex`, flex-direction: `column`, justify-content: `center`, align-items: `center`
- gap: `60px`
- padding: `100px 0px`  ← no horizontal padding
- background-color: `rgb(248, 248, 248)`
- overflow: `clip`
- height: `937px`

### Header
- display: `flex`, flex-direction: `column`, justify-content: `center`, align-items: `center`
- gap: `15px` (inner title group gap `10px`)

### "PROGRAM PHASES"
- font-size: `12px`, line-height: `14.4px`, font-weight: `700`, letter-spacing: `2.4px`
- color: **`rgb(113, 56, 242)`** ← purple here, unlike the white eyebrows on dark sections
- Rendered box: `147 x 14`

### "How the Founder Program works"
- font-size: `40px`, line-height: `48px`, font-weight: `700`
- color: `rgb(13, 13, 15)`
- Rendered box: `634 x 48`

### Subtitle
- font-size: `18px`, line-height: `21.6px`, font-weight: `400`
- color: `rgb(80, 80, 80)`
- Rendered box: `1440 x 22`, centered; contains a `<strong>` run (`581 x 23`)

### Stage
- Size: `1233 x 567`, `position: relative`
- Parent diagram frame: `1440 x 567`, background `rgb(248, 248, 248)`, `overflow: clip`

### Connector line
- Component: `PhasesConnectorIcon` (`../shared/icons`) — the site's real
  `1164 x 263` SVG (viewBox `-4 -4 1164 263`). **Do not hand-draw this curve.**
- position: `absolute`, `left: 34px`, `top: 122px`
- Rendered size: `1164 x 263`

### Node circles (all four identical)
- Size: `69 x 70`
- position: `absolute`
- display: `flex`, flex-direction: `row`, justify-content: `center`, align-items: `center`, gap: `10px`
- background-color: `rgb(255, 255, 255)`
- border-radius: `100px`
- box-shadow: `rgba(0, 0, 0, 0.1) 0px 0px 10px 4px`
- Contains a `40 x 40` icon box (`overflow: clip`)

| Node | left | top | Icon component | Icon render size |
| ---- | ---- | --- | -------------- | ---------------- |
| 1 | `0px`    | `332px` | `PhaseOneIcon`   | `23 x 33` |
| 2 | `312px`  | `176px` | `PhaseTwoIcon`   | `30 x 30` |
| 3 | `684px`  | `297px` | `PhaseThreeIcon` | `32 x 33` |
| 4 | `1155px` | `187px` | `PhaseFourIcon`  | `25 x 26` |

### Ghost numerals ("02", "03", "04")
These are **gradient-filled text**, not grey text:
- font-family: **`Inter`** (not Plus Jakarta Sans)
- font-size: `60px`, line-height: `72px`, font-weight: `700`
- `-webkit-text-fill-color: rgba(0, 0, 0, 0)`
- `-webkit-background-clip: text`
- ```
  background-image: linear-gradient(
    rgb(210, 210, 210) 0%,
    rgb(245, 245, 247) 67.3077%,
    rgb(255, 255, 255) 100%
  );
  ```

### Phase text typography
- Title: `20px` / line-height `24px` / weight `700` / color `rgb(13, 13, 15)`
- Body: `16px` / line-height `19.2px` / weight `400` / color `rgb(118, 118, 118)`
- Inline `<strong>` inside body: same size/color, weight `700`

## Stage Content & Positions

| Element | left | top | Size | Content |
| ------- | ---- | --- | ---- | ------- |
| Numeral `03` | `481` | `20`  | `79 x 73`  | gradient text |
| Title        | `481` | `103` | `207 x 24` | `10 Weeks to Revenue` |
| Body         | `481` | `137` | `320 x 77` | `The strongest founders earn a place into a free 10-week journey focused on validation, offer design, pricing, customer acquisition and first revenue.` (with `free 10-week journey` in `<strong>`) |
| Numeral `02` | `259` | `278` | `78 x 73`  | gradient text |
| Title        | `259` | `351` | `146 x 24` | `Build Weekend` |
| Body         | `259` | `385` | `339 x 96` | `Selected founders join an intensive in-person experience at Drommer HQ in Chiasso to challenge the idea, build the first venture proposal and compete in a final pitch competition.` |
| Numeral `04` | `959` | `253` | `81 x 73`  | gradient text |
| Title        | `959` | `326` | `162 x 24` | `Venture Building` |

**Important content facts, verified on the live site:**
- There is **no phase 01 text block**. The leftmost node (`PhaseOneIcon`, the hourglass)
  sits on the curve with no numeral, title or body beside it.
- **Phase 04 has a title but no body paragraph.**

Reproduce this as-is. Do not invent a phase 01 label or a phase 04 description.

## States & Behaviors
- **Scroll:** N/A — static, verified.
- **Hover:** not specified by the source; do not invent.

## Assets
- No images.
- Icons from `../shared/icons`: `PhasesConnectorIcon`, `PhaseOneIcon`, `PhaseTwoIcon`,
  `PhaseThreeIcon`, `PhaseFourIcon`. All recovered verbatim from the live site.

## Text Content (verbatim)
```
PROGRAM PHASES
How the Founder Program works
Four steps to turn a real problem into an AI-native service business.
03  10 Weeks to Revenue
The strongest founders earn a place into a free 10-week journey focused on validation, offer design, pricing, customer acquisition and first revenue.
02  Build Weekend
Selected founders join an intensive in-person experience at Drommer HQ in Chiasso to challenge the idea, build the first venture proposal and compete in a final pitch competition.
04  Venture Building
```

## Responsive Behavior
- **Desktop (≥1440px):** the absolute stage as specified.
- **Tablet (810–1439px) / Mobile (≤809px):** a 1233px-wide absolute stage cannot survive
  narrower viewports. Below `1440px`, fall back to a **vertical stacked list** of the four
  phases (icon circle, numeral, title, body) and hide the connector SVG. This is an
  implementation decision, not an extracted one — the per-width layout could not be
  observed (see the tooling note in `BEHAVIORS.md`).
