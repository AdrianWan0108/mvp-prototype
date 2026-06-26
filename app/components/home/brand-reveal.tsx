import Image from "next/image";
import { Container } from "../container";
import { photos } from "@/app/lib/images";

const values = ["Confident", "Safe", "Comfortable"];

/**
 * Full-bleed brand moment. The studio interior sits faded behind everything;
 * the MVP wordmark is a window cut into it — the studio photo is revealed
 * *through* the letterforms via a CSS mask (the logo PNG's opaque glyphs act
 * as the mask, so only the letter paths show the photo). Pure CSS.
 */
export function BrandReveal() {
  const logoSrc = photos.mvpLogo.src;
  const photoSrc = photos.studioReformerFloor.src;

  return (
    <section className="group relative isolate overflow-hidden bg-muted/40">
      {/* Big faded studio background */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <Image
          src={photoSrc}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.12] transition-opacity duration-700 group-hover:opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/85" />
      </div>

      <Container className="flex flex-col items-center gap-10 py-24 text-center sm:py-32">
        {/* Wordmark: the studio photo revealed through the MVP letterforms */}
        <div
          role="img"
          aria-label={photos.mvpLogo.alt}
          className="aspect-[1240/385] w-full max-w-3xl bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.02]"
          style={{
            backgroundImage: `url(${photoSrc})`,
            WebkitMaskImage: `url(${logoSrc})`,
            maskImage: `url(${logoSrc})`,
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center",
            WebkitMaskSize: "contain",
            maskSize: "contain",
          }}
        />

        {/* Confident · Safe · Comfortable */}
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 font-serif text-2xl text-foreground/90 sm:text-3xl">
          {values.map((value, i) => (
            <li key={value} className="flex items-center gap-6">
              {value}
              {i < values.length - 1 && (
                <span aria-hidden className="text-primary">
                  ·
                </span>
              )}
            </li>
          ))}
        </ul>
        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
          A studio built around how you feel — move with confidence, in a space
          that keeps you safe and comfortable.
        </p>
      </Container>
    </section>
  );
}
