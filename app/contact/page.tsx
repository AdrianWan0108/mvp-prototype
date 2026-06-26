import type { Metadata } from "next";
import { PageHeader } from "../components/page-header";
import { Container } from "../components/container";
import { CtaButton } from "../components/cta-button";
import { site } from "@/app/lib/site";
import { links } from "@/app/lib/links";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Motion Vitality Pilates in Markham, Ontario — phone, email, hours, and booking.",
};

const mapQuery = encodeURIComponent(
  `${site.name}, ${site.address.street}, ${site.address.locality}, Ontario ${site.address.postalCode}`,
);

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
            <address className="mt-2 text-lg not-italic leading-relaxed">
              {site.address.street}
              <br />
              {site.address.locality}, Ontario, Canada
              <br />
              {site.address.postalCode}
            </address>
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

        <div className="overflow-hidden rounded-3xl border border-border shadow-sm">
          <iframe
            title={`Map to ${site.name}`}
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full min-h-80 w-full"
          />
        </div>
      </Container>
    </>
  );
}
