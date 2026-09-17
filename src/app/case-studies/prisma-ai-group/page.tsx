import { CaseStudyPage } from "@/components/sites/first-rose-853260-framer-app-21051feb/pages/CaseStudyPage";
import { PRISMA } from "@/components/sites/first-rose-853260-framer-app-21051feb/pages/caseStudy";

export const metadata = { title: PRISMA.title };

export default function PrismaRoute() {
  return <CaseStudyPage study={PRISMA} />;
}
