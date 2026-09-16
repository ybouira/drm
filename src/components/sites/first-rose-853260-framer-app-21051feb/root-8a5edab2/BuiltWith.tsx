import Image from "next/image";

const ASSET_BASE =
  "/sites/first-rose-853260-framer-app-21051feb/root-8a5edab2/images";

type Logo = {
  file: string;
  width: number;
  height: number;
  /** Literal Tailwind classes so the exact rendered box survives class scanning. */
  box: string;
};

// Each logo keeps its own rendered size — the strip is not uniformly scaled.
const LOGOS: Logo[] = [
  {
    file: "evFt8dWV1fAgwyCIUy9TIChg.png",
    width: 71,
    height: 36,
    box: "h-[36px] w-[71px]",
  },
  {
    file: "Z0PfjoMyRrLcr0cBNthXtaeJVc.png",
    width: 100,
    height: 22,
    box: "h-[22px] w-[100px]",
  },
  {
    file: "iuLZKqKR3zA2zCPleN6hBxkDS2I.png",
    width: 125,
    height: 26,
    box: "h-[26px] w-[125px]",
  },
  {
    file: "cKfXcRIQyWSu88488VFPgx9Z6lE.png",
    width: 97,
    height: 23,
    box: "h-[23px] w-[97px]",
  },
  {
    file: "Qcupcm3xzW4DEddi1G5Wp9oJvbY.png",
    width: 41,
    height: 28,
    box: "h-[28px] w-[41px]",
  },
  {
    file: "jTvdO3C8DYBwDzKPwUlvfyXIM.png",
    width: 89,
    height: 14,
    box: "h-[14px] w-[89px]",
  },
  {
    file: "ndP5UuTVxgvYNieoa4TanR2sk.png",
    width: 50,
    height: 33,
    box: "h-[33px] w-[50px]",
  },
  {
    file: "4qYjIqqmRFZbKj43XEJ4oF3RPiQ.webp",
    width: 65,
    height: 25,
    box: "h-[25px] w-[65px]",
  },
  {
    file: "LQBHYIlIjbvd5DSWiR2hDaHmc.webp",
    width: 111,
    height: 26,
    box: "h-[26px] w-[111px]",
  },
];

export function BuiltWith() {
  return (
    <section className="flex w-full flex-col items-start justify-center gap-[30px] p-0">
      <div className="flex w-full flex-col items-center justify-center gap-[40px] bg-white px-[20px] py-[60px] min-[810px]:px-0">
        <div className="flex flex-col items-center justify-center gap-[10px]">
          <p className="text-[12px] font-bold leading-[14.4px] tracking-[2.4px] text-[#7138f2]">
            BUILT WITH DROMMER
          </p>
          <p className="text-center text-[40px] font-bold leading-[48px] text-[#0d0d0f]">
            Projects we&apos;ve been part of
          </p>
        </div>

        {/* Framer ticker that does not animate: a static clipped row offset by -60px. */}
        <div className="flex w-full flex-row items-center justify-center min-[810px]:h-[36px] min-[810px]:justify-start min-[810px]:overflow-clip">
          <ul className="flex flex-row flex-wrap items-center justify-center gap-x-[40px] gap-y-[20px] min-[810px]:max-w-full min-[810px]:flex-nowrap min-[810px]:justify-start min-[810px]:gap-x-[60px] min-[810px]:gap-y-[60px] min-[810px]:-translate-x-[60px]">
            {LOGOS.map((logo) => (
              <li key={logo.file} className="shrink-0">
                <Image
                  src={`${ASSET_BASE}/${logo.file}`}
                  alt=""
                  width={logo.width}
                  height={logo.height}
                  sizes={`${logo.width}px`}
                  className={`max-w-none object-cover ${logo.box}`}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
