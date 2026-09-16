import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-end overflow-hidden bg-black px-6 pb-16 pt-32 text-white md:px-10">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-black to-neutral-950" />
      <div className="relative mx-auto w-full max-w-[1440px]">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-white/70">
          The Founder Path
        </p>
        <h1 className="max-w-4xl text-5xl leading-[1.05] font-light md:text-7xl">
          We <span className="font-bold">turn</span> ambition into{" "}
          <span className="font-bold">startups</span>.
        </h1>
        <p className="mt-6 max-w-xl text-base text-white/70 md:text-lg">
          The Founder Program is where you stop dreaming about starting a
          company and actually do it. Real work. Real mentorship. A team
          that co-builds with you.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="#how-we-work"
            className="rounded-[5px] bg-white px-6 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
          >
            How we work
          </Link>
          <Link
            href="#program-phases"
            className="rounded-[5px] border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/60"
          >
            Program Phases
          </Link>
        </div>
      </div>
    </section>
  );
}
