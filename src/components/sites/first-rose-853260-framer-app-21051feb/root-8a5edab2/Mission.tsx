import Image from "next/image";
import Link from "next/link";

export function Mission() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-[60px] overflow-clip bg-[linear-gradient(rgb(13,13,15)_0%,rgb(65,32,140)_54.8077%)] px-6 py-[60px] min-[810px]:px-10 min-[1440px]:px-[100px]">
      <div className="flex w-full max-w-[1440px] flex-col items-start justify-start gap-[60px] min-[810px]:flex-row">
        <Image
          src="/sites/first-rose-853260-framer-app-21051feb/root-8a5edab2/images/Ki2ol2ETbANpiUuw2Sb8TDgnGdQ.png"
          alt=""
          width={318}
          height={411}
          className="h-[411px] w-full rounded-[10px] object-cover min-[810px]:w-[318px] min-[810px]:shrink-0"
        />

        <div className="flex w-full flex-col items-start justify-start gap-[60px]">
          <div className="flex flex-col items-start justify-start gap-[30px]">
            <div className="flex flex-col items-start justify-start gap-[30px]">
              <p className="text-[12px] font-bold leading-[14.4px] tracking-[2.4px] text-white">
                MISSION
              </p>
              <p className="text-[40px] font-bold leading-[48px] text-white">
                Young founders in.
                <br />
                Startups out.
              </p>
            </div>

            <div className="max-w-[670px]">
              <p className="text-[18px] font-normal leading-[21.6px] text-white">
                Drommer is a venture builder studio based in Ticino (CH). We run
                the Founder Program to find, develop and co-build incredible
                ventures with the next generation of entrepreneurs in Europe.
              </p>
              <p className="text-[18px] font-normal leading-[21.6px] text-white">
                We don’t teach entrepreneurship. We practice it. Everyone who
                enters the program works on real problems, gets real feedback,
                and builds toward a real company, with a team of other founders.
              </p>
            </div>
          </div>

          <Link
            href="./about-us"
            className="flex h-[34px] w-[132px] shrink-0 flex-row items-center justify-center gap-[15px] whitespace-nowrap rounded-[5px] bg-white px-[20px] py-[10px] text-[14px] font-semibold leading-[14px] tracking-[-0.28px] text-black hover:bg-[#CCCCCC] transition-colors duration-200 ease-out"
          >
            More about us
          </Link>
        </div>
      </div>
    </section>
  );
}
