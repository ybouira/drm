"use client";

import { useState } from "react";

import { useI18n } from "@/i18n/provider";

function ToggleIcon({ open }: { open: boolean }) {
  return (
    <span className="relative flex h-[40px] w-[40px] shrink-0 items-center justify-center">
      <span className="absolute h-[2px] w-[14px] rounded-[1px] bg-black" />
      {!open && (
        <span className="absolute h-[14px] w-[2px] rounded-[10px] bg-black" />
      )}
    </span>
  );
}

export function Faq() {
  const { t } = useI18n();
  const [openRows, setOpenRows] = useState<readonly number[]>([]);

  const toggle = (index: number) =>
    setOpenRows((rows) =>
      rows.includes(index)
        ? rows.filter((row) => row !== index)
        : [...rows, index],
    );

  return (
    <section className="flex flex-col items-center justify-center gap-[60px] bg-[#f8f8f8] px-[24px] py-[60px] min-[810px]:px-[60px] min-[1440px]:px-[100px]">
      {/* The live row (.framer-n160eb) is flex-row only at 1440; both narrower
          blocks set flex-direction: column. The heading column is sticky at
          top: 80px there, and static below (.framer-19zio2m). */}
      <div className="flex w-full max-w-[1440px] flex-col gap-[40px] min-[1440px]:flex-row min-[1440px]:items-start min-[1440px]:gap-[60px]">
        <div className="flex w-full flex-col gap-[30px] min-[1440px]:sticky min-[1440px]:top-[80px] min-[1440px]:w-[560px] min-[1440px]:shrink-0">
          <p className="text-[12px] leading-[14.4px] font-bold tracking-[2.4px] text-[#7138f2]">
            {t.faq.eyebrow}
          </p>
          <p className="text-[32px] leading-[40px] font-bold text-[#0d0d0f] min-[810px]:text-[40px] min-[810px]:leading-[48px] min-[1440px]:whitespace-nowrap">
            {t.faq.title}
          </p>
        </div>

        <div className="flex w-full flex-1 flex-col gap-[5px] min-[1440px]:max-w-[820px]">
          {t.faq.entries.map((entry, index) => {
            const open = openRows.includes(index);

            return (
              <div
                key={`${entry.question}-${index}`}
                className="overflow-hidden shadow-[inset_0_-1px_0_0_#d2d2d2]"
              >
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => toggle(index)}
                  className="flex h-[60px] w-full cursor-pointer flex-row items-center justify-between py-[10px] text-left"
                >
                  <span className="text-[15px] leading-[18px] font-semibold tracking-[-0.3px] text-black">
                    {entry.question}
                  </span>
                  <ToggleIcon open={open} />
                </button>

                <div
                  className={`grid transition-all duration-200 ease-out ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pr-[20px] pb-[20px] text-[15px] leading-[19.5px] font-normal tracking-[-0.15px] text-[#999999]">
                      {entry.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
