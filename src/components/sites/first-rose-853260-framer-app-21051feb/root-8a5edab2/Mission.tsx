import Image from "next/image";
import Link from "next/link";

export function Mission() {
  return (
    <section className="bg-white px-6 py-24 text-black md:px-10">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-drommer-purple">
            Mission
          </p>
          <h2 className="mt-3 text-4xl font-extrabold leading-tight md:text-5xl">
            Young founders in.
            <br />
            Startups out.
          </h2>
          <p className="mt-6 text-black/60">
            Drommer is a venture builder studio based in Ticino (CH). We run
            the Founder Program to find, develop and co-build incredible
            ventures with the next generation of entrepreneurs in Europe.
          </p>
          <p className="mt-4 text-black/60">
            We don&apos;t teach entrepreneurship. We practice it. Everyone
            who enters the program works on real problems, gets real
            feedback, and builds toward a real company, with a team of other
            founders.
          </p>
          <Link
            href="#about"
            className="mt-6 inline-block text-sm font-semibold text-drommer-purple underline underline-offset-4"
          >
            More about us
          </Link>
        </div>
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-neutral-100 md:justify-self-end md:max-w-sm">
          <Image
            src="/sites/first-rose-853260-framer-app-21051feb/root-8a5edab2/images/Ki2ol2ETbANpiUuw2Sb8TDgnGdQ.png"
            alt="Drommer studio"
            fill
            sizes="(min-width: 768px) 400px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
