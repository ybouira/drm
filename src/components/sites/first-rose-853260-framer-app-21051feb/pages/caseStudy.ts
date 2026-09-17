const HOME = "/sites/first-rose-853260-framer-app-21051feb/root-8a5edab2/images";
const SHARED = "/sites/first-rose-853260-framer-app-21051feb/shared/images";

export type RoadmapItem = {
  date: string;
  title: string;
  body: string;
};

export type CaseStudyContent = {
  slug: string;
  title: string;
  status: string;
  heroBackground: string;
  logo: string;
  logoWidth: number;
  logoHeight: number;
  summary: string;
  metrics: string[];
  problem: string;
  solution: string;
  businessModel: string;
  targetClients: string;
  narrativeImage: string;
  roadmap: RoadmapItem[];
  founderName: string;
  founderRole: string;
  founderBio: string;
  founderOutcome: string;
  quote: string;
  quoteAttributionName: string;
  quoteAttributionRole: string;
  founderPhoto: string;
};

export const KALEBA: CaseStudyContent = {
  slug: "kaleba",
  title: "Kaleba - Drommer",
  status: "Validation",
  heroBackground: `${HOME}/B1VEekKzR9KhSWNlSPWgytTjbSY.webp`,
  logo: `${HOME}/XbHlR61qEHpYzyb07CuA6Yz7rM.webp`,
  logoWidth: 248,
  logoHeight: 84,
  summary:
    "The first smart nonprofit empowering digital education in emerging countries through a WhatsApp-based microlearning platform with real-time impact traceability.",
  metrics: [
    "3 pilots launched with NGO partners",
    "2 developing countries involved",
    "100 learners engaged in pilots",
  ],
  problem:
    "In-person training for local communities in emerging markets is logistically complex, difficult to scale and costly, around 42% more expensive than digital learning. At the same time, web-based learning platforms are often unsuitable: 89% of learners in Sub-Saharan Africa do not have access to a household computer. Only 18% of nonprofits give donors real-time reporting on the impact of their training.",
  solution:
    "Kaleba delivers WhatsApp-based microlearning designed for low-resource contexts, giving nonprofits a practical way to run digital education programmes without relying on computers or complex learning platforms. The platform makes learning accessible through familiar tools while giving partners and donors real-time visibility into the impact generated.",
  businessModel:
    "Kaleba’s nonprofit entity relies on grant acquisition to develop new digital education programmes. In parallel, NGO partners pay an annual membership fee to adopt the digital platform and run their operations.",
  targetClients:
    "Nonprofits and public institutions with active international-cooperation projects that deliver education programmes in low-resource settings, as well as organisations that want to partner with Kaleba to launch new initiatives.",
  narrativeImage: `${SHARED}/YIpQuCmGqK8Rk3qcQ5wBJE9Kmw.webp`,
  roadmap: [
    {
      date: "14 January 2026",
      title: "Joined Drommer",
      body: "Kaleba joined the Founder Program to turn a vision for accessible digital education into an operating nonprofit and scalable platform.",
    },
    {
      date: "July 2026",
      title: "Officially launching the nonprofit operations",
      body: "Launching the first pilots and establishing the nonprofit’s operations around accessible, WhatsApp-based learning.",
    },
    {
      date: "May 2026",
      title:
        "Growing the programs managed by our nonprofit and expanding the microlearning use cases of our digital platform",
      body: "Expanding the number of programmes managed by Kaleba and broadening the microlearning use cases supported by the platform.",
    },
    {
      date: "August 2026",
      title:
        "Unlocking full traceability of donations’ expenditure for international cooperation projects",
      body: "Unlocking full traceability of how donations are spent across international-cooperation projects.",
    },
  ],
  founderName: "Aicha Bouira",
  founderRole: "CEO",
  founderBio:
    "Aicha built Kaleba around a simple belief: everyone should be able to actively participate in the technological progress shaping our world. Before founding Kaleba, she worked directly with emerging markets and saw the gap between marginalised communities and digital opportunity first-hand. Kaleba exists to close that gap, unlocking digitalisation where it matters most.",
  founderOutcome:
    "Kaleba has launched three pilots with Enfants Du Monde and Frequenze in Switzerland, and WoWInsite in Uganda. Across Burkina Faso and Uganda, the pilots have already engaged 100 learners through a more accessible, traceable model for digital education.",
  quote:
    "“Drommer first shaped me as an entrepreneur, helping me recognise how to use my potential in the fields I know best. My idea evolved many times during the program, and Drommer gave me the confidence to explore every path without fear.”",
  quoteAttributionName: "Aicha Bouira",
  quoteAttributionRole: "CEO of Kaleba",
  founderPhoto: `${SHARED}/aAaO0SNHI6KFbq4woACofUpScI.webp`,
};

