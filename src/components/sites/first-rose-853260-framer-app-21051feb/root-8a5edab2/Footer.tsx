import Image from "next/image";
import Link from "next/link";
import {
  DrommerWordmarkLarge,
  InstagramIcon,
  LinkedInIcon,
  YouTubeIcon,
} from "../shared/icons";

const COMPANY_LINKS: ReadonlyArray<{ label: string; href: string }> = [
  { label: "Founder Program", href: "./#program-phases" },
  { label: "For Companies", href: "./#for-companies" },
  { label: "Case Studies", href: "./case-studies" },
  { label: "About Us", href: "./about-us" },
];

const OPPORTUNITY_LINKS: ReadonlyArray<{ label: string; href: string }> = [
  { label: "Start a project", href: "https://schedule.fillout.com/t/uGGCRZmyGvus" },
  { label: "Apply now", href: "https://forms.fillout.com/t/cP5KQYqyDdus" },
];

export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-[75px] bg-[#0d0d0f] px-[20px] pt-[64px] pb-[50px] min-[810px]:px-[40px] min-[1440px]:px-[60px]">
      <div className="flex w-full max-w-[1440px] flex-col gap-[75px]">
        <div className="flex flex-col items-start justify-start gap-[40px] min-[810px]:flex-row min-[810px]:justify-between min-[1440px]:justify-start min-[1440px]:gap-[349px]">
          <DrommerWordmarkLarge width={230} height={40} />

          <div className="flex flex-col gap-[20px] min-[1440px]:w-[116px]">
            <p className="text-[14px] leading-[16.8px] font-medium text-white">Company</p>
            {COMPANY_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[14px] leading-[16.8px] font-normal text-[#939393]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-[20px] min-[1440px]:w-[95px]">
            <p className="text-[14px] leading-[16.8px] font-medium text-white">
              Opportunities
            </p>
            {OPPORTUNITY_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] leading-[16.8px] font-normal text-[#939393]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex h-[34px] flex-row items-center justify-center gap-[20px]">
          <a
            href="https://www.instagram.com/drommer.ch"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex items-center justify-center"
          >
            <InstagramIcon width={23} height={23} />
          </a>
          <a
            href="https://youtube.com/@drommerhq"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="flex items-center justify-center"
          >
            <YouTubeIcon width={26} height={18} />
          </a>
          <a
            href="https://www.linkedin.com/company/drommerch/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center justify-center"
          >
            <LinkedInIcon width={19} height={18} />
          </a>
          <a
            href="https://www.tiktok.com/@drommer.ch"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            <Image
              src="/sites/first-rose-853260-framer-app-21051feb/root-8a5edab2/images/Dx3NDQRbBFXMEHBi12YiSiAcoOo.png"
              alt="TikTok"
              width={34}
              height={34}
            />
          </a>
        </div>

        <div className="flex flex-row items-center justify-between">
          <p className="text-[14px] leading-[16.8px] font-normal text-[#939393]">
            Drommer 2026 Built for founders
          </p>
        </div>
      </div>
    </footer>
  );
}
