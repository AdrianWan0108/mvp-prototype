import { Container } from "./container";

/** Consistent page title band used by interior pages. */
export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="border-b border-border bg-muted/40">
      <Container className="py-16 sm:py-20">
        {eyebrow && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            {eyebrow}
          </p>
        )}
        <h1 className="font-serif text-4xl font-semibold leading-tight sm:text-5xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {intro}
          </p>
        )}
      </Container>
    </section>
  );
}

/** Small "this page is in progress" note for prototype stubs. */
export function ComingSoon({ children }: { children: React.ReactNode }) {
  return (
    <Container className="py-16">
      <div className="rounded-2xl border border-dashed border-border bg-card p-8 text-card-foreground">
        {children}
      </div>
    </Container>
  );
}