export const OKROGITO: CaseStudyContent = {
  slug: "okrogito",
  title: "OKRogito - Drommer",
  status: "Validation",
  heroBackground: `${HOME}/EZnEUxq21CuRRiCWmG8QqlK7Xoo.webp`,
  logo: `${HOME}/dRFWThY0BX0AqgVC4AO5yvkTNxQ.webp`,
  logoWidth: 364,
  logoHeight: 84,
  summary:
    "The agent-based platform that aggregates real estate listings from private sellers and guides both buyers and sellers through the entire buying and selling process, from the search to the closing: all in one place.",
  metrics: [],
  problem:
    "Buying or selling a home in Italy means navigating a process that 9 out of 10 people experience as stressful and opaque: fragmented bureaucracy, documents to track down, and unfamiliar professionals to engage at the right moment. Those who choose to transact privately to save on agency fees find themselves even more without guidance, without a reference point, and without a place to centralize information and decisions.",
  solution:
    "OKRogito is the agent-based platform that brings private real estate listings together in one place and guides users, with the help of artificial intelligence, through every stage of the process: from finding the right counterparty to managing documents and engaging the right professionals at the right time. No intermediaries, no commissions, just a layer that makes the transaction clear, guided and under control.",
  businessModel:
    "OKRogito is conceived as free for private buyers and sellers. Monetization would come from the professionals around a property transaction: mortgage advisors, surveyors, appraisers and others willing to pay for access to private users at the exact moment they need their service. The model is still being evaluated through validation, and could range from subscriptions and pay-per-lead to selected high-value B2C features for private users.",
  targetClients:
    "Real estate professionals looking to reach private clients outside the agency network: surveyors, appraisers and other people across the value chain who see value in these transactions. The platform also serves buyers and sellers who choose to manage a purchase or sale independently, without agency intermediation.",
  narrativeImage: `${SHARED}/sbuScKwVnN3N6MeKZoBZvIQXNg.webp`,
  roadmap: [
    {
      date: "May 2026",
      title: "Joined Drommer",
      body: "Building the first B2C2B engine for the Italian real estate market, with field validation beginning in the Turin metropolitan area.",
    },
    {
      date: "July 2026",
      title: "Validating the B2C engine in Turin and Bologna",
      body: "Aggregating private listings in Turin and Bologna, then running initial organic-traffic tests through social channels, direct outreach and word of mouth. This experiment validates private buyers’ willingness to join aggregated listings, alongside potential seller activation through a concierge model with magic links.",
    },
    {
      date: "October 2026",
      title: "Validating the B2C product and business model",
      body: "Enabling spontaneous property listing creation and introducing the first transaction-support features for validation. Fake-door tests will gauge demand for professional support, while simplified agentic features will be tested in the buyer–seller conversational environment to measure interest in practical guidance from professionals.",
    },
    {
      date: "December 2026",
      title: "Opening to professionals for B2C2B validation",
      body: "Onboarding the first professionals, expanding across Italy and delivering the first iterations of the AI agent to support the transaction process. This phase also launches substantial campaigns for a focused go-to-market.",
    },
  ],
  founderName: "Pietro Rebucci",
  founderRole: "Future CCO & Co-Founder, Head of Real Estate",
  founderBio:
    "After years as a real estate agent, Pietro understands from the inside everything that costs private individuals time, money and peace of mind in a transaction. He leads relationships with professional partners and the market side of the company.",
  founderOutcome:
    "Building OKRogito every day from the perspective of those who experience the problem first-hand, Pietro brings recent sales experience from other startups and an ideal profile for the company’s growth.",
  quote:
    "“Drommer did not give us a ready-made recipe, but a network and a method. It put us alongside people who had built before us and helped us face the challenges of launching an innovative company with an awareness that, on our own, we would not have developed so quickly.”",
  quoteAttributionName: "Pietro Rebucci",
  quoteAttributionRole: "Future CCO & Co-Founder, Head of Real Estate",
  founderPhoto: `${SHARED}/KuK5S9ttna0kIbm6RE4jCuqMGRg.webp`,
};

