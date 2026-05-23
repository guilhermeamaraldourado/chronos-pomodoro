import { useCallback, useEffect, useState } from "react";
import {
  getStoredTheme,
  THEME_STORAGE_KEY,
  type Theme,
} from "../types/theme";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => getStoredTheme());

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  }, []);

  return { theme, setTheme, toggleTheme };
}
