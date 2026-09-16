import { Fragment, type ReactNode } from "react";

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
  title: string;
  titlePosition: string;
  body: ReactNode | null;
  bodyPosition: string | null;
};

type Phase = {
  id: string;
  icon: ReactNode;
  nodePosition: string;
  text: PhaseText | null;
};

/**
 * Measured from the live site. The leftmost node carries no numeral, title or
 * body, and phase 04 has a title but no body paragraph — reproduced as-is.
 */
const PHASES: readonly Phase[] = [
  {
    id: "01",
    icon: <PhaseOneIcon width={23} height={33} />,
    nodePosition: "left-[0px] top-[332px]",
    text: null,
  },
  {
    id: "02",
    icon: <PhaseTwoIcon width={30} height={30} />,
    nodePosition: "left-[312px] top-[176px]",
    text: {
      numeral: "02",
      numeralPosition: "left-[259px] top-[278px]",
      title: "Build Weekend",
      titlePosition: "left-[259px] top-[351px]",
      body: (
        <>
          Selected founders join an intensive in-person experience at Drommer HQ
          in Chiasso to challenge the idea, build the first venture proposal and
          compete in a final pitch competition.
        </>
      ),
      bodyPosition: "left-[259px] top-[385px] w-[339px]",
    },
  },
  {
    id: "03",
    icon: <PhaseThreeIcon width={32} height={33} />,
    nodePosition: "left-[684px] top-[297px]",
    text: {
      numeral: "03",
      numeralPosition: "left-[481px] top-[20px]",
      title: "10 Weeks to Revenue",
      titlePosition: "left-[481px] top-[103px]",
      body: (
        <>
          The strongest founders earn a place into a{" "}
          <strong className="font-bold">free 10-week journey</strong> focused on
          validation, offer design, pricing, customer acquisition and first
          revenue.
        </>
      ),
      bodyPosition: "left-[481px] top-[137px] w-[320px]",
    },
  },
  {
    id: "04",
    icon: <PhaseFourIcon width={25} height={26} />,
    nodePosition: "left-[1155px] top-[187px]",
    text: {
      numeral: "04",
      numeralPosition: "left-[959px] top-[253px]",
      title: "Venture Building",
      titlePosition: "left-[959px] top-[326px]",
      body: null,
      bodyPosition: null,
    },
  },
];

const NUMERAL_CLASS =
  "bg-[linear-gradient(rgb(210,210,210)_0%,rgb(245,245,247)_67.3077%,rgb(255,255,255)_100%)] bg-clip-text font-[family-name:var(--font-inter)] text-[60px] font-bold leading-[72px] text-transparent";

const TITLE_CLASS = "text-[20px] font-bold leading-[24px] text-[#0d0d0f]";

const BODY_CLASS = "text-[16px] font-normal leading-[19.2px] text-[#767676]";

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
  return (
    <section
      id="program-phases"
      className="flex w-full flex-col items-center justify-center gap-[60px] overflow-clip bg-[#f8f8f8] px-0 py-[100px]"
    >
      <div className="flex w-full max-w-[1440px] flex-col items-center justify-center gap-[15px] px-6 min-[1440px]:px-0">
        <div className="flex flex-col items-center justify-center gap-[10px]">
          <p className="text-[12px] font-bold leading-[14.4px] tracking-[2.4px] text-[#7138f2]">
            PROGRAM PHASES
          </p>
          <p className="text-center text-[40px] font-bold leading-[48px] text-[#0d0d0f]">
            How the Founder Program works
          </p>
        </div>
        <p className="w-full text-center text-[18px] font-normal leading-[21.6px] text-[#505050]">
          <strong className="font-bold">
            Four steps to turn a real problem into an AI-native service business.
          </strong>
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

            {PHASES.map((phase) =>
              phase.text ? (
                <Fragment key={phase.id}>
                  <p
                    className={`absolute ${phase.text.numeralPosition} ${NUMERAL_CLASS}`}
                  >
                    {phase.text.numeral}
                  </p>
                  <p
                    className={`absolute ${phase.text.titlePosition} ${TITLE_CLASS}`}
                  >
                    {phase.text.title}
                  </p>
                  {phase.text.body && phase.text.bodyPosition ? (
                    <p
                      className={`absolute ${phase.text.bodyPosition} ${BODY_CLASS}`}
                    >
                      {phase.text.body}
                    </p>
                  ) : null}
                </Fragment>
              ) : null,
            )}
          </div>
        </div>
      </div>

      {/* Tablet / mobile: the 1233px stage cannot survive, so stack vertically
          and drop the connector. */}
      <div className="flex w-full max-w-[1440px] flex-col items-start gap-[40px] px-6 min-[1440px]:hidden">
        {PHASES.map((phase) => (
          <div
            key={phase.id}
            className="flex w-full flex-col items-start gap-[15px]"
          >
            <PhaseNode>{phase.icon}</PhaseNode>
            {phase.text ? (
              <>
                <p className={NUMERAL_CLASS}>{phase.text.numeral}</p>
                <p className={TITLE_CLASS}>{phase.text.title}</p>
                {phase.text.body ? (
                  <p className={`max-w-[400px] ${BODY_CLASS}`}>
                    {phase.text.body}
                  </p>
                ) : null}
              </>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
