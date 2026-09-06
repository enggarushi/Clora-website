"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

const WORD = "Ecosystem.";

export default function TypewriterGlow() {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(WORD.slice(0, i));
      if (i >= WORD.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, 95);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`${styles.ecosystemGlow} ${done ? styles.ecosystemDone : ""}`}>
      {displayed}
      {!done && <span className={styles.cursor}>|</span>}
    </span>
  );
}
