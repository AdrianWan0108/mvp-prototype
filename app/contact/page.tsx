import type { Metadata } from "next";
import { PageHeader, ComingSoon } from "../components/page-header";
import { Container } from "../components/container";
import { CtaButton } from "../components/cta-button";
import { site } from "@/app/lib/site";
import { links } from "@/app/lib/links";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Motion Vitality Pilates in Markham, Ontario — phone, email, hours, and booking.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in touch"
        title="Contact MVP"
        intro="Questions about classes, packages, or the Polestar teacher training? We'd love to hear from you."
      />
      <Container className="grid gap-12 py-16 lg:grid-cols-2">
        <div className="space-y-6">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
              Studio
            </h2>
            <p className="mt-2 text-lg">{site.address.street}</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
              Phone
            </h2>
            <p className="mt-2 text-lg">
              <a className="hover:text-primary" href={`tel:${site.phone}`}>
                {site.phoneDisplay}
              </a>
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
              Email
            </h2>
            <p className="mt-2 text-lg">
              <a className="hover:text-primary" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
              Hours
            </h2>
            <ul className="mt-2 space-y-1 text-lg">
              {site.hours.map((h) => (
                <li key={h.days}>
                  <span className="text-muted-foreground">{h.days}:</span>{" "}
                  {h.time}
                </li>
              ))}
            </ul>
          </div>
          <CtaButton href={links.book} size="lg">
            Book a Class
          </CtaButton>
        </div>

        <ComingSoon>
          <p className="font-medium">A contact form and map are coming.</p>
          <p className="mt-1 text-sm text-muted-foreground">
            For now, reach us by phone or email — we respond quickly.
          </p>
        </ComingSoon>
      </Container>
    </>
  );
}
