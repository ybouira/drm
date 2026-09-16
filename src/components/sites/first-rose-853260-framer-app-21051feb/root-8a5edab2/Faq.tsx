"use client";

import { useState } from "react";

type FaqEntry = {
  question: string;
  answer: string;
};

/**
 * Copy is verbatim from https://first-rose-853260.framer.app/ — including the
 * duplicated "What happens if I don't pass a phase?" pair (rows 4 and 6), which
 * really does appear twice on the live site.
 */
const ENTRIES: FaqEntry[] = [
  {
    question: "How long do projects usually last?",
    answer:
      "Validate: 8–12 weeks. Launch: 3–6 months. Scale: 6+ months. We define duration based on the outcome to achieve, not on billable hours.",
  },
  {
    question: "Can you tell me more about the talent community?",
    answer:
      "Yes. For selected founders, the program is completely free. Drommer co-builds with you and invests in the launch. You don't pay to be here, you earn your place.",
  },
  {
    question: "Do I need to have an idea before applying?",
    answer:
      "No. You don't need a finished idea to apply. What we look for is drive, curiosity, and the willingness to do the work. Ideas can be developed, the right mindset can't be taught. If you're serious about building, that's enough to start.",
  },
  {
    question: "What happens if I don’t pass a phase?",
    answer:
      "Each phase includes formal evaluation checkpoints. If objectives are not met, the program ends. This system is designed to maintain high standards and work only with those who can sustain the required level.",
  },
  {
    question: "When do I start working on my own startup?",
    answer:
      "From the early stages, you begin exploring and developing your own idea. As concrete signals emerge, you move into a more structured validation phase, with dedicated time and team support.",
  },
  {
    question: "What happens if I don’t pass a phase?",
    answer:
      "Each phase includes formal evaluation checkpoints. If objectives are not met, the program ends. This system is designed to maintain high standards and work only with those who can sustain the required level.",
  },
  {
    question: "What happens when the idea is validated?",
    answer:
      "If the initiative shows strong metrics, we proceed with the spin-off. Drommer invests in the launch and remains an operational partner. The startup is yours and you retain the majority.",
  },
  {
    question:
      "Do I need to cover accommodation for the monthly gatherings in Chiasso?",
    answer:
      "No. Accommodation and lunch during the monthly in-person gatherings are fully covered by Drommer.",
  },
];

/**
 * The live site's toggle is a plus built from two bars that becomes a minus by
 * dropping the vertical bar — nothing rotates and nothing fades.
 */
function ToggleIcon({ open }: { open: boolean }) {
  return (
    <span className="relative flex h-[14px] w-[14px] shrink-0 items-center justify-center">
      <span className="absolute h-[2px] w-[14px] rounded-[1px] bg-black" />
      {!open && (
        <span className="absolute h-[14px] w-[2px] rounded-[10px] bg-black" />
      )}
    </span>
  );
}

export function Faq() {
  // Rows toggle independently — opening one does not close the others, which
  // matches the live site.
  const [openRows, setOpenRows] = useState<readonly number[]>([]);

  const toggle = (index: number) =>
    setOpenRows((rows) =>
      rows.includes(index)
        ? rows.filter((row) => row !== index)
        : [...rows, index],
    );

  return (
    <section className="flex flex-col items-center justify-center gap-[60px] bg-[#f8f8f8] px-[24px] py-[60px] min-[810px]:px-[60px] min-[1440px]:px-[100px]">
      <div className="flex w-full max-w-[1440px] flex-col gap-[40px] min-[810px]:flex-row min-[810px]:gap-[60px]">
        <div className="flex flex-col gap-[30px] min-[810px]:w-[560px] min-[810px]:shrink-0">
          <p className="text-[12px] leading-[14.4px] font-bold tracking-[2.4px] text-[#7138f2]">
            FAQ
          </p>
          <p className="text-[32px] leading-[40px] font-bold text-[#0d0d0f] min-[810px]:text-[40px] min-[810px]:leading-[48px]">
            Everything you need to know
          </p>
        </div>

        <div className="flex flex-1 flex-col gap-[5px] min-[810px]:max-w-[820px]">
          {ENTRIES.map((entry, index) => {
            const open = openRows.includes(index);

            return (
              <div
                key={`${entry.question}-${index}`}
                className="overflow-hidden border-b border-[#d2d2d2]"
              >
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => toggle(index)}
                  className="flex w-full cursor-pointer items-center justify-between gap-[20px] pt-[10px] pb-[10px] text-left"
                >
                  <span className="text-[15px] leading-[18px] font-semibold tracking-[-0.3px] text-black">
                    {entry.question}
                  </span>
                  <ToggleIcon open={open} />
                </button>

                <div
                  className={`grid transition-all duration-200 ease-out ${
                    open
                      ? "grid-rows-[1fr] pb-[13px] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="overflow-hidden text-[15px] leading-[19.5px] font-normal tracking-[-0.15px] text-[#999999]">
                    {entry.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
