"use client";

import { useI18n } from "./provider";
import type { Locale } from "./config";

const OPTIONS: ReadonlyArray<{ locale: Locale; label: string }> = [
  { locale: "en", label: "EN" },
  { locale: "it", label: "IT" },
];

export function LanguageToggle({
  className = "",
}: {
  className?: string;
}) {
  const { locale, setLocale, t } = useI18n();

  return (
    <div
      role="group"
      aria-label={t.common.language}
      className={`flex items-center gap-[6px] text-[13px] font-semibold leading-none tracking-[-0.14px] ${className}`}
    >
      {OPTIONS.map((option, index) => (
        <span key={option.locale} className="flex items-center gap-[6px]">
          {index > 0 ? (
            <span className="text-current opacity-30" aria-hidden="true">
              |
            </span>
          ) : null}
          <button
            type="button"
            aria-pressed={locale === option.locale}
            onClick={() => setLocale(option.locale)}
            className={`transition-opacity duration-150 ${
              locale === option.locale
                ? "opacity-100"
                : "opacity-45 hover:opacity-80"
            }`}
          >
            {option.label}
          </button>
        </span>
      ))}
    </div>
  );
}
