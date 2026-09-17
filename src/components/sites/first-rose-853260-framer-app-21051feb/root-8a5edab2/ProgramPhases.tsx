"use client";

import { Fragment, type ReactNode } from "react";

import type { Messages } from "@/i18n/messages";
import { useI18n } from "@/i18n/provider";

import {
  PhaseFourIcon,
  PhaseOneIcon,
  PhaseThreeIcon,
  PhaseTwoIcon,
  PhasesConnectorIcon,
} from "../shared/icons";

type PhaseText = {
  numeral: string;
  numeralPosition: string;
  titlePosition: string;
  bodyPosition: string | null;
  variant: "gutter" | "plain" | "strong";
};

type Phase = {
  id: string;
  icon: ReactNode;
  nodePosition: string;
  text: PhaseText | null;
};

/**
 * Node and text positions are measured from the live desktop stage.
 *
 * Phase copy is the desktop wording at every breakpoint. Phase 01 uses the
 * same numeral/title/body tops as phase 03 so the two numbers sit on one
 * line. The 01 body wraps around the connector via shape-outside — it does
 * not cover the stroke.
 */
function PhaseOneCurveGutter() {
  return (
    <span
      aria-hidden
      className="pointer-events-none float-right h-[125px] w-[174px]"
      style={{
        // 174px gutter on the right of the 300px body (stage x 126–300).
        // Top is a sliver so early lines stay wide; lower vertices follow
        // the connector ~16px left of the centreline. The extra 10px at
        // the bottom stops a line from escaping under the float.
        shapeOutside:
          "polygon(166px 0px, 174px 0px, 174px 125px, 0px 125px, 15px 102px, 54px 77px, 98px 63px, 145px 48px)",
      }}
    />
  );
}

const PHASES: readonly Phase[] = [
  {
    id: "01",
    icon: <PhaseOneIcon width={23} height={33} />,
    nodePosition: "left-[0px] top-[332px]",
    text: {
      numeral: "01",
      numeralPosition: "left-[0px] top-[20px]",
      titlePosition: "left-[0px] top-[103px]",
      bodyPosition: "left-[0px] top-[137px] w-[300px]",
      variant: "gutter",
    },
  },
  {
    id: "02",
    icon: <PhaseTwoIcon width={30} height={30} />,
    nodePosition: "left-[312px] top-[176px]",
    text: {
      numeral: "02",
      numeralPosition: "left-[259px] top-[278px]",
      titlePosition: "left-[259px] top-[351px]",
      bodyPosition: "left-[259px] top-[385px] w-[339px]",
      variant: "plain",
    },
  },
  {
    id: "03",
    icon: <PhaseThreeIcon width={32} height={33} />,
    nodePosition: "left-[684px] top-[297px]",
    text: {
      numeral: "03",
      numeralPosition: "left-[481px] top-[20px]",
      titlePosition: "left-[481px] top-[103px]",
      bodyPosition: "left-[481px] top-[137px] w-[320px]",
      variant: "strong",
    },
  },
  {
    id: "04",
    icon: <PhaseFourIcon width={25} height={26} />,
    nodePosition: "left-[1155px] top-[187px]",
    text: {
      numeral: "04",
      numeralPosition: "left-[959px] top-[253px]",
      titlePosition: "left-[959px] top-[326px]",
      bodyPosition: "left-[959px] top-[360px] w-[274px]",
      variant: "plain",
    },
  },
];

type ResponsivePhase = {
  numeral: string;
  icon: ReactNode;
};

const RESPONSIVE_PHASES: readonly ResponsivePhase[] = [
  {
    numeral: "01",
    icon: <PhaseOneIcon width={23} height={33} />,
  },
  {
    numeral: "02",
    icon: <PhaseTwoIcon width={30} height={30} />,
  },
  {
    numeral: "03",
    icon: <PhaseThreeIcon width={32} height={33} />,
  },
  {
    numeral: "04",
    icon: <PhaseFourIcon width={25} height={26} />,
  },
];

const NUMERAL_CLASS =
  "bg-[linear-gradient(rgb(210,210,210)_0%,rgb(245,245,247)_67.3077%,rgb(255,255,255)_100%)] bg-clip-text font-[family-name:var(--font-inter)] text-[60px] font-bold leading-[72px] text-transparent";

