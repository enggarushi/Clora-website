"use client";

import { useState } from "react";
import styles from "./page.module.css";

const FAQS = [
  {
    id: "q1",
    accent: "#ff94bb",
    accentBg: "rgba(255,148,187,0.1)",
    accentBorder: "rgba(255,148,187,0.22)",
    question: "What can I use Clora for?",
    answer:
      "Clora brings cycle and symptom tracking, educational AI-supported guidance, reports, consultation discovery, and related women's health services into one connected experience.",
  },
  {
    id: "q2",
    accent: "#b983ff",
    accentBg: "rgba(185,131,255,0.1)",
    accentBorder: "rgba(185,131,255,0.22)",
    question: "Are period, fertile-window, and ovulation dates exact?",
    answer:
      "No. They are estimates based on the information available to Clora and can vary from your actual cycle. They should not be used as contraception or as a medical diagnosis.",
  },
  {
    id: "q3",
    accent: "#b8e8fc",
    accentBg: "rgba(184,232,252,0.1)",
    accentBorder: "rgba(184,232,252,0.22)",
    question: "Does Clo replace a doctor?",
    answer:
      "No. Clo provides educational support and contextual guidance. It does not diagnose conditions, prescribe medicines, or replace advice from a licensed healthcare professional.",
  },
  {
    id: "q4",
    accent: "#ffb4a2",
    accentBg: "rgba(255,180,162,0.1)",
    accentBorder: "rgba(255,180,162,0.22)",
    question: "How does Clora approach privacy?",
    answer:
      "Clora's privacy policy explains the information used for app functionality, security, support, AI features, and privacy-limited campaign attribution. Sensitive health information is not sold for advertising.",
  },
  {
    id: "q5",
    accent: "#c8ffd4",
    accentBg: "rgba(200,255,212,0.1)",
    accentBorder: "rgba(200,255,212,0.22)",
    question: "Where can I download Clora?",
    answer:
      "Use any Download Clora button on this website — it opens the official Clora download page supplied by Autumn HealthLabs. Or download it directly through the Play Store.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState(null);

  const toggle = (id) => setOpen((prev) => (prev === id ? null : id));

  return (
    <section className={styles.faqSection} id="faq">
      <div className={styles.faqInner}>

        {/* heading */}
        <div className={styles.faqHead}>
          <span className="pill">FAQs</span>
          <h2 className={styles.faqTitle}>
            Questions you might{" "}
            <span className="grad-primary">already have.</span>
          </h2>
          <p className={styles.faqSub}>
            Quick answers to what women ask us most — clear, honest, and
            without the medical jargon.
          </p>
        </div>

        {/* accordion */}
        <div className={styles.faqList}>
          {FAQS.map((f, i) => {
            const isOpen = open === f.id;
            return (
              <div
                key={f.id}
                className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ""}`}
                style={{
                  "--faq-accent": f.accent,
                  "--faq-bg": f.accentBg,
                  "--faq-border": f.accentBorder,
                }}
              >
                <button
                  className={styles.faqQuestion}
                  onClick={() => toggle(f.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${f.id}`}
                >
                  <span className={styles.faqNum} style={{ color: f.accent }}>
                    0{i + 1}
                  </span>
                  <span className={styles.faqQuestionText}>{f.question}</span>
                  <span
                    className={styles.faqChevron}
                    style={{ color: f.accent }}
                    aria-hidden="true"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                      }}
                    >
                      <path
                        d="M4 6.5l5 5 5-5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>

                <div
                  id={`faq-answer-${f.id}`}
                  className={styles.faqAnswer}
                  hidden={!isOpen}
                >
                  <p className={styles.faqAnswerText}>{f.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
