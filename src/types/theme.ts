export type Theme = "dark" | "light";

export const DEFAULT_THEME: Theme = "dark";
export const THEME_STORAGE_KEY = "theme";

export function isValidTheme(value: string | null): value is Theme {
  return value === "dark" || value === "light";
}

export function getStoredTheme(): Theme {
  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  return isValidTheme(stored) ? stored : DEFAULT_THEME;
}
