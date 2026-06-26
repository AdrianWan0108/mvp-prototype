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
    "Canada's first-ever Polestar Comprehensive Pilates Teacher Training, hosted at Motion Vitality Pilates in Markham/Toronto, September 2026 – July 2027. 450 hours across the full Pilates apparatus. Registration open now.",
};

const facts = [
  { label: "Dates", value: "Sep 2026 – Jul 2027" },
  { label: "Training hours", value: "450 hours" },
  { label: "Format", value: "Comprehensive — mat + full apparatus" },
  { label: "Certification", value: "Polestar (international)" },
];

const audience = [
  "Aspiring Pilates instructors starting a new career",
  "Movement and fitness professionals expanding their scope",
  "Physiotherapists and rehab practitioners adding Pilates",
  "Dedicated practitioners ready to teach what they love",
];

const curriculum = [
  "Polestar's 5 Principles of Movement and motor-learning science",
  "Mat repertoire and progressions",
  "Reformer and Trapeze Table (Cadillac)",
  "Ladder Barrel, Spine Corrector, and Chair",
  "Anatomy, biomechanics, and the science of rehabilitation",
  "Programming, assessment, supervised teaching, and mentorship",
];

const scheduleInPerson = [
  { module: "Principles of Movement", date: "Sep 19 – 20, 2026" },
  { module: "Module 1", date: "Oct 17 – 18, 2026" },
  { module: "Module 2", date: "Nov 14 – 15, 2026" },
  { module: "Module 3", date: "Jan 9 – 10, 2027" },
  { module: "Module 4 (Midterm)", date: "Feb 13 – 14, 2027" },
  { module: "Module 5", date: "Mar 20 – 21, 2027" },
  { module: "Module 6", date: "Apr 24 – 25, 2027" },
  { module: "Module 7", date: "Jun 5 – 6, 2027" },
  { module: "Final Written Exam", date: "Jul 10 – 12, 2027" },
  { module: "Final In-Person Exam", date: "Jul 17, 2027" },
];

const scheduleOnline = [
  { when: "Every 1st Saturday", what: "Case Study" },
  { when: "Every 2nd Saturday", what: "Movement Workshop" },
  { when: "Every 3rd Sunday", what: "Case Study" },
  { when: "Every 4th Sunday", what: "Movement Workshop" },
];

const requirements = [
  { label: "Pre-Curriculum", value: "25 hours" },
  { label: "Observation", value: "40 hours" },
  { label: "Practice Exercise / Self-Mastery", value: "100 hours" },
  { label: "Practice Teaching", value: "100 hours" },
];

type PricingOption = {
  name: string;
  headline: string;
  detail: string;
  note?: string;
};

const pricingOptions: PricingOption[] = [
  {
    name: "Option 1 — Full Payment",
    headline: "$6,913.00 USD",
    detail: "Paid in full at registration.",
  },
  {
    name: "Option 2 — 6-Month Plan",
    headline: "$7,262.73 total",
    detail: "$1,866.51 down, followed by $899.42 for six months.",
    note: "Includes a $350 processing fee.",
  },
  {
    name: "Option 3 — 2-Payment Plan",
    headline: "$7,263.00 total",
    detail: "$800.00 down, followed by $3,231.50 for two payments.",
    note: "Includes a $350 processing fee.",
  },
];

