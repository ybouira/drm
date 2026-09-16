import Link from "next/link";
import { DrommerLogo } from "../shared/icons";

const NAV_LINKS = [
  { label: "Founder Program", href: "#founder-program" },
  { label: "For Companies", href: "#for-companies" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "About Us", href: "#about" },
];

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/45 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="text-xl">
          <DrommerLogo className="text-white text-xl" />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/90 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#apply"
          className="rounded-[5px] bg-white px-5 py-2.5 text-xs font-semibold text-black transition-opacity hover:opacity-90"
        >
          Apply to build
        </Link>
      </div>
    </header>
  );
}
