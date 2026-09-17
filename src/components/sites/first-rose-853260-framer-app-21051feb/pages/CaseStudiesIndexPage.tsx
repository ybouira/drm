"use client";

import Image from "next/image";
import Link from "next/link";

import { useI18n } from "@/i18n/provider";

import { Footer } from "../root-8a5edab2/Footer";
import { FinalCta } from "../root-8a5edab2/FinalCta";
import { Navbar } from "../root-8a5edab2/Navbar";

const HOME = "/sites/first-rose-853260-framer-app-21051feb/root-8a5edab2/images";

const STUDIES = [
  {
    href: "/case-studies/kaleba",
    background: `${HOME}/B1VEekKzR9KhSWNlSPWgytTjbSY.webp`,
    brandMark: `${HOME}/XbHlR61qEHpYzyb07CuA6Yz7rM.webp`,
    brandMarkWidth: 530,
    copyKey: "kaleba" as const,
  },
  {
    href: "/case-studies/okrogito",
    background: `${HOME}/EZnEUxq21CuRRiCWmG8QqlK7Xoo.webp`,
    brandMark: `${HOME}/dRFWThY0BX0AqgVC4AO5yvkTNxQ.webp`,
    brandMarkWidth: 246,
    copyKey: "okrogito" as const,
  },
  {
    href: "/case-studies/prisma-ai-group",
    background: `${HOME}/AMNFRegqg923K5mIFUmvbSjNV4.webp`,
    brandMark: `${HOME}/aWxOXQ9PiPsYwsifpLTqpAEhRAE.webp`,
    brandMarkWidth: 246,
    copyKey: "prisma" as const,
  },
];

export function CaseStudiesIndexPage() {
  const { t } = useI18n();

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-[#0d0d0f] px-5 pb-[120px] pt-[128px] min-[810px]:px-10 min-[1440px]:px-[100px]">
          <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-[50px]">
            <div className="flex w-full flex-col gap-[50px]">
              <h1 className="text-[40px] font-semibold leading-[44px] tracking-[-1.8px] text-white min-[810px]:text-[52px] min-[810px]:leading-[56.16px] min-[810px]:tracking-[-2.34px]">
                {t.caseStudiesIndex.title}
              </h1>
              <p className="w-full text-[18px] font-normal leading-[25.2px] tracking-[-0.45px] text-white min-[810px]:text-[21px] min-[810px]:leading-[29.4px] min-[810px]:tracking-[-0.525px]">
                {t.caseStudiesIndex.subtitle}
              </p>
            </div>

            {/* The live index spaces its three cards 28px apart, not 20px. */}
          <div className="flex flex-col gap-[28px]">
              {STUDIES.map((study) => (
                <Link
                  key={study.href}
                  href={study.href}
                  className="relative flex h-[400px] w-full flex-col items-end justify-between overflow-hidden rounded-[10px] p-5 shadow-none transition-[box-shadow] duration-200 ease-out hover:shadow-[0_0_20px_6px_rgba(112,56,242,0.5)] min-[810px]:h-[522px] min-[810px]:p-10"
                >
                  <Image
                    src={study.background}
                    alt=""
                    fill
                    className="rounded-[10px] object-cover"
                    sizes="(min-width: 1440px) 1225px, 100vw"
                  />
                  <div className="absolute inset-0 rounded-[10px] bg-[linear-gradient(rgba(255,255,255,0)_0%,rgba(0,0,0,0)_51.1736%,rgba(0,0,0,0.25)_61.4645%,rgba(0,0,0,0.7)_76.7427%,rgba(0,0,0,0.75)_100%)]" />
                  <span className="relative z-[1] inline-flex h-[34px] items-center justify-center rounded-[100px] bg-[#7844ee] px-5 py-2.5 text-[14px] font-bold leading-[14px] tracking-[2.8px] text-white">
                    {t.common.startup}
                  </span>
                  <div className="relative z-[1] flex w-full flex-col items-start justify-end gap-5">
                    <Image
                      src={study.brandMark}
                      alt=""
                      width={study.brandMarkWidth}
                      height={125}
                      className="h-[84px] w-auto max-w-full object-contain min-[810px]:h-[125px]"
                    />
                    <p className="w-full text-[18px] font-normal leading-[22px] text-white min-[810px]:text-[20px] min-[810px]:leading-6">
                      {t.caseStudiesIndex[study.copyKey]}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <FinalCta />
      <Footer />
    </>
  );
}
