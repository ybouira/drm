import { CheckIcon } from "../shared/icons";

const WHAT_YOU_GET = [
  {
    title: "Mentoring & Expert Support",
    description:
      "Regular 1:1 support from the Drommer team and selected experts to challenge decisions, unblock problems and move faster.",
  },
  {
    title: "Weekly Workshops",
    description:
      "Practical sessions every week focused on validation, offer design, pricing, go-to-market and sales.",
  },
  {
    title: "Drommer HQ Access",
    description:
      "Workspace in Chiasso (CH), monthly in-person gatherings with accommodation and lunch covered, and direct access to the Drommer founder community.",
  },
  {
    title: "Founder Fridays",
    description:
      "One day every week to build in person from Drommer HQ alongside the team and the other founders.",
  },
  {
    title: "Full Venture Support",
    description:
      "Hands-on support across strategy, operations, legal, accounting and fundraising as the venture evolves and reaches the next stage.",
  },
];

const WHO_ITS_FOR = [
  "You're 21–28 and want to build something real",
  "You want to launch a startup within 6-12 months",
  "You have drive, but maybe not yet a clear idea",
  "You're coachable and willing to be challenged",
  "You want to work alongside people who are already doing it",
  "You're ready to move, not wait",
];

export function ProgramOverview() {
  return (
    <section className="bg-neutral-50 px-6 py-24 text-black md:px-10">
      <div className="mx-auto max-w-[1440px]">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-drommer-purple">
            Program Overview
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl text-4xl font-extrabold md:text-5xl">
            What you get &amp; who it&apos;s for
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-black/60">
            A real program. Real access. Real people behind it.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm md:p-10">
            <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8 text-drommer-purple">
              <path d="M12 3l1.8 4.6L18 9l-4.2 1.4L12 15l-1.8-4.6L6 9l4.2-1.4L12 3Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
              <path d="M19 14l.9 2.3L22 17l-2.1.7L19 20l-.9-2.3L16 17l2.1-.7L19 14Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
            </svg>
            <h3 className="mt-4 text-2xl font-bold">What you get</h3>
            <p className="mt-2 text-sm text-black/60">
              Everything you need to go from idea to launch, and nothing you
              don&apos;t. The program is free for selected founders.
            </p>
            <ul className="mt-6 divide-y divide-black/10 border-t border-black/10">
              {WHAT_YOU_GET.map((item) => (
                <li key={item.title} className="flex gap-3 py-4">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-drommer-purple/15 text-drommer-purple">
                    <CheckIcon className="h-3 w-3" />
                  </span>
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="mt-1 text-sm text-black/60">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm md:p-10">
            <h3 className="text-2xl font-bold">Who it&apos;s for</h3>
            <p className="mt-2 text-sm text-black/60">
              We look for people who are serious about building, not just
              thinking about it.
            </p>
            <ul className="mt-6 space-y-4">
              {WHO_ITS_FOR.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-drommer-purple/15 text-drommer-purple">
                    <CheckIcon className="h-3 w-3" />
                  </span>
                  <p className="text-sm text-black/70">{item}</p>
                </li>
              ))}
            </ul>
            <a
              href="#apply"
              className="mt-8 inline-block text-sm font-semibold text-drommer-purple"
            >
              Explore the current challenge →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
