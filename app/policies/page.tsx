import type { Metadata } from "next";
import { PageHeader, ComingSoon } from "../components/page-header";

export const metadata: Metadata = {
  title: "Emergency & Sickness Policies",
  description:
    "Emergency, illness, and cancellation policies for Motion Vitality Pilates.",
};

export default function PoliciesPage() {
  return (
    <>
      <PageHeader
        title="Emergency & Sickness Policies"
        intro="How we handle illness, cancellations, and emergencies to keep everyone safe."
      />
      <ComingSoon>
        <p className="font-medium">Policy content to be supplied by the studio.</p>
        <p className="mt-1 text-sm text-muted-foreground">
          The current emergency and sickness policies will be migrated into
          readable text here.
        </p>
      </ComingSoon>
    </>
  );
}
