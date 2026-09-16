import Image from "next/image";
import Link from "next/link";

const ASSET_BASE =
  "/sites/first-rose-853260-framer-app-21051feb/root-8a5edab2/images";

type CaseStudy = {
  href: string;
  background: string;
  brandMark: string;
  brandMarkWidth: number;
  brandMarkHeight: number;
  tag: string;
  description: string;
};

const FEATURED: CaseStudy = {
  href: "./case-studies/kaleba",
  background: `${ASSET_BASE}/B1VEekKzR9KhSWNlSPWgytTjbSY.webp`,
  brandMark: `${ASSET_BASE}/XbHlR61qEHpYzyb07CuA6Yz7rM.webp`,
  brandMarkWidth: 530,
  brandMarkHeight: 125,
  tag: "STARTUP",
  description:
    "A WhatsApp-based non-profit bringing digital education to emerging countries, with real impact.",
};

const SECONDARY: CaseStudy[] = [
  {
    href: "./case-studies/okrogito",
    background: `${ASSET_BASE}/EZnEUxq21CuRRiCWmG8QqlK7Xoo.webp`,
    brandMark: `${ASSET_BASE}/dRFWThY0BX0AqgVC4AO5yvkTNxQ.webp`,
    brandMarkWidth: 246,
    brandMarkHeight: 125,
    tag: "STARTUP",
    description:
      "An agent to buy and sell your home, completely private-to-private.",
  },
  {
    href: "./case-studies/prisma-ai-group",
    background: `${ASSET_BASE}/AMNFRegqg923K5mIFUmvbSjNV4.webp`,
    brandMark: `${ASSET_BASE}/aWxOXQ9PiPsYwsifpLTqpAEhRAE.webp`,
    brandMarkWidth: 246,
    brandMarkHeight: 125,
    tag: "STARTUP",
    description: "Turn your content creation into an AI-powered business.",
  },
];

const CARD_CLASS =
  "relative flex h-[400px] w-full flex-col items-end justify-between overflow-hidden rounded-[10px] p-[20px] min-[810px]:h-[522px] min-[810px]:p-[40px]";

const GRADIENT_CLASS =
  "absolute inset-0 overflow-clip rounded-[10px] bg-[linear-gradient(rgba(255,255,255,0)_0%,rgba(0,0,0,0)_51.1736%,rgba(0,0,0,0.25)_61.4645%,rgba(0,0,0,0.7)_76.7427%,rgba(0,0,0,0.75)_100%)]";

const PILL_CLASS =
  "relative z-[1] inline-flex h-[34px] items-center justify-center rounded-[100px] bg-[#7844ee] px-[20px] py-[10px] text-[14px] font-bold leading-[14px] tracking-[2.8px] text-white";

function CaseStudyCard({
  study,
  backgroundSizes,
}: {
  study: CaseStudy;
  backgroundSizes: string;
}) {
  return (
    <Link href={study.href} className={CARD_CLASS}>
      <div className="absolute inset-0 overflow-clip rounded-[10px]">
        <Image
          src={study.background}
          alt=""
          fill
          sizes={backgroundSizes}
          className="rounded-[10px] object-cover"
        />
      </div>
      <div className={GRADIENT_CLASS} />

      <span className={PILL_CLASS}>{study.tag}</span>

      <div className="relative z-[1] flex w-full flex-col items-start justify-end gap-[20px]">
        <Image
          src={study.brandMark}
          alt=""
          width={study.brandMarkWidth}
          height={study.brandMarkHeight}
          className="h-[125px] w-auto max-w-full object-contain"
        />
        <p className="text-[20px] font-normal leading-[24px] text-white">
          {study.description}
        </p>
      </div>
    </Link>
  );
}

export function CaseStudies() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-[50px] overflow-clip bg-white px-[20px] py-[60px] min-[810px]:px-[40px] min-[1440px]:px-[100px]">
      <div className="flex w-full max-w-[1440px] flex-col items-center gap-[50px]">
        <div className="flex w-full flex-col items-start justify-center gap-[10px]">
          <p className="text-[12px] font-bold leading-[14.4px] tracking-[2.4px] text-[#7844ee]">
            CASE STUDY
          </p>
          <p className="text-[40px] font-bold leading-[48px] text-[#0d0d0f]">
            Companies we&apos;ve build with founders
          </p>
          <p className="text-[18px] font-normal leading-[21.6px] text-[#505050]">
            From idea to launch, these are the ventures that started inside
            Drommer.
          </p>
        </div>

        <div className="flex w-full flex-col gap-[20px]">
          <CaseStudyCard
            study={FEATURED}
            backgroundSizes="(min-width: 1440px) 1440px, 100vw"
          />
          <div className="flex w-full flex-col gap-[20px] min-[810px]:flex-row">
            {SECONDARY.map((study) => (
              <div key={study.href} className="w-full min-[810px]:flex-1">
                <CaseStudyCard
                  study={study}
                  backgroundSizes="(min-width: 1440px) 710px, (min-width: 810px) 50vw, 100vw"
                />
              </div>
            ))}
          </div>
        </div>

        <Link
          href="./case-studies"
          className="inline-flex items-center justify-center gap-[15px] rounded-[5px] bg-[#7138f2] px-[20px] py-[10px] text-[14px] font-semibold leading-[14px] tracking-[-0.28px] text-white"
        >
          All case studies &#8594;
        </Link>
      </div>
    </section>
  );
}
