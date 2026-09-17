"use client";

import { Fragment } from "react";

import { useI18n } from "@/i18n/provider";

function TickerGroup({
  ariaHidden,
  labels,
}: {
  ariaHidden: boolean;
  labels: readonly string[];
}) {
  return (
    <ul
      aria-hidden={ariaHidden || undefined}
      className="flex shrink-0 list-none items-center gap-[30px] pr-[30px]"
    >
      {labels.map((label) => (
        <Fragment key={label}>
          <li className="flex items-center">
            <span className="block h-[6px] w-[6px] rounded-[100px] bg-[#7138F2]" />
          </li>
          <li className="whitespace-nowrap opacity-50">
            <span className="text-[10px] leading-[12px] font-normal text-white">
              {label}
            </span>
          </li>
        </Fragment>
      ))}
    </ul>
  );
}

export function MarqueeStrip() {
  const { t } = useI18n();

  return (
    <div className="flex w-full flex-row items-center justify-start overflow-clip bg-[linear-gradient(90deg,rgb(13,13,15)_0%,rgb(42,18,98)_54.3269%,rgb(13,13,15)_100%)] py-[20px]">
      <div className="flex h-[12px] w-full overflow-clip">
        <div className="drommer-ticker-track flex w-max animate-[drommer-ticker_29.2s_linear_infinite] items-center">
          <TickerGroup ariaHidden={false} labels={t.marquee} />
          <TickerGroup ariaHidden labels={t.marquee} />
        </div>
      </div>
    </div>
  );
}
