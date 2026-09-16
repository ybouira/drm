import Image from "next/image";
import Link from "next/link";

export function VentureBuilderStudio() {
  return (
    <section id="for-companies" className="bg-black px-6 py-24 text-white md:px-10">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-white/60">
            Venture Builder Studio
          </p>
          <h2 className="mt-3 max-w-lg text-4xl font-extrabold leading-tight md:text-5xl">
            Not just a founder program. We build companies too.
          </h2>
          <p className="mt-6 max-w-lg text-white/60">
            Beyond the Founder Program, Drommer works with startups and
            companies that need an operational partner to launch a new
            initiative. We don&apos;t advise. We build, with a dedicated
            team, in weekly execution cycles, from first test to first sale.
          </p>
          <p className="mt-4 max-w-lg text-white/60">
            If you have an initiative that needs to move fast and you
            don&apos;t want to build an internal team from scratch, this is
            how we work together.
          </p>
          <Link
            href="#apply"
            className="mt-8 inline-block rounded-[5px] bg-white px-6 py-3 text-sm font-semibold text-black hover:opacity-90"
          >
            Start building with us →
          </Link>
        </div>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-neutral-900">
          <Image
            src="/sites/first-rose-853260-framer-app-21051feb/root-8a5edab2/images/vjgh5nFn3fu3gvShiInOR0ILTs.png"
            alt="Venture Builder Studio"
            fill
            sizes="(min-width: 768px) 500px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
