const PILLARS = [
  {
    n: "01",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7 text-drommer-purple">
        <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
        <path d="M4 19c0-2.8 2.2-5 5-5s5 2.2 5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="17" cy="9" r="2.3" stroke="currentColor" strokeWidth="1.6" />
        <path d="M15.5 19c.2-2.3 1.8-4 3.5-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    title: "High quality Mentorship",
    description:
      "Weekly 1:1 sessions with operators who are actively building. Not coaches but other Builders.",
    tag: "Hands-on guidance",
  },
  {
    n: "02",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7 text-drommer-purple">
        <path d="M4 16l5-5 4 4 7-8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 6.5h5V11.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Milestone-Based",
    description:
      "You don't advance by showing up. You advance by executing. Progress is earned, not given.",
    tag: "Results over time",
  },
  {
    n: "03",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7 text-drommer-purple">
        <path
          d="M12 3c2.5 2 4 5 4 8.5 0 1.8-.5 3.3-1.3 4.5H9.3C8.5 14.8 8 13.3 8 11.5 8 8 9.5 5 12 3Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="10.5" r="1.4" stroke="currentColor" strokeWidth="1.4" />
        <path d="M9 16l-2 4M15 16l2 4M10.3 19h3.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    title: "Co-Built Ventures",
    description:
      "When your idea is ready, Drommer builds with you. Equity model, operational support, launch resources.",
    tag: "We have skin in the game",
  },
  {
    n: "04",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7 text-drommer-purple">
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="4.8" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="1.2" fill="currentColor" />
      </svg>
    ),
    title: "Highly Selective",
    description:
      "We accept a small cohort each cycle. Everyone in the room is serious. That changes everything.",
    tag: "Top 10% accepted",
  },
];

export function WhatMakesDifferent() {
  return (
    <section className="relative bg-black px-6 py-24 text-white md:px-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-drommer-purple/60 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-drommer-purple/25 blur-[100px]" />

      <div className="relative mx-auto max-w-[1440px]">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-white/60">
            In 4 Pillars
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl text-4xl font-extrabold md:text-5xl">
            What makes this different
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/60">
            Not a course. Not a bootcamp. A structured path to launch your own
            startup, with people who&apos;ve done it before.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.n}
              className="rounded-2xl border border-black/5 bg-white p-8 text-black shadow-[0_0_60px_-15px_rgba(124,58,237,0.35)]"
            >
              <span className="text-sm font-bold text-drommer-purple">{pillar.n}</span>
              <div className="mt-4">{pillar.icon}</div>
              <h3 className="mt-5 text-xl font-bold">{pillar.title}</h3>
              <p className="mt-2 text-sm text-black/60">{pillar.description}</p>
              <div className="mt-6 flex items-center gap-2 border-t border-black/10 pt-4 text-xs font-medium text-drommer-purple">
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M8 12.5l2.5 2.5L16 9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {pillar.tag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