// Course structured data for SEO rich results.
const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Polestar Comprehensive Pilates Teacher Training",
  description:
    "Canada's first-ever Polestar Comprehensive Pilates Teacher Training, hosted at Motion Vitality Pilates in Markham/Toronto. 450 hours across mat and the full Pilates apparatus.",
  provider: {
    "@type": "Organization",
    name: "Polestar Pilates",
    sameAs: "https://polestarpilates.com",
  },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "onsite",
    startDate: "2026-09-19",
    endDate: "2027-07-17",
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
    price: "6913",
    priceCurrency: "USD",
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
          <div className="absolute inset-0 polestar-scrim" />
          <div aria-hidden className="polestar-aurora absolute inset-0" />
        </div>
        <Container className="max-w-3xl py-24 sm:py-28">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            New for September 2026
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-tight sm:text-5xl">
            Polestar Comprehensive Pilates Teacher Training
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-foreground/90">
            The first-ever Polestar Comprehensive Pilates Teacher Training in the
            Markham / Toronto area — hosted at Motion Vitality Pilates and running
            September 2026 through July 2027. Master the full method and earn an
            internationally recognized certification.
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

      {/* A letter from Gary */}
      <section className="py-20 sm:py-24">
        <Container className="grid items-start gap-12 lg:grid-cols-[1fr_1.5fr]">
          <div className="lg:sticky lg:top-28">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border">
              <Image
                src={photos.garyHeadshot.src}
                alt={photos.garyHeadshot.alt}
                fill
                sizes="(min-width: 1024px) 35vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="A letter from Gary" title="Why Polestar" />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/90">
              <p>Hello Pilates families &amp; friends,</p>
              <p>
                Choosing a Pilates teacher-training program can feel overwhelming.
                There are many paths, philosophies, and certifications, and everyone
                is convinced theirs is the best. My hope is to help simplify that
                process so you can discover the path that truly aligns with how you
                want to move, teach, and grow.
              </p>
              <p>
                At Motion Vitality Pilates, we are proud to be the first host site
                in the Markham / Toronto area for the internationally recognized
                Polestar Pilates Teacher Training Program, beginning this September.
              </p>
              <p>
                What makes Polestar especially meaningful to me is its strong sense
                of community and mentorship. Throughout my own journey, Polestar
                connected me with educators, mentors, and practitioners around the
                world — a global network built on collaboration, apprenticeship, and
                lifelong learning. Today I&rsquo;m honored to serve as an Educator,
                Mentor, and Ambassador on the faculty of Polestar Pilates U.S.
              </p>
              <p>
                As a Polestar graduate or faculty member, you become part of an
                international community with access to studios and educators across
                many countries — whether you wish to teach, keep learning, or simply
                stay connected while you travel.
              </p>
              <p>
                If you&rsquo;ve been considering deepening your practice, changing
                careers, or expanding your movement education, I&rsquo;d love to
                connect and answer any questions you may have.
              </p>
              <p className="font-semibold text-foreground">
                With gratitude,
                <br />
                Gary — Founder of Motion Vitality Pilates
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Program overview */}
      <section className="bg-card py-20 sm:py-24">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Program overview"
            title="Enter your Pilates era"
          />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/90">
            <p>
              In Polestar&rsquo;s 450-hour Pilates Teacher Training, you&rsquo;ll
              master over 130 exercises across the full Pilates apparatus — Mat,
              Reformer, Trapeze Table, Ladder Barrel, Spine Corrector, and Chair.
              You&rsquo;ll learn the science behind Polestar&rsquo;s 5 Principles of
              Movement and develop your own confident teaching voice.
            </p>
            <p>
              Coursework blends in-person labs, live virtual sessions, case studies,
              and homework, with access to Polestar&rsquo;s Virtual Pilates Studio.
              On graduation, your Polestar diploma qualifies you to teach at studios
              internationally.
            </p>
          </div>
        </Container>
      </section>

      {/* Who it's for + Curriculum */}
      <section className="py-20 sm:py-24">
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

      {/* Schedule */}
      <section className="bg-card py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Important dates"
            title="Course schedule 2026 – 2027"
          />
          <div className="mt-10 grid gap-12 lg:grid-cols-2">
            {/* In-person */}
            <div>
              <h3 className="font-serif text-xl font-semibold">
                In-person sessions
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Saturdays 9:00 AM – 4:30 PM · Sundays 9:00 AM – 1:30 PM
              </p>
              <ul className="mt-6 divide-y divide-border border-y border-border">
                {scheduleInPerson.map((row) => (
                  <li
                    key={row.module}
                    className="flex items-baseline justify-between gap-4 py-3"
                  >
                    <span className="text-sm font-medium text-foreground/90">
                      {row.module}
                    </span>
                    <span className="text-right text-sm text-muted-foreground">
                      {row.date}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Online */}
            <div>
              <h3 className="font-serif text-xl font-semibold">
                Live online sessions
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Rolling sessions · 12:00 – 1:00 PM CST
              </p>
              <ul className="mt-6 divide-y divide-border border-y border-border">
                {scheduleOnline.map((row) => (
                  <li
                    key={row.when}
                    className="flex items-baseline justify-between gap-4 py-3"
                  >
                    <span className="text-sm font-medium text-foreground/90">
                      {row.when}
                    </span>
                    <span className="text-right text-sm text-muted-foreground">
                      {row.what}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">
                Students must attend a minimum of 6 Case Study sessions and 6
                Movement Workshops over the entirety of the course.
              </p>
            </div>
          </div>

          {/* Program requirements */}
          <div className="mt-14">
            <h3 className="font-serif text-xl font-semibold">
              Program requirements
            </h3>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {requirements.map((req) => (
                <Card key={req.label} className="p-5">
                  <p className="font-serif text-2xl font-semibold text-primary">
                    {req.value}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {req.label}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Tuition */}
      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Tuition"
            title="Pricing & payment options"
            intro="Three ways to enroll. Installment plans make the program accessible across the year."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {pricingOptions.map((opt) => (
              <Card key={opt.name} className="flex flex-col p-6">
                <h3 className="font-serif text-lg font-semibold">{opt.name}</h3>
                <p className="mt-2 text-2xl font-semibold text-primary">
                  {opt.headline}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/90">
                  {opt.detail}
                </p>
                {opt.note && (
                  <p className="mt-3 text-xs text-muted-foreground">{opt.note}</p>
                )}
              </Card>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Pricing is shown in USD and set by Polestar. Confirm current figures on
            the official registration page.
          </p>
        </Container>
      </section>

      {/* Polestar community */}
      <section className="bg-card py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="A global network"
            title="Join the Polestar community"
            intro="Training with Polestar connects you to faculty, mentors, and graduates around the world — a community built on collaboration and lifelong learning."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <figure>
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-border">
                <Image
                  src={photos.polestarFaculty.src}
                  alt={photos.polestarFaculty.alt}
                  fill
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-sm text-muted-foreground">
                Polestar faculty and trainees at a training retreat.
              </figcaption>
            </figure>
            <figure>
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-border">
                <Image
                  src={photos.polestarCohort.src}
                  alt={photos.polestarCohort.alt}
                  fill
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-sm text-muted-foreground">
                A Polestar teacher-training cohort together in the studio.
              </figcaption>
            </figure>
          </div>
        </Container>
      </section>

      {/* Registration / CTA */}
      <section className="relative isolate overflow-hidden py-20 sm:py-24">
        <div aria-hidden className="polestar-aurora absolute inset-0 -z-10" />
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
