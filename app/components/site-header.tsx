"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "./container";
import { CtaButton } from "./cta-button";
import { mainNav, site } from "@/app/lib/site";
import { links } from "@/app/lib/links";
import { cn } from "@/app/lib/cn";

function isActive(pathname: string | null, href: string): boolean {
  if (!pathname) return false;
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  // Polestar routes use the dark theme; scope it to the header too for cohesion.
  const isPolestar = pathname?.startsWith("/polestar") ?? false;

  return (
    <header
      data-theme={isPolestar ? "polestar-dark" : undefined}
      className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur"
    >
      <Container className="flex h-16 items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          {/* TODO: replace placeholder monogram with the real MVP logo (SVG). */}
          <Link
            href="/"
            className="flex items-center gap-2"
            aria-label={`${site.name} — home`}
          >
            <span
              aria-hidden
              className="grid h-9 w-9 place-items-center rounded-lg bg-primary font-serif text-base font-bold text-primary-foreground"
            >
              M
            </span>
            <span className="hidden font-serif text-base font-semibold leading-none sm:block">
              Motion Vitality
              <span className="mt-0.5 block text-[0.65rem] font-normal uppercase tracking-[0.2em] text-muted-foreground">
                Pilates
              </span>
            </span>
          </Link>
        </div>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-3 py-2 text-sm transition-colors hover:bg-muted",
                isActive(pathname, item.href)
                  ? "font-semibold text-primary"
                  : "text-foreground/80",
              )}
            >
              {item.label}
            </Link>
          ))}
          <CtaButton href={links.book} className="ml-2">
            Book Now
          </CtaButton>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          className="grid h-10 w-10 place-items-center rounded-lg border border-border lg:hidden"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden
          >
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </Container>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-border bg-background lg:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-2.5 text-base transition-colors hover:bg-muted",
                  isActive(pathname, item.href)
                    ? "font-semibold text-primary"
                    : "text-foreground/90",
                )}
              >
                {item.label}
              </Link>
            ))}
            <CtaButton
              href={links.book}
              size="lg"
              className="mt-3"
            >
              Book Now
            </CtaButton>
          </Container>
        </div>
      )}
    </header>
  );
}
