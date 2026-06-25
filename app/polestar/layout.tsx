import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polestar Pilates",
  description:
    "Polestar Pilates at Motion Vitality Pilates — a rehabilitation-informed method and Canada's first-ever Polestar Comprehensive Teacher Training in Markham/Toronto.",
};

/**
 * Scopes the dark "polestar-dark" theme to the entire /polestar segment.
 * The attribute cascades to all descendants, overriding the palette chosen in
 * the switcher for this section only. flex-1 ensures the dark surface fills the
 * viewport height even on short pages.
 */
export default function PolestarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      data-theme="polestar-dark"
      className="flex flex-1 flex-col bg-background text-foreground"
    >
      {children}
    </div>
  );
}
