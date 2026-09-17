"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { LanguageToggle } from "@/i18n/LanguageToggle";
import { useI18n } from "@/i18n/provider";

import { DrommerWordmark } from "../shared/icons";

/**
 * The live navbar is a Framer variant component with four states, read from the
 * compiled stylesheet (`.framer-Pc1Oz`):
 *
 *   base            flex-row, padding 12px 100px, height 58
 *   v-1qcxscs       tablet — identical, but padding 12px 40px
 *   v-3bf09r        mobile closed — flex-column, height 64, padding 12px 20px
 *   v-gc4hkt        mobile open   — max-height 100vh, overflow auto,
 *                                   overscroll-behavior contain
 *
 * So the links stay in a row all the way down to 810, and only below that does
 * the bar collapse into a panel. When open:
 *
 *   links group     flex-column, align-items flex-start, gap 10, padding 40 0 0
 *   right group     flex-column, align-items flex-start, width 100%, padding 40 0 20
 *   CTA             width 100%
 *
 * The toggle is 40x40 at base and 44x44 in both mobile variants, holding three
 * 20x2 bars at left calc(50% - 10px) and top 37.5% / 50% / 62.5% - 1px. Opening
 * moves the outer two to the centre (Framer animates the rotation through a
 * motion value rather than CSS, so the X is reproduced here with a transform).
 *
 * One deliberate deviation: the row collapses at **1000**, not the live 810.
 * The live row needs 95 + 451 + 229 = 775px of content and only has 730px at
 * 810, so the original clips its own CTA through the nav's overflow: hidden.
 * This clone also carries a language toggle the live site has no equivalent
 * for, pushing the requirement to about 819px. Collapsing at 1000 keeps every
 * measurement above intact while making the bar actually usable in the band
 * where it would otherwise be cut off.
 */

/**
 * `whitespace-nowrap` mirrors the live link's `white-space: pre`. Without it the
 * labels wrap onto two lines in the 810-860 band, where the row is genuinely
 * tighter than its content, and collide with the wordmark.
 */
const LINK_CLASS =
  "h-[28px] shrink-0 rounded-none bg-transparent p-0 text-[14px] leading-[28px] font-medium tracking-[-0.14px] whitespace-nowrap text-white transition-opacity duration-200 ease-out hover:opacity-70";

const BAR_CLASS =
  "absolute left-[calc(50%_-_10px)] h-[2px] w-[20px] bg-white transition-all duration-300 ease-out";

export function Navbar() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  // The panel only exists below 810; if the viewport grows past that while it
  // is open, drop the state so the row layout is never left in "open".
  // (Every link closes it on click, so navigation needs no effect of its own.)
  useEffect(() => {
    const wide = window.matchMedia("(min-width: 1000px)");
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };
    wide.addEventListener("change", onChange);
    return () => wide.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const links: ReadonlyArray<{ label: string; href: string }> = [
    { label: t.nav.founderProgram, href: "/#program-phases" },
    { label: t.nav.forCompanies, href: "/#for-companies" },
    { label: t.nav.caseStudies, href: "/case-studies" },
    { label: t.nav.aboutUs, href: "/about-us" },
  ];

  return (
    <div
      /* Page content all sits at z-[1]; the bar needs headroom above anything
         that builds its own layered stack, so it is not left at z-[2]. */
      className="fixed top-0 left-0 z-50 w-full"
    >
      <nav
        className={`relative flex flex-col items-center justify-center gap-0 bg-black/45 px-[20px] py-[12px] backdrop-blur-[8px] transition-[max-height] duration-300 ease-out min-[1000px]:h-[58px] min-[1000px]:max-h-none min-[1000px]:flex-row min-[1000px]:gap-[20px] min-[1000px]:overflow-hidden min-[1000px]:px-[40px] min-[1440px]:px-[100px] ${
          open
            ? "max-h-[100dvh] overflow-auto overscroll-contain"
            : "h-[64px] overflow-hidden"
        }`}
      >
        <div className="flex w-full flex-none flex-col items-start min-[1000px]:w-px min-[1000px]:max-w-[1440px] min-[1000px]:flex-1 min-[1000px]:flex-row min-[1000px]:items-center min-[1000px]:justify-between">
          {/* Logo row — full width with the toggle pushed to the far side below
              810, shrink-to-fit beside the links above it. */}
          <div className="flex h-[40px] w-full flex-row items-center justify-between min-[1000px]:h-auto min-[1000px]:w-min min-[1000px]:justify-start">
            <Link
              href="/"
              aria-label="Drommer"
              className="flex items-center"
              onClick={() => setOpen(false)}
            >
              <DrommerWordmark width={95} height={18} />
            </Link>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={open}
              aria-controls="drommer-mobile-menu"
              className="relative h-[44px] w-[44px] cursor-pointer overflow-hidden min-[1000px]:hidden"
            >
              <span
                className={`${BAR_CLASS} ${
                  open
                    ? "top-[calc(50%_-_1px)] rotate-45"
                    : "top-[calc(37.5%_-_1px)] rotate-0"
                }`}
              />
              <span
                className={`${BAR_CLASS} top-[calc(50%_-_1px)] ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`${BAR_CLASS} ${
                  open
                    ? "top-[calc(50%_-_1px)] -rotate-45"
                    : "top-[calc(62.5%_-_1px)] rotate-0"
                }`}
              />
            </button>
          </div>

          <div
            id="drommer-mobile-menu"
            className={`w-full flex-col items-start gap-[10px] pt-[40px] min-[1000px]:flex min-[1000px]:w-auto min-[1000px]:flex-row min-[1000px]:items-center min-[1000px]:gap-[30px] min-[1000px]:pt-0 ${
              open ? "flex" : "hidden"
            }`}
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={LINK_CLASS}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div
            className={`w-full flex-col items-start gap-[20px] pt-[40px] pb-[20px] text-white min-[1000px]:flex min-[1000px]:w-auto min-[1000px]:flex-row min-[1000px]:items-center min-[1000px]:gap-[14px] min-[1000px]:pt-0 min-[1000px]:pb-0 ${
              open ? "flex" : "hidden"
            }`}
          >
            <LanguageToggle />
            <a
              href="https://drommer-founder-program.lovable.app"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex h-[34px] w-full shrink-0 items-center justify-center rounded-[5px] bg-white px-[20px] text-[14px] leading-[14px] font-semibold tracking-[-0.28px] whitespace-nowrap text-black transition-colors duration-200 ease-out hover:bg-[#CCCCCC] min-[1000px]:w-auto"
            >
              {t.common.applyToBuild}
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
