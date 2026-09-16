/**
 * Layout differs by tier on the live site, measured on both:
 *   >= 1440px  section padding 100px, cards side by side (700 x 400),
 *              `justify-content: space-between`, no inner gap.
 *   810-1439px section padding 100px 40px, cards STACKED (863 x 336),
 *              `justify-content: center`, inner `gap: 60px`.
 * The headline stays 60px/60px at both tiers — it does not scale down.
 */
const CARD_BASE =
  "flex flex-1 flex-col items-start justify-center gap-[40px] rounded-[10px] p-[24px] min-[810px]:gap-[60px] min-[810px]:p-[40px] min-[1440px]:justify-between min-[1440px]:gap-0";

const HEADLINE_BASE =
  "text-[40px] leading-[40px] font-bold min-[810px]:text-[60px] min-[810px]:leading-[60px]";

const BODY_BASE = "text-[20px] leading-[24px] font-normal";

const BUTTON_BASE =
  "inline-flex h-[34px] w-fit items-center justify-center whitespace-nowrap rounded-[5px] px-[20px] text-[14px] leading-[14px] font-semibold tracking-[-0.28px] transition-colors duration-200 ease-out";

export function FinalCta() {
  return (
    <section className="flex flex-col items-center justify-center gap-[40px] bg-[#0d0d0f] px-[20px] py-[100px] min-[810px]:px-[40px] min-[1440px]:px-[100px]">
      <div className="flex w-full max-w-[1440px] flex-col gap-[40px] min-[1440px]:h-[400px] min-[1440px]:flex-row">
        <div className={`${CARD_BASE} bg-white`}>
          <h2 className={`${HEADLINE_BASE} text-black`}>
            Let&rsquo;s build together
          </h2>
          <div className="flex flex-col">
            <p className={`${BODY_BASE} text-[#505050]`}>
              You have an initiative that needs to move. We bring the team, the
              process, and the execution. No internal
            </p>
            <p className={`${BODY_BASE} text-[#505050]`}>
              structures to build from scratch, just results.
            </p>
          </div>
          <a
            href="https://schedule.fillout.com/t/uGGCRZmyGvus"
            target="_blank"
            rel="noopener noreferrer"
            className={`${BUTTON_BASE} bg-[#7138F2] text-white hover:bg-[#4418AB]`}
          >
            Start a project →
          </a>
        </div>

        <div
          className={`${CARD_BASE} bg-[linear-gradient(270deg,#41208C_0%,#7138F2_100%)]`}
        >
          <h2 className={`${HEADLINE_BASE} text-white`}>
            Become an entrepreneur
          </h2>
          <div className="flex flex-col">
            <p className={`${BODY_BASE} text-white`}>
              You have the drive. We have the program, the network, and the team
              to build with you.
            </p>
            <p className={`${BODY_BASE} text-white`}>
              Apply for the next cohort, spots are limited.
            </p>
          </div>
          <a
            href="https://forms.fillout.com/t/cP5KQYqyDdus"
            target="_blank"
            rel="noopener noreferrer"
            className={`${BUTTON_BASE} bg-white text-black hover:bg-[#CCCCCC]`}
          >
            Apply now →
          </a>
        </div>
      </div>
    </section>
  );
}
