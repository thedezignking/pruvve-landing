import { Fragment } from "react";
import Image from "next/image";
import { Star } from "lucide-react";

const storeRatings = [
  {
    iconSrc: "/images/pruvve-images/trust/playstore.png",
    iconAlt: "Google Play",
    rating: "4.8",
    label: "Rating on Play Store",
  },
  {
    iconSrc: "/images/pruvve-images/trust/appstore.png",
    iconAlt: "App Store",
    rating: "4.8",
    label: "Rating on App Store",
  },
  {
    iconSrc: "/images/pruvve-images/trust/trustpilot.png",
    iconAlt: "Trustpilot",
    rating: "4.8",
    label: "Rating on Trust Pilot",
  },
];

const featureCards = [
  {
    imageSrc: "/images/pruvve-images/features/card-know.png",
    imageAlt:
      "Pruvve category browsing screen with phone and laptop listings",
    title: "Know what you want? Find it fast.",
    description:
      "Browse phones, laptops, audio, and more — with clear specs, ratings, and pricing.",
  },
  {
    imageSrc: "/images/pruvve-images/features/card-compare.png",
    imageAlt:
      "Side-by-side spec comparison of iPhone 17 Pro Max and Samsung Galaxy S25 Ultra",
    title: "Compare before you buy.",
    description:
      "View specs, performance, cameras, and battery life side by side to choose the better gadget.",
  },
  {
    imageSrc: "/images/pruvve-images/features/card-track.png",
    imageAlt: "Delivery tracking screen showing order progress",
    title: "Track every step of delivery.",
    description:
      "Explore gadgets based on your lifestyle — from gaming to work to everyday use.",
  },
  {
    imageSrc: "/images/pruvve-images/features/card-not-sure.png",
    imageAlt:
      "Lifestyle-based product recommendations for gaming, work, and everyday needs",
    title: "Not sure what you need? No worries.",
    description:
      "Explore gadgets based on your lifestyle — from gaming to work to everyday use.",
  },
];

function StoreRatingBadge({
  iconSrc,
  iconAlt,
  rating,
  label,
}: {
  iconSrc: string;
  iconAlt: string;
  rating: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-[19px]">
      <div className="flex size-[70px] items-center justify-center rounded-sm bg-surface">
        <Image
          src={iconSrc}
          alt={iconAlt}
          width={36}
          height={36}
          className="size-9"
        />
      </div>
      <div>
        <div className="flex items-center gap-s">
          <Star
            aria-hidden="true"
            fill="currentColor"
            stroke="none"
            className="size-xl text-foreground"
          />
          <span className="text-body-lg font-semibold">{rating}</span>
        </div>
        <span className="text-body-sm">{label}</span>
      </div>
    </div>
  );
}

function FeatureCard({
  imageSrc,
  imageAlt,
  title,
  description,
}: {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}) {
  return (
    <div className="overflow-hidden rounded-xl bg-surface">
      {/* Crop the exported card to show only the image portion (top 383/511) */}
      <div className="aspect-[576/383] w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={1152}
          height={1022}
          sizes="(min-width: 1024px) 576px, (min-width: 768px) 50vw, 100vw"
          className="h-auto w-full"
        />
      </div>
      <div className="space-y-s px-4xl pb-6xl text-center">
        <h3 className="text-card-title font-medium">{title}</h3>
        <p className="text-body text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

export function FeaturesTrustSection() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="flex flex-col items-center px-l pt-7xl pb-[80px] md:px-2xl lg:pt-[84px] lg:pb-[150px]"
    >
      {/* Trust row */}
      <div className="flex flex-col items-center gap-5xl">
        <p className="text-center text-body-lg">
          Loved & trusted by 150,000 shoppers across Europe.
        </p>
        <div className="flex flex-col items-center gap-4xl sm:flex-row">
          {storeRatings.map((badge, i) => (
            <Fragment key={badge.label}>
              {i > 0 && (
                <div
                  className="hidden h-[61px] w-px bg-[rgba(0,0,0,0.1)] sm:block"
                  aria-hidden="true"
                />
              )}
              <StoreRatingBadge {...badge} />
            </Fragment>
          ))}
        </div>
      </div>

      {/* Features content */}
      <div className="mt-7xl flex w-full flex-col items-center gap-7xl lg:mt-[83px] lg:gap-[84px]">
        <div className="flex max-w-[900px] flex-col items-center gap-l text-center">
          <h2
            id="features-heading"
            className="text-h1 font-medium"
          >
            Everything you need for smarter gadget shopping
          </h2>
          <p className="text-body-lg text-muted-foreground">
            Discover, compare, and buy gadgets without the confusion.
          </p>
        </div>

        <div className="mx-auto grid w-full max-w-[1192px] grid-cols-1 gap-2xl md:grid-cols-2">
          {featureCards.map((card) => (
            <FeatureCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
