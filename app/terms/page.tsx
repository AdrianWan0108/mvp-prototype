import type { Metadata } from "next";
import { PageHeader, ComingSoon } from "../components/page-header";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions for classes, packages, and bookings at Motion Vitality Pilates.",
};

export default function TermsPage() {
  return (
    <>
      <PageHeader
        title="Terms & Conditions"
        intro="The terms that apply to classes, packages, and bookings at Motion Vitality Pilates."
      />
      <ComingSoon>
        <p className="font-medium">Policy content to be supplied by the studio.</p>
        <p className="mt-1 text-sm text-muted-foreground">
          We&rsquo;ll migrate the studio&rsquo;s existing terms into clear,
          readable text here.
        </p>
      </ComingSoon>
    </>
  );
}
