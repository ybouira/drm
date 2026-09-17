import type { Metadata } from "next";

import { FounderChallengePage } from "@/components/sites/first-rose-853260-framer-app-21051feb/pages/FounderChallengePage";

export const metadata: Metadata = {
  title: "Founder Challenge: Future of People Operations | Drommer",
  description:
    "Turn a broken HR process into an AI-native service business with the Drommer Founder Challenge in Chiasso.",
};

export default function FounderChallengeRoute() {
  return <FounderChallengePage />;
}
