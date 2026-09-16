import Image from "next/image";

export function VentureBuilderStudio() {
  return (
    <section
      id="for-companies"
      className="flex flex-col items-center justify-center gap-[60px] bg-white px-[20px] py-[60px] min-[810px]:px-[40px] min-[1440px]:px-[100px]"
    >
      <div className="flex w-full max-w-[1440px] flex-col items-start justify-start gap-[40px] rounded-[10px] bg-[#161616] p-[24px] min-[810px]:flex-row min-[810px]:gap-[60px] min-[810px]:p-[40px] min-[1440px]:h-[474px]">
        <div className="flex w-full flex-col gap-[40px] min-[810px]:flex-1 min-[810px]:gap-[60px]">
          <div className="flex flex-col gap-[20px]">
            <p className="text-[12px] leading-[14.4px] font-bold tracking-[2.4px] text-white">
              VENTURE BUILDER STUDIO
            </p>
            <p className="text-[32px] leading-[38.4px] font-bold text-white min-[810px]:text-[40px] min-[810px]:leading-[48px]">
              Not just a founder program.
              <br />
              We build companies too.
            </p>
            <p className="text-[18px] leading-[21.6px] font-normal text-white min-[1440px]:w-[670px]">
              Beyond the Founder Program, Drommer works with startups and
              companies that need an operational partner to launch a new
              initiative. We don&apos;t advise. We build, with a dedicated team,
              in weekly execution cycles, from first test to first sale.
            </p>
            <p className="text-[18px] leading-[21.6px] font-normal text-white min-[1440px]:w-[670px]">
              If you have an initiative that needs to move fast and you
              don&apos;t want to build an internal team from scratch, this is
              how we work together.
            </p>
          </div>

          <a
            href="https://schedule.fillout.com/t/uGGCRZmyGvus"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-[34px] w-fit items-center justify-center rounded-[5px] bg-white px-[20px] text-[14px] leading-[14px] font-semibold tracking-[-0.28px] text-black"
          >
            Start building with us →
          </a>
        </div>

        <div className="w-full min-[810px]:w-[502px] min-[810px]:shrink-0">
          <Image
            src="/sites/first-rose-853260-framer-app-21051feb/root-8a5edab2/images/vjgh5nFn3fu3gvShiInOR0ILTs.png"
            alt=""
            width={502}
            height={394}
            className="h-[240px] w-full rounded-[10px] object-cover min-[810px]:h-[394px] min-[810px]:w-[502px]"
          />
        </div>
      </div>
    </section>
  );
}
