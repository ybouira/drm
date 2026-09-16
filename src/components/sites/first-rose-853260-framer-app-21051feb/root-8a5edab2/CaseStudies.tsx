import Image from "next/image";
import Link from "next/link";

const ASSET_BASE =
  "/sites/first-rose-853260-framer-app-21051feb/root-8a5edab2/images";

const CASE_STUDIES = [
  {
    tag: "Startup",
    description:
      "A WhatsApp-based non-profit bringing digital education to emerging countries, with real-time impact tracking.",
    image: `${ASSET_BASE}/B1VEekKzR9KhSWNlSPWgytTjbSY.webp`,
  },
  {
    tag: "Startup",
    description: "An agent to buy and sell your home, completely private-to-private.",
    image: `${ASSET_BASE}/EZnEUxq21CuRRiCWmG8QqlK7Xoo.webp`,
  },
  {
    tag: "Startup",
    description: "Turn your content creation into an AI-powered business.",
    image: `${ASSET_BASE}/AMNFRegqg923K5mIFUmvbSjNV4.webp`,
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="bg-white px-6 py-24 text-black md:px-10">
      <div className="mx-auto max-w-[1440px]">
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-drommer-purple">
          Case Study
        </p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
          <h2 className="max-w-xl text-4xl font-extrabold md:text-5xl">
            Companies we&apos;ve build with founders
          </h2>
          <Link href="#case-studies" className="text-sm font-semibold text-drommer-purple">
            All case studies →
          </Link>
        </div>
        <p className="mt-4 max-w-xl text-black/60">
          From idea to launch, these are the ventures that started inside
          Drommer.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {CASE_STUDIES.map((cs) => (
            <div key={cs.description} className="overflow-hidden rounded-2xl border border-black/10">
              <div className="relative aspect-[4/3] w-full bg-neutral-100">
                <Image
                  src={cs.image}
                  alt={cs.description}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-drommer-purple">
                  {cs.tag}
                </span>
                <p className="mt-2 text-sm text-black/70">{cs.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
