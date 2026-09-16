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
 * Node and text positions are measured from the live desktop stage.
 *
 * DELIBERATE DEVIATION: the live site's desktop stage shows no text at all for
 * phase 01 and no body for phase 04 — that copy only exists in the section it
 * swaps in below 1440px. Showing it at desktop too was an explicit request, so
 * the 01 block and the 04 body below carry the verbatim copy from that
 * responsive section, placed in the stage's empty top-left and lower-right.
 * Everything else here is as measured.
 */
const PHASES: readonly Phase[] = [
  {
    id: "01",
    icon: <PhaseOneIcon width={23} height={33} />,
    nodePosition: "left-[0px] top-[332px]",
    text: {
      numeral: "01",
      numeralPosition: "left-[0px] top-[0px]",
      title: "Founder Exploration",
      titlePosition: "left-[0px] top-[83px]",
      body: (
        <>
          You enter the program and start working on your idea. Monthly
          workshops, envisioning sessions, and biweekly check-ins keep you moving
          towards the proof table.
        </>
      ),
      bodyPosition: "left-[0px] top-[117px] w-[240px]",
    },
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
      body: (
        <>
          When Drommer and you agree the opportunity is worth pursuing, Phase 2
          begins. You build the startup with us. Operational support, legal,
          accounting, fundraising, all in.
        </>
      ),
      bodyPosition: "left-[959px] top-[360px] w-[274px]",
    },
  },
];

type ResponsivePhase = {
  numeral: string;
  title: string;
  body: string;
  icon: ReactNode;
};

/**
 * The sub-1440px section the live site swaps in ("How the Founder Program
 * actually works"). Copy is verbatim from the site's compiled component source;
 * unlike the desktop stage, all four phases are named and described here.
 */
const RESPONSIVE_PHASES: readonly ResponsivePhase[] = [
  {
    numeral: "01",
    title: "Founder Exploration",
    body: "You enter the program and start working on your idea. Monthly workshops, envisioning sessions, and biweekly check-ins keep you moving towards the proof table.",
    icon: <PhaseOneIcon width={23} height={33} />,
  },
  {
    numeral: "02",
    title: "Proof Table",
    body: "Every month, you present your progress in front of the Drommer team and external network. You get challenged, supported, and directed. This is where weak ideas get stronger and real founders emerge.",
    icon: <PhaseTwoIcon width={30} height={30} />,
  },
  {
    numeral: "03",
    title: "Analysis Phase",
    body: "If you made worthwhile progress and passed the proof table we start going deeper and we start working together. We investigate the market, map assumptions, and gather real validation signals. The goal: move from intuition to evidence.",
    icon: <PhaseThreeIcon width={32} height={33} />,
  },
  {
    numeral: "04",
    title: "Venture Building",
    body: "When Drommer and you agree the opportunity is worth pursuing, Phase 2 begins. You build the startup with us. Operational support, legal, accounting, fundraising, all in.",
    icon: <PhaseFourIcon width={25} height={26} />,
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
          {/* The sub-1440px section carries a different headline on the live
              site: "How the Founder Program actually works". */}
          <p className="text-center text-[40px] font-bold leading-[48px] text-[#0d0d0f]">
            <span className="min-[1440px]:hidden">
              How the Founder Program actually works
            </span>
            <span className="hidden min-[1440px]:inline">
              How the Founder Program works
            </span>
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

      {/* Below 1440px the live site does not shrink the stage — it swaps in a
          different section titled "How the Founder Program actually works",
          with all four phases named and written out. Framer renders it
          conditionally, so it is absent from the desktop DOM entirely. */}
      <div className="flex w-full max-w-[1440px] flex-col items-start gap-[40px] px-6 min-[1440px]:hidden">
        {RESPONSIVE_PHASES.map((phase) => (
          <div
            key={phase.numeral}
            className="flex w-full flex-col items-start gap-[15px]"
          >
            <PhaseNode>{phase.icon}</PhaseNode>
            <p className={NUMERAL_CLASS}>{phase.numeral}</p>
            <p className={TITLE_CLASS}>{phase.title}</p>
            <p className={`max-w-[520px] ${BODY_CLASS}`}>{phase.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
