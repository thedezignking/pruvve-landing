import Image from "next/image";
import { ArrowUpRight, Download } from "lucide-react";

import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";

/* Off-scale values in this file (47px nav gap lives in header.tsx; 120/86px
   section gaps; 24px subheading; 12/11px card labels) come straight from the
   Figma Hero frame and are intentionally not tokens — see design-system.md. */

function PhonesCategoryCard() {
  return (
    <div className="absolute top-[134px] hidden h-[83px] w-[280px] items-center gap-l rounded-md bg-background px-l shadow-card lg:-left-[198px] lg:flex">
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
      className="overflow-hidden rounded-2xl bg-[linear-gradient(180deg,var(--bg-default)_62%,var(--primary-faint)_157%)]"
    >
      {/* Nav top padding: 12px in Figma */}
      <div className="px-l pt-m sm:px-2xl lg:px-0">
        <Header />
      </div>

      {/* Nav → headline: 140px in Figma (desktop, keeps headline at y=208);
          scaled steps below lg */}
      <div className="mx-auto mt-16 flex max-w-[684px] flex-col items-center px-l text-center sm:px-2xl md:mt-20 lg:mt-[140px] lg:max-w-none lg:px-0">
        {/* Explicit lg line breaks reproduce Figma's 2-line wrap — Geist runs
            wider than the design's SF Pro, so natural wrapping differs */}
        <h1
          id="hero-heading"
          className="text-balance text-[44px] font-medium leading-[1.14] tracking-[-0.01em] sm:text-[56px] lg:max-w-none lg:text-display"
        >
          Find the right <span className="text-brand-600">gadgets</span>{" "}
          <br aria-hidden="true" className="hidden lg:inline" />
          without the confusion
        </h1>
        <p className="mt-m max-w-[566px] text-body-lg text-muted-foreground lg:max-w-none lg:text-[24px] lg:leading-[1.5] lg:tracking-[0.02em]">
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
          width={456}
          height={933}
          priority
          sizes="(min-width: 1024px) 456px, (min-width: 640px) 330px, 260px"
          className="h-auto w-full"
        />
        <PhonesCategoryCard />
        {/* Bitmap is cropped to the exact card bounds; corners and shadow come
            from CSS so the card sits cleanly over the gradient and phone */}
        <Image
          src="/images/pruvve-images/hero/card-product.png"
          alt="Product card: Apple iPhone 17 Pro Max listing with price"
          width={280}
          height={89}
          priority
          className="absolute left-[395px] top-[271px] hidden h-auto w-[280px] max-w-none rounded-md shadow-card lg:block"
        />
      </div>
    </section>
  );
}
