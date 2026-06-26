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
  const [open, setOpen] = useState(true);

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

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open theme & font preview controls"
        title="Theme & font"
        className="fixed left-3 top-3 z-50 grid h-10 w-10 place-items-center rounded-full border border-border bg-card/95 text-foreground shadow-lg backdrop-blur"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
          <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
          <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
          <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.563-2.512 5.563-5.563C22 6.012 17.5 2 12 2Z" />
        </svg>
      </button>
    );
  }

  return (
    <div className="fixed left-3 top-3 z-50 flex w-44 flex-col gap-2 rounded-xl border border-border bg-card/95 p-2.5 shadow-lg backdrop-blur">
      <div className="flex items-center justify-between">
        <span className="text-[0.6rem] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
          Preview
        </span>
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close preview controls"
          title="Close"
          className="grid h-5 w-5 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
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
