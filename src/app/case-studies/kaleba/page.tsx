import { CaseStudyPage } from "@/components/sites/first-rose-853260-framer-app-21051feb/pages/CaseStudyPage";
import { KALEBA } from "@/components/sites/first-rose-853260-framer-app-21051feb/pages/caseStudy";

export const metadata = { title: KALEBA.title };

export default function KalebaRoute() {
  return <CaseStudyPage study={KALEBA} />;
}
