const PHASES = [
  {
    n: "01",
    title: "Founder Exploration",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-drommer-purple">
        <path d="M7 3h10M7 21h10M8 3c0 4 8 4 8 8s-8 4-8 8M16 3c0 4-8 4-8 8s8 4 8 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "Proof Table",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-drommer-purple">
        <rect x="3.5" y="6" width="17" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M3.5 10.5h17M9 6v12" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    n: "03",
    title: "Analysis Phase",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-drommer-purple">
        <path d="M5 15l4-4 3 3 6-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 19h16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    n: "04",
    title: "Venture Building",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-drommer-purple">
        <path d="M12 3c3 2.5 5 6 5 9.5A5 5 0 0 1 7 12.5C7 9 9 5.5 12 3Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M9 17l-2 4M15 17l2 4M10 20h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function ProgramPhases() {
  return (
    <section id="program-phases" className="relative overflow-hidden bg-white px-6 py-24 text-black md:px-10">
      <div className="mx-auto max-w-[1440px]">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-drommer-purple">
            Program Phases
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl text-4xl font-extrabold md:text-5xl">
            How the Founder Program actually works
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-black/60">
            Two phases. Milestone-based progression. You move forward by
            executing, not by waiting.
          </p>
        </div>

        <div className="relative mt-20">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="pointer-events-none absolute left-0 top-1/2 hidden w-full -translate-y-1/2 md:block"
            aria-hidden="true"
          >
            <path
              d="M75 20 C 250 20, 250 100, 425 100 S 600 20, 775 20 S 950 100, 1125 100"
              fill="none"
              stroke="var(--color-drommer-purple)"
              strokeWidth="2"
            />
          </svg>

          <div className="relative grid grid-cols-2 gap-x-8 gap-y-16 md:grid-cols-4">
            {PHASES.map((phase, i) => (
              <div key={phase.n} className={`text-center ${i % 2 === 1 ? "md:mt-20" : ""}`}>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-drommer-purple/40 bg-white shadow-[0_8px_30px_rgba(124,58,237,0.15)]">
                  {phase.icon}
                </div>
                <p className="mt-6 text-5xl font-extrabold text-black/10 md:text-6xl">{phase.n}</p>
                <h3 className="-mt-6 text-lg font-bold md:mt-[-2rem]">{phase.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
