import Image from "next/image";
import { Container } from "../components/container";
import { SectionHeading } from "../components/section-heading";
import { CtaButton } from "../components/cta-button";
import { Card } from "../components/card";
import { photos } from "@/app/lib/images";
import { links } from "@/app/lib/links";

const differences = [
  {
    title: "Science-led",
    body: "A holistic approach integrating orthopedics, sports medicine, and movement science — not just exercises, but principles.",
  },
  {
    title: "Rehab-informed",
    body: "Programming that understands injury and recovery, so movement meets your body exactly where it is today.",
  },
  {
    title: "A mentored lineage",
    body: "Our team learned directly within Polestar's global community of educators and mentors.",
  },
];

const mentors = [
  "Dr. Brent Anderson — founder of Polestar Pilates",
  "Shelly Power",
  "Christi Idavoy",
  "Dawnna Wayburne",
];

export default function PolestarPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src={photos.heritageWall.src}
            alt={photos.heritageWall.alt}
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
            What MVP is built on
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-tight sm:text-6xl">
            Polestar Pilates
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-foreground/90">
            &ldquo;Learn to Move, Move to Learn.&rdquo; Polestar is the
            philosophy at the core of everything we teach — a globally
            recognized method that unites the classical Pilates repertoire with
            modern rehabilitation science.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <CtaButton href="/polestar/teacher-training" size="lg">
              Teacher Training 2026
            </CtaButton>
            <CtaButton
              href={links.polestarInfo}
              size="lg"
              variant="outline"
            >
              About Polestar
            </CtaButton>
          </div>
        </Container>
      </section>

      {/* What is Polestar */}
      <section className="py-20 sm:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="The method"
              title="What is Polestar Pilates?"
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/90">
              <p>
                Polestar Pilates is a holistic approach to movement that
                integrates the latest research and best practices in
                orthopedics, sports medicine, and movement science. It treats
                Pilates not as a fixed set of exercises, but as a framework for
                understanding how each body moves best.
              </p>
              <p>
                That foundation lets our instructors adapt every session — group
                or private — to your goals, your history, and your body, with an
                emphasis on community, mentorship, and lifelong learning.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border">
            <Image
              src={photos.polestarOnWall.src}
              alt={photos.polestarOnWall.alt}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      {/* The MVP difference */}
      <section className="bg-card py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Why it matters"
            title="The MVP difference"
            intro="Choosing a Polestar-certified studio means choosing movement that is as safe as it is effective."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {differences.map((item) => (
              <Card key={item.title} className="bg-background p-6">
                <h3 className="font-serif text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Founder's journey */}
      <section className="py-20 sm:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border">
            <Image
              src={photos.garyPose.src}
              alt={photos.garyPose.alt}
              fill
              sizes="(min-width: 1024px) 35vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="A tribute to all my teachers"
              title="Learn to Move, Move to Learn"
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/90">
              <p>
                Founder Gary Fok came to Pilates after three decades in fitness
                and taekwondo — and through Polestar training, found a path to
                heal long-standing injuries and move with renewed freedom.
              </p>
              <p>
                That journey is why MVP is a Polestar studio: a place built on
                gratitude to the mentors who shaped it, and a commitment to
                passing that knowledge on.
              </p>
            </div>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {mentors.map((mentor) => (
                <li
                  key={mentor}
                  className="flex gap-2 text-sm text-foreground/80"
                >
                  <span aria-hidden className="text-primary">
                    &bull;
                  </span>
                  {mentor}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Connect to the world */}
      <section className="bg-card py-20 sm:py-24">
        <Container className="max-w-3xl text-center">
          <SectionHeading
            align="center"
            eyebrow="A global community"
            title="We connect to the world"
            intro="Polestar spans faculty and graduates across the globe. As part of that network, MVP brings a worldwide standard of movement education home to Markham."
            className="mx-auto"
          />
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <CtaButton href={links.polestarLocations} variant="outline">
              Worldwide Locations
            </CtaButton>
            <CtaButton href={links.polestarInfo} variant="outline">
              Polestar Calendar
            </CtaButton>
          </div>
        </Container>
      </section>

      {/* Teacher training teaser */}
      <section className="relative isolate overflow-hidden bg-secondary text-secondary-foreground">
        <div aria-hidden className="polestar-aurora absolute inset-0 -z-10" />
        <Container className="flex flex-col items-center gap-6 py-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            New for September 2026
          </p>
          <h2 className="max-w-2xl text-balance font-serif text-3xl font-semibold sm:text-4xl">
            Canada&rsquo;s first-ever Polestar Comprehensive Teacher Training
          </h2>
          <p className="max-w-xl text-lg text-secondary-foreground/80">
            Become a certified Polestar instructor right here in Markham/Toronto.
            Registration is open now.
          </p>
          <CtaButton href="/polestar/teacher-training" size="lg">
            Explore the Program
          </CtaButton>
        </Container>
      </section>
    </>
  );
}
