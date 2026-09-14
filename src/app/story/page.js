import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import cloraLogo from "../assets/clora_logo.png";
import founderImg from "../assets/founder.jpeg";

const CHAPTERS = [
  {
    num: "01",
    accent: "#ff94bb",
    accentBg: "rgba(255,148,187,0.06)",
    accentBorder: "rgba(255,148,187,0.22)",
    tag: "The Beginning",
    title: "It Started With a Simple Belief",
    subtitle: "Women Deserve Better Access to Healthcare",
    body: [
      "Clora was born from a simple but powerful realisation: women should never have to hesitate when it comes to their health.",
      "For Dev Kumar Matalia, the journey toward building Clora began with a different idea. He initially envisioned creating an organic and cotton-based menstrual hygiene brand — offering women safer and more thoughtful period-care choices.",
      "But as he explored the space more deeply, he realised that menstrual products were only one part of a much bigger problem. Women were not just looking for better products. They needed better access to information, trusted healthcare professionals, personalised support, and a safe space to talk about health without hesitation or stigma.",
    ],
    quote: "That realisation became the foundation of Clora.",
  },
  {
    num: "02",
    accent: "#b983ff",
    accentBg: "rgba(185,131,255,0.06)",
    accentBorder: "rgba(185,131,255,0.22)",
    tag: "The Vision",
    title: "From a Product Idea to a Women's Health Ecosystem",
    subtitle: null,
    body: [
      "With his experience across technology, operations, services, and entrepreneurship, Dev saw an opportunity to bring different aspects of women's healthcare together on a single platform.",
      "Instead of building another standalone period-care brand, he wanted to create something much bigger — an ecosystem where women could discover trusted health products, connect with doctors, understand their bodies, and receive support throughout different stages of life.",
    ],
    quote: "And that vision became Clora.",
  },
  {
    num: "03",
    accent: "#b8e8fc",
    accentBg: "rgba(184,232,252,0.06)",
    accentBorder: "rgba(184,232,252,0.22)",
    tag: "What We Built",
    title: "One Platform. Every Stage of Her Life.",
    subtitle: null,
    body: [
      "Clora is being built as a women's health ecosystem that brings together menstrual care, healthcare consultations, wellness solutions, trusted products, health information, and personalised support — all in one place.",
      "From tracking periods and understanding hormonal changes to consulting healthcare professionals and finding products designed for women's needs, Clora aims to make healthcare more accessible, private, and hesitation-free.",
    ],
    quote: null,
  },
  {
    num: "04",
    accent: "#ffb4a2",
    accentBg: "rgba(255,180,162,0.06)",
    accentBorder: "rgba(255,180,162,0.22)",
    tag: "Building for Every Woman",
    title: "Where You Live Should Never Limit Your Care",
    subtitle: null,
    body: [
      "Dev believes that access to women's healthcare should not depend on where a woman lives, how much she earns, or whether she feels comfortable talking about her health.",
      "Whether she is in a city or a smaller town, whether she needs a menstrual-care product, wants to consult a doctor, or simply has a question she is hesitant to ask — Clora is being built to be there.",
      "The vision goes beyond periods. Clora's journey begins with menstrual health and is designed to evolve alongside women — from menstrual care to pregnancy care, and eventually menopause care — creating continuous support across different stages of a woman's life.",
    ],
    quote: null,
  },
  {
    num: "05",
    accent: "#c8ffd4",
    accentBg: "rgba(200,255,212,0.06)",
    accentBorder: "rgba(200,255,212,0.22)",
    tag: "The Mission",
    title: "A Mission Bigger Than a Platform",
    subtitle: null,
    body: [
      "For Dev, Clora is not simply another healthcare or marketplace platform. It is an attempt to change the way women experience healthcare.",
      "To replace hesitation with confidence. To replace confusion with information. To replace fragmented care with connected support. And to make conversations around women's health feel normal, safe, and accessible.",
    ],
    quote: "Every woman deserves access to the right care, the right information, and the right support — whenever she needs it. And this is only the beginning.",
  },
];

export default function StoryPage() {
  return (
    <div className={styles.page}>

      <div className={`${styles.orb} ${styles.orbA}`} />
      <div className={`${styles.orb} ${styles.orbB}`} />

      {/* ══════════ HEADER ══════════ */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/" className={styles.logoWrap}>
            <Image src={cloraLogo} alt="Clora" className={styles.logoImg} height={44} priority />
          </Link>
          <Link href="/" className={styles.backLink}>
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Home
          </Link>
        </div>
      </header>

      {/* ══════════ HERO ══════════ */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className="pill">Our Story</span>
          <h1 className={styles.heroTitle}>
            The Story <span className={styles.heroAccent}>Behind Clora</span>
          </h1>
          <p className={styles.heroSub}>
            How a simple belief turned into a mission to change the way
            women everywhere experience healthcare.
          </p>
        </div>

        {/* founder pill */}
        <div className={styles.founderPill}>
          <div className={styles.founderImgWrap}>
            <Image src={founderImg} alt="Dev Kumar Matalia" fill className={styles.founderImg} sizes="56px" />
          </div>
          <div>
            <p className={styles.founderName}>Dev Kumar Matalia</p>
            <p className={styles.founderRole}>Founder &amp; CEO, Clora</p>
          </div>
        </div>
      </section>

      {/* ══════════ CHAPTERS — stacked strips ══════════ */}
      <section className={styles.chaptersSection}>
        <div className={styles.chaptersInner}>
          {CHAPTERS.map((c) => (
            <article
              key={c.num}
              className={styles.chapter}
              style={{
                "--ch-accent":  c.accent,
                "--ch-bg":      c.accentBg,
                "--ch-border":  c.accentBorder,
              }}
            >
              <div className={styles.chapterRight}>
                {/* number + tag row */}
                <div className={styles.chapterMeta}>
                  <span className={styles.chapterBigNum} style={{ color: c.accent }}>{c.num}</span>
                  <span className={styles.chapterTag} style={{ background: c.accentBg, borderColor: c.accentBorder, color: c.accent }}>{c.tag}</span>
                </div>

                <h2 className={styles.chapterTitle}>{c.title}</h2>
                {c.subtitle && (
                  <p className={styles.chapterSubtitle}>{c.subtitle}</p>
                )}
                <div className={styles.chapterBody}>
                  {c.body.map((para, j) => <p key={j}>{para}</p>)}
                </div>
                {c.quote && (
                  <blockquote
                    className={styles.chapterQuote}
                    style={{ borderColor: c.accent, background: c.accentBg }}
                  >
                    <span className={styles.chapterQuoteMark} style={{ color: c.accent }}>"</span>
                    {c.quote}
                  </blockquote>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ══════════ CLOSING CTA ══════════ */}
      <section className={styles.cta}>
        <div className={styles.ctaOrb} />
        <div className={styles.ctaInner}>
          <span className="pill">Join the Movement</span>
          <h2 className={styles.ctaTitle}>
            Be part of <span className={styles.ctaAccent}>what comes next.</span>
          </h2>
          <p className={styles.ctaSub}>
            Clora is just getting started. Download the app and become part
            of a community redefining women's health.
          </p>
          <div className={styles.ctaBtns}>
            <a href="#" className="btn-primary">
              Download Clora
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <Link href="/" className="btn-ghost">Back to Home</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
