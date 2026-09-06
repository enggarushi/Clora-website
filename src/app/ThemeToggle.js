"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  /* read saved preference on mount */
  useEffect(() => {
    const saved = localStorage.getItem("clora-theme") || "dark";
    setTheme(saved);
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("clora-theme", next);
  }

  return (
    <button
      className={styles.themeToggle}
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      title={theme === "dark" ? "Light mode" : "Dark mode"}
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
