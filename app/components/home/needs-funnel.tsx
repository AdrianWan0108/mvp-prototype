import Image from "next/image";
import Link from "next/link";
import { Activity, Heart, Dumbbell, Spline } from "lucide-react";
import { Container } from "../container";
import { SectionHeading } from "../section-heading";
import { photos } from "@/app/lib/images";

/**
 * "What brings you here?" funnel. Four need-based entry points that route into
 * the Classes page pre-filtered by `?need=`. Photo-on-top cards that float on
 * hover.
 */
const needs = [
  {
    icon: Activity,
    title: "Rehab & recovery",
    body: "Move past injury or pain with rehab-informed, Polestar-certified coaching.",
    href: "/classes?need=rehab",
    photo: photos.privateSession,
  },
  {
    icon: Heart,
    title: "Pre & postnatal",
    body: "Safe, supportive sessions for every stage of pregnancy and beyond.",
    href: "/classes?need=prenatal",
    photo: photos.florencePose,
  },
  {
    icon: Dumbbell,
    title: "Strength & conditioning",
    body: "Build full-body strength, endurance, and lean muscle on the reformer.",
    href: "/classes?need=strength",
    photo: photos.garyPose,
  },
  {
    icon: Spline,
    title: "Posture & alignment",
    body: "Improve mobility, balance, and alignment with mindful, precise movement.",
    href: "/classes?need=alignment",
    photo: photos.gyrotonic,
  },
];

export function NeedsFunnel() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Start with your goal"
          title="What brings you to the studio?"
          intro="Whatever your body needs, we’ll match you with the right classes and sessions."
        />
      </Container>

      {/* Full-bleed card row */}
      <div className="mt-12 grid grid-cols-1 gap-6 px-4 min-[600px]:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-12">
        {needs.map((need) => {
          const Icon = need.icon;
          return (
            <Link
              key={need.href}
              href={need.href}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm outline-none hover:shadow-xl focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 motion-safe:transition-[transform,box-shadow] motion-safe:duration-300 motion-safe:hover:-translate-y-1.5"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={need.photo.src}
                  alt={need.photo.alt}
                  fill
                  sizes="(min-width: 1024px) 24vw, (min-width: 600px) 48vw, 92vw"
                  className="object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-2 text-primary">
                  <Icon className="h-5 w-5 shrink-0" strokeWidth={1.75} />
                  <h3 className="font-serif text-base font-bold uppercase tracking-[0.08em] text-foreground">
                    {need.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {need.body}
                </p>
                <span className="mt-auto pt-5 text-sm font-semibold text-primary">
                  Learn more &rarr;
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
