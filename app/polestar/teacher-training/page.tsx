import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "../../components/container";
import { SectionHeading } from "../../components/section-heading";
import { CtaButton } from "../../components/cta-button";
import { Card } from "../../components/card";
import { photos } from "@/app/lib/images";
import { links } from "@/app/lib/links";
import { site } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "Polestar Comprehensive Teacher Training 2026",
  description:
    "Canada's first-ever Polestar Comprehensive Pilates Teacher Training, hosted at Motion Vitality Pilates in Markham/Toronto, September 2026 – July 2027. Registration open now.",
};

const facts = [
  { label: "Dates", value: "Sep 2026 – Jul 2027" },
  { label: "Location", value: "Markham / Toronto" },
  { label: "Format", value: "Comprehensive (mat + all apparatus)" },
  { label: "Certification", value: "Polestar Pilates" },
];

const audience = [
  "Aspiring Pilates instructors starting a new career",
  "Movement and fitness professionals expanding their scope",
  "Physiotherapists and rehab practitioners adding Pilates",
  "Dedicated practitioners ready to teach what they love",
];

const curriculum = [
  "Polestar movement principles and motor-learning foundations",
  "Mat repertoire and progressions",
  "Reformer, trapeze table, chair, and barrel",
  "Anatomy, biomechanics, and the science of rehabilitation",
  "Programming, assessment, and client communication",
  "Supervised teaching practice and mentorship",
];

// Course structured data for SEO rich results.
const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Polestar Comprehensive Pilates Teacher Training",
  description:
    "Canada's first-ever Polestar Comprehensive Pilates Teacher Training, hosted at Motion Vitality Pilates in Markham/Toronto.",
  provider: {
    "@type": "Organization",
    name: "Polestar Pilates",
    sameAs: "https://polestarpilates.com",
  },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "onsite",
    startDate: "2026-09",
    endDate: "2027-07",
    location: {
      "@type": "Place",
      name: site.name,
      address: {
        "@type": "PostalAddress",
        addressLocality: site.address.locality,
        addressRegion: site.address.region,
        addressCountry: site.address.country,
      },
    },
  },
  offers: {
    "@type": "Offer",
    url: links.polestarRegister,
    availability: "https://schema.org/PreOrder",
  },
};

export default function TeacherTrainingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src={photos.dorothyPose.src}
            alt={photos.dorothyPose.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <Container className="max-w-3xl py-24 sm:py-28">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            New for September 2026
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-tight sm:text-5xl">
            Polestar Comprehensive Pilates Teacher Training
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-foreground/90">
            The first-ever Polestar Comprehensive Pilates Teacher Training in
            Toronto, Canada — hosted at Motion Vitality Pilates in Markham and
            running September 2026 through July 2027.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <CtaButton href={links.polestarRegister} size="lg">
              Register Now
            </CtaButton>
            <CtaButton href="/contact" size="lg" variant="outline">
              Request Information
            </CtaButton>
          </div>
        </Container>
      </section>

      {/* Key facts */}
      <section className="border-y border-border bg-card">
        <Container className="grid gap-6 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label}>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                {fact.label}
              </p>
              <p className="mt-1 font-serif text-lg">{fact.value}</p>
            </div>
          ))}
        </Container>
      </section>

      {/* Overview */}
      <section className="py-20 sm:py-24">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="The program" title="Train where you teach" />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/90">
            <p>
              This comprehensive program prepares you to teach the full Polestar
              repertoire — mat and every major piece of apparatus — grounded in
              the rehabilitation science that sets Polestar apart. You&rsquo;ll
              learn in a working studio, alongside a mentoring team, in the same
              environment where you&rsquo;ll one day teach.
            </p>
            <p className="text-sm text-muted-foreground">
              Final module dates, tuition, and prerequisites are confirmed on the
              official Polestar registration page. We&rsquo;ll keep this page
              updated as details are released.
            </p>
          </div>
        </Container>
      </section>

      {/* Who it's for + Curriculum */}
      <section className="bg-card py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Who it's for" title="Is this you?" />
            <ul className="mt-6 space-y-3">
              {audience.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed">
                  <span aria-hidden className="mt-1 text-primary">
                    &#10003;
                  </span>
                  <span className="text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="What you'll learn" title="Curriculum" />
            <ul className="mt-6 grid gap-3">
              {curriculum.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed">
                  <span
                    aria-hidden
                    className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                  />
                  <span className="text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Tuition / CTA */}
      <section className="py-20 sm:py-24">
        <Container>
          <Card className="bg-card p-8 sm:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <h2 className="font-serif text-2xl font-semibold sm:text-3xl">
                  Ready to begin your Polestar journey?
                </h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  Spaces in the inaugural Canadian cohort are limited. Register
                  through Polestar, or reach out and we&rsquo;ll walk you through
                  everything.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <CtaButton href={links.polestarRegister} size="lg">
                  Register Now
                </CtaButton>
                <CtaButton href="/contact" size="lg" variant="outline">
                  Ask a Question
                </CtaButton>
              </div>
            </div>
          </Card>
        </Container>
      </section>
    </>
  );
}
