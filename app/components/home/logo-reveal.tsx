"use client";

import { useState } from "react";
import { Container } from "../container";
import { photos, mvpLogoReveal } from "@/app/lib/images";

/**
 * MVP logo as a window into the studio. The logo sits as a flat tone by
 * default; hovering one of its shapes turns *that shape* into a window onto the
 * reformer studio photo — the photo is revealed through the shape via a CSS
 * mask. Each shape is its own registered mask (see scripts/gen-logo-shapes.mjs),
 * so the reveals are per-shape, and the photo reads as one continuous image
 * sitting behind the whole logo.
 */
export function LogoReveal() {
  const [active, setActive] = useState<number | null>(null);
  const photoSrc = photos.studioReformerFloor.src;
  const { aspect, fullMask, shapes } = mvpLogoReveal;

  return (
    <section className="relative isolate overflow-hidden bg-background py-24 sm:py-32">
      <Container className="flex flex-col items-center gap-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          Step inside
        </p>

        {/* The logo, sized to its own aspect ratio so every mask registers. */}
        <div
          role="img"
          aria-label={mvpLogoReveal.alt}
          className="relative w-full max-w-4xl"
          style={{ aspectRatio: String(aspect) }}
        >
          {/* Base: the logo as a flat, on-brand tone (default state). */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundColor: "var(--brand-300)",
              WebkitMaskImage: `url(${fullMask})`,
              maskImage: `url(${fullMask})`,
              WebkitMaskSize: "100% 100%",
              maskSize: "100% 100%",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
            }}
          />

          {/* Per-shape photo windows — one continuous photo, masked per shape,
              each fading in only while its column is hovered. */}
          {shapes.map((shape, i) => (
            <div
              key={shape.mask}
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${photoSrc})`,
                WebkitMaskImage: `url(${shape.mask})`,
                maskImage: `url(${shape.mask})`,
                WebkitMaskSize: "100% 100%",
                maskSize: "100% 100%",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                opacity: active === i ? 1 : 0,
                transition: "opacity 450ms ease",
              }}
            />
          ))}

          {/* Hover columns — one per shape, centred on it; hovering anywhere in
              a shape's column reveals that shape (same idea as core-values). */}
          <div className="absolute inset-0">
            {shapes.map((shape, i) => (
              <button
                key={shape.mask}
                type="button"
                aria-label={`Reveal logo shape ${i + 1}`}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(i)}
                onBlur={() => setActive(null)}
                className="absolute top-0 bottom-0 cursor-default"
                style={{ left: `${shape.left}%`, width: `${shape.width}%` }}
              />
            ))}
          </div>
        </div>

        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
          Hover the logo — each shape opens a window into our reformer studio.
        </p>
      </Container>
    </section>
  );
}
