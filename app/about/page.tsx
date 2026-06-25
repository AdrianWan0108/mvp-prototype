import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader, ComingSoon } from "../components/page-header";
import { Container } from "../components/container";
import { photos } from "@/app/lib/images";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Motion Vitality Pilates is a Polestar-certified Pilates and GYROTONIC® studio in Markham, Ontario, founded by Gary Fok.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our story"
        title="About Motion Vitality Pilates"
        intro="A Polestar-certified studio in Markham, built on science-led movement and a genuine care for how every body feels."
      />
      <Container className="grid items-center gap-12 py-16 lg:grid-cols-2">
        <div className="space-y-4 text-base leading-relaxed text-foreground/90">
          <p>
            Motion Vitality Pilates (MVP) brings together a wide range of
            state-of-the-art Pilates and GYROTONIC® equipment with a team that
            tailors every group class and private session to its clients.
          </p>
          <p>
            Founded by Gary Fok, the studio is rooted in the Polestar method —
            blending the classical Pilates repertoire with modern
            rehabilitation science. Our instructors, including Gary, Dorothy, and
            Florence, share one belief: a strong mind starts with a fit body.
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border">
          <Image
            src={photos.team.src}
            alt={photos.team.alt}
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
      </Container>
      <ComingSoon>
        <p className="font-medium">Full team bios and a studio tour are coming.</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Individual instructor profiles, certifications, and photos of the space
          will live here.
        </p>
      </ComingSoon>
    </>
  );
}
