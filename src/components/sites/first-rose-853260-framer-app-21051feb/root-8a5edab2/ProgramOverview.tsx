import { ListCheckIcon, WhatYouGetIcon, WhoItsForIcon } from "../shared/icons";

type WhatYouGetItem = {
  title: string;
  body: string;
};

const WHAT_YOU_GET: WhatYouGetItem[] = [
  {
    title: "Mentoring & Expert Support",
    body: "Regular 1:1 support from the Drommer team and selected experts to challenge decisions, unblock problems and move faster.",
  },
  {
    title: "Weekly Workshops",
    body: "Practical sessions every week focused on validation, offer design, pricing, go-to-market and sales.",
  },
  {
    title: "Drommer HQ Access",
    body: "Workspace in Chiasso (CH), monthly in-person gatherings with accommodation and lunch covered, and direct access to the Drommer founder community.",
  },
  {
    title: "Founder Fridays",
    body: "One day every week to build in person from Drommer HQ alongside the team and the other founders.",
  },
  {
    title: "Full Venture Support",
    body: "Hands-on support across strategy, operations, legal, accounting and fundraising as the venture evolves and reaches the next stage.",
  },
];

const WHO_ITS_FOR: string[] = [
  "You're 21–28 and want to build something real",
  "You want to launch a startup in 10 weeks",
  "You have drive, but maybe not yet a clear idea",
  "You're coachable and willing to be challenged",
  "You want to work alongside people who are already doing it",
  "You're ready to move, not wait",
];

const CARD_CLASS =
  "flex w-full flex-col items-start justify-center gap-[20px] rounded-[10px] bg-white p-[30px] shadow-[0_0_30px_0_rgba(113,56,242,0.2)] min-[810px]:w-auto min-[810px]:max-w-[427px] min-[810px]:flex-1 min-[1440px]:w-[427px] min-[1440px]:flex-none";

const DIVIDER_CLASS = "h-[1px] w-full rounded-[100px] bg-[#d9d9d9]";

const CARD_TITLE_CLASS =
  "text-[24px] font-bold leading-[28.8px] text-[#0d0d0f]";

const CARD_INTRO_CLASS = "text-[14px] font-normal leading-[16.8px] text-[#0d0d0f]";

const CHECK_BOX_CLASS =
  "flex h-[27px] w-[27px] shrink-0 items-center justify-center";

export function ProgramOverview() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-[60px] overflow-clip bg-[#f8f8f8] px-[20px] py-[60px] min-[810px]:px-[40px] min-[1440px]:px-[100px]">
      <div className="flex w-full flex-col items-center justify-center gap-[15px]">
        <div className="flex flex-col items-center justify-center gap-[10px]">
          <p className="text-[12px] font-bold leading-[14.4px] tracking-[2.4px] text-[#7138f2]">
            PROGRAM OVERVIEW
          </p>
          <p className="text-center text-[40px] font-bold leading-[48px] text-[#0d0d0f]">
            What you get &amp; who it&#8217;s for
          </p>
        </div>
        <p className="text-center text-[18px] font-normal leading-[21.6px] text-[#505050]">
          A real program. Real access. Real people behind it.
        </p>
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-[20px] min-[810px]:flex-row">
        <article className={CARD_CLASS}>
          <div className="flex w-full flex-row items-start justify-start gap-[20px]">
            <div className="relative h-[48px] w-[48px] shrink-0 overflow-clip">
              <WhatYouGetIcon
                width={40}
                height={40}
                className="absolute left-[4px] top-[4px]"
              />
            </div>
            <div className="flex flex-col items-start justify-center gap-[5px]">
              <h3 className={CARD_TITLE_CLASS}>What you get</h3>
              <p className={CARD_INTRO_CLASS}>
                <span className="block">
                  Everything you need to go from idea to launch, and nothing you
                  don&apos;t.
                </span>
                <span className="block">
                  The program is free for selected founders.
                </span>
              </p>
            </div>
          </div>

          <div className={DIVIDER_CLASS} />

          {WHAT_YOU_GET.map((item) => (
            <div
              key={item.title}
              className="flex w-full flex-row items-start gap-[10px]"
            >
              <span className={CHECK_BOX_CLASS}>
                <ListCheckIcon width={11} height={8} />
              </span>
              <div className="flex flex-col items-start justify-center gap-[5px]">
                <p className="text-[14px] font-bold leading-[16.8px] text-[#0d0d0f]">
                  {item.title}
                </p>
                {/* The live site authors this paragraph at a fixed 256px, which
                    is what drives each row's 65px / 79px height. */}
                <p className="text-[12px] font-normal leading-[14.4px] text-[#505050] min-[1440px]:w-[256px]">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </article>

        <article className={CARD_CLASS}>
          <div className="flex w-full flex-row items-start justify-start gap-[20px]">
            <div className="relative h-[48px] w-[48px] shrink-0 overflow-clip">
              <WhoItsForIcon
                width={40}
                height={36}
                className="absolute left-[4px] top-[6px]"
              />
            </div>
            <div className="flex flex-col items-start justify-center gap-[5px]">
              <h3 className={CARD_TITLE_CLASS}>Who it&#8217;s for</h3>
              <p className={CARD_INTRO_CLASS}>
                We look for people who are serious about building, not just
                thinking about it.
              </p>
            </div>
          </div>

          <div className={DIVIDER_CLASS} />

          {WHO_ITS_FOR.map((item) => (
            <div
              key={item}
              className="flex w-full flex-row items-center gap-[10px]"
            >
              <span className={CHECK_BOX_CLASS}>
                <ListCheckIcon width={11} height={8} />
              </span>
              <p className="text-[12px] font-normal leading-[14.4px] text-[#505050]">
                {item}
              </p>
            </div>
          ))}
        </article>
      </div>

      <a
        href="https://forms.fillout.com/t/cP5KQYqyDdus"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-[15px] rounded-[5px] bg-[#7138f2] px-[20px] py-[10px] text-[14px] font-semibold leading-[14px] text-white"
      >
        Explore the current challenge &#8594;
      </a>
    </section>
  );
}
