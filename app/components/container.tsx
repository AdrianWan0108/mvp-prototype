import { cn } from "@/app/lib/cn";

/** Max content width per size. `default` is the standard reading column;
 *  `wide` / `wider` let near-full-bleed sections breathe closer to the hero. */
const sizes = {
  default: "max-w-6xl",
  wide: "max-w-7xl",
  wider: "max-w-[88rem]",
};

/** Centered max-width content wrapper with responsive horizontal padding. */
export function Container({
  className,
  size = "default",
  children,
}: {
  className?: string;
  size?: keyof typeof sizes;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full px-5 sm:px-8", sizes[size], className)}>
      {children}
    </div>
  );
}
