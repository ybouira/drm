# Visual QA — Drommer clone vs. live site

Clone: `/` (`src/app/page.tsx`) · Source: https://first-rose-853260.framer.app/
Both measured in the same browser at an inner width of **1707px** (desktop tier, dpr 1.5).

Rather than eyeball screenshots, QA was run as a **programmatic diff**: the same
`getComputedStyle` harness was executed against the live site and the clone, and the
results compared numerically.

## Result: total page height matches exactly

| | Original | Clone |
| - | -------- | ----- |
| Document height | **9455px** | **9455px** |

## Section heights — 13 of 14 exact

| Section | Original | Clone | Δ |
| ------- | -------- | ----- | - |
| Hero | 945 | 945 | 0 |
| BuildFirstStartup | 773 | 773 | 0 |
| MarqueeStrip | 52 | 52 | 0 |
| WhatMakesDifferent | 599 | 599 | 0 |
| Mission | 531 | 531 | 0 |
| ProgramPhases | 937 | 936 | **−1** |
| ProgramOverview | 1002 | 1002 | 0 |
| CaseStudies | 1422 | 1422 | 0 |
| BuiltWith | 268 | 268 | 0 |
| ReunionBanner | 649 | 649 | 0 |
| VentureBuilderStudio | 594 | 594 | 0 |
| Faq (collapsed) | 635 | 635 | 0 |
| FinalCta | 600 | 600 | 0 |
| Footer | 449 | 449 | 0 |

The single −1px on ProgramPhases is sub-pixel rounding on a fractional height; it does not
propagate (the document total still lands on 9455).

## Text box geometry — all verified boxes exact

Each of these was measured as `width x height` on both sides:

| Element | Original | Clone |
| ------- | -------- | ----- |
| Hero paragraph | 630 x 60 | 630 x 60 |
| BuildFirstStartup card description | 260 x 43 | 260 x 43 |
| Pillar card description | 216 x 67 | 216 x 67 |
| Mission body paragraph | 670 x 65 | 670 x 65 |
| ProgramOverview list item body | 256 x 43 | 256 x 43 |
| ReunionBanner headline | 500 x 80 | 500 x 80 |
| VentureBuilderStudio body | 670 x 86 | 670 x 86 |
| FAQ heading | 560 x 48 | 560 x 48 |
| FAQ row (collapsed / open) | 60 / 99 | 60 / 99 |

## Line-count sweep

Every text block on the page was reduced to a line count (`height / line-height`) on both
sides and compared: **76 blocks, 0 real differences.**

Two apparent diffs were investigated and are false positives of the 18-character prefix
key used to match blocks:
- `"Everything you nee…"` collided between the FAQ heading and ProgramOverview's
  "Everything you need to go from idea to launch…" — the FAQ heading itself is 560x48, one line.
- `"STARTUP"` — the case-study pill is 121x34 on both sides; the span's height includes its
  10px vertical padding, so the naive `height / line-height` reads 2.

Five button labels (`More about us`, `Explore the current…`, `All case studies →`,
`Join us →`, `Start building with…`) did not match by key because the clone renders them as
text directly inside the `<a>` rather than inside a nested `<p>`. Their rendered sizes were
checked separately and match; this is a DOM-shape difference with no visual effect.

## Defects found and fixed during QA

1. **FAQ rows were 38px instead of 60px.** The toggle lives in a `40 x 40` box on the live
   site, and that box — not the 14px bars — is what sets the row height. The section was
   171px short before the fix.
2. **FAQ divider inflated row height.** Implemented as `border-b`, it added 1px per row;
   the live site draws it on `::after`. Replaced with an inset box-shadow.
3. **Footer link columns were 30px too tall.** The heading sits 20px above the link group,
   but the links themselves are only 10px apart — the original nests the links in their own
   `gap: 10px` group rather than using one flat 20px list.
4. **ProgramOverview card 1 was 58px short.** Its item body paragraphs are authored at a
   fixed `width: 256px`; without that they wrap to fewer lines.
5. **Pillar card descriptions wrapped short.** They are authored at `width: 216px`.
6. **VentureBuilderStudio body wrapped short.** Authored at `width: 670px`, not stretched
   to the 798px column.
7. **BuildFirstStartup card content box was 4px narrow.** The `2px` card border was
   implemented as a real border, shrinking the content box; the live site draws it on
   `::after`. Replaced with an inset ring.
8. **FAQ heading wrapped to two lines.** Its natural width is 560.13px in a 560px column and
   the live site lets that 0.13px overflow ride. Pinned with `whitespace-nowrap` at desktop.
9. **Case-study description did not span the full content width** (909 vs 1360). The
   original's content block is `width: 100%`.

## Fabricated copy caught and corrected

During extraction, several long strings were truncated at 90 characters and the gaps were
filled in from inference rather than from the page. All were re-read from the live DOM and
corrected in both the components and the specs:

