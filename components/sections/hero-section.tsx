import Image from "next/image";
import { ArrowUpRight, Download } from "lucide-react";

import { Button } from "@/components/ui/button";

/* Off-scale values in this file (47px nav gap lives in header.tsx; 120/86px
   section gaps; 24px subheading; 12/11px card labels) come straight from the
   Figma Hero frame and are intentionally not tokens — see design-system.md. */

function PhonesCategoryCard() {
  return (
    <div className="absolute top-[134px] z-10 hidden h-[83px] w-[280px] items-center gap-l rounded-md bg-background px-l shadow-card lg:-left-[198px] lg:flex">
      <div className="flex w-[200px] items-center gap-s">
        <div className="flex h-[52px] w-[49px] items-center justify-center p-xs">
          <Image
            src="/images/pruvve-images/hero/card-phones-thumb.png"
            alt=""
            width={32}
            height={44}
          />
        </div>
        <div className="flex flex-col">
          <span className="text-[12px] font-medium leading-[16px] text-foreground">
            Phones
          </span>
          <span className="text-[11px] leading-[14px] tracking-[0.01em] text-muted-foreground">
            1,456 products
          </span>
        </div>
      </div>
      <span
        aria-hidden="true"
        className="flex size-[32px] items-center justify-center rounded-full border-[0.5px] border-brand-500/16 bg-brand-500/10"
      >
        <ArrowUpRight className="size-2xl text-brand-500" strokeWidth={1.5} />
      </span>
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="overflow-hidden bg-[linear-gradient(180deg,var(--bg-default)_30%,color-mix(in_srgb,var(--primary-faint)_75%,transparent)_85%)]"
    >
      <div className="mx-auto max-w-[1440px] px-l md:px-2xl">
        <div className="mx-auto flex max-w-[684px] flex-col items-center pt-12 text-center md:pt-16 lg:max-w-none lg:pt-[100px]">
          <h1
            id="hero-heading"
            className="text-balance text-display font-medium"
          >
            Find the right <span className="text-brand-600">gadgets</span>{" "}
            <br aria-hidden="true" className="hidden lg:inline" />
            without the confusion
          </h1>
          <p className="mt-m max-w-[566px] text-body-lg text-muted-foreground lg:max-w-none lg:text-[24px]">
            Discover, compare, and choose tech that actually fits{" "}
            <br aria-hidden="true" className="hidden lg:inline" />
            your needs — all in one place.
          </p>
          <Button size="2xl" className="mt-5xl">
            <Download aria-hidden="true" strokeWidth={2} />
            Download App
          </Button>
        </div>

        <div className="relative mx-auto mt-7xl h-[320px] w-[260px] sm:h-[408px] sm:w-[330px] lg:mt-[86px] lg:h-[564px] lg:w-[456px]">
          <Image
            src="/images/pruvve-images/hero/phone-mockup.png"
            alt="Pruvve app home screen on a phone, showing gadget categories and featured products"
            width={912}
            height={1865}
            priority
            sizes="(min-width: 1024px) 456px, (min-width: 640px) 330px, 260px"
            className="h-auto w-full"
          />
          <PhonesCategoryCard />
          <Image
            src="/images/pruvve-images/hero/card-product.png"
            alt="Product card: Apple iPhone 17 Pro Max listing with price"
            width={280}
            height={89}
            priority
            className="absolute left-[395px] top-[271px] z-10 hidden h-auto w-[280px] max-w-none rounded-md shadow-card lg:block"
          />
        </div>
      </div>
    </section>
  );
}
