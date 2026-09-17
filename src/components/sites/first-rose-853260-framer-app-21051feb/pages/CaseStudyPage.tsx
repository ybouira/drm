"use client";

import Image from "next/image";

import type { Messages } from "@/i18n/en";
import { useI18n } from "@/i18n/provider";

import { Footer } from "../root-8a5edab2/Footer";
import { FinalCta } from "../root-8a5edab2/FinalCta";
import { Navbar } from "../root-8a5edab2/Navbar";
import type { CaseStudyContent } from "./caseStudy";

// The horizontal gutter belongs to the section, not the rail — on the live page
// the 1440px rail carries full-width content (the dark cards are 1440 wide).
const RAIL = "mx-auto w-full max-w-[1440px]";

function studyCopy(t: Messages, slug: string) {
  if (slug === "okrogito") return t.studies.okrogito;
  if (slug === "prisma-ai-group") return t.studies.prisma;
  return t.studies.kaleba;
}

function StatusPill({
  statusKey,
  label,
}: {
  statusKey: string;
  label: string;
}) {
  const dot = statusKey === "Launched" ? "#00FF4C" : "#F28838";
  return (
    <span className="inline-flex h-[22px] items-center gap-[5px] rounded-[100px] bg-[rgba(121,121,121,0.15)] px-[10px] py-[5px]">
      <span
        className="h-[6px] w-[6px] shrink-0 rounded-[100px]"
        style={{ backgroundColor: dot }}
      />
      <span className="text-[12px] font-normal leading-3 text-white">
        {label}
      </span>
    </span>
  );
}

