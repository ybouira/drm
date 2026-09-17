"use client";

import type { ReactNode } from "react";

import { useI18n } from "@/i18n/provider";

import {
  PillarFourIcon,
  PillarOneIcon,
  PillarTagCheckIcon,
  PillarThreeIcon,
  PillarTwoIcon,
} from "../shared/icons";

type Pillar = {
  number: string;
  icon: ReactNode;
  widthClassName: string;
};

const PILLARS: Pillar[] = [
  {
    number: "01",
    icon: <PillarOneIcon />,
    widthClassName: "min-[1440px]:w-[270px]",
  },
  {
    number: "02",
    icon: <PillarTwoIcon />,
    widthClassName: "min-[1440px]:w-[256px]",
  },
  {
    number: "03",
    icon: <PillarThreeIcon />,
    widthClassName: "min-[1440px]:w-[256px]",
  },
  {
    number: "04",
    icon: <PillarFourIcon />,
    widthClassName: "min-[1440px]:w-[256px]",
  },
];

export function WhatMakesDifferent() {
  const { t } = useI18n();

  return (
    <section
      id="four-pillar"
      className="flex flex-col items-center justify-center gap-[60px] overflow-clip bg-[#0d0d0f] px-[20px] py-[60px] min-[810px]:px-[40px] min-[1440px]:px-[100px]"
    >
      <div className="flex w-full max-w-[1440px] flex-col items-center gap-[60px]">
        <div className="flex flex-col items-center justify-center gap-[10px] text-center">
          <div className="flex flex-col gap-[10px]">
            <p className="text-[12px] font-bold leading-[14.4px] tracking-[2.4px] text-white">
              {t.pillars.eyebrow}
            </p>
            <h2 className="text-[30px] font-bold leading-[36px] text-white min-[810px]:text-[40px] min-[810px]:leading-[48px]">
              {t.pillars.title}
            </h2>
          </div>
          <p className="text-[16px] font-normal leading-[19.2px] text-white min-[810px]:text-[18px] min-[810px]:leading-[21.6px]">
            {t.pillars.bodyLine1}
            <br />
            {t.pillars.bodyLine2}
          </p>
        </div>

        <div className="flex w-full flex-col gap-[15px] min-[810px]:flex-row min-[810px]:flex-wrap min-[810px]:items-stretch min-[810px]:justify-center min-[1440px]:h-[293px] min-[1440px]:flex-nowrap min-[1440px]:items-center">
          {PILLARS.map((pillar, index) => {
            const copy = t.pillars.items[index];
            return (
            <div
              key={pillar.number}
              className={`flex w-full flex-col items-start justify-between gap-[15px] rounded-[10px] bg-white p-[20px] shadow-[0_0_30px_0_rgba(113,56,242,0.7)] min-[810px]:h-[293px] min-[810px]:w-[calc(50%_-_7.5px)] ${pillar.widthClassName}`}
            >
              <div className="flex flex-col items-start justify-start gap-[15px]">
                <p className="text-[16px] font-bold leading-[19.2px] text-[#7138F2]">
                  {pillar.number}
                </p>
                <div className="h-[48px] w-[48px] shrink-0 overflow-clip">
                  {pillar.icon}
                </div>
                <h3 className="text-[20px] font-bold leading-[24px] text-[#0d0d0f]">
                  {copy.title}
                </h3>
              </div>

              <p className="text-[14px] font-normal leading-[16.8px] text-[#0d0d0f] min-[1440px]:w-[216px]">
                {copy.description}
              </p>

              <div className="flex flex-row items-center gap-[10px]">
                <div className="h-[16px] w-[16px] shrink-0 overflow-clip">
                  <PillarTagCheckIcon />
                </div>
                <span className="text-[12px] font-normal leading-[18px] text-[#7138F2]">
                  {copy.tag}
                </span>
              </div>
            </div>
          );
          })}
        </div>
      </div>
    </section>
  );
}
