import Link from "next/link";

export function Hero() {
  return (
    <div className="relative flex h-screen flex-col items-center justify-center overflow-clip">
      <div className="absolute inset-0 flex flex-col items-center justify-end gap-[10px] bg-[#0d0d0f] px-[20px] pt-[40px] pb-[40px] min-[810px]:px-[40px] min-[810px]:pb-[60px] min-[1440px]:px-[100px]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(12,12,13,0)_0%,rgba(12,12,13,0.6)_86.6514%,rgb(12,12,13)_100%)]" />

        <div className="relative z-[1] flex w-full max-w-[1440px] flex-col items-start justify-center gap-[20px]">
          <div className="flex flex-col items-start gap-[10px]">
            <p className="text-[12px] leading-[14.4px] font-bold tracking-[2.4px] text-white">
              THE FOUNDER PATH
            </p>
            <p className="max-w-[691px] text-[36px] leading-[36px] font-normal text-white min-[810px]:text-[48px] min-[810px]:leading-[48px] min-[1440px]:text-[60px] min-[1440px]:leading-[60px]">
              We <strong className="font-bold">turn</strong> ambition into{" "}
              <strong className="font-bold">startups</strong>.
            </p>
          </div>

          <p className="max-w-[630px] text-[16px] leading-[20px] font-normal text-white min-[810px]:text-[18px] min-[1440px]:text-[20px]">
            The Founder Program is where you stop dreaming about starting a
            company and actually do it. Real work. Real mentorship. A team that
            co-builds with you.
          </p>

          <div className="flex h-[34px] flex-row items-center gap-[15px]">
            <Link
              href="./#four-pillar"
              className="inline-flex h-[34px] items-center justify-center rounded-[5px] bg-white px-[20px] text-[14px] leading-[14px] font-semibold tracking-[-0.28px] text-black hover:bg-[#CCCCCC] transition-colors duration-200 ease-out"
            >
              How we work
            </Link>
            <Link
              href="./#program-phases"
              className="inline-flex h-[34px] items-center justify-center rounded-[5px] border border-white bg-transparent px-[20px] text-[14px] leading-[14px] font-semibold tracking-[-0.28px] text-white hover:border-transparent hover:bg-white hover:text-black transition-[box-shadow,background-color,color,border-color] duration-200 ease-out"
            >
              Program Phases
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
