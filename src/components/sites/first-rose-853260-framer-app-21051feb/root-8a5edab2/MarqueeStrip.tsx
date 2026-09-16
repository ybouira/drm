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

export function MarqueeStrip() {
  return (
    <div className="flex w-full flex-row items-center justify-start gap-[20px] overflow-clip bg-[linear-gradient(90deg,rgb(13,13,15)_0%,rgb(42,18,98)_54.3269%,rgb(13,13,15)_100%)] px-0 py-[20px]">
      <div className="flex h-[12px] w-full gap-[30px] overflow-clip">
        <ul className="flex shrink-0 list-none items-center gap-[30px] -translate-x-[30px] p-0">
          {LABELS.map((label) => (
            <Fragment key={label}>
              <li className="flex items-center">
                <span className="block h-[6px] w-[6px] rounded-[100px] bg-[#7138F2]" />
              </li>
              <li className="whitespace-nowrap text-[10px] font-normal leading-[12px] tracking-normal text-white">
                {label}
              </li>
            </Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
}
