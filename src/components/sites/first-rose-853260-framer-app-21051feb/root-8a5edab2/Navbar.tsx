"use client";

import Link from "next/link";

import { LanguageToggle } from "@/i18n/LanguageToggle";
import { useI18n } from "@/i18n/provider";

import { DrommerWordmark } from "../shared/icons";

export function Navbar() {
  const { t } = useI18n();

  const links: ReadonlyArray<{ label: string; href: string }> = [
    { label: t.nav.founderProgram, href: "/#program-phases" },
    { label: t.nav.forCompanies, href: "/#for-companies" },
    { label: t.nav.caseStudies, href: "/case-studies" },
    { label: t.nav.aboutUs, href: "/about-us" },
  ];

  return (
    <div className="fixed top-0 left-0 z-[2] h-[58px] w-full">
      <nav className="relative flex h-[58px] flex-row items-center justify-center gap-[20px] overflow-hidden bg-black/45 px-[20px] py-[12px] backdrop-blur-[8px] min-[810px]:px-[40px] min-[1440px]:px-[100px]">
        <div className="flex h-[34px] w-full max-w-[1440px] flex-[1_0_0px] flex-row items-center justify-between">
          <Link href="/" aria-label="Drommer" className="flex items-center">
            <DrommerWordmark width={95} height={18} />
          </Link>

          <div className="hidden flex-row items-center gap-[30px] min-[810px]:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="h-[28px] rounded-none bg-transparent p-0 text-[14px] leading-[28px] font-medium tracking-[-0.14px] text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-[14px] text-white">
            <LanguageToggle />
            <a
              href="https://drommer-founder-program.lovable.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[34px] items-center justify-center rounded-[5px] bg-white px-[20px] text-[14px] leading-[14px] font-semibold tracking-[-0.28px] text-black hover:bg-[#CCCCCC] transition-colors duration-200 ease-out"
            >
              {t.common.applyToBuild}
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
