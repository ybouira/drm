import { Fragment } from "react";

const LABELS: string[] = [
  "CHIASSO HQ",
  "FOUNDER PROGRAM",
  "VENTURE BUILDING",
  "PROOF TABLE",
  "MILESTONE-BASED",
  "CO-FOUNDER",
  "TIME BANK",
  "SEED VALIDATION",
  "REAL PROJECTS",
  "TOP 10% ACCEPTED",
];

/**
 * One pass of the ticker: a purple dot before each label, 30px apart, with a
 * trailing 30px so two groups sit exactly one gap apart in the track.
 */
function TickerGroup({ ariaHidden }: { ariaHidden: boolean }) {
  return (
    <ul
      aria-hidden={ariaHidden || undefined}
      className="flex shrink-0 list-none items-center gap-[30px] pr-[30px]"
    >
      {LABELS.map((label) => (
        <Fragment key={label}>
          <li className="flex items-center">
            <span className="block h-[6px] w-[6px] rounded-[100px] bg-[#7138F2]" />
          </li>
          <li className="whitespace-nowrap text-[10px] leading-[12px] font-normal text-white">
            {label}
          </li>
        </Fragment>
      ))}
    </ul>
  );
}

export function MarqueeStrip() {
  // Framer runs this strip at 50px/s. One group measures ~1431px of content
  // plus the 30px trailing gap, so a full pass takes (1431 + 30) / 50 ≈ 29.2s.
  return (
    <div className="flex w-full flex-row items-center justify-start overflow-clip bg-[linear-gradient(90deg,rgb(13,13,15)_0%,rgb(42,18,98)_54.3269%,rgb(13,13,15)_100%)] py-[20px]">
      <div className="flex h-[12px] w-full overflow-clip">
        <div className="drommer-ticker-track flex w-max animate-[drommer-ticker_29.2s_linear_infinite] items-center">
          <TickerGroup ariaHidden={false} />
          <TickerGroup ariaHidden />
        </div>
      </div>
    </div>
  );
}
