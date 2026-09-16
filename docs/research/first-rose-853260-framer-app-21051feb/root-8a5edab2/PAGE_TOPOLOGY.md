# Page Topology — Drommer (first-rose-853260.framer.app/)

Source: https://first-rose-853260.framer.app/
Built route: `/` (`src/app/page.tsx`)

## Sections, top to bottom

1. **Navbar** (fixed, `bg-black/45` translucent, backdrop-blur) — logo "drommer" (mixed white/purple letters), nav links, "Apply to build" white pill button.
2. **Hero** — full black bg, no functioning background video found on the live site (the `<video>` element has no `src`/no loaded source — treated as a gap, see ARTIFACT_MANIFEST.md). Eyebrow "THE FOUNDER PATH", large mixed-weight headline, paragraph, two CTA buttons.
3. **Build First Startup** — dark section, "This is / Where you build your first startup." heading, 2x2 photo card grid (Monthly Gatherings, Founder Fridays, Venture Building, Founder Network), each a full-bleed photo with gradient overlay + colored dot + label + description.
4. **What Makes This Different** — dark section with a top purple radial glow divider, "IN 4 PILLARS" eyebrow, 2x2 grid of white cards (numbered 01–04, icon, title, description, checkmark tag).
5. **Mission** — white section, two-column (text + portrait image), "Young founders in. Startups out." heading, "More about us" link.
6. **Program Phases** — white section, "01 Founder Exploration / 02 Proof Table / 03 Analysis Phase / 04 Venture Building" laid out with circular icon nodes connected by a decorative wavy SVG line. **Interaction model: static** — verified by scrolling slowly through the section on the live site; no content or icon changes were observed as the section entered/left the viewport, and no click handlers were found on the nodes. Implemented as a static wavy-line SVG connector.
7. **Program Overview** — light gray section, two rounded white cards side by side: "What you get" (5 checklist items with dividers) and "Who it's for" (6 checklist bullets + "Explore the current challenge" link).
8. **Case Studies** — white section, 3 project cards (image + tag + description) + "All case studies" link.
9. **Built With Drommer** — light gray section, logo grid (9 partner/portfolio logos), grayscale-to-color on hover.
10. **Reunion Banner** — dark section with a full-bleed background photo (darkened), centered heading + "Join us" button.
11. **Venture Builder Studio** — dark section, two-column (text + photo), "Start building with us" button.
12. **FAQ** — light gray section, 8 question rows (note: "What happens if I don't pass a phase?" is a genuine duplicate present twice in the live site's content — kept verbatim). **Interaction model: click-driven accordion**, verified by clicking each row on the live site — one row expands at a time, `+` icon rotates to `×`/45°, transition is a smooth height/opacity animation. Implemented with `useState` + CSS grid-rows transition.
13. **Final CTA** — dark section with a purple radial glow, two cards ("Let's build together" white card with purple button, "Become an entrepreneur" dark card with white button).
14. **Footer** — black section, logo, Company links, Opportunities links, 4 social icons, copyright line.

Excluded from the clone: the "Made in Framer" badge and "Create a free website with Framer... Edit Content" strip visible at the very bottom of the live site — this is Framer's own platform chrome, not Drommer site content.

## Global notes
- Fonts: Plus Jakarta Sans (headings/UI) and Inter (body), loaded via `next/font/google` in `src/app/layout.tsx`.
- No Lenis/Locomotive smooth-scroll library detected; native scrolling.
- Nav does not appear to change appearance on scroll (checked via scroll sweep at multiple positions — background stayed the same translucent black throughout).
- Accent color: purple (~`#7c3aed` / `#a78bfa`), used for glows, dots, icons, and the purple CTA button.
