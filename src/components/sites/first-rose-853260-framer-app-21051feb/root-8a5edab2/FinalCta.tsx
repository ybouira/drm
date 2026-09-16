export function FinalCta() {
  return (
    <section className="flex flex-col items-center justify-center gap-[40px] bg-[#0d0d0f] px-[20px] py-[60px] min-[810px]:p-[40px] min-[1440px]:p-[100px]">
      <div className="flex w-full max-w-[1440px] flex-col gap-[40px] min-[810px]:h-[400px] min-[810px]:flex-row">
        <div className="flex flex-1 flex-col items-start justify-between gap-[24px] rounded-[10px] bg-white p-[24px] min-[810px]:gap-0 min-[810px]:p-[40px]">
          <h2 className="text-[40px] leading-[40px] font-bold text-black min-[810px]:text-[60px] min-[810px]:leading-[60px]">
            Let&rsquo;s build together
          </h2>
          <div className="flex flex-col">
            <p className="text-[20px] leading-[24px] font-normal text-[#505050]">
              You have an initiative that needs to move. We bring the team, the
              process, and the execution. No internal
            </p>
            <p className="text-[20px] leading-[24px] font-normal text-[#505050]">
              structures to build from scratch, just results.
            </p>
          </div>
          <a
            href="https://schedule.fillout.com/t/uGGCRZmyGvus"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-[34px] w-fit items-center justify-center rounded-[5px] bg-[#7138F2] px-[20px] text-[14px] leading-[14px] font-semibold tracking-[-0.28px] text-white"
          >
            Start a project →
          </a>
        </div>

        <div className="flex flex-1 flex-col items-start justify-between gap-[24px] rounded-[10px] bg-[linear-gradient(270deg,#41208C_0%,#7138F2_100%)] p-[24px] min-[810px]:gap-0 min-[810px]:p-[40px]">
          <h2 className="text-[40px] leading-[40px] font-bold text-white min-[810px]:text-[60px] min-[810px]:leading-[60px]">
            Become an entrepreneur
          </h2>
          <div className="flex flex-col">
            <p className="text-[20px] leading-[24px] font-normal text-white">
              You have the drive. We have the program, the network, and the team to build
              with you.
            </p>
            <p className="text-[20px] leading-[24px] font-normal text-white">
              Apply for the next cohort, spots are limited.
            </p>
          </div>
          <a
            href="https://forms.fillout.com/t/cP5KQYqyDdus"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-[34px] w-fit items-center justify-center rounded-[5px] bg-white px-[20px] text-[14px] leading-[14px] font-semibold tracking-[-0.28px] text-black"
          >
            Apply now →
          </a>
        </div>
      </div>
    </section>
  );
}