export const PRISMA: CaseStudyContent = {
  slug: "prisma-ai-group",
  title: "Prisma AI Group - Drommer",
  status: "Launched",
  heroBackground: `${HOME}/AMNFRegqg923K5mIFUmvbSjNV4.webp`,
  logo: `${HOME}/aWxOXQ9PiPsYwsifpLTqpAEhRAE.webp`,
  logoWidth: 214,
  logoHeight: 84,
  summary:
    "Prisma AI helps Italian SMEs adopt artificial intelligence through process audits, tailored solutions and ongoing delivery support, with a dedicated team and guaranteed outcomes.",
  metrics: [
    "€100k+ revenue in six months",
    "20+ active clients in the pipeline",
    "One company incorporated at the end of the program",
  ],
  problem:
    "Italian SMEs looking to adopt AI run into the same barriers: quotes that spiral, freelancers who vanish after the first project, and vendors who write code without truly understanding the business. The result is stalled investment, manual processes and a widening gap from competitors that are already using AI seriously.",
  solution:
    "Prisma AI brings automation into the business through a four-step method: a free discovery call, a technical process audit, development with dedicated developers and project managers, then ongoing monthly support. Each roadmap is prioritised for technical and commercial feasibility, with guaranteed outcomes, shared real-time tracking and a monthly impact report.",
  businessModel:
    "An initial development project is built around the roadmap defined during the audit, followed by ongoing monthly support for new features, maintenance and an evolving roadmap. There is no lock-in: clients can cancel with 30 days’ notice.",
  targetClients:
    "Italian SMEs with €1.5M–€30M in annual revenue that want to automate repetitive processes: sales, internal training, customer service or production, without building an in-house technology team. These are already market-validated companies ready to invest in an operating partner rather than theoretical consulting.",
  narrativeImage: `${SHARED}/t39pd8W8HjcaFo60shxNj04BafM.webp`,
  roadmap: [
    {
      date: "July 2025",
      title: "Joined Drommer",
      body: "The Founder Program’s first project. Gianmarco joined as a content creator and freelancer, determined to move beyond content and build a true AI business engine.",
    },
    {
      date: "August 2025",
      title: "First clients",
      body: "The first contracts arrived within 30 days. The model was working: SMEs were willing to pay for AI applied directly to their business.",
    },
    {
      date: "October 2025",
      title: "More than 20 clients",
      body: "Within three months, the pipeline exceeded 20 active clients, including several high-value accounts. The volume of projects had become that of a real company.",
    },
    {
      date: "December 2025",
      title: "The company is born",
      body: "By the end of the program, Prisma AI had surpassed €100k in revenue and incorporated its business structure. a transition from freelancer to company in six months.",
    },
  ],
  founderName: "Gianmarco Pompizii",
  founderRole: "Founder & Strategist",
  founderBio:
    "Known as @gianma.ai, he is one of Italy’s most-followed AI creators. He joined Drommer as a freelancer and content creator, then recognised a larger opportunity: turn the audience and expertise built through content into practical AI solutions for businesses. Prisma AI was born from that shift.",
  founderOutcome:
    "In six months, Prisma AI moved from a solo freelance practice to an incorporated company with more than €100k in revenue and a pipeline of over 20 active clients, proving that SMEs will invest in AI when delivery is concrete, accountable and tailored to the business.",
  quote:
    "“I joined as a content creator. Drommer put me alongside people who were building with me, not ahead of me. In six months, I realised I could turn my content into a real AI business. Alone, it would have taken years.”",
  quoteAttributionName: "Gianmarco Pompizii",
  quoteAttributionRole: "Founder of Prisma AI Group",
  founderPhoto: `${SHARED}/TVm5TqB8ZfUrryQF17eYym9PdI.webp`,
};
