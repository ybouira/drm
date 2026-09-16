import Link from "next/link";
import { DrommerWordmark } from "../shared/icons";

const NAV_LINKS: ReadonlyArray<{ label: string; href: string }> = [
  { label: "Founder Program", href: "./#program-phases" },
  { label: "For Companies", href: "./#for-companies" },
  { label: "Case Studies", href: "./case-studies" },
  { label: "About Us", href: "./about-us" },
];

export function Navbar() {
  return (
    <div className="fixed top-0 left-0 z-[2] h-[58px] w-full">
      <nav className="relative flex h-[58px] flex-row items-center justify-center gap-[20px] overflow-hidden bg-black/45 px-[20px] py-[12px] backdrop-blur-[8px] min-[810px]:px-[40px] min-[1440px]:px-[100px]">
        <div className="flex h-[34px] w-full max-w-[1440px] flex-[1_0_0px] flex-row items-center justify-between">
          <Link href="./" aria-label="Drommer" className="flex items-center">
            <DrommerWordmark width={95} height={18} />
          </Link>

          <div className="hidden flex-row items-center gap-[30px] min-[810px]:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="h-[28px] rounded-none bg-transparent p-0 text-[14px] leading-[28px] font-medium tracking-[-0.14px] text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <a
            href="https://forms.fillout.com/t/cP5KQYqyDdus"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-[34px] items-center justify-center rounded-[5px] bg-white px-[20px] text-[14px] leading-[14px] font-semibold tracking-[-0.28px] text-black"
          >
            Apply to build
          </a>
        </div>
      </nav>
    </div>
  );
}
