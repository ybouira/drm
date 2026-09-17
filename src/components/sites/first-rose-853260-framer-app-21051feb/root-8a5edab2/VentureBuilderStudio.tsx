"use client";

import Image from "next/image";

import { useI18n } from "@/i18n/provider";

export function VentureBuilderStudio() {
  const { t } = useI18n();

  return (
    <section
      id="for-companies"
      className="flex flex-col items-center justify-center gap-[60px] overflow-clip bg-white px-[20px] py-[60px] min-[1440px]:px-[100px]"
    >
      {/* Live card padding is 20 below 1440 and 40 at it; the row only becomes
          a column on mobile, where the gap drops to 40. */}
      <div className="flex w-full max-w-[1440px] flex-col items-start justify-start gap-[40px] rounded-[10px] bg-[#161616] p-[20px] min-[810px]:flex-row min-[810px]:gap-[60px] min-[1440px]:h-[474px] min-[1440px]:p-[40px]">
        {/* 798px fixed at desktop, then flex:1 at tablet so the pair fits. */}
        <div className="flex w-full flex-col gap-[40px] min-[810px]:w-px min-[810px]:flex-1 min-[810px]:gap-[60px] min-[1440px]:w-[798px] min-[1440px]:flex-none">
          <div className="flex flex-col gap-[20px]">
            <p className="text-[12px] leading-[14.4px] font-bold tracking-[2.4px] text-white">
              {t.studio.eyebrow}
            </p>
            <p className="text-[32px] leading-[38.4px] font-bold text-white min-[810px]:text-[40px] min-[810px]:leading-[48px]">
              {t.studio.titleLine1}
              <br />
              {t.studio.titleLine2}
            </p>
            <p className="text-[18px] leading-[21.6px] font-normal text-white min-[1440px]:w-[670px]">
              {t.studio.p1}
            </p>
            <p className="text-[18px] leading-[21.6px] font-normal text-white min-[1440px]:w-[670px]">
              {t.studio.p2}
            </p>
          </div>

          <a
            href="https://schedule.fillout.com/t/uGGCRZmyGvus"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-[34px] w-fit items-center justify-center rounded-[5px] bg-white px-[20px] text-[14px] leading-[14px] font-semibold tracking-[-0.28px] text-black hover:bg-[#CCCCCC] transition-colors duration-200 ease-out"
          >
            {t.studio.cta}
          </a>
        </div>

        {/* The image column is 36% at tablet and flex:1 at desktop — the 502px
            it measures at 1440 is the remainder, not a fixed width. */}
        <div className="w-full min-[810px]:w-[36%] min-[810px]:shrink-0 min-[810px]:self-stretch min-[1440px]:w-px min-[1440px]:flex-1">
          <Image
            src="/sites/first-rose-853260-framer-app-21051feb/root-8a5edab2/images/vjgh5nFn3fu3gvShiInOR0ILTs.png"
            alt=""
            width={502}
            height={394}
            className="h-[296px] w-full rounded-[10px] object-cover min-[810px]:h-full min-[1440px]:h-[394px]"
          />
        </div>
      </div>
    </section>
  );
}
