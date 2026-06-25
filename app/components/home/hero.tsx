import Image from "next/image";
import { Container } from "../container";
import { CtaButton } from "../cta-button";
import { photos } from "@/app/lib/images";
import { links } from "@/app/lib/links";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src={photos.studioReformerFloor.src}
          alt={photos.studioReformerFloor.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20" />
      </div>

      <Container className="flex min-h-[80vh] flex-col justify-center py-24 text-white">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-white/80">
          Markham &middot; Ontario
        </p>
        <h1 className="max-w-3xl font-serif text-4xl font-semibold leading-[1.05] sm:text-6xl">
          Strong mind starts with a fit body
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90">
          State-of-the-art Pilates &amp; GYROTONIC&reg;, taught by a
          Polestar-certified team. Group classes, private sessions, and
          rehab-informed movement for every body.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <CtaButton href={links.book} size="lg">
            Book a Class
          </CtaButton>
          <CtaButton
            href="/classes"
            size="lg"
            variant="outline"
            className="border-white/40 text-white hover:bg-white/10"
          >
            Explore Classes
          </CtaButton>
        </div>
      </Container>
    </section>
  );
}
