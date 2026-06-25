"use client";

import { useEffect, useState } from "react";

/** Selectable brand palettes (must match the [data-theme] blocks in globals.css). */
const THEMES = [
  { id: "verdant", label: "Verdant" },
  { id: "forest", label: "Forest" },
  { id: "sage", label: "Sage" },
  { id: "mint", label: "Mint" },
] as const;

export const THEME_STORAGE_KEY = "mvp-theme";
export const DEFAULT_THEME = "verdant";

/**
 * Top-left palette selector. Writes the choice to <html data-theme> and
 * localStorage so it persists across visits. The inline script in the root
 * layout applies the stored theme before first paint (no flash); this control
 * just syncs its displayed value to whatever is already active.
 */
export function ThemeSwitcher() {
  const [theme, setTheme] = useState<string>(DEFAULT_THEME);

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    if (current && THEMES.some((t) => t.id === current)) {
      setTheme(current);
    }
  }, []);

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const next = event.target.value;
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      /* ignore unavailable storage */
    }
  }

  return (
    <div className="flex items-center gap-1.5">
      <label
        htmlFor="theme-select"
        className="hidden text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-muted-foreground sm:inline"
      >
        Theme
      </label>
      <select
        id="theme-select"
        value={theme}
        onChange={handleChange}
        className="cursor-pointer rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground shadow-sm focus-visible:outline-none"
        title="Preview brand color palette"
      >
        {THEMES.map((t) => (
          <option key={t.id} value={t.id}>
            {t.label}
          </option>
        ))}
      </select>
    </div>
  );
}
