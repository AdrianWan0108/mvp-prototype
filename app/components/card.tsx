import { cn } from "@/app/lib/cn";

/** Simple surface card using theme tokens (bg-card / border). */
export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-sm",
        className,
      )}
    >
      {children}
    </div>
  );
}
