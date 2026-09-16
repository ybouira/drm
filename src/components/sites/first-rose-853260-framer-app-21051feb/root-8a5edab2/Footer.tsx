import Link from "next/link";
import {
  DrommerLogo,
  InstagramIcon,
  LinkedinIcon,
  TiktokIcon,
  YoutubeIcon,
} from "../shared/icons";

const COMPANY_LINKS = [
  { label: "Founder Program", href: "#founder-program" },
  { label: "For Companies", href: "#for-companies" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "About Us", href: "#about" },
];

const OPPORTUNITY_LINKS = [
  { label: "Start a project", href: "#start-project" },
  { label: "Apply now", href: "#apply" },
];

const SOCIALS = [
  { Icon: InstagramIcon, label: "Instagram", href: "#" },
  { Icon: YoutubeIcon, label: "YouTube", href: "#" },
  { Icon: LinkedinIcon, label: "LinkedIn", href: "#" },
  { Icon: TiktokIcon, label: "TikTok", href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-16 text-white md:px-10">
      <div className="mx-auto max-w-[1440px]">
        <DrommerLogo className="text-3xl" />

        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3">
          <div>
            <h4 className="font-bold">Company</h4>
            <ul className="mt-4 space-y-2">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/50 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold">Opportunities</h4>
            <ul className="mt-4 space-y-2">
              {OPPORTUNITY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/50 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex gap-4">
          {SOCIALS.map(({ Icon, label, href }) => (
            <Link
              key={label}
              href={href}
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-white/20 hover:text-white"
            >
              <Icon className="h-4 w-4" />
            </Link>
          ))}
        </div>

        <div className="mt-16 border-t border-white/10 pt-6 text-sm text-white/50">
          <span className="text-white">Drommer 2026</span> Built for founders
        </div>
      </div>
    </footer>
  );
}
