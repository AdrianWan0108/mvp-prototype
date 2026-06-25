import Image from "next/image";
import { Container } from "../container";
import { SectionHeading } from "../section-heading";
import { CtaButton } from "../cta-button";
import { photos } from "@/app/lib/images";

const points = [
  "A holistic method grounded in orthopedics, sports medicine, and movement science.",
  "Instructors certified through Polestar's globally recognized program.",
  "Rehab-informed teaching that meets you wherever your body is today.",
];

/**
 * Home preview of the Polestar sub-brand. Uses data-theme="polestar-dark" so
 * the band renders in the dark Polestar treatment regardless of the selected
 * site palette — a taste of the dedicated section.
 */
export function PolestarHighlight() {
  return (
    <section
      data-theme="polestar-dark"
      className="bg-background text-foreground"
    >
      <Container className="grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="What makes MVP different"
            title="Polestar Pilates — movement, backed by science"
            intro="Polestar is at the heart of how we teach. It blends the classical Pilates repertoire with modern rehabilitation science, so every session is as safe as it is effective."
          />
          <ul className="mt-8 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex gap-3 text-sm leading-relaxed">
                <span
                  aria-hidden
                  className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                />
                <span className="text-foreground/90">{point}</span>
              </li>
            ))}
          </ul>
          <div className="mt-9 flex flex-wrap gap-4">
            <CtaButton href="/polestar" size="lg">
              Discover Polestar
            </CtaButton>
            <CtaButton
              href="/polestar/teacher-training"
              size="lg"
              variant="outline"
            >
              Teacher Training 2026
            </CtaButton>
          </div>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border lg:aspect-[5/6]">
          <Image
            src={photos.garyPose.src}
            alt={photos.garyPose.alt}
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
