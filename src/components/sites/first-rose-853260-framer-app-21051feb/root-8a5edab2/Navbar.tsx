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
 */

const LINK_CLASS =
  "h-[28px] rounded-none bg-transparent p-0 text-[14px] leading-[28px] font-medium tracking-[-0.14px] text-white transition-opacity duration-200 ease-out hover:opacity-70";

const BAR_CLASS =
  "absolute left-[calc(50%_-_10px)] h-[2px] w-[20px] bg-white transition-all duration-300 ease-out";

export function Navbar() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  // The panel only exists below 810; if the viewport grows past that while it
  // is open, drop the state so the row layout is never left in "open".
  // (Every link closes it on click, so navigation needs no effect of its own.)
  useEffect(() => {
    const wide = window.matchMedia("(min-width: 810px)");
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
    <div className="fixed top-0 left-0 z-[2] w-full">
      <nav
        className={`relative flex flex-col items-center justify-center gap-0 bg-black/45 px-[20px] py-[12px] backdrop-blur-[8px] transition-[max-height] duration-300 ease-out min-[810px]:h-[58px] min-[810px]:max-h-none min-[810px]:flex-row min-[810px]:gap-[20px] min-[810px]:overflow-hidden min-[810px]:px-[40px] min-[1440px]:px-[100px] ${
          open
            ? "max-h-[100dvh] overflow-auto overscroll-contain"
            : "h-[64px] overflow-hidden"
        }`}
      >
        <div className="flex w-full flex-none flex-col items-start min-[810px]:w-px min-[810px]:max-w-[1440px] min-[810px]:flex-1 min-[810px]:flex-row min-[810px]:items-center min-[810px]:justify-between">
          {/* Logo row — full width with the toggle pushed to the far side below
              810, shrink-to-fit beside the links above it. */}
          <div className="flex h-[40px] w-full flex-row items-center justify-between min-[810px]:h-auto min-[810px]:w-min min-[810px]:justify-start">
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
              className="relative h-[44px] w-[44px] cursor-pointer overflow-hidden min-[810px]:hidden"
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
            className={`w-full flex-col items-start gap-[10px] pt-[40px] min-[810px]:flex min-[810px]:w-auto min-[810px]:flex-row min-[810px]:items-center min-[810px]:gap-[30px] min-[810px]:pt-0 ${
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
            className={`w-full flex-col items-start gap-[20px] pt-[40px] pb-[20px] text-white min-[810px]:flex min-[810px]:w-auto min-[810px]:flex-row min-[810px]:items-center min-[810px]:gap-[14px] min-[810px]:pt-0 min-[810px]:pb-0 ${
              open ? "flex" : "hidden"
            }`}
          >
            <LanguageToggle />
            <a
              href="https://drommer-founder-program.lovable.app"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex h-[34px] w-full items-center justify-center rounded-[5px] bg-white px-[20px] text-[14px] leading-[14px] font-semibold tracking-[-0.28px] text-black transition-colors duration-200 ease-out hover:bg-[#CCCCCC] min-[810px]:w-auto"
            >
              {t.common.applyToBuild}
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
