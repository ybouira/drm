# Behaviors — Drommer (first-rose-853260.framer.app/)

Source: https://first-rose-853260.framer.app/
Extracted from the live site via Chrome MCP (`getComputedStyle`, real scroll/click
probing, and the page's own CSSOM). Values here are measured, not estimated.

## Viewport / breakpoint facts

The live site ships exactly three Framer breakpoints, read from the page's own CSSOM
(`document.styleSheets` → `CSSMediaRule.conditionText`):

| Tier    | Condition                        |
| ------- | -------------------------------- |
| Desktop | `min-width: 1440px`              |
| Tablet  | `810px – 1439.98px`              |
| Mobile  | `max-width: 809.98px`            |

There is also one narrower rule, `(max-width: 1199px) and (min-width: 810px)`, used for
a subset of tablet adjustments.

All measurements in the component specs were taken at an inner width of **1707px**
(desktop tier). Section content is capped by an inner `max-width: 1440px` wrapper, so the
1707px measurement and a true 1440px viewport differ only in the outer gutter.

> Tooling note: `resize_window` reported success but the viewport stayed pinned at
> 1707×945 (dpr 1.5) for every requested size, so per-width visual sweeps were not
> possible in this environment. Breakpoints were therefore taken from the site's own
> media queries, which is exact rather than inferred. Tablet/mobile layout rules are
> documented per component from those rules; they were not visually confirmed.

## Global scroll behavior

- **No smooth-scroll library.** No Lenis (`.lenis` absent, `window.lenis` undefined), no
  Locomotive (`[data-scroll-container]` absent). Native scrolling.
- `scroll-behavior` is `auto` on both `html` and `body`.
- **No scroll snapping** — `scroll-snap-type` is `none` on the document element.
- Page height: **9455px** at 1707px width.

## Entrance / scroll-driven animation

**There are none.** The page has exactly one element carrying Framer's appear-animation
attribute (`[data-framer-appear-id]`), and it is the **Framer platform badge**
(`.__framer-badge`, "Create a free website with Framer…") sitting at the bottom-right.
It is stuck at `opacity: 0.001` / `translateY(10px)` and is excluded from the clone.

No section fades, slides, staggers, or transforms on scroll. No `IntersectionObserver`
driven state. No `@keyframes` are defined anywhere in the page's CSS (0 keyframe rules
across all 6 style blocks).

**Implication for the clone:** do not add scroll-reveal animations. The original is
static; adding motion would be a fidelity regression.

## Navbar behavior

**Static across the entire scroll range — verified, not assumed.** Computed styles were
sampled at scrollY = 0, 100, 400, 1200, and 3000:

| Property          | Value at every sampled scroll position |
| ----------------- | -------------------------------------- |
| `background-color`| `rgba(0, 0, 0, 0.45)`                  |
| `backdrop-filter` | `blur(8px)`                            |
| `border-radius`   | `0px`                                  |
| `box-shadow`      | `none`                                 |
| `transform`       | `none`                                 |
| height            | `58px`                                 |

Nothing shrinks, floats, gains a shadow, or changes color. The pinning is done by the
**wrapper**, not the `<nav>`: `.framer-16m140d-container` is
`position: fixed; top: 0; z-index: 2`, and the `<nav>` inside it is `position: relative`.

## Hover behavior

The page defines **no component-level `:hover` CSS**. All 9 `:hover` rules found in the
CSSOM are Framer's generic text/link boilerplate operating on `--framer-link-*` custom
properties, none of which are set on this site's components.

Any hover feedback would therefore come from framer-motion `whileHover` props in JS,
which are not observable as CSS. Treat hover states as **not specified by the source** —
the clone should keep hover effects minimal and non-invented. Where the previous pass
added effects like `hover:opacity-90` or grayscale-to-color transitions on the logo grid,
those were **invented, not extracted**, and should be removed unless separately verified.

## Click-driven interaction

### FAQ accordion — the only interactive component on the page

The FAQ section contains no SVG icons (the `+` / `×` affordance is not an inline SVG).
Interaction model confirmed by clicking rows on the live site: **click-to-expand, one row
open at a time.** See `components/Faq.spec.md` for per-row measurements.

Every other section on the page is **static**: no tabs, no carousels, no auto-cycling
content, no scroll-driven panel switching, no modals, no dropdowns.

## Media

- The hero contains a `<video>` element (`loop`, **`autoplay: false`**, muted,
  playsinline) inside an absolutely-positioned `z-index: 0` layer, but it has **no source**
  — `src` attribute is empty (resolving to the page URL), `currentSrc` is `""`, and there
  are zero `<source>` children. There is no recoverable video asset. The hero renders as a
  flat `#0d0d0f` panel with a bottom gradient, which is what the live site shows.
- No Lottie, no `<canvas>`, no CSS animations.

## Asset inventory (all recovered, none missing)

- **23 raster images**, all from `framerusercontent.com`, all downloaded.
  `Dx3NDQRbBFXMEHBi12YiSiAcoOo.png` — previously logged as an "unused UI image" — is in
  fact the **TikTok social icon** (34×34) in the footer.
- **17 inline SVG icons**, recovered verbatim from the page's own `<use>` definitions
  rather than redrawn. This includes the Program Phases **wavy connector line**, which is
  a real `1164×263` SVG, not a hand-built approximation.
- **2 wordmark SVGs** (`95.001×17.928` nav, `230×40` large), recovered from their
  `background-image` data URIs.

See `ARTIFACT_MANIFEST.md` for the full mapping.
