import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from "lucide-react";
import styles from "./styles.module.css";
import { useThemeContext } from "../../contexts/ThemeContext";

const nextThemeIcon = {
  dark: <SunIcon />,
  light: <MoonIcon />,
};

export function Menu() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <nav className={styles.menu}>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Ir para a Home"
        title="Ir para a Home"
      >
        <HouseIcon />
      </a>

      <a
        className={styles.menuLink}
        href="#"
        aria-label="Ver Histórico"
        title="Ver Histórico"
      >
        <HistoryIcon />
      </a>

      <a
        className={styles.menuLink}
        href="#"
        aria-label="Configurações"
        title="Configurações"
      >
        <SettingsIcon />
      </a>

      <button
        type="button"
        className={styles.menuLink}
        aria-label="Mudar Tema"
        title="Mudar Tema"
        onClick={toggleTheme}
      >
        {nextThemeIcon[theme]}
      </button>
    </nav>
  );
}
