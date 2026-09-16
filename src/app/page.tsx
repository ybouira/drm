import { Navbar } from "@/components/sites/first-rose-853260-framer-app-21051feb/root-8a5edab2/Navbar";
import { Hero } from "@/components/sites/first-rose-853260-framer-app-21051feb/root-8a5edab2/Hero";
import { BuildFirstStartup } from "@/components/sites/first-rose-853260-framer-app-21051feb/root-8a5edab2/BuildFirstStartup";
import { WhatMakesDifferent } from "@/components/sites/first-rose-853260-framer-app-21051feb/root-8a5edab2/WhatMakesDifferent";
import { Mission } from "@/components/sites/first-rose-853260-framer-app-21051feb/root-8a5edab2/Mission";
import { ProgramPhases } from "@/components/sites/first-rose-853260-framer-app-21051feb/root-8a5edab2/ProgramPhases";
import { ProgramOverview } from "@/components/sites/first-rose-853260-framer-app-21051feb/root-8a5edab2/ProgramOverview";
import { CaseStudies } from "@/components/sites/first-rose-853260-framer-app-21051feb/root-8a5edab2/CaseStudies";
import { BuiltWith } from "@/components/sites/first-rose-853260-framer-app-21051feb/root-8a5edab2/BuiltWith";
import { ReunionBanner } from "@/components/sites/first-rose-853260-framer-app-21051feb/root-8a5edab2/ReunionBanner";
import { VentureBuilderStudio } from "@/components/sites/first-rose-853260-framer-app-21051feb/root-8a5edab2/VentureBuilderStudio";
import { Faq } from "@/components/sites/first-rose-853260-framer-app-21051feb/root-8a5edab2/Faq";
import { FinalCta } from "@/components/sites/first-rose-853260-framer-app-21051feb/root-8a5edab2/FinalCta";
import { Footer } from "@/components/sites/first-rose-853260-framer-app-21051feb/root-8a5edab2/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BuildFirstStartup />
        <WhatMakesDifferent />
        <Mission />
        <ProgramPhases />
        <ProgramOverview />
        <CaseStudies />
        <BuiltWith />
        <ReunionBanner />
        <VentureBuilderStudio />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
