"use client";

import { useState } from "react";
import { PlusIcon } from "../shared/icons";

const FAQS = [
  {
    q: "How long do projects usually last?",
    a: "Validate: 8–12 weeks. Launch: 3–6 months. Scale: 6+ months. We define duration based on the outcome to achieve, not on billable hours.",
  },
  {
    q: "Can you tell me more about the talent community?",
    a: "Yes. For selected founders, the program is completely free. Drommer co-builds with you and invests in the launch. You don't pay to be here, you earn your place.",
  },
  {
    q: "Do I need to have an idea before applying?",
    a: "No. You don't need a finished idea to apply. What we look for is drive, curiosity, and the willingness to do the work. Ideas can be developed, the right mindset can't be taught. If you're serious about building, that's enough to start.",
  },
  {
    q: "What happens if I don’t pass a phase?",
    a: "Each phase includes formal evaluation checkpoints. If objectives are not met, the program ends. This system is designed to maintain high standards and work only with those who can sustain the required level.",
  },
  {
    q: "When do I start working on my own startup?",
    a: "From the early stages, you begin exploring and developing your own idea. As concrete signals emerge, you move into a more structured validation phase, with dedicated time and team support.",
  },
  {
    q: "What happens if I don’t pass a phase?",
    a: "Each phase includes formal evaluation checkpoints. If objectives are not met, the program ends. This system is designed to maintain high standards and work only with those who can sustain the required level.",
  },
  {
    q: "What happens when the idea is validated?",
    a: "If the initiative shows strong metrics, we proceed with the spin-off. Drommer invests in the launch and remains an operational partner. The startup is yours and you retain the majority.",
  },
  {
    q: "Do I need to cover accommodation for the monthly gatherings in Chiasso?",
    a: "No. Accommodation and lunch during the monthly in-person gatherings are fully covered by Drommer.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-neutral-50 px-6 py-24 text-black md:px-10">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-drommer-purple">FAQ</p>
          <h2 className="mx-auto mt-3 text-4xl font-extrabold md:text-5xl">
            Everything you need to know
          </h2>
        </div>

        <div className="mt-14 divide-y divide-black/10 border-t border-black/10">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={`${faq.q}-${i}`}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-6 text-left"
                >
                  <span className="font-bold">{faq.q}</span>
                  <PlusIcon
                    className={`h-5 w-5 shrink-0 text-black transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="min-h-0 text-sm text-black/60">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
