import type { Locale } from "./config";
import { en, type Messages } from "./en";
import { it } from "./it";

export type { Messages };

export const messages = {
  en,
  it,
} as const satisfies Record<Locale, Messages>;
