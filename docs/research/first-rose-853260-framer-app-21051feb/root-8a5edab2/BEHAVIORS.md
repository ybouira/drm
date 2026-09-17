# Behaviors — Drommer (first-rose-853260.framer.app/)

Source: https://first-rose-853260.framer.app/
Extracted from the live site via Chrome MCP (`getComputedStyle`, real scroll/click
probing, the page's own CSSOM, and its compiled component source). Values here are
measured, not estimated.

> **Measurement warning — read before re-running any behavioral extraction.**
> The automation tab in this environment reports `document.visibilityState === "hidden"`
> and never fires `requestAnimationFrame`, even while screenshots render fine. Anything
> driven by rAF — which on a Framer site means **every ticker, and every framer-motion
> hover/appear variant** — is therefore frozen, and naive sampling reports it as static.
> An earlier pass fell into exactly this trap and wrongly recorded "no hover states" and
> "tickers do not animate".
>
> Before concluding that something does not move, check:
> `document.visibilityState`, `document.hasFocus()`, and whether a `requestAnimationFrame`
> callback actually fires within ~600ms. If rAF is dead, fall back to
> `document.getAnimations()` (catches CSS/WAAPI) and to reading the site's compiled
> component source, which is what was done here.

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

No section fades, slides, staggers, or transforms on scroll. The page has exactly one
element carrying Framer's appear-animation attribute (`[data-framer-appear-id]`), and it is
the **Framer platform badge** (`.__framer-badge`), which is excluded from the clone. No
`@keyframes` are defined in the page's own CSS.

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

> **Correction.** An earlier pass concluded there were no hover states because the page
> defines no component-level `:hover` CSS. That was wrong. Framer implements hover as
> **motion variants in JS**, which are invisible to a CSS scan *and* cannot be observed by
> dispatching pointer events, because the variant is applied through framer-motion's
> `requestAnimationFrame` loop. The variants below were read directly out of the site's
> compiled component source (`shared-lib.*.mjs`, `Asiqxhl7h.*.mjs`,
> `QuvJb7….mjs`) and are exact.

### Buttons — one shared component with six variants

| Variant | Base | On hover |
| ------- | ---- | -------- |
| `E0NWvRKE2` (white pill) | `background: #FFFFFF`, black label | `background: #CCCCCC` |
| `KwhqBngKy` (purple pill) | `background: #7138F2`, white label | `background: #4418AB` |
| `J3g7ZPs3Q` (outlined, on dark) | transparent, `1px solid #FFFFFF`, white label | `background: #FFFFFF`, border width `0`, label `#000000` |
| `QlOC0hl12` (outlined, on light) | transparent, `1px solid #000000`, black label | `background: #000000`, label `#FFFFFF` |
| `yF1oVxVsY` (outlined, purple) | transparent, `1px solid #7138F2`, purple label | `background: #7138F2`, label `#FFFFFF` |
| `o17Q4xIjI` (black pill) | `background: #000000` | `background: #1A1A1A` |

Only the first three appear on this page.

### Cards

Both the **BuildFirstStartup** cards (`DDHCD3a9j`) and the **CaseStudies** cards
(`pqGKyqHoq`) go from `box-shadow: none` to:

```
box-shadow: 0px 0px 20px 6px rgba(112, 56, 242, 0.5);
```

Note this glow is `rgba(112, 56, 242, …)` — one unit off the `#7138F2` accent used
elsewhere. Reproduced as given.

### Text links — a separate mechanism

Framer text links do **not** use the button variants above. They carry
`--framer-link-hover-text-color` on the anchor. The **footer links set it to `#7138f2`**,
so all six hover to purple. This was missed twice: once by scanning for component `:hover`
rules, and once by only checking the button variant tables.

To find these, read `--framer-link-hover-text-color` off the anchors themselves rather than
looking for CSS rules.

### No hover state

Nav links and the logo strip have **no** hover variant. The grayscale-to-colour logo hover
added by an earlier pass was invented and has been removed.

### Transition

The variants carry Framer's default spring rather than a CSS duration. The clone uses a
200ms ease-out colour/shadow transition as a close equivalent; this timing is an
approximation, not an extracted value.

## Click-driven interaction

### FAQ accordion — the only interactive component on the page

The FAQ section contains no SVG icons (the `+` affordance is built from two plain bars,
and becomes a `−` by dropping the vertical one). Interaction model confirmed by clicking
rows on the live site: **click-to-expand, and rows toggle independently — more than one can
be open at once.** See `components/Faq.spec.md` for per-row measurements.

Apart from the FAQ and the two ticker strips below, every section is **static**: no tabs,
no scroll-driven panel switching, no modals, no dropdowns.

## Media

- The hero contains a `<video>` element (`loop`, **`autoplay: false`**, muted,
  playsinline) inside an absolutely-positioned `z-index: 0` layer, but it has **no source**
  — `src` attribute is empty (resolving to the page URL), `currentSrc` is `""`, and there
  are zero `<source>` children. There is no recoverable video asset. The hero renders as a
  flat `#0d0d0f` panel with a bottom gradient, which is what the live site shows.
- No Lottie and no `<canvas>`.
- The page defines no `@keyframes` of its own; the two ticker strips animate from JS
  (see below).

## Ticker strips — BOTH ANIMATE

> **Correction.** An earlier pass sampled `transform` on both strips and saw it frozen at
> `translateX(-60px)` / `translateX(-30px)`, and recorded them as static. That measurement
> was taken in a **background tab**, where Chrome suspends `requestAnimationFrame` — so a
> running rAF animation reads as motionless. The values it saw are simply the ticker's
> initial offset, which is present in the server-rendered HTML.

Both strips are Framer **Ticker** components (`li.ticker-item`, `aria-posinset` /
`aria-setsize`). Their configuration, read from the site's compiled source:

| Prop | MarqueeStrip | BuiltWith logos |
| ---- | ------------ | --------------- |
| `tickerEffectVelocity` | `50` | `50` |
| `tickerEffectGap` | `30px` | `60px` |
| `tickerEffectHoverModifier` | `100` | `100` |
| `tickerEffectOverflow` | `clip` | `clip` |
| `tickerEffectDraggable` | `false` | `false` |
| `tickerEffectStackDirection` | `row` | `row` |

The runtime advances the offset each frame as
`offset -= (delta_ms / 1000) × velocity × sign × hoverFactor`, i.e. a constant **50px/s**
leftward, looping.

`isStatic` comes from Framer's `useIsStaticRenderer()` and is true only in the editor
canvas and during SSR — never on the published site.

**Clone implementation:** a CSS `@keyframes drommer-ticker` translating a two-group track
from `0` to `-50%`, `linear`, `infinite`. Each group carries a trailing gap so `-50%` is
exactly one group width, making the loop seamless. Durations are derived from the measured
group widths at 50px/s: **29.2s** for the marquee (1461px) and **25.8s** for the logos
(1289px). `prefers-reduced-motion: reduce` disables both.

*Open question:* `tickerEffectHoverModifier: 100` is passed straight into the runtime as a
raw multiplier, which would make hovering 100× faster — almost certainly meant as "100%",
i.e. unchanged. The clone does not change ticker speed on hover.

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


---

## About Us — loop ("float") effects, 6 images

The `/about-us` EXPERIENCE section animates. This is a **third** kind of Framer motion,
distinct from the appear animations and the tickers documented above, and it is invisible
to every observational method: the page has only one `[data-framer-appear-id]` (the
platform badge), `document.getAnimations()` returns nothing, and the rAF loop that drives
it is suspended in the automation tab.

It was found by scanning the page's own compiled chunk for Framer's effect props
(`targetOpacity`, `loopEffectEnabled`) — six hits, all on the EXPERIENCE photos.

Per-image configuration, read from the source:

```
__framer__loop              { opacity: 1, scale: 1, rotate: 0, x: 0, y: -10 }
__framer__loopEffectEnabled true
__framer__loopRepeatType    "mirror"      -> animation-direction: alternate
__framer__loopRepeatDelay   0
__framer__loopPauseOffscreen true
__framer__loopTransition    tween, ease [.44, 0, .56, 1]
```

So each photo drifts from `y: 0` to `y: -10px` and back, forever. The durations are
staggered across the six so they do not move in lockstep:

| # | Image | Duration |
| - | ----- | -------- |
| 1 | `NnI8eZIQWnVfJqzfA5cXZcl43A.webp` | `1.4s` |
| 2 | `KV7wZXrvUFv3TgxBmRm7TxOeaM4.webp` | `1s` |
| 3 | `K4yxaq4uvgHvwhVor2ueAAxLDY.webp` | `1.2s` |
| 4 | `o4MQIcCZBEDnB0zOc5GUPwXKa8s.webp` | `1.2s` |
| 5 | `Rumxdvcszr1fUl5tFw6lsW5Khag.webp` | `1.4s` |
| 6 | `SGuFxtmWFRwjWEZszLuJxB0Rk.webp` | `1s` |

Each also carries a **hover** variant:

```
{ scale: 1.05,
  boxShadow: "0px 0px 10px 2px rgba(112, 56, 242, 0.5)",
  transition: { type: "spring", duration: .4, bounce: .2 } }
```

Note the glow is `rgba(112, 56, 242, …)`, the same off-by-one purple used by the card
hovers on the homepage.

**Clone implementation:** a CSS `@keyframes drommer-float` translating `0 → -10px` with
`animation-direction: alternate` and the exact easing, plus three duration classes. The
float sits on the outer box and the hover scale/glow on an inner box, so the two transforms
do not collide and the glow is not clipped. `prefers-reduced-motion: reduce` disables it.

`loopPauseOffscreen` is **not** reproduced — a CSS animation cannot pause itself when
scrolled out of view. Visually identical; costs a little idle compositing.

### Method note

Three different Framer motion systems have now been missed on this site by observation
alone, each found only by reading the compiled component source:

| Motion | Prop to grep for |
| ------ | ---------------- |
| Button / card hover variants | `"<id>-hover"` inside `variants:{…}` |
| Ticker strips | `tickerEffectVelocity` |
| Loop / float effects | `loopEffectEnabled`, `targetOpacity` |

When asked whether something animates, grep the page's chunk for these before concluding
it is static.


## About Us — DROMMER HQ rotating media ring

The DROMMER HQ section is a **custom Framer code component**, not a layout of positioned
photos. It is a continuously rotating ring of six media tiles that can also be dragged.

This is a fourth motion mechanism on the site, and the only one that is a bespoke
component rather than a Framer built-in — so it carries none of the `__framer__*` effect
props. It was found by grepping the page chunk for `speed`, which surfaced the component's
own property descriptor: *"Rotation Speed — Time in seconds for one complete rotation"*.

### Instance configuration

| Prop | Value |
| ---- | ----- |
| `speed` | `30` (seconds per full rotation, so 12 deg/s) |
| `imageWidth` | `300` |
| `aspectRatio` | `1` |
| `imageRadius` | `10` |

### Geometry (verbatim from the component)

```
z    = innerWidth <= 480 ? 0.4 : innerWidth <= 768 ? 0.6 : 1
tile = 300 * z
H    = max(count * (tile + 20) / (2 * PI), 200 * z)     horizontal radius
U    = H * 0.85                                          depth radius
bob  = 40 * z
pad  = innerWidth <= 768 ? 80 : 100
stage = (H*2 + tile + pad) x (bob*2 + tile + pad)
```

Per tile at angle `n = rotation + 360/count * i`:

```
x         = sin(n) * H
y         = -cos(n) * bob
zDepth    = cos(n) * U
depthNorm = (zDepth + U) / (2U)
scale     = 0.35 + depthNorm * 0.65
zIndex    = round(depthNorm * 100)
transform = translate(-50%,-50%) translateX(x) translateY(y) scale(scale)
```

Tiles are sorted back-to-front by `zDepth` before painting.

At 1920px this gives a **1011 x 480** stage and scales of
**0.35 / 0.5125 / 0.8375 / 1.0** at 60-degree increments — both confirmed against the live
DOM, and both reproduced exactly by the clone.

### Drag

`cursor: grab` / `grabbing`, `touch-action: pan-y`. Dragging rotates at **0.3 deg per
pixel**; on release the momentum carries and decays by **0.92 per frame** until it falls
below 0.1 deg and the idle spin resumes.

### Media — six tiles, and a trap

Slots 1 and 2 are **videos**; slots 3-6 are images. The component keeps `mediaType` and
`video` arrays unfiltered while filtering the image array, so slots 1 and 2 still carry
image sources that are never rendered (`KP8mHD1gUiZn6t7Lh3YJrVScHc.webp` and one other).
Do not mistake those for visible assets.

| Slot | Kind | File |
| ---- | ---- | ---- |
| 1 | video | `alSHItmqtSUkRprMTTpDWQY4utY.mp4` (2.1 MB) |
| 2 | video | `qnqGys529ygGdzaSURPPRjKSvWQ.mp4` (14.1 MB) |
| 3 | image | `EjURn1ncA5ogB6ogvh2kSzrfKM0.webp` |
| 4 | image | `fUYvTkLXEB3POTIQF9rQ6ofIu2g.webp` |
| 5 | image | `kzoqCssl66YuZIpzxEq3JrwGYec.webp` |
| 6 | image | `kfJ3Afnbu7MDM23gfqTEdEXb4wE.webp` |

Videos render as `<video autoplay loop muted playsinline>` with `pointer-events: none`.
Both were missing from the clone's assets and are now downloaded under
`public/sites/.../shared/videos/`.

**Clone implementation:** `pages/HqCarousel.tsx`, a direct port. Rotation is mirrored into
React state so render never reads a ref. Honours `prefers-reduced-motion`.

### Hydration trap — round inline transforms

Chrome normalises inline `transform` values to **three decimals** when it parses them, so
`translateX(-264.6378698024601px)` is stored in the DOM as `translateX(-264.638px)`. React's
dev hydration check compares its freshly computed full-precision string against what the DOM
actually holds and reports a mismatch on every load. `HqCarousel` therefore rounds `x`, `y`
and `scale` through `round3()` before building the transform string. Any future component
that writes computed transforms inline needs the same treatment.

## About Us — THE FOUNDERS

Measured on the live page at 1905px wide.

| Box | Size / style |
| --- | --- |
| Section | 1905 x 857, `padding: 100px`, `gap: 60px` |
| Rail | 1440 x 657 |
| Card row | 1440 x 450, `flex-direction: row`, `justify-content: space-between`, `align-items: flex-start` |
| Card | 300 x 450, `border-radius: 10px`, `padding: 20px`, `flex-column`, `align-items: flex-end`, `justify-content: flex-end`, `gap: 10px` |

Each card is an `<a>` to the founder's LinkedIn (`target="_blank"`), with the portrait as a
`fill` image behind a four-stop scrim:

```
linear-gradient(rgba(255,255,255,0) 0%, rgba(0,0,0,0.2) 78.3506%,
                rgba(0,0,0,0.3) 89.0221%, rgba(0,0,0,0.6) 100%)
```

Above the name sits the founder's **startup logo** at `82 x 28`, `object-fit: contain` — this
is the detail the first pass missed. The bottom row is `width: 100%`, `flex-row`,
`align-items: flex-start`, `justify-content: space-between`:

- left — name at `16px / 19.2px`, `font-weight: bold`, followed by a **small** LinkedIn mark
  (`viewBox="0 0 11 10"`, `fill="white"`). This is a *different* glyph from the footer's;
  it is exported separately as `LinkedInSmallIcon`.
- right — status pill, `border-radius: 100px`, `padding: 5px 10px`,
  `background: rgba(121,121,121,0.15)`, `box-shadow: 0 0 2px 0 rgba(0,0,0,0.5)`, label at
  `10px / 10px`, preceded by a 1-colour dot.

| Founder | Startup logo | Status | Dot |
| ------- | ------------ | ------ | --- |
| Gianmarco | `aWxOXQ9PiPsYwsifpLTqpAEhRAE.webp` (Prisma Group) | Launched | `#00FF4C` |
| Aicha | `kT8huskO1CGbgEipNqxue4wdQ.png` (Kaleba) | Validation | `#F28838` |
| Pietro | `dRFWThY0BX0AqgVC4AO5yvkTNxQ.webp` (OKRogito) | Validation | `#F28838` |
| Youssef | *(none)* | Validation | `#F28838` |

Youssef genuinely has no logo, so his card renders one image where the others render two —
that asymmetry is correct, not a missing asset.

**Measuring trap:** the pill's width depends on the locale. Under the default `en` all four
pills are `78 x 20`; with a stale `drommer-lang=it` cookie the translated labels give
`71 / 85 / 85 / 85`. Force `drommer-lang=en` before comparing pill geometry against the live
site, or the difference reads as a styling defect.

**Gutter trap — do not apply the page gutter twice.** Every `<section>` on About Us already
carries `px-5 / min-[810px]:px-10 / min-[1440px]:px-[100px]`. `RAIL` originally repeated the
same classes, so the content box came out at **1240** instead of 1440. In the founders row
that turned the live `space-between` spacing of **80px** into 12px — the cards read as almost
touching. `RAIL` is now `mx-auto w-full max-w-[1440px]` with no padding, matching the fix
already made on `CaseStudyPage`. Widening the rail changed no section heights (the document
stays at 4811), because the other sections' content is `max-w-[720px]` and centred.

The row itself must be a **flex row with `justify-content: space-between`** at 1440, not a
grid — four 300px cards in a 1440 box then give exactly 80px between them. Verified against
the live page, whose row reports `w1440 / flex / space-between` with four 300x450 cards.
