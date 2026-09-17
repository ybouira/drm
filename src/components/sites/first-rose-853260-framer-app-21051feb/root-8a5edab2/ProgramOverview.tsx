"use client";

import Link from "next/link";

import { useI18n } from "@/i18n/provider";

import { ListCheckIcon, WhatYouGetIcon, WhoItsForIcon } from "../shared/icons";

const CARD_CLASS =
  "flex w-full flex-col items-start justify-center gap-[20px] rounded-[10px] bg-white p-[30px] shadow-[0_0_30px_0_rgba(113,56,242,0.2)] min-[810px]:w-auto min-[810px]:max-w-[427px] min-[810px]:flex-1 min-[1440px]:w-[427px] min-[1440px]:flex-none";

const DIVIDER_CLASS = "h-[1px] w-full rounded-[100px] bg-[#d9d9d9]";

const CARD_TITLE_CLASS =
  "text-[24px] font-bold leading-[28.8px] text-[#0d0d0f]";

const CARD_INTRO_CLASS = "text-[14px] font-normal leading-[16.8px] text-[#0d0d0f]";

const CHECK_BOX_CLASS =
  "flex h-[27px] w-[27px] shrink-0 items-center justify-center";

export function ProgramOverview() {
  const { t } = useI18n();

  return (
    <section className="flex w-full flex-col items-center justify-center gap-[60px] overflow-clip bg-[#f8f8f8] px-[20px] py-[60px] min-[810px]:px-[40px] min-[1440px]:px-[100px]">
      <div className="flex w-full flex-col items-center justify-center gap-[15px]">
        <div className="flex flex-col items-center justify-center gap-[10px]">
          <p className="text-[12px] font-bold leading-[14.4px] tracking-[2.4px] text-[#7138f2]">
            {t.overview.eyebrow}
          </p>
          <p className="text-center text-[40px] font-bold leading-[48px] text-[#0d0d0f]">
            {t.overview.title}
          </p>
        </div>
        <p className="text-center text-[18px] font-normal leading-[21.6px] text-[#505050]">
          {t.overview.subtitle}
        </p>
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-[20px] min-[810px]:flex-row">
        <article className={CARD_CLASS}>
          <div className="flex w-full flex-row items-start justify-start gap-[20px]">
            <div className="relative h-[48px] w-[48px] shrink-0 overflow-clip">
              <WhatYouGetIcon
                width={40}
                height={40}
                className="absolute left-[4px] top-[4px]"
              />
            </div>
            <div className="flex flex-col items-start justify-center gap-[5px]">
              <h3 className={CARD_TITLE_CLASS}>{t.overview.whatYouGet}</h3>
              <p className={CARD_INTRO_CLASS}>
                <span className="block">{t.overview.whatYouGetIntro1}</span>
                <span className="block">{t.overview.whatYouGetIntro2}</span>
              </p>
            </div>
          </div>

          <div className={DIVIDER_CLASS} />

          {t.overview.whatYouGetItems.map((item) => (
            <div
              key={item.title}
              className="flex w-full flex-row items-start gap-[10px]"
            >
              <span className={CHECK_BOX_CLASS}>
                <ListCheckIcon width={11} height={8} />
              </span>
              <div className="flex flex-col items-start justify-center gap-[5px]">
                <p className="text-[14px] font-bold leading-[16.8px] text-[#0d0d0f]">
                  {item.title}
                </p>
                <p className="text-[12px] font-normal leading-[14.4px] text-[#505050] min-[1440px]:w-[256px]">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </article>

        <article className={CARD_CLASS}>
          <div className="flex w-full flex-row items-start justify-start gap-[20px]">
            <div className="relative h-[48px] w-[48px] shrink-0 overflow-clip">
              <WhoItsForIcon
                width={40}
                height={36}
                className="absolute left-[4px] top-[6px]"
              />
            </div>
            <div className="flex flex-col items-start justify-center gap-[5px]">
              <h3 className={CARD_TITLE_CLASS}>{t.overview.whoItsFor}</h3>
              <p className={CARD_INTRO_CLASS}>{t.overview.whoItsForIntro}</p>
            </div>
          </div>

          <div className={DIVIDER_CLASS} />

          {t.overview.whoItems.map((item) => (
            <div
              key={item}
              className="flex w-full flex-row items-center gap-[10px]"
            >
              <span className={CHECK_BOX_CLASS}>
                <ListCheckIcon width={11} height={8} />
              </span>
              <p className="text-[12px] font-normal leading-[14.4px] text-[#505050]">
                {item}
              </p>
            </div>
          ))}
        </article>
      </div>

      <Link
        href="/founder-challenge"
        className="inline-flex items-center justify-center gap-[15px] rounded-[5px] bg-[#7138f2] px-[20px] py-[10px] text-[14px] font-semibold leading-[14px] text-white hover:bg-[#4418AB] transition-colors duration-200 ease-out"
      >
        {t.overview.exploreChallenge}
      </Link>
    </section>
  );
}
