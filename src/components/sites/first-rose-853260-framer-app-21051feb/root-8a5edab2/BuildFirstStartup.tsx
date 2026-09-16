import Image from "next/image";

const ASSET_BASE =
  "/sites/first-rose-853260-framer-app-21051feb/root-8a5edab2/images";

const CARDS = [
  {
    label: "Monthly Gatherings",
    dot: "bg-drommer-purple-light",
    description:
      "We meet every month in Chiasso (CH). No slides, no theory. Just real conversation and real progress.",
    image: `${ASSET_BASE}/aCFWfbQ5WMtWDMM5k6ol6VAg.webp`,
  },
  {
    label: "Founder Fridays",
    dot: "bg-pink-500",
    description:
      "Every Friday, build in person from Drommer HQ alongside the team and other founders.",
    image: `${ASSET_BASE}/CO11nKnejqX7SCom5uOQROjyAY.webp`,
  },
  {
    label: "Venture Building",
    dot: "bg-amber-400",
    description: "When the model works, Drommer helps you turn it into a company.",
    image: `${ASSET_BASE}/r6gBWsDGWm9WrboOehqPT3937M.webp`,
  },
  {
    label: "Founder Network",
    dot: "bg-emerald-400",
    description: "Entrepreneurs, operators, investors. You're not alone in the room.",
    image: `${ASSET_BASE}/FzybitHD0VlARAwp0jtxgsrzKg.webp`,
  },
];

export function BuildFirstStartup() {
  return (
    <section className="bg-black px-6 py-24 text-white md:px-10">
      <div className="mx-auto max-w-[1440px]">
        <p className="text-lg text-white/40">This is</p>
        <h2 className="mt-2 max-w-2xl text-4xl font-extrabold leading-tight md:text-6xl">
          Where you build your first startup.
        </h2>
        <p className="mt-6 max-w-2xl text-base text-white/70 md:text-lg">
          A highly selective program where young entrepreneurs validate
          business ideas, build their startup and grow alongside a network
          of other entrepreneurs, mentors and investors.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2">
          {CARDS.map((card) => (
            <div
              key={card.label}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10"
            >
              <Image
                src={card.image}
                alt={card.label}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2">
                  <span className={`h-1.5 w-1.5 rounded-full ${card.dot}`} />
                  <span className="text-xs font-bold uppercase tracking-wider text-white">
                    {card.label}
                  </span>
                </div>
                <p className="mt-2 text-sm text-white/75">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
