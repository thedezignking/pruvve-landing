import Image from "next/image";
import Link from "next/link";

import { MobileNav } from "@/components/layout/mobile-nav";
import { Button } from "@/components/ui/button";
import { navLinks, siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  return (
    <header className={cn("w-full", className)}>
      <nav
        aria-label="Main navigation"
        className="relative mx-auto flex h-14 w-full max-w-[896px] items-center justify-between"
      >
        <Link href="/" className="inline-flex items-center">
          <Image
            src="/images/pruvve-images/hero/pruvve-logo.png"
            alt={siteConfig.name}
            width={508}
            height={115}
            priority
            className="h-[20px] w-auto md:h-[24px]"
          />
        </Link>
        {/* Figma: link row gap is 47px (off-scale value from the design) */}
        <ul className="hidden items-center gap-4xl md:flex lg:gap-[47px]">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-body text-muted-foreground transition-colors hover:text-foreground lg:text-body-lg"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Button size="xl" className="hidden md:inline-flex">
          Download App
        </Button>
        <MobileNav />
      </nav>
    </header>
  );
}
