import Link from "next/link";

export function FinalCta() {
  return (
    <section className="relative bg-black px-6 py-24 md:px-10">
      <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-drommer-purple/30 blur-[100px]" />
      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-drommer-purple/30 bg-white p-10 text-black shadow-[0_0_80px_-20px_rgba(124,58,237,0.5)]">
          <h3 className="text-4xl font-extrabold leading-tight">Let&apos;s build together</h3>
          <p className="mt-4 text-black/60">
            You have an initiative that needs to move. We bring the team,
            the process, and the execution. No internal structures to build
            from scratch, just results.
          </p>
          <Link
            href="#start-project"
            className="mt-8 inline-block rounded-[5px] bg-drommer-purple px-6 py-3 text-sm font-semibold text-white hover:opacity-90"
          >
            Start a project →
          </Link>
        </div>
        <div className="rounded-3xl border border-white/10 bg-neutral-900 p-10 text-white">
          <h3 className="text-4xl font-extrabold leading-tight">Become an entrepreneur</h3>
          <p className="mt-4 text-white/60">
            You have the drive. We have the program, the network, and the
            team to build with you. Apply for the next cohort, spots are
            limited.
          </p>
          <Link
            href="#apply"
            className="mt-8 inline-block rounded-[5px] bg-white px-6 py-3 text-sm font-semibold text-black hover:opacity-90"
          >
            Apply now →
          </Link>
        </div>
      </div>
    </section>
  );
}
