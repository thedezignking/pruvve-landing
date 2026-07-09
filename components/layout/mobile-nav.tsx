"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/constants";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="md:hidden">
      {/* 44px touch target with a standard 24px icon */}
      <Button
        variant="ghost"
        size="icon"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="h-11 w-11 text-foreground [&_svg]:size-[24px]"
      >
        {open ? (
          <X aria-hidden="true" strokeWidth={2.25} />
        ) : (
          <Menu aria-hidden="true" strokeWidth={2.25} />
        )}
      </Button>

      {open && (
        <div
          id="mobile-menu"
          className="absolute left-0 right-0 top-full z-50 mt-s rounded-md bg-background p-l shadow-card"
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-m text-body-lg text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button size="xl" className="mt-s w-full">
            Download App
          </Button>
        </div>
      )}
    </div>
  );
}