export function CaseStudyPage({ study }: { study: CaseStudyContent }) {
  const { t } = useI18n();
  const copy = studyCopy(t, study.slug);

  return (
    <>
      <Navbar />
      <main>
        <section className="px-5 min-[810px]:px-10 min-[1440px]:px-[100px] relative flex h-[748px] flex-col justify-end overflow-hidden bg-[#0d0d0f]">
          <Image
            src={study.heroBackground}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(12,12,13,0)_0%,rgba(12,12,13,0.6)_86.6514%,rgb(12,12,13)_100%)]" />
          <div className={`relative z-[1] ${RAIL} pb-[60px] pt-10`}>
            <div className="flex w-full flex-col gap-5">
              <div className="flex flex-wrap items-center gap-5">
                <span className="inline-flex h-[34px] items-center rounded-[100px] bg-[#7844ee] px-5 py-2.5 text-[14px] font-bold leading-[14px] tracking-[2.8px] text-white">
                  {t.common.startup}
                </span>
                <StatusPill statusKey={study.status} label={copy.status} />
              </div>
              <Image
                src={study.logo}
                alt=""
                width={study.logoWidth}
                height={study.logoHeight}
                className="h-[84px] w-auto object-contain object-left"
                style={{ maxWidth: study.logoWidth }}
              />
              <p className="w-full text-[20px] font-normal leading-5 text-white">
                {copy.summary}
              </p>
            </div>
          </div>
        </section>

        <section className="px-5 min-[810px]:px-10 min-[1440px]:px-[100px] bg-white py-[60px]">
          <div className={`${RAIL} flex flex-col gap-[42px]`}>
            {copy.metrics.length > 0 ? (
              <div className="grid grid-cols-1 gap-[14px] min-[810px]:grid-cols-3">
                {copy.metrics.map((metric) => (
                  <div
                    key={metric}
                    className="flex min-h-[110px] items-center justify-center rounded-[12px] bg-[#f8f8f8] p-[22px] text-center"
                  >
                    <p className="text-[18px] font-medium leading-[21.6px] tracking-[-0.54px] text-[#2d2d2d]">
                      {metric}
                    </p>
                  </div>
                ))}
              </div>
            ) : null}

            <div>
              <p className="mb-4 text-[12px] font-bold leading-[14.4px] tracking-[2.4px] text-[#7844ee]">
                {t.caseStudyUi.theContext}
              </p>
              <div className="flex flex-col gap-10 rounded-[12px] bg-[#161616] p-8 min-[810px]:flex-row min-[810px]:gap-[100px] min-[810px]:p-[56px]">
                <div className="flex flex-1 flex-col gap-5">
                  <h3 className="text-[14px] font-bold leading-[16.8px] tracking-[0.56px] text-white">
                    {t.caseStudyUi.theProblem}
                  </h3>
                  <p className="text-[20px] font-normal leading-7 tracking-[-0.4px] text-[#ebebeb]">
                    {copy.problem}
                  </p>
                </div>
                <div className="flex flex-1 flex-col gap-5">
                  <h3 className="text-[14px] font-bold leading-[16.8px] tracking-[0.56px] text-white">
                    {t.caseStudyUi.theSolution}
                  </h3>
                  <p className="text-[20px] font-normal leading-7 tracking-[-0.4px] text-[#ebebeb]">
                    {copy.solution}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 min-[810px]:px-10 min-[1440px]:px-[100px] bg-white pb-10">
          <div
            className={`${RAIL} flex flex-col gap-10 min-[810px]:flex-row min-[810px]:items-center min-[810px]:gap-[100px]`}
          >
            <div className="flex w-full flex-col gap-[26px] min-[810px]:w-[563px] min-[810px]:shrink-0">
              <h2 className="text-[42px] font-bold leading-[46.2px] tracking-[-1.68px] text-[#0d0d0f]">
                {t.caseStudyUi.businessModel}
              </h2>
              <p className="text-[18px] font-normal leading-[27px] tracking-[-0.27px] text-[#2d2d2d]">
                {copy.businessModel}
              </p>
              <h3 className="text-[14px] font-bold leading-[16.8px] tracking-[0.56px] text-[#0f0f0f]">
                {t.caseStudyUi.targetClients}
              </h3>
              <p className="text-[18px] font-normal leading-[27px] tracking-[-0.27px] text-[#2d2d2d]">
                {copy.targetClients}
              </p>
            </div>
            <div className="relative h-[380px] w-full overflow-hidden rounded-[12px] min-[810px]:h-[580px] min-[810px]:w-[563px] min-[810px]:shrink-0">
              <Image
                src={study.narrativeImage}
                alt=""
                fill
                className="rounded-[12px] object-contain"
                sizes="(min-width: 810px) 563px, 100vw"
              />
            </div>
          </div>
        </section>

        <section className="px-5 min-[810px]:px-10 min-[1440px]:px-[100px] bg-white py-[72px]">
          <div className={`${RAIL} flex flex-col gap-10`}>
            <h2 className="text-[42px] font-bold leading-[46.2px] tracking-[-1.68px] text-[#0d0d0f]">
              {t.caseStudyUi.roadmap}
            </h2>
            <div className="flex flex-col">
              {copy.roadmap.map((item, index) => (
                <div
                  key={`${item.date}-${item.title}`}
                  className={`flex flex-col gap-2 py-6 ${
                    index < copy.roadmap.length - 1
                      ? "border-b border-[#d9d9d9]"
                      : ""
                  }`}
                >
                  <h4 className="text-[13px] font-bold leading-[15.6px] tracking-[1.56px] text-[#7138f2]">
                    {item.date}
                  </h4>
                  <h3 className="text-[24px] font-bold leading-[28.8px] tracking-[-0.72px] text-[#0f0f0f]">
                    {item.title}
                  </h3>
                  <p className="text-[18px] font-normal leading-[27px] tracking-[-0.36px] text-[#0d0d0f]">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 min-[810px]:px-10 min-[1440px]:px-[100px] bg-white pb-[60px]">
          <div className={RAIL}>
            <div className="flex flex-col gap-10 rounded-[12px] bg-[#161616] p-8 min-[810px]:p-16">
              <h2 className="text-[42px] font-bold leading-[46.2px] tracking-[-1.68px] text-white">
                {t.caseStudyUi.whosBehind}
              </h2>
              <div className="flex flex-col gap-10 min-[810px]:flex-row min-[810px]:gap-[100px]">
                <div className="flex-1">
                  <p className="text-[18px] font-normal leading-[27px] tracking-[-0.36px] text-[#ebebeb]">
                    <strong className="font-semibold">{study.founderName}</strong>
                    <br />
                    {copy.founderRole}
                  </p>
                  <p className="mt-4 text-[18px] font-normal leading-[27px] text-[#ebebeb]">
                    {copy.founderBio}
                  </p>
                </div>
                <div className="flex-1 min-[810px]:pt-[66px]">
                  <p className="text-[18px] font-normal leading-[27px] text-[#ebebeb]">
                    {copy.founderOutcome}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-10 pt-7 min-[810px]:flex-row min-[810px]:gap-10">
                <div className="relative h-[260px] w-[260px] shrink-0 overflow-hidden rounded-[10px]">
                  <Image
                    src={study.founderPhoto}
                    alt={study.founderName}
                    fill
                    className="object-cover"
                    sizes="260px"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-[28px] font-semibold leading-[35px] tracking-[-0.84px] text-white">
                    {copy.quote}
                  </p>
                  <p className="text-[14px] font-normal leading-[19.6px] tracking-[-0.28px] text-[#b4b4b4]">
                    {study.quoteAttributionName}
                    <br />
                    {copy.quoteRole}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FinalCta />
      <Footer />
    </>
  );
}
