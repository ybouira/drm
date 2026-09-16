# Artifact Manifest — Drommer (root-8a5edab2)

## Downloaded assets (23 images, all real, from live site CDN `framerusercontent.com`)
All saved under `public/sites/first-rose-853260-framer-app-21051feb/root-8a5edab2/images/`:

- aCFWfbQ5WMtWDMM5k6ol6VAg.webp — Monthly Gatherings photo
- CO11nKnejqX7SCom5uOQROjyAY.webp — Founder Fridays photo
- r6gBWsDGWm9WrboOehqPT3937M.webp — Venture Building photo
- FzybitHD0VlARAwp0jtxgsrzKg.webp — Founder Network photo
- Ki2ol2ETbANpiUuw2Sb8TDgnGdQ.png — Mission section portrait
- B1VEekKzR9KhSWNlSPWgytTjbSY.webp / XbHlR61qEHpYzyb07CuA6Yz7rM.webp — Case study 1 (image + mark)
- EZnEUxq21CuRRiCWmG8QqlK7Xoo.webp / dRFWThY0BX0AqgVC4AO5yvkTNxQ.webp — Case study 2
- AMNFRegqg923K5mIFUmvbSjNV4.webp / aWxOXQ9PiPsYwsifpLTqpAEhRAE.webp — Case study 3
- evFt8dWV1fAgwyCIUy9TIChg.png, Z0PfjoMyRrLcr0cBNthXtaeJVc.png, iuLZKqKR3zA2zCPleN6hBxkDS2I.png, cKfXcRIQyWSu88488VFPgx9Z6lE.png, Qcupcm3xzW4DEddi1G5Wp9oJvbY.png, jTvdO3C8DYBwDzKPwUlvfyXIM.png, ndP5UuTVxgvYNieoa4TanR2sk.png, 4qYjIqqmRFZbKj43XEJ4oF3RPiQ.webp, LQBHYIlIjbvd5DSWiR2hDaHmc.webp — Built With Drommer logo grid (9 logos)
- cHX3vgQDeka0MHfC6PQMQijswWI.png — Reunion banner background photo
- vjgh5nFn3fu3gvShiInOR0ILTs.png — Venture Builder Studio photo
- Dx3NDQRbBFXMEHBi12YiSiAcoOo.png — small unused UI image (not placed; not needed for any observed section)

Download script: `scripts/download-assets-first-rose-853260-framer-app-21051feb-root-8a5edab2.mjs` (fetches from `https://framerusercontent.com`, the real asset host — the app's own origin 404s on these paths).

## Known gaps
- **Hero background video**: the live site's `<video>` element (`loop`, `muted`, `playsinline`) has no populated `src`/source on this published Framer instance — `currentSrc` and the `src` attribute are both empty even after scrolling the hero into view and waiting. No recoverable video asset exists to download. The hero is built with a plain black background, matching what actually renders on the live site (confirmed via screenshot — the hero area renders as solid black, not a video frame). No fallback/generated asset was substituted (Atlas Cloud fallback path was not invoked — no user approval sought, out of scope for this run).
- **Icons in "What Makes This Different" and "Program Phases"**: the live site's icons are SVGs rendered by Framer's internal component system, not extractable as standalone files without deeper DOM inspection than the tool budget allowed for this pass. Hand-built equivalent line-icons (people, trend-up, rocket, target, hourglass, table, checkmark-path, rocket) were used in their place — visually similar but not byte-identical to the source SVGs.
- **Exact computed CSS values**: due to the page's size (~11,000px tall, 14 sections), this pass did not extract `getComputedStyle()` for every element as the skill's per-component template calls for. Spacing, font sizes, and colors were matched visually from screenshots and a handful of targeted computed-style checks (fonts: Plus Jakarta Sans body text confirmed at 14px/500/28px line-height; CTA button confirmed `border-radius: 5px`) rather than exhaustively per element. Visual QA against the live site (see completion report) found no material discrepancies, but a few pixel-level spacing/size values are approximated rather than extracted.
