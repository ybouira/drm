"use client";

import Image from "next/image";
import Link from "next/link";

import { useI18n } from "@/i18n/provider";

import {
  DrommerWordmarkLarge,
  InstagramIcon,
  LinkedInIcon,
  YouTubeIcon,
} from "../shared/icons";

export function Footer() {
  const { t } = useI18n();

  const companyLinks: ReadonlyArray<{ label: string; href: string }> = [
    { label: t.nav.founderProgram, href: "/#program-phases" },
    { label: t.nav.forCompanies, href: "/#for-companies" },
    { label: t.nav.caseStudies, href: "/case-studies" },
    { label: t.nav.aboutUs, href: "/about-us" },
  ];

  const opportunityLinks: ReadonlyArray<{ label: string; href: string }> = [
    { label: t.common.startAProject, href: "https://schedule.fillout.com/t/uGGCRZmyGvus" },
    { label: t.common.applyNow, href: "https://forms.fillout.com/t/cP5KQYqyDdus" },
  ];

  return (
    <footer className="flex flex-col items-center justify-center gap-[75px] bg-[#0d0d0f] px-[20px] pt-[64px] pb-[50px] min-[810px]:px-[40px] min-[1440px]:px-[60px]">
      <div className="flex w-full max-w-[1440px] flex-col gap-[75px]">
        <div className="flex flex-col items-start justify-start gap-[50px] min-[1440px]:flex-row min-[1440px]:gap-[349px]">
          <DrommerWordmarkLarge width={230} height={40} />

          <div className="flex flex-col gap-[20px] min-[1440px]:w-[116px]">
            <p className="text-[14px] leading-[16.8px] font-medium text-white">
              {t.footer.company}
            </p>
            <div className="flex flex-col gap-[10px]">
              {companyLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[14px] leading-[16.8px] font-normal text-[#939393] transition-colors duration-200 ease-out hover:text-[#7138F2]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-[20px] min-[1440px]:w-[95px]">
            <p className="text-[14px] leading-[16.8px] font-medium text-white">
              {t.footer.opportunities}
            </p>
            <div className="flex flex-col gap-[10px]">
              {opportunityLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] leading-[16.8px] font-normal text-[#939393] transition-colors duration-200 ease-out hover:text-[#7138F2]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex h-[34px] flex-row items-center justify-start gap-[20px]">
          <a
            href="https://www.instagram.com/drommer.ch"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex items-center justify-center"
          >
            <InstagramIcon width={23} height={23} />
          </a>
          <a
            href="https://youtube.com/@drommerhq"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="flex items-center justify-center"
          >
            <YouTubeIcon width={26} height={18} />
          </a>
          <a
            href="https://www.linkedin.com/company/drommerch/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center justify-center"
          >
            <LinkedInIcon width={19} height={18} />
          </a>
          <a
            href="https://www.tiktok.com/@drommer.ch"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            <Image
              src="/sites/first-rose-853260-framer-app-21051feb/root-8a5edab2/images/Dx3NDQRbBFXMEHBi12YiSiAcoOo.png"
              alt="TikTok"
              width={34}
              height={34}
            />
          </a>
        </div>

        <div className="flex flex-row items-center justify-between">
          <p className="text-[14px] leading-[16.8px] font-normal text-[#939393]">
            <span className="text-white">Drommer 2026 </span>
            {t.footer.builtForFounders}
          </p>
        </div>
      </div>
    </footer>
  );
}
