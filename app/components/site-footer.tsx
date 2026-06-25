"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "./container";
import { footerNav, site } from "@/app/lib/site";

export function SiteFooter() {
  const pathname = usePathname();
  const isPolestar = pathname?.startsWith("/polestar") ?? false;
  const year = new Date().getFullYear();

  return (
    <footer
      data-theme={isPolestar ? "polestar-dark" : undefined}
      className="mt-auto border-t border-border bg-muted/40 text-foreground"
    >
      <Container className="grid gap-10 py-14 md:grid-cols-[1.5fr_repeat(3,1fr)]">
        <div>
          <p className="font-serif text-lg font-semibold">{site.name}</p>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            A Polestar-certified Pilates &amp; GYROTONIC&reg; studio in Markham,
            Ontario — movement for strength, mobility, and recovery.
          </p>
          <address className="mt-4 space-y-1 text-sm not-italic">
            <p>{site.address.street}</p>
            <p>
              <a className="hover:text-foreground" href={`tel:${site.phone}`}>
                {site.phoneDisplay}
              </a>
            </p>
            <p>
              <a className="hover:text-foreground" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
          </address>
        </div>

        {footerNav.map((group) => (
          <nav key={group.heading} aria-label={group.heading}>
            <p className="text-sm font-semibold uppercase tracking-wide">
              {group.heading}
            </p>
            <ul className="mt-4 space-y-2.5">
              {group.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </Container>

      <div className="border-t border-border">
        <Container className="flex flex-col items-center justify-between gap-2 py-5 text-xs text-muted-foreground sm:flex-row">
          <p>
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <p>Polestar-certified studio in Markham, Ontario.</p>
        </Container>
      </div>
    </footer>
  );
}
