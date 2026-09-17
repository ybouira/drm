import { CaseStudyPage } from "@/components/sites/first-rose-853260-framer-app-21051feb/pages/CaseStudyPage";
import { OKROGITO } from "@/components/sites/first-rose-853260-framer-app-21051feb/pages/caseStudy";

export const metadata = { title: OKROGITO.title };

export default function OkrogitoRoute() {
  return <CaseStudyPage study={OKROGITO} />;
}
