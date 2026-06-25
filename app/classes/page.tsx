import type { Metadata } from "next";
import { PageHeader, ComingSoon } from "../components/page-header";
import { Container } from "../components/container";
import { CtaButton } from "../components/cta-button";
import { links } from "@/app/lib/links";

export const metadata: Metadata = {
  title: "Classes & Services",
  description:
    "Reformer Pilates, GYROTONIC®, Konnector®, rehab, prenatal, senior, and private Pilates sessions at Motion Vitality Pilates in Markham.",
};

const offerings = [
  "Reformer Pilates",
  "Mat & Props Pilates",
  "GYROTONIC® & GYROKINESIS®",
  "Konnector® Method",
  "Fit-lates & Cardio Pilates",
  "Pre / Postnatal Pilates",
  "Scoliosis & Rehab Pilates",
  "Senior Pilates",
  "Private & Semi-Private Sessions",
];

export default function ClassesPage() {
  return (
    <>
      <PageHeader
        eyebrow="What we offer"
        title="Classes & Services"
        intro="Group classes and private sessions on professional equipment, taught by a Polestar-certified team — for every body and every goal."
      />
      <Container className="py-16">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 text-card-foreground"
            >
              <span aria-hidden className="text-primary">
                &#10003;
              </span>
              <span className="font-medium">{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap gap-4">
          <CtaButton href="/pricing" size="lg">
            See Pricing &amp; Book
          </CtaButton>
          <CtaButton href={links.schedule} size="lg" variant="outline">
            View Schedule
          </CtaButton>
        </div>
      </Container>
      <ComingSoon>
        <p className="font-medium">A dedicated page for each class is coming.</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Each will include full descriptions, who it&rsquo;s best for, and the
          equipment used — all as readable, search-friendly text.
        </p>
      </ComingSoon>
    </>
  );
}
