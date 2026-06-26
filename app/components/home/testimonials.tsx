import { Container } from "../container";
import { SectionHeading } from "../section-heading";

/**
 * Client testimonials. Placeholder quotes for the prototype — swap in real
 * reviews (e.g. from Google or Mindbody) when the studio supplies them.
 */
const testimonials = [
  {
    quote:
      "The instructors actually understand bodies. After years of back pain, I finally move without fear — and I'm stronger than I've ever been.",
    name: "Jennifer L.",
    detail: "Reformer & private sessions",
  },
  {
    quote:
      "Every session is tailored to me. The Polestar-trained team caught imbalances my physio missed and built a plan around them.",
    name: "Marcus T.",
    detail: "Rehab-informed training",
  },
  {
    quote:
      "Welcoming, professional, and never intimidating. As a complete beginner I felt safe from day one — now it's the best part of my week.",
    name: "Priya S.",
    detail: "Group classes",
  },
];

function Stars() {
  return (
    <div aria-label="5 out of 5 stars" className="flex gap-0.5 text-primary">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden
        >
          <path d="M12 2l2.9 6.26L21.6 9.3l-4.8 4.68 1.13 6.62L12 17.77 6.07 20.6 7.2 13.98 2.4 9.3l6.7-1.04L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="What our clients say"
          title="Loved by movers across the GTA"
          intro="Real progress, real people — here's what life at MVP feels like."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-sm"
            >
              <Stars />
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-foreground/90">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="font-serif text-base font-semibold">{t.name}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {t.detail}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
