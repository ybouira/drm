import Image from "next/image";

const ASSET_BASE =
  "/sites/first-rose-853260-framer-app-21051feb/root-8a5edab2/images";

type Card = {
  image: string;
  imageWidth: number;
  imageHeight: number;
  dotClassName: string;
  label: string;
  description: string;
};

const CARDS: Card[] = [
  {
    image: `${ASSET_BASE}/aCFWfbQ5WMtWDMM5k6ol6VAg.webp`,
    imageWidth: 300,
    imageHeight: 450,
    dotClassName: "bg-[#7138F2]",
    label: "MONTHLY GATHERINGS",
    description:
      "We meet every month in Chiasso (CH). No slides, no theory. Just real conversation and real progress.",
  },
  {
    image: `${ASSET_BASE}/CO11nKnejqX7SCom5uOQROjyAY.webp`,
    imageWidth: 300,
    imageHeight: 450,
    dotClassName: "bg-[#F72564]",
    label: "FOUNDER FRIDAYS",
    description:
      "Every Friday, build in person from Drommer HQ alongside the team and other founders.",
  },
  {
    image: `${ASSET_BASE}/r6gBWsDGWm9WrboOehqPT3937M.webp`,
    imageWidth: 300,
    imageHeight: 450,
    dotClassName: "bg-[#E9FE6B]",
    label: "VENTURE BUILDING",
    description: "When the model works, Drommer helps you turn it into a company.",
  },
  {
    image: `${ASSET_BASE}/FzybitHD0VlARAwp0jtxgsrzKg.webp`,
    imageWidth: 300,
    imageHeight: 400,
    dotClassName: "bg-[#21DF47]",
    label: "FOUNDER NETWORK",
    description: "Entrepreneurs, operators, investors. You're not alone in the room.",
  },
];

export function BuildFirstStartup() {
  return (
    <section className="flex flex-col items-center justify-center gap-[50px] overflow-clip bg-[#0d0d0f] px-[20px] py-[60px] min-[810px]:px-[40px] min-[1440px]:px-[100px]">
      <div className="flex w-full max-w-[1440px] flex-col gap-[40px]">
        <div className="flex flex-col items-start justify-start gap-[20px]">
          <div className="flex flex-col gap-0">
            <p className="text-[28px] font-normal leading-[36px] text-white opacity-50 min-[810px]:text-[40px] min-[810px]:leading-[50px]">
              This is
            </p>
            <h2 className="text-[32px] font-bold leading-[38px] text-white min-[810px]:text-[50px] min-[810px]:leading-[50px]">
              Where you build your first startup.
            </h2>
          </div>
          <p className="max-w-[765px] text-[16px] font-normal leading-[19.2px] text-white opacity-80 min-[810px]:text-[18px] min-[810px]:leading-[21.6px]">
            A highly selective program where young entrepreneurs validate
            business ideas, build their startup and grow alongside a network of
            other entrepreneurs, mentors and investors.
          </p>
        </div>

        <div className="flex w-full flex-col gap-[20px] min-[810px]:grid min-[810px]:grid-cols-2 min-[1440px]:flex min-[1440px]:h-[450px] min-[1440px]:flex-row min-[1440px]:items-center min-[1440px]:justify-between min-[1440px]:gap-0">
          {CARDS.map((card) => (
            <div
              key={card.label}
              className="relative flex h-[450px] w-full flex-col items-center justify-end gap-[10px] rounded-[10px] p-[20px] shadow-[inset_0_0_0_2px_rgba(80,80,80,0.2)] hover:shadow-[inset_0_0_0_2px_rgba(80,80,80,0.2),0_0_20px_6px_rgba(112,56,242,0.5)] transition-[box-shadow,background-color,color,border-color] duration-200 ease-out min-[1440px]:w-[300px]"
            >
              <div className="absolute inset-0 overflow-clip rounded-[10px]">
                {/* An absolutely-positioned cover layer, so `fill` is the right
                    API here — passing intrinsic width/height alongside CSS that
                    resizes the box makes Next warn about the aspect ratio. */}
                <Image
                  src={card.image}
                  alt=""
                  fill
                  sizes="(min-width: 1440px) 300px, (min-width: 810px) 50vw, 100vw"
                  className="rounded-[10px] object-cover"
                />
              </div>
              <div className="absolute inset-0 z-0 rounded-[10px] bg-[linear-gradient(rgba(255,255,255,0)_0%,rgba(255,252,252,0)_46.5484%,rgba(0,0,0,0.6)_76.1331%,rgba(0,0,0,0.9)_100%)]" />

              <div className="relative z-[1] flex w-full flex-col items-start gap-[5px]">
                <div className="flex flex-row items-center gap-[5px]">
                  <span
                    className={`h-[6px] w-[6px] shrink-0 rounded-[100px] ${card.dotClassName}`}
                  />
                  <span className="text-[14px] font-bold leading-[16.8px] text-white">
                    {card.label}
                  </span>
                </div>
                <div className="opacity-50">
                  <p className="text-[12px] font-normal leading-[14.4px] text-white">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
