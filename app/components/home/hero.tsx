import Image from "next/image";
import { CtaButton } from "../cta-button";
import { photos } from "@/app/lib/images";
import { links } from "@/app/lib/links";

/**
 * Glowing light-green accent point with a label, anchored over the hero image
 * (positioned to land on the instructor's feet, back, and head).
 */
function GlowPoint({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <div className={`absolute flex items-center gap-2.5 ${className ?? ""}`}>
      <span className="relative flex h-3 w-3 shrink-0">
        <span className="absolute inline-flex h-full w-full animate-hero-ping rounded-full bg-brand-300 opacity-80" />
        <span className="absolute inline-flex h-full w-full animate-hero-ping rounded-full bg-brand-300 opacity-60 [animation-delay:0.9s]" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-brand-300 shadow-[0_0_16px_6px_rgba(145,208,175,0.95)]" />
      </span>
      <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium text-white shadow-lg backdrop-blur-md sm:text-sm">
        {label}
      </span>
    </div>
  );
}

const avatars = [
  photos.garyHeadshot,
  photos.dorothyHeadshot,
  photos.florenceHeadshot,
];

export function Hero() {
  return (
    // -mt-16 pulls the section up under the transparent site header so the
    // background image runs behind it.
    <section className="relative isolate -mt-16 flex min-h-[680px] items-center overflow-hidden bg-brand-900 text-white lg:min-h-screen">
      {/* Full-bleed hero image (cropped slightly toward the top to trim the
          empty space along the bottom). */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <Image
          src={photos.heroBg.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_38%]"
        />
        {/* Left-weighted scrim for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/95 via-brand-900/55 to-brand-900/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-900/45 via-transparent to-transparent" />
      </div>

      {/* Glowing points on the instructor (feet · back · head) */}
      <GlowPoint label="Mobility" className="left-[57%] top-[45%]" />
      <GlowPoint label="Control" className="left-[67%] top-[34%]" />
      <GlowPoint label="Balance" className="left-[77%] top-[60%]" />

      {/* Copy sits hard against the left edge so it clears the instructor. */}
      <div className="relative w-full px-6 pt-24 pb-16 sm:px-10 lg:px-16">
        <div className="max-w-xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
            Markham &middot; Ontario
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
            Smart movement for a stronger, healthier you
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/80">
            State-of-the-art Pilates &amp; GYROTONIC&reg;, taught by a
            Polestar-certified team. Group classes, private sessions, and
            rehab-informed movement for every body.
          </p>

          {/* Lead capture row */}
          <div className="mt-9 flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <div className="flex flex-1 items-center rounded-full border border-white/25 bg-white/10 px-5 backdrop-blur-md focus-within:border-white/50">
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
                className="w-full bg-transparent py-3.5 text-sm text-white placeholder:text-white/50 focus:outline-none"
              />
            </div>
            <CtaButton href={links.book} size="lg" className="shrink-0">
              Get Started
            </CtaButton>
          </div>

          {/* Trust badge */}
          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-3">
              {avatars.map((avatar) => (
                <span
                  key={avatar.src}
                  className="relative inline-block h-10 w-10 overflow-hidden rounded-full border-2 border-brand-900"
                >
                  <Image
                    src={avatar.src}
                    alt={avatar.alt}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </span>
              ))}
            </div>
            <p className="text-sm text-white/70">
              Trusted by 1000+ movers across the GTA
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
