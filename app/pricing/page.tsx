import type { Metadata } from "next";
import { PageHeader } from "../components/page-header";
import { Container } from "../components/container";
import { Card } from "../components/card";
import { CtaButton } from "../components/cta-button";
import { cn } from "@/app/lib/cn";
import { links } from "@/app/lib/links";

export const metadata: Metadata = {
  title: "Pricing & Booking",
  description:
    "Class packages and private session pricing at Motion Vitality Pilates in Markham. Book and register through Mindbody.",
};

type Pkg = {
  name: string;
  price: string;
  detail: string;
  featured?: boolean;
};

const packages: Pkg[] = [
  {
    name: "First-Timer Power Pack",
    price: "$110",
    detail: "4 classes — Reformer, Fit-lates, Cardio Pilates, Circuit, or TRX.",
    featured: true,
  },
  {
    name: "Group Reformer",
    price: "$350",
    detail: "10 classes, valid across multiple group class types.",
  },
  {
    name: "Private 1:1 Pilates",
    price: "$950",
    detail: "10 sessions of fully personalized one-on-one coaching.",
  },
  {
    name: "Semi-Private Pilates",
    price: "$1,300",
    detail: "10 sessions — Konnector®, Fit-lates, or Cardio Pilates.",
  },
  {
    name: "Private 1:1 GYROTONIC®",
    price: "$950",
    detail: "10 sessions of one-on-one GYROTONIC® training.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing & Booking"
        title="Pricing & Booking"
        intro="Booking, registration, and the live schedule are all handled through Mindbody. Pick a package, then reserve your spot."
      />
      <Container className="py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <Card
              key={pkg.name}
              className={cn(
                "flex flex-col p-6",
                pkg.featured && "ring-2 ring-primary",
              )}
            >
              {pkg.featured && (
                <span className="mb-3 inline-block w-fit rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Best for new clients
                </span>
              )}
              <h2 className="font-serif text-xl font-semibold">{pkg.name}</h2>
              <p className="mt-2 text-3xl font-semibold text-primary">
                {pkg.price}
              </p>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {pkg.detail}
              </p>
              <CtaButton
                href={links.book}
                variant={pkg.featured ? "primary" : "outline"}
                className="mt-5"
              >
                Book Now
              </CtaButton>
            </Card>
          ))}
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          Prices reflect the current studio listing and are to be confirmed.
          Drop-ins available on request.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <CtaButton href={links.register} size="lg">
            New Registration
          </CtaButton>
          <CtaButton href={links.schedule} size="lg" variant="outline">
            View Class Schedule
          </CtaButton>
        </div>
      </Container>
    </>
  );
}
