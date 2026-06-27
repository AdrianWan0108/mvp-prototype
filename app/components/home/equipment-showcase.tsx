import Image from "next/image";
import { Container } from "../container";
import { SectionHeading } from "../section-heading";
import { photos } from "@/app/lib/images";

/**
 * Full-bleed equipment/method showcase. Five panels sit edge-to-edge with
 * softly blurred seams between them; all are black & white by default and light
 * up in colour on hover, revealing the method's intro copy.
 */
const equipment = [
  {
    name: "Reformer",
    blurb: "Spring-resisted, full-body training — strength, control, and mobility.",
    photo: photos.reformer,
  },
  {
    name: "Konnector®",
    blurb: "Connected, whole-body movement that links every limb as one unit.",
    photo: photos.konnector,
  },
  {
    name: "Ladder Barrel",
    blurb: "Spinal extension, stretch, and strength for a mobile, resilient back.",
    photo: photos.barrel,
  },
  {
    name: "GYROTONIC®",
    blurb: "Flowing, circular movement on the pulley tower — easy on the joints.",
    photo: photos.gyrotonic,
  },
  {
    name: "Trapeze Table",
    blurb: "The classic Cadillac: supported, full-range work for every level.",
    photo: photos.dorothyPose,
  },
];

// Feather the blurred seam so its edges fade out instead of showing a line.
const seamFeather =
  "linear-gradient(to right, transparent, black 45%, black 55%, transparent)";

export function EquipmentShowcase() {
  return (
    <section className="bg-brand-900 py-20 text-white sm:py-24">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Equipment & methods"
          title="Trained on the full studio"
          intro="From the reformer to the Cadillac — professional apparatus for every body and goal."
          className="[&_h2]:text-white [&_p]:text-white/70"
        />
      </Container>

      {/* Full-bleed panel strip */}
      <div className="relative mt-14 flex w-full flex-col bg-black lg:h-[52vh] lg:flex-row">
        {equipment.map((item) => (
          <div
            key={item.name}
            className="group relative h-56 overflow-hidden lg:h-auto lg:flex-1"
          >
            <Image
              src={item.photo.src}
              alt={item.photo.alt}
              fill
              sizes="(min-width: 1024px) 20vw, 100vw"
              className="object-cover grayscale brightness-90 transition-all duration-[1100ms] ease-out group-hover:grayscale-0 group-hover:brightness-110 motion-safe:group-hover:scale-105"
            />
            {/* Dark veil that lifts on hover, so the machine 'glows out' */}
            <div className="absolute inset-0 bg-black/45 transition-colors duration-[1100ms] ease-out group-hover:bg-black/15" />

            {/* Centered text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center">
              <h3 className="font-serif text-2xl font-semibold text-white drop-shadow-lg transition-all duration-500 ease-out sm:text-3xl lg:translate-y-4 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-hover:delay-100">
                {item.name}
              </h3>
              <p className="mt-3 max-w-[17rem] text-base leading-relaxed text-white/90 drop-shadow transition-all duration-500 ease-out lg:max-h-0 lg:translate-y-4 lg:overflow-hidden lg:opacity-0 lg:group-hover:max-h-48 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-hover:delay-300">
                {item.blurb}
              </p>
            </div>
          </div>
        ))}

        {/* Softly blurred seams between panels (desktop row only) */}
        {[20, 40, 60, 80].map((left) => (
          <div
            key={left}
            aria-hidden
            style={{
              left: `${left}%`,
              WebkitMaskImage: seamFeather,
              maskImage: seamFeather,
            }}
            className="pointer-events-none absolute inset-y-0 hidden w-28 -translate-x-1/2 backdrop-blur-xl lg:block"
          />
        ))}
      </div>
    </section>
  );
}
