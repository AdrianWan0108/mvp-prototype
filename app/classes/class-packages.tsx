"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Card } from "../components/card";
import { CtaButton } from "../components/cta-button";
import { cn } from "@/app/lib/cn";
import { links } from "@/app/lib/links";
import { photos, type PhotoKey } from "@/app/lib/images";

/**
 * Need-based filtering for the class packages.
 *
 * STUB: maps each package to one or more `need` tags and filters by the
 * `?need=` query param (read client-side because the site is statically
 * exported, so there's no request-time searchParams). The tag taxonomy is a
 * placeholder — refine the mapping once class types are finalized.
 */
const NEEDS = ["rehab", "prenatal", "strength", "alignment"] as const;
type Need = (typeof NEEDS)[number];

const needLabels: Record<Need, string> = {
  rehab: "Rehab & recovery",
  prenatal: "Pre & postnatal",
  strength: "Strength & conditioning",
  alignment: "Posture & alignment",
};

type Pkg = {
  name: string;
  price: string;
  photo: PhotoKey;
  description: string;
  includes: string[];
  needs: Need[];
  featured?: boolean;
};

const packages: Pkg[] = [
  {
    name: "First-Timer Power Pack",
    price: "$110",
    photo: "garyPose",
    description:
      "The perfect way to get started. This 4-class intro pack lets new clients sample our signature group sessions to discover the format that fits best, all on professional equipment with a Polestar-certified team.",
    includes: [
      "4 classes — Reformer, Fit-lates, Cardio Pilates, Circuit, or TRX",
      "Build lean muscle and improve endurance",
      "Enhance balance, strength, and flexibility",
      "Suitable for all fitness levels",
    ],
    needs: ["strength", "alignment"],
    featured: true,
  },
  {
    name: "Group Reformer",
    price: "$350",
    photo: "reformer",
    description:
      "Our most popular group format, built around the reformer. Mix energizing, heart-pumping sessions with focused, core-building strength work across multiple class types.",
    includes: [
      "10 classes, valid across multiple group class types",
      "Strengthen the core and improve posture",
      "Low-impact, joint-friendly movement",
      "For every level, beginner to advanced",
    ],
    needs: ["strength", "alignment"],
  },
  {
    name: "Private 1:1 Pilates",
    price: "$950",
    photo: "privateSession",
    description:
      "Fully personalized one-on-one coaching. Your instructor tailors every exercise to your body, goals, and pace, whether you're just starting out or deepening your practice.",
    includes: [
      "10 sessions of one-on-one coaching",
      "Programming tailored to your goals and level",
      "Available in Mat, Reformer, and studio equipment",
      "Ideal for rehab, focused goals, or fast progress",
    ],
    needs: ["rehab", "prenatal", "strength", "alignment"],
  },
  {
    name: "Semi-Private Pilates",
    price: "$1,300",
    photo: "konnector",
    description:
      "The same personalized guidance in a small group, valid for Konnector®, Fit-lates, or Cardio Pilates — so the whole body works as one integrated unit with shared motivation.",
    includes: [
      "10 sessions — Konnector®, Fit-lates, or Cardio Pilates",
      "Engage the entire body in every movement",
      "Improve coordination, control, and balance",
      "Reduce muscular imbalances",
    ],
    needs: ["prenatal", "strength"],
  },
  {
    name: "Private 1:1 GYROTONIC®",
    price: "$950",
    photo: "gyrotonic",
    description:
      "One-on-one training in the GYROTONIC® Method on the Professional Pulley Tower — flowing, low-impact movement that's easy on the joints and inspired by yoga, dance, and tai chi.",
    includes: [
      "10 sessions of one-on-one GYROTONIC® training",
      "Improve spinal mobility and joint articulation",
      "Build flexibility and functional strength",
      "Personalized one-on-one coaching",
    ],
    needs: ["rehab", "alignment"],
  },
];

function BenefitList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm">
          <span aria-hidden className="mt-0.5 text-primary">
            &#10003;
          </span>
          <span className="font-medium">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function ClassPackages() {
  const searchParams = useSearchParams();
  const raw = searchParams.get("need");
  const activeNeed = (NEEDS as readonly string[]).includes(raw ?? "")
    ? (raw as Need)
    : null;

  const filtered = activeNeed
    ? packages.filter((pkg) => pkg.needs.includes(activeNeed))
    : packages;
  // Fall back to all packages rather than rendering an empty grid.
  const shown = filtered.length > 0 ? filtered : packages;

  return (
    <>
      {activeNeed && (
        <div className="mt-8 flex flex-wrap items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm">
          <span className="font-semibold">
            Showing packages for: {needLabels[activeNeed]}
          </span>
          <Link
            href="/classes"
            className="font-semibold text-primary underline-offset-4 hover:underline"
          >
            View all
          </Link>
        </div>
      )}

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((pkg) => (
          <Card
            key={pkg.name}
            className={cn(
              "group flex flex-col",
              pkg.featured && "ring-2 ring-primary",
            )}
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={photos[pkg.photo].src}
                alt={photos[pkg.photo].alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
              {pkg.featured && (
                <span className="absolute left-4 top-4 z-10 inline-block rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-sm">
                  Best for new clients
                </span>
              )}
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-serif text-xl font-semibold">{pkg.name}</h3>
              <p className="mt-2 text-3xl font-semibold text-primary">
                {pkg.price}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {pkg.description}
              </p>
              <div className="flex-1">
                <BenefitList items={pkg.includes} />
              </div>
              <CtaButton
                href={links.book}
                variant={pkg.featured ? "primary" : "outline"}
                className="mt-6"
              >
                Book Now
              </CtaButton>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