- **VentureBuilderStudio**, both body paragraphs (was "…design, build and launch digital
  products." / "…we can build it with you."; actually "…launch a new initiative. We don't
  advise. We build, with a dedicated team, in weekly execution cycles, from first test to
  first sale." / "…this is how we work together.").
- **FinalCta card A** body (was "No long onboarding, no heavy structures…"; actually
  "…the execution. No internal" / "structures to build from scratch, just results.", split
  across two paragraphs mid-sentence exactly as the live site does).
- **BuildFirstStartup** intro and the **WhatMakesDifferent** subtitle were also wrong in the
  first draft of the specs; both were caught by builder agents cross-checking against the
  screenshots, then confirmed against the live DOM.

## Interaction verification

The FAQ is the only interactive component. Verified in the running clone:
- All rows start collapsed at `60px`.
- Clicking a row expands it to `99px` and swaps the `+` to a `−` (the vertical bar is
  removed; nothing rotates).
- **Rows 1 and 3 were opened simultaneously** and both stayed open — confirming the
  independent-toggle model measured on the live site.

## Fonts

Plus Jakarta Sans via `next/font/google` was confirmed **metrically identical** to Framer's
self-hosted copy: four representative strings measured at 12/14/18/40px produced a 0.00%
width difference. An earlier hypothesis that the fonts differed was wrong; every wrapping
discrepancy traced to container widths instead.

## Known remaining gaps

- **ProgramPhases is 1px shorter** than the original (936 vs 937), sub-pixel rounding.
- **Tablet and mobile were never visually verified.** `resize_window` reported success but
  the viewport stayed pinned at 1707px in this environment, so no per-width sweep was
  possible. Breakpoints were taken exactly from the site's own CSSOM
  (`≥1440` / `810–1439` / `≤809`), but the sub-desktop layouts in the clone are reasoned,
  not measured. This is the main thing to check next.
- **The hero video is absent**, matching the live site, which ships a `<video>` with no
  source. See `ARTIFACT_MANIFEST.md`.
- **`./case-studies`, `./about-us` and `./case-studies/<slug>`** are linked but do not exist
  in this single-page clone and will 404. Only `/` was in scope.


---

# Round 2 — behavioral defects reported by the user

The first QA round verified geometry to the pixel but accepted three wrong conclusions
about *behavior*. All three shared one root cause, now documented at the top of
`BEHAVIORS.md`: the automation tab runs with `visibilityState: "hidden"` and never fires
`requestAnimationFrame`. On a Framer site that freezes every ticker and every
framer-motion variant, so sampling reports them as static.

## 1. Hover states were missing entirely

**Reported:** "all hover interactions don't work."

**Cause:** the first pass searched the CSSOM for `:hover`, found only Framer boilerplate,
and concluded there were none — then instructed the builders not to invent any. Framer
implements hover as JS motion variants, which are invisible to a CSS scan. Dispatching
synthetic pointer events did not help either, because the variant is applied through the
frozen rAF loop.

**Fixed by** reading the variants out of the site's compiled component source. Nine button
hover states and two card glows are now implemented; see the tables in `BEHAVIORS.md`.
Verified present in the generated CSS:
`.hover\:bg-[#CCCCCC]`, `.hover\:bg-[#4418AB]`, `.hover\:border-transparent` +
`.hover\:bg-white` + `.hover\:text-black`, and both
`0 0 20px 6px rgba(112,56,242,0.5)` shadows.

Nav links, footer links and the logo strip genuinely have no hover variant.

## 2. Ticker strips did not move

**Reported:** "the carousel sliders don't slide and are static."

**Cause:** both strips were sampled at a constant `translateX(-60px)` / `translateX(-30px)`
and recorded as static. Those are the tickers' *initial* offsets, present in the
server-rendered HTML; the rAF loop that advances them was suspended.

**Fixed by** reading the Ticker configuration from source — `tickerEffectVelocity: 50`,
gaps `30px` / `60px`, `overflow: clip`, looping — and implementing a CSS marquee that
matches. Verified in the clone: both tracks report `playState: "running"` with durations
`29.2s` and `25.8s`, over measured group widths of `1461px` and `1289px`, which divide by
exactly **50px/s**. Disabled under `prefers-reduced-motion: reduce`.

## 3. Program Phases 01 and 04 had no copy

**Reported:** "we miss the copy for points 1 and 4 in the program phases."

**Cause:** at ≥1440px the live desktop stage really does omit phase 01's text and phase
04's body — that part was measured correctly. What was missed is that **below 1440px the
site renders a different section altogether**, "How the Founder Program *actually* works",
with all four phases named and written out. Framer swaps it in by conditional rendering, so
it is absent from the desktop DOM and a desktop-only scan cannot see it. The first pass
then reused the desktop's partial content for its own responsive fallback.

**Fixed by** recovering the alternate section's copy from the compiled source and building
it as the real sub-1440px layout. Full copy is in `components/ProgramPhases.spec.md`.

## Also fixed in this round

- **`icons.tsx` emitted invalid JSX attributes** — `flood-opacity` and
  `color-interpolation-filters` were left kebab-cased by the generator, producing two React
  warnings on every render. Now camelCased.
- **BuildFirstStartup card images** passed intrinsic `width`/`height` while CSS resized the
  box, producing Next.js aspect-ratio warnings. Switched to `fill`, which is correct for an
  absolutely-positioned cover layer.
- **`BEHAVIORS.md` contradicted `Faq.spec.md`** on whether the accordion allows multiple
  open rows. The spec was right (it does); the summary has been corrected.

## Geometry after round 2

Re-measured to confirm no regression: page height and all section heights track the
original, with the only deltas being the known ProgramPhases −1px sub-pixel rounding and
the Hero's `100vh` tracking whatever the current window height is.

## Still not verified

Tablet and mobile remain **visually unverified** — the viewport could not be resized in
this environment. That gap is what allowed the Program Phases responsive variant to go
unnoticed for a whole round, so it is worth treating as the top remaining risk: there may
be other sections that swap layout or copy below 1440px. The reliable way to check is to
diff the page's compiled component source for conditionally-rendered blocks, as was done
for Program Phases here.