const TITLE_CLASS = "text-[20px] font-bold leading-[24px] text-[#0d0d0f]";

const BODY_CLASS = "text-[16px] font-normal leading-[19.2px] text-[#767676]";

type PhaseCopy = Messages["phases"]["items"][number];

function PhaseCopyBody({ copy }: { copy: PhaseCopy }) {
  if ("body" in copy) return copy.body;
  return (
    <>
      {copy.bodyBefore}{" "}
      <strong className="font-bold">{copy.bodyStrong}</strong>{" "}
      {copy.bodyAfter}
    </>
  );
}

function PhaseNode({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-[70px] w-[69px] flex-row items-center justify-center gap-[10px] rounded-[100px] bg-white shadow-[0_0_10px_4px_rgba(0,0,0,0.1)]">
      <div className="flex h-[40px] w-[40px] items-center justify-center overflow-clip">
        {children}
      </div>
    </div>
  );
}

export function ProgramPhases() {
  const { t } = useI18n();

  return (
    <section
      id="program-phases"
      className="flex w-full flex-col items-center justify-center gap-[60px] overflow-clip bg-[#f8f8f8] px-0 py-[100px]"
    >
      <div className="flex w-full max-w-[1440px] flex-col items-center justify-center gap-[15px] px-6 min-[1440px]:px-0">
        <div className="flex flex-col items-center justify-center gap-[10px]">
          <p className="text-[12px] font-bold leading-[14.4px] tracking-[2.4px] text-[#7138f2]">
            {t.phases.eyebrow}
          </p>
          <p className="text-center text-[40px] font-bold leading-[48px] text-[#0d0d0f]">
            {t.phases.title}
          </p>
        </div>
        <p className="w-full text-center text-[18px] font-normal leading-[21.6px] text-[#505050]">
          <strong className="font-bold">{t.phases.subtitle}</strong>
        </p>
      </div>

      {/* Desktop: the free-form absolutely-positioned 1233 x 567 stage. */}
      <div className="hidden min-[1440px]:block">
        <div className="h-[567px] w-[1440px] overflow-clip bg-[#f8f8f8]">
          <div className="relative mx-auto h-[567px] w-[1233px]">
            <PhasesConnectorIcon
              width={1164}
              height={263}
              className="absolute left-[34px] top-[122px]"
              aria-hidden="true"
            />

            {PHASES.map((phase) => (
              <div
                key={phase.id}
                className={`absolute ${phase.nodePosition}`}
              >
                <PhaseNode>{phase.icon}</PhaseNode>
              </div>
            ))}

            {PHASES.map((phase, index) => {
              const copy = t.phases.items[index];
              if (!phase.text || !copy) return null;
              return (
                <Fragment key={phase.id}>
                  <p
                    className={`absolute ${phase.text.numeralPosition} ${NUMERAL_CLASS}`}
                  >
                    {phase.text.numeral}
                  </p>
                  <p
                    className={`absolute ${phase.text.titlePosition} ${TITLE_CLASS}`}
                  >
                    {copy.title}
                  </p>
                  {phase.text.bodyPosition ? (
                    <p
                      className={`absolute ${phase.text.bodyPosition} ${BODY_CLASS}`}
                    >
                      {phase.text.variant === "gutter" ? (
                        <PhaseOneCurveGutter />
                      ) : null}
                      <PhaseCopyBody copy={copy} />
                    </p>
                  ) : null}
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>

      {/* Below 1440px the stage is stacked, but the copy stays the desktop
          version so every breakpoint matches. */}
      <div className="flex w-full max-w-[1440px] flex-col items-start gap-[40px] px-6 min-[1440px]:hidden">
        {RESPONSIVE_PHASES.map((phase, index) => {
          const copy = t.phases.items[index];
          if (!copy) return null;
          return (
          <div
            key={phase.numeral}
            className="flex w-full flex-col items-start gap-[15px]"
          >
            <PhaseNode>{phase.icon}</PhaseNode>
            <p className={NUMERAL_CLASS}>{phase.numeral}</p>
            <p className={TITLE_CLASS}>{copy.title}</p>
            <p className={`max-w-[520px] ${BODY_CLASS}`}>
              <PhaseCopyBody copy={copy} />
            </p>
          </div>
          );
        })}
      </div>
    </section>
  );
}
