"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  CalendarDays,
  ChevronDown,
  MapPin,
  Sparkles,
} from "lucide-react";

import { LanguageToggle } from "@/i18n/LanguageToggle";
import { useI18n } from "@/i18n/provider";

const STAT_ICONS = [CalendarDays, Sparkles, MapPin] as const;

function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <img
      src={inverse ? "/drommer-logo-white.svg" : "/drommer-logo.svg"}
      alt="Drommer"
      className="h-auto w-[132px] sm:w-[146px]"
    />
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="eyebrow text-primary">
      <span className="text-base leading-none text-primary" aria-hidden="true">
        —
      </span>
      {children}
    </p>
  );
}

function ArrowLink({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: ReactNode;
  secondary?: boolean;
}) {
  return (
    <a href={href} className={secondary ? "button-secondary" : "button-primary"}>
      <span>{children}</span>
      {secondary ? (
        <ArrowDown size={17} aria-hidden="true" />
      ) : (
        <ArrowRight size={17} aria-hidden="true" />
      )}
    </a>
  );
}

export function FounderChallengePage() {
  const { t } = useI18n();
  const c = t.challenge;
  const nav = [
    [c.nav.challenge, "#challenge"],
    [c.nav.journey, "#how-it-works"],
    [c.nav.benefits, "#benefits"],
    [c.nav.dates, "#dates"],
    [c.nav.faq, "#faq"],
  ] as const;

  return (
    <div className="founder-challenge min-h-screen overflow-x-hidden bg-background font-sans text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-dark-border bg-void/90 backdrop-blur-xl">
        <div className="site-container flex h-[76px] items-center justify-between">
          <Link href="/" aria-label={c.nav.home}>
            <Brand inverse />
          </Link>
          <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
            {nav.map(([label, href]) => (
              <a key={href} href={href} className="nav-link">
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4 text-dark-foreground">
            <LanguageToggle />
            <a
              href="#apply"
              className="button-primary hidden !min-h-10 !px-5 !py-2.5 sm:inline-flex"
            >
              {c.nav.applyNow} <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a
              href="#apply"
              className="text-sm font-semibold text-dark-foreground sm:hidden"
            >
              {t.common.applyNowShort} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </header>

      <main>
        <section
          id="top"
          className="hero-dark relative flex min-h-[700px] items-end overflow-hidden pt-24 sm:min-h-[740px]"
        >
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-container z-10 pb-9 pt-16 sm:pb-12 lg:pb-14">
            <div className="max-w-[920px] lg:max-w-[1180px]">
              <Eyebrow>{c.hero.eyebrow}</Eyebrow>
              <h1 className="hero-title mt-7 text-dark-foreground">{c.hero.title}</h1>
              <p className="mt-6 max-w-3xl font-display text-base font-semibold leading-snug text-dark-foreground sm:text-lg lg:text-xl">
                {c.hero.subtitle}
              </p>
              <div className="mt-7 flex flex-col gap-4 border-l border-primary pl-5 sm:pl-6 lg:max-w-none">
                <p className="hero-line text-dark-muted">{c.hero.line}</p>
                <p className="max-w-2xl font-display text-lg font-bold leading-snug text-dark-foreground sm:text-xl">
                  {c.hero.punch}
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <ArrowLink href="#apply">{c.hero.apply}</ArrowLink>
                <ArrowLink href="#how-it-works" secondary>
                  {c.hero.seeHow}
                </ArrowLink>
              </div>
            </div>
            <div className="mt-10 grid border-y border-dark-border sm:grid-cols-3">
              {c.hero.stats.map((stat, i) => {
                const InfoIcon = STAT_ICONS[i];
                return (
                  <div
                    key={stat.label}
                    className={`flex items-start gap-4 py-5 ${i > 0 ? "sm:border-l sm:border-dark-border sm:pl-7" : ""}`}
                  >
                    <InfoIcon className="mt-0.5 text-primary" size={19} aria-hidden="true" />
                    <div>
                      <p className="text-[10px] font-semibold tracking-[0.16em] text-dark-muted">
                        {stat.label}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-dark-foreground sm:text-base">
                        {stat.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="challenge" className="section-pad scroll-mt-16 bg-surface">
          <div className="site-container">
            <div>
              <Eyebrow>{c.problem.eyebrow}</Eyebrow>
              <h2 className="section-title mt-6 max-w-4xl">{c.problem.title}</h2>
            </div>
            <div className="mt-10 grid gap-4 lg:grid-cols-2">
              <article className="editorial-card bg-card">
                <p className="card-number">{c.problem.problemLabel}</p>
                <h3 className="mt-10 max-w-md font-display text-xl font-bold sm:text-2xl">
                  {c.problem.problemTitle}
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {c.problem.problemBody}
                </p>
              </article>
              <article className="editorial-card border-primary/40 bg-void text-dark-foreground shadow-purple">
                <p className="card-number text-primary">{c.problem.opportunityLabel}</p>
                <h3 className="mt-10 max-w-lg font-display text-xl font-bold sm:text-2xl">
                  {c.problem.opportunityTitle}
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-dark-muted sm:text-base">
                  {c.problem.opportunityBody}
                </p>
              </article>
            </div>
            <div className="statement-strip mt-4">
              <Sparkles className="shrink-0 text-primary" size={24} />
              <p>{c.problem.strip}</p>
            </div>
          </div>
        </section>

        <section className="section-pad bg-card text-card-foreground">
          <div className="site-container">
            <div>
              <Eyebrow>{c.who.eyebrow}</Eyebrow>
              <h2 className="section-title mt-6 max-w-3xl">{c.who.title}</h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {c.who.intro}
              </p>
            </div>
            <p className="mt-8 font-display text-base font-semibold leading-snug text-muted-foreground sm:text-lg">
              {c.who.need}
            </p>
            <div className="mt-6 border-t border-border">
              {c.who.items.map((item, i) => (
                <div
                  key={item}
                  className="flex items-center gap-5 border-b border-border py-5 sm:gap-7"
                >
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <p className="font-display text-base font-semibold sm:text-lg">{item}</p>
                </div>
              ))}
              <p className="mt-8 max-w-3xl border-l-[3px] border-primary py-1 pl-5 font-display text-base font-bold leading-snug sm:text-lg">
                {c.who.close}
              </p>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="section-pad scroll-mt-16 bg-void text-dark-foreground">
          <div className="site-container">
            <div className="section-heading-grid">
              <Eyebrow>{c.journey.eyebrow}</Eyebrow>
              <h2 className="section-title max-w-4xl text-dark-foreground">{c.journey.title}</h2>
            </div>
            <div className="journey-line mt-10 grid gap-4 lg:grid-cols-3">
              {c.journey.items.map((item) => (
                <article key={item.num} className="journey-card">
                  <div className="journey-dot" aria-hidden="true" />
                  <p className="text-xs font-semibold tracking-[0.16em] text-primary">
                    {c.journey.step} {item.num}
                  </p>
                  <h3 className="mt-5 font-display text-xl font-bold">{item.title}</h3>
                  {item.date ? (
                    <p className="mt-3 text-xs font-semibold uppercase tracking-[0.1em] text-dark-muted">
                      {item.date}
                    </p>
                  ) : null}
                  <p className="mt-4 text-sm leading-relaxed text-dark-muted sm:text-base">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
            <p className="mt-8 text-center font-display text-lg font-bold sm:text-xl">
              {c.journey.goalLead}{" "}
              <span className="text-primary">{c.journey.goalAccent}</span>
            </p>
          </div>
        </section>

        <section id="benefits" className="section-pad scroll-mt-16 bg-void text-dark-foreground">
          <div className="site-container">
            <div className="section-heading-grid">
              <Eyebrow>{c.benefits.eyebrow}</Eyebrow>
              <h2 className="section-title text-dark-foreground">{c.benefits.title}</h2>
            </div>
            <div className="mt-10 grid overflow-hidden rounded-lg border border-dark-border md:grid-cols-2">
              {c.benefits.items.map((item, index) => (
                <article
                  key={item.title}
                  className="benefit-card group border-b border-dark-border md:odd:border-r last:border-b-0 [&:nth-last-child(-n+2)]:md:border-b-0"
                >
                  <p className="text-sm font-bold text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div className="mt-8">
                    <h3 className="font-display text-lg font-bold text-dark-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-dark-muted">
                      {item.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad overflow-hidden bg-background">
          <div className="site-container">
            <div className="section-heading-grid">
              <Eyebrow>{c.topics.eyebrow}</Eyebrow>
              <h2 className="section-title max-w-3xl">{c.topics.title}</h2>
            </div>
            <div className="mt-9 flex flex-wrap gap-2.5 sm:gap-3">
              {c.topics.items.map((item, i) => (
                <span
                  key={item}
                  className={`topic-pill ${i === 2 || i === 8 ? "topic-pill-active" : ""}`}
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-7 max-w-3xl border-l border-primary pl-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {c.topics.note}
            </p>
          </div>
        </section>

        <section id="dates" className="section-pad scroll-mt-16 bg-surface">
          <div className="site-container grid gap-9 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <Eyebrow>{c.dates.eyebrow}</Eyebrow>
              <h2 className="section-title mt-7">{c.dates.title}</h2>
              <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
                {c.dates.body}
              </p>
            </div>
            <div className="border-t border-foreground">
              {c.dates.items.map((item) => (
                <div
                  key={item.date}
                  className="grid gap-2 border-b border-border py-4 sm:grid-cols-[13rem_1fr_auto] sm:items-center"
                >
                  <p className="text-[11px] font-bold tracking-[0.11em] text-primary">
                    {item.date}
                  </p>
                  <p className="font-display text-base font-bold sm:text-lg">{item.title}</p>
                  {item.note ? (
                    <p className="text-xs text-muted-foreground">{item.note}</p>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="apply" className="apply-section scroll-mt-16">
          <div className="apply-glow" aria-hidden="true" />
          <div className="site-container relative z-10 flex min-h-[460px] flex-col items-center justify-center py-16 text-center">
            <Eyebrow>{c.apply.eyebrow}</Eyebrow>
            <h2 className="mt-8 max-w-4xl font-display text-[clamp(2.4rem,5vw,4.75rem)] font-extrabold leading-[1.02] text-dark-foreground">
              {c.apply.title}
            </h2>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-dark-muted sm:text-base">
              {c.apply.body}
            </p>
            <a href="#apply" className="button-primary mt-8 !min-h-14 !px-8 !text-base">
              {c.hero.apply} <ArrowRight size={19} />
            </a>
            <p className="mt-6 text-xs text-dark-muted">{c.apply.footnote}</p>
          </div>
        </section>

        <section id="faq" className="section-pad scroll-mt-16 bg-background">
          <div className="site-container grid gap-9 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16">
            <div>
              <Eyebrow>{c.faq.eyebrow}</Eyebrow>
              <h2 className="section-title mt-7">{c.faq.title}</h2>
            </div>
            <div className="border-t border-foreground">
              {c.faq.entries.map((entry) => (
                <details key={entry.question} className="faq-item group">
                  <summary>
                    <span>{entry.question}</span>
                    <span className="faq-icon">
                      <ChevronDown size={20} />
                    </span>
                  </summary>
                  {"answer" in entry && entry.answer ? <p>{entry.answer}</p> : null}
                  {"lead" in entry && entry.lead ? (
                    <>
                      <p className="faq-answer-lead">{entry.lead}</p>
                      <ul className="faq-list">
                        {entry.items.map((item) => (
                          <li key={item.date} className="faq-list-item">
                            <span className="faq-list-date">{item.date}</span>
                            <span>{item.label}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="faq-answer-tail">{entry.tail}</p>
                    </>
                  ) : null}
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-void pb-28 text-dark-foreground sm:pb-0">
        <div className="site-container py-12 sm:py-16">
          <div className="grid gap-12 border-b border-dark-border pb-14 md:grid-cols-[1fr_auto_auto] md:gap-20">
            <div>
              <Brand inverse />
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-dark-muted">
                {c.footer.blurb}
              </p>
            </div>
            <div>
              <p className="footer-label">{c.footer.locationLabel}</p>
              <p className="mt-4 text-sm">{c.footer.location}</p>
            </div>
            <div>
              <p className="footer-label">{c.footer.connect}</p>
              <div className="mt-4 flex gap-5 text-sm">
                <a href="https://www.linkedin.com" className="footer-link">
                  LinkedIn
                </a>
                <a href="mailto:hello@drommer.ch" className="footer-link">
                  {c.footer.email}
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 pt-7 text-xs text-dark-muted sm:flex-row sm:items-center sm:justify-between">
            <p>{c.footer.rights}</p>
            <div className="flex gap-5">
              <a href="#top" className="footer-link">
                {c.footer.privacy}
              </a>
              <a href="#top" className="footer-link">
                {c.footer.imprint}
              </a>
            </div>
          </div>
        </div>
      </footer>

      <div className="mobile-cta-bar sm:hidden">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-dark-muted">
            {c.footer.applicationsOpen}
          </p>
          <p className="text-sm font-semibold text-dark-foreground">
            {c.footer.applicationsDate}
          </p>
        </div>
        <a href="#apply" className="button-primary !min-h-11 !px-5 !py-2.5">
          {c.hero.apply} <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
}
