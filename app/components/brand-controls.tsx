"use client";

import { useEffect, useState } from "react";

/**
 * Floating prototype controls (top-left): a brand-color palette selector and a
 * font-pairing selector. This is a demo affordance so the client can preview
 * combinations live — not part of the production chrome. Both choices write to
 * <html data-*> + localStorage; the no-FOUC script in the root layout applies
 * the stored values before first paint, so these controls only sync their
 * displayed value to whatever is already active.
 */

/** Brand palettes — must match the [data-theme] blocks in globals.css. */
const THEMES = [
  { id: "verdant", label: "Verdant" },
  { id: "forest", label: "Forest" },
  { id: "sage", label: "Sage" },
  { id: "mint", label: "Mint" },
] as const;

/** Font pairings — must match the [data-font] blocks in globals.css. */
const FONTS = [
  { id: "modern", label: "Montserrat / DM Sans" },
  { id: "classic", label: "Playfair / Lato" },
  { id: "elegant", label: "Cormorant / Raleway" },
  { id: "bold", label: "Bebas / Source Sans" },
] as const;

const THEME_KEY = "mvp-theme";
const FONT_KEY = "mvp-font";
const DEFAULT_THEME = "verdant";
const DEFAULT_FONT = "modern";

export function BrandControls() {
  const [theme, setTheme] = useState<string>(DEFAULT_THEME);
  const [font, setFont] = useState<string>(DEFAULT_FONT);

  // Sync displayed values to what the no-FOUC script already applied.
  useEffect(() => {
    const root = document.documentElement;
    const t = root.getAttribute("data-theme");
    if (t && THEMES.some((x) => x.id === t)) setTheme(t);
    const f = root.getAttribute("data-font");
    if (f && FONTS.some((x) => x.id === f)) setFont(f);
  }, []);

  function applyTheme(next: string) {
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      /* ignore unavailable storage */
    }
  }

  function applyFont(next: string) {
    setFont(next);
    document.documentElement.setAttribute("data-font", next);
    try {
      localStorage.setItem(FONT_KEY, next);
    } catch {
      /* ignore unavailable storage */
    }
  }

  return (
    <div className="fixed left-3 top-3 z-50 flex w-44 flex-col gap-2 rounded-xl border border-border bg-card/95 p-2.5 shadow-lg backdrop-blur">
      <Field
        id="brand-theme"
        label="Color"
        value={theme}
        options={THEMES}
        onChange={applyTheme}
      />
      <Field
        id="brand-font"
        label="Font"
        value={font}
        options={FONTS}
        onChange={applyFont}
      />
    </div>
  );
}

function Field({
  id,
  label,
  value,
  options,
  onChange,
}: {
  id: string;
  label: string;
  value: string;
  options: ReadonlyArray<{ id: string; label: string }>;
  onChange: (next: string) => void;
}) {
  return (
    <label htmlFor={id} className="flex flex-col gap-1">
      <span className="text-[0.6rem] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
        {label}
      </span>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full cursor-pointer rounded-lg border border-border bg-background px-2 py-1.5 text-xs font-medium text-foreground focus-visible:outline-none"
      >
        {options.map((o) => (
          <option key={o.id} value={o.id}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}
