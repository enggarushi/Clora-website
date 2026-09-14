import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import TypewriterGlow from "./TypewriterGlow";
import ScrollReveal from "./ScrollReveal";
import FAQSection from "./FAQSection";
import bannerPicture from "./assets/BannerPicture.png";
import cloraLogo from "./assets/clora_logo.png";
import ss1 from "./assets/ss1.png";
import ss2 from "./assets/ss2.png";
import ss3 from "./assets/ss3.png";
import ss4 from "./assets/ss4.png";
import ss5 from "./assets/ss5.jpeg";
import founderImg       from "./assets/founder.jpeg";
import cofounderImg     from "./assets/cofounder.jpeg";
import execPartnerImg   from "./assets/executive_partner.jpeg";
import brandManagerImg  from "./assets/brand_manager.jpeg";

const TICKERS = [
  "AI-Powered Health Insights",
  "On-Demand Telehealth",
  "Menstrual Care",
  "Reproductive Health",
  "Women's Ecosystem",
  "Cycle Intelligence",
  "Hormonal Wellness",
  "Redefining Healthcare",
];

/* ── Features: 5 cards in a clean asymmetric grid, no zigzag ── */
const FEATURES = [
  {
    step: "01",
    img: ss1,
    alt: "Home / Prediction screen",
    accent: "#ff94bb",
    accentBg: "rgba(255,148,187,0.1)",
    accentBorder: "rgba(255,148,187,0.22)",
    tag: "Predictions",
    title: "Predictions that actually know you",
    body: "Clora doesn't just count days — it notices when your body's pattern shifts, flags it before you ask, and tells you what's normal for you specifically.",
    screen: "Calendar + Luteal phase + insight bubble",
    size: "normal",
  },
  {
    step: "02",
    img: ss2,
    alt: "Menstrual Health Score",
    accent: "#b983ff",
    accentBg: "rgba(185,131,255,0.1)",
    accentBorder: "rgba(185,131,255,0.22)",
    tag: "Health Score",
    title: "One score. Your whole cycle.",
    body: "Cycle regularity, symptoms, sleep, nutrition, mood — six signals rolled into a single number, with the \"why\" every time.",
    screen: "Menstrual Health Score · 94/100 breakdown",
    size: "normal",
  },
  {
    step: "03",
    img: ss5,
    alt: "Clo AI Assistant",
    accent: "#b8e8fc",
    accentBg: "rgba(184,232,252,0.1)",
    accentBorder: "rgba(184,232,252,0.22)",
    tag: "Clo Assistant",
    title: "Ask anything. Clo remembers everything.",
    body: "Your AI health companion that speaks plain language, keeps full context of your history, and never makes you repeat yourself.",
    screen: "AI companion · conversational health guidance",
    size: "wide", /* spans 2 cols */
  },
  {
    step: "04",
    img: ss3,
    alt: "Consult, Shop, Meds, Diagnostics hub",
    accent: "#ffb4a2",
    accentBg: "rgba(255,180,162,0.1)",
    accentBorder: "rgba(255,180,162,0.22)",
    tag: "Action Hub",
    title: "From insight to action, without leaving",
    body: "Book a consultation, order medicine, run a diagnostic test. Clora gets you to care.",
    screen: "Consult / Shop / Meds / Diagnostics",
    size: "normal",
  },
  {
    step: "05",
    img: ss4,
    alt: "Hormone pattern graph",
    accent: "#c8ffd4",
    accentBg: "rgba(200,255,212,0.1)",
    accentBorder: "rgba(200,255,212,0.22)",
    tag: "Hormone Insights",
    title: "See the pattern before you feel it",
    body: "Estrogen and progesterone estimates mapped across your cycle, plus a live mood signal — the \"why am I like this\" stops being a mystery.",
    screen: "Hormone pattern graph + live wellbeing signal",
    size: "normal",
  },
];

/* ── Calm section cards ── */
const CALM_CARDS = [
  {
    num: "01",
    tag: "Cycle",
    accent: "#ff94bb",
    accentBg: "rgba(255,148,187,0.1)",
    accentBorder: "rgba(255,148,187,0.22)",
    title: "Patterns you can actually follow.",
    body: "Log period days and symptoms, view estimated phases, and understand how your cycle changes over time.",
    visual: "cycle",
    disclaimer: "Cycle and fertile-window dates are estimates, not contraception or diagnosis.",
  },
  {
    num: "02",
    tag: "Clo",
    accent: "#b8e8fc",
    accentBg: "rgba(184,232,252,0.1)",
    accentBorder: "rgba(184,232,252,0.22)",
    title: "A conversation that remembers the context.",
    body: "Ask sensitive questions in everyday language and receive educational, context-aware guidance with clear safety boundaries.",
    visual: "chat",
    disclaimer: null,
  },
  {
    num: "03",
    tag: "Reports",
    accent: "#b983ff",
    accentBg: "rgba(185,131,255,0.1)",
    accentBorder: "rgba(185,131,255,0.22)",
    title: "Turn logs into a clearer conversation.",
    body: "Review recurring symptoms and share structured summaries with a healthcare professional when appropriate.",
    visual: "report",
    disclaimer: null,
  },
  {
    num: "04",
    tag: "Care",
    accent: "#ffb4a2",
    accentBg: "rgba(255,180,162,0.1)",
    accentBorder: "rgba(255,180,162,0.22)",
    title: "Move from insight to care.",
    body: "Discover consultation support and keep relevant information available when you need to take the next step.",
    visual: "care",
    disclaimer: null,
  },
];

/* ── Founders ── */
const FOUNDERS = [
  {
    img: founderImg,
    name: "Dev Kumar Matalia",
    role: "Founder & CEO",
    accent: "#ff94bb",
    accentBg: "rgba(255,148,187,0.12)",
    bio: "Visionary behind the world's first women's health ecosystem — building the future of reproductive care.",
  },
  {
    img: cofounderImg,
    name: "Mr. Ratan Gupta",
    role: "Co-Founder",
    accent: "#b983ff",
    accentBg: "rgba(185,131,255,0.12)",
    bio: "Driving strategy and growth to bring Clora's mission of accessible women's healthcare to every corner of the world.",
  },
  {
    img: execPartnerImg,
    name: "Khushi Rai",
    role: "Executive Partner",
    accent: "#b8e8fc",
    accentBg: "rgba(184,232,252,0.12)",
    bio: "Shaping partnerships and operations that turn Clora's vision into tangible impact for millions of women.",
  },
  {
    img: brandManagerImg,
    name: "Prashant Ratna",
    role: "Brand Manager",
    accent: "#ffb4a2",
    accentBg: "rgba(255,180,162,0.12)",
    bio: "Crafting the voice, identity, and presence that makes Clora a brand women trust with their most personal health stories.",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>

      {/* ══════════ HEADER ══════════ */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.logoWrap}>
            <Image src={cloraLogo} alt="Clora" className={styles.logoImg} height={44} priority />
          </div>
          <nav className={styles.nav}>
            <a href="#intro"     className={styles.navLink}>Home</a>
            <a href="#why-clora" className={styles.navLink}>Why Clora</a>
            <a href="#features"  className={styles.navLink}>Features</a>
            <a href="#calm"      className={styles.navLink}>How It Works</a>
            <a href="#founders"  className={styles.navLink}>Meet Our Founders</a>
            <a href="#care"      className={styles.navLink}>Care</a>
          </nav>
          <div className={styles.headerRight}>
            <ThemeToggle />
            <button className="btn-primary">Get Clora</button>
          </div>
        </div>
      </header>

      {/* ══════════ HERO ══════════ */}
      <section className={styles.hero} id="intro">
        <div className={`${styles.orb} ${styles.orbA}`} />
        <div className={`${styles.orb} ${styles.orbB}`} />
        <div className={`${styles.orb} ${styles.orbC}`} />
        <div className={styles.heroCopy}>
          <div className={styles.heroBadge}>
            <span className="pill">World&apos;s First Women&apos;s Health Ecosystem</span>
          </div>
          <p className={styles.heroEyebrow}>AI · Telehealth · Menstrual Care</p>
          <h1 className={styles.h1}>
            Not just a random
            <span className={`${styles.h1Line2} grad-primary`}>period tracker —</span>
            <span className={styles.h1Line3}>an entire <TypewriterGlow /></span>
          </h1>
          <div className={styles.heroBrandLogo} aria-hidden="true">
              <Image
                src={cloraLogo}
                alt="Clora"
                className={styles.heroBrandLogoImg}
                width={340}
                height={154}
                priority
              />
            </div>
          <p className={styles.heroSub}>
            Clora combines cutting-edge AI, on-demand telehealth, and holistic
            menstrual care to redefine reproductive healthcare for women across
            the world — starting with you.
          </p>
          <div className={styles.heroCtaRow}>
            <button className="btn-primary">
              Start Your Journey
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <Link href="/story" className="btn-ghost">Watch Our Story</Link>
          </div>
          <p className={styles.heroTrust}>
            Trusted by women in <span>40+ countries</span> · Free to get started
          </p>
        </div>
        <div className={styles.heroImageRow}>
          <div className={styles.imgRing}>
            <div className={styles.imgContainer}>
              <Image src={bannerPicture} alt="Women in the Clora community" className={styles.heroImg} fill sizes="100vw" priority />
              <div className={styles.imgFade} />
              <div className={`${styles.chip} ${styles.chipTop}`}>
                <span className={styles.chipTopDot} />
                Clo is ready — ask in your own words
              </div>
              <div className={`${styles.chip} ${styles.chipLeft}`}>
                <div className={styles.chipDot}>✦</div>
                <div className={styles.chipText}>
                  <strong>AI Health Insights</strong>
                  <span>Personalised for you</span>
                </div>
              </div>
              <div className={`${styles.chip} ${styles.chipRight}`}>
                <p className={styles.chipStat}>Our Mission</p>
                <p className={styles.chipLabel}>Redefining women&apos;s healthcare</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ MARQUEE ══════════ */}
      <div className={styles.marqueeSection}>
        <div className={styles.marqueeTrack} aria-hidden="true">
          {[...TICKERS, ...TICKERS].map((item, i) => (
            <span key={i} className={styles.marqueeItem}>{item}</span>
          ))}
        </div>
      </div>

      {/* ══════════ WHY CLORA ══════════ */}
      <section className={styles.whySection} id="why-clora">
        <div className={styles.whyInner}>
          <div className={styles.whyHeadRow}>
            <div className={styles.whyLogoBlock}>
              <Image src={cloraLogo} alt="Clora" className={styles.whyLogoImg} width={200} height={90} />
            </div>
            <div className={styles.whyTitleBlock}>
              <div className={styles.whyKicker}>
                <span className="pill">Why Clora</span>
              </div>
              <h2 className={styles.whyTitle}>
                Stop explaining your symptoms<br />
                from scratch every time —{" "}
                <span className={`${styles.whyTitleAccent} grad-primary`}>
                  when Clora is here.
                </span>
              </h2>
              <p className={styles.whySub}>
                Women spend an average of 7 years getting a diagnosis for conditions
                like endometriosis. We built Clora so that number becomes 7 days —
                or less. Because your health can&apos;t wait.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ FEATURES — card grid (no zigzag) ══════════ */}
      <section className={styles.featSection} id="features">
        <div className={styles.featInner}>
          <ScrollReveal animation="fade-up" duration="700ms">
          <div className={styles.featHead}>
            <span className="pill">A Continuous Health Journey</span>
            <h2 className={styles.featTitle}>
              From <span className="grad-primary">&ldquo;what&apos;s happening?&rdquo;</span>
              <br />
              to <span className="grad-sky">&ldquo;I know what to do next.&rdquo;</span>
            </h2>
            <p className={styles.featSub}>
              Explore a connected experience built around your everyday health signals.
            </p>
          </div>
          </ScrollReveal>

          {/* top row — 2 normal cards */}
          <div className={styles.featGrid}>
            {/* row 1: cards 01 and 02 */}
            <div className={styles.featGridRow}>
              {FEATURES.filter(f => f.step === "01" || f.step === "02").map((f, i) => (
                <ScrollReveal key={f.step} animation={i === 0 ? "fade-right" : "fade-left"} delay={`${i * 120}ms`} duration="700ms" threshold={0.08}>
                <div className={styles.featCard} style={{ "--f-accent": f.accent, "--f-bg": f.accentBg, "--f-border": f.accentBorder }}>
                  <div className={styles.featCardTop}>
                    <span className={styles.featCardStep} style={{ color: f.accent }}>— {f.step}</span>
                    <span className={styles.featCardTag} style={{ background: f.accentBg, borderColor: f.accentBorder, color: f.accent }}>{f.tag}</span>
                  </div>
                  <h3 className={styles.featCardTitle}>{f.title}</h3>
                  <p className={styles.featCardBody}>{f.body}</p>
                  <p className={styles.featCardScreen} style={{ color: f.accent }}>{f.screen}</p>
                  <div className={styles.featCardImg}>
                    <div className={styles.featCardGlow} style={{ background: `radial-gradient(circle, ${f.accent}44 0%, transparent 70%)` }} />
                    <div className={styles.featCardPhone} style={{ borderColor: f.accentBorder }}>
                      <Image src={f.img} alt={f.alt} fill className={styles.featCardPhoneImg} sizes="280px" />
                    </div>
                  </div>
                </div>
                </ScrollReveal>
              ))}
            </div>

            {/* row 2: Clo wide card (sky blue dedicated) */}
            {FEATURES.filter(f => f.step === "03").map((f) => (
              <ScrollReveal key={f.step} animation="zoom" delay="80ms" duration="750ms" threshold={0.08}>
              <div className={`${styles.featCard} ${styles.featCardWide}`} style={{ "--f-accent": f.accent, "--f-bg": f.accentBg, "--f-border": f.accentBorder }}>
                <div className={styles.featCardWideInner}>
                  <div className={styles.featCardWideText}>
                    <div className={styles.featCardTop}>
                      <span className={styles.featCardStep} style={{ color: f.accent }}>— {f.step}</span>
                      <span className={styles.featCardTag} style={{ background: f.accentBg, borderColor: f.accentBorder, color: f.accent }}>{f.tag}</span>
                    </div>
                    <h3 className={`${styles.featCardTitle} ${styles.featCardTitleLarge}`}>{f.title}</h3>
                    <p className={styles.featCardBody}>{f.body}</p>
                    <p className={styles.featCardScreen} style={{ color: f.accent }}>{f.screen}</p>
                    {/* sky-blue highlight strip */}
                    <div className={styles.featSkyStrip}>
                      <span className={styles.featSkyDot} />
                      <span>Context-aware · No repeating yourself · Clear safety limits</span>
                    </div>
                  </div>
                  <div className={styles.featCardWideImg}>
                    <div className={styles.featCardGlow} style={{ background: `radial-gradient(circle, ${f.accent}55 0%, transparent 68%)` }} />
                    <div className={styles.featCardPhone} style={{ borderColor: f.accentBorder, maxWidth: "240px" }}>
                      <Image src={f.img} alt={f.alt} fill className={styles.featCardPhoneImg} sizes="240px" />
                    </div>
                  </div>
                </div>
              </div>
              </ScrollReveal>
            ))}

            {/* row 3: cards 04 and 05 */}
            <div className={styles.featGridRow}>
              {FEATURES.filter(f => f.step === "04" || f.step === "05").map((f, i) => (
                <ScrollReveal key={f.step} animation={i === 0 ? "fade-right" : "fade-left"} delay={`${i * 120}ms`} duration="700ms" threshold={0.08}>
                <div className={styles.featCard} style={{ "--f-accent": f.accent, "--f-bg": f.accentBg, "--f-border": f.accentBorder }}>
                  <div className={styles.featCardTop}>
                    <span className={styles.featCardStep} style={{ color: f.accent }}>— {f.step}</span>
                    <span className={styles.featCardTag} style={{ background: f.accentBg, borderColor: f.accentBorder, color: f.accent }}>{f.tag}</span>
                  </div>
                  <h3 className={styles.featCardTitle}>{f.title}</h3>
                  <p className={styles.featCardBody}>{f.body}</p>
                  <p className={styles.featCardScreen} style={{ color: f.accent }}>{f.screen}</p>
                  <div className={styles.featCardImg}>
                    <div className={styles.featCardGlow} style={{ background: `radial-gradient(circle, ${f.accent}44 0%, transparent 70%)` }} />
                    <div className={styles.featCardPhone} style={{ borderColor: f.accentBorder }}>
                      <Image src={f.img} alt={f.alt} fill className={styles.featCardPhoneImg} sizes="280px" />
                    </div>
                  </div>
                </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ CALM / HOW IT WORKS ══════════ */}
      <section className={styles.calmSection} id="calm">
        <div className={styles.calmInner}>
          {/* sky-blue tinted heading block */}
          <ScrollReveal animation="fade-up" duration="700ms">
          <div className={styles.calmHead}>
            <span className="pill">How It Works</span>
            <h2 className={styles.calmTitle}>
              Health, without the{" "}
              <span className="grad-sky">overwhelm.</span>
            </h2>
            <p className={styles.calmSub}>
              Thoughtful tools that surface what matters — without turning your
              body into a dashboard of anxiety.
            </p>
          </div>
          </ScrollReveal>

          {/* 2×2 card grid */}
          <div className={styles.calmGrid}>
            {CALM_CARDS.map((c, i) => (
              <ScrollReveal
                key={c.num}
                animation={i % 2 === 0 ? "fade-right" : "fade-left"}
                delay={`${(i % 2) * 100}ms`}
                duration="700ms"
                threshold={0.08}
              >
              <div
                className={styles.calmCard}
                style={{ "--card-accent": c.accent, "--card-bg": c.accentBg, "--card-border": c.accentBorder }}
              >
                {/* card header */}
                <div className={styles.calmCardTop}>
                  <span className={styles.calmCardNum} style={{ color: c.accent }}>
                    {c.num} / {c.tag.toUpperCase()}
                  </span>
                  <span className={styles.calmCardTag} style={{ background: c.accentBg, borderColor: c.accentBorder, color: c.accent }}>
                    {c.tag}
                  </span>
                </div>

                <h3 className={styles.calmCardTitle}>{c.title}</h3>
                <p className={styles.calmCardBody}>{c.body}</p>

                {/* visual mockup per card */}
                <div className={styles.calmVisual}>

                  {/* CYCLE — ring diagram */}
                  {c.visual === "cycle" && (
                    <div className={styles.cycleVisual}>
                      <svg viewBox="0 0 200 200" className={styles.cycleSvg} aria-hidden="true">
                        {/* background ring */}
                        <circle cx="100" cy="100" r="70" fill="none" stroke="rgba(255,148,187,0.12)" strokeWidth="18" />
                        {/* Period arc ~90° */}
                        <circle cx="100" cy="100" r="70" fill="none" stroke="#ff94bb" strokeWidth="18"
                          strokeDasharray="110 329" strokeDashoffset="0" strokeLinecap="round" />
                        {/* Luteal arc ~120° */}
                        <circle cx="100" cy="100" r="70" fill="none" stroke="#b983ff" strokeWidth="18"
                          strokeDasharray="145 294" strokeDashoffset="-115" strokeLinecap="round" />
                        {/* Follicular arc ~60° */}
                        <circle cx="100" cy="100" r="70" fill="none" stroke="#ffb4a2" strokeWidth="18"
                          strokeDasharray="70 369" strokeDashoffset="-265" strokeLinecap="round" />
                        {/* dot marker */}
                        <circle cx="100" cy="30" r="6" fill="#ff94bb" />
                      </svg>
                      <div className={styles.cycleCentre}>
                        <span className={styles.cycleDayNum}>Day 14</span>
                        <span className={styles.cycleDayLabel}>estimated phase</span>
                      </div>
                      {/* phase labels */}
                      <span className={styles.cycleLabel} style={{ top: "50%", left: "-12px", transform: "translateY(-50%)", background: "rgba(255,148,187,0.12)", color: "#ff94bb" }}>Period</span>
                      <span className={styles.cycleLabel} style={{ top: "14%", right: "-8px", background: "rgba(255,180,162,0.12)", color: "#ffb4a2" }}>Follicular</span>
                      <span className={styles.cycleLabel} style={{ bottom: "10%", left: "50%", transform: "translateX(-50%)", background: "rgba(185,131,255,0.12)", color: "#b983ff" }}>Luteal</span>
                    </div>
                  )}

                  {/* CHAT — message bubbles */}
                  {c.visual === "chat" && (
                    <div className={styles.chatVisual}>
                      <div className={styles.chatBubbleUser}>
                        Why does my energy feel different this week?
                      </div>
                      <div className={styles.chatBubbleClo}>
                        <span className={styles.chatCloIcon}>✦</span>
                        <p>Your recent cycle timing and logs may offer useful context. Let&apos;s look at what changed — without jumping to a diagnosis.</p>
                      </div>
                    </div>
                  )}

                  {/* REPORTS — bar summary */}
                  {c.visual === "report" && (
                    <div className={styles.reportVisual}>
                      {[
                        { label: "Cramps", val: 72, color: "#ffb4a2" },
                        { label: "Fatigue", val: 55, color: "#ff94bb" },
                        { label: "Mood dips", val: 88, color: "#b983ff" },
                        { label: "Sleep quality", val: 40, color: "#b8e8fc" },
                      ].map((r) => (
                        <div key={r.label} className={styles.reportRow}>
                          <span className={styles.reportLabel}>{r.label}</span>
                          <div className={styles.reportBarWrap}>
                            <div className={styles.reportBar} style={{ width: `${r.val}%`, background: r.color }} />
                          </div>
                          <span className={styles.reportVal} style={{ color: r.color }}>{r.val}%</span>
                        </div>
                      ))}
                      <p className={styles.reportNote}>Recurring symptoms · last 3 cycles</p>
                    </div>
                  )}

                  {/* CARE — action tiles */}
                  {c.visual === "care" && (
                    <div className={styles.careVisual}>
                      {[
                        { icon: "💬", label: "Book a Consult", color: "#c8ffd4" },
                        { icon: "💊", label: "Order Meds",     color: "#ffb4a2" },
                        { icon: "🔬", label: "Run a Test",     color: "#b8e8fc" },
                        { icon: "📋", label: "Share Report",   color: "#b983ff" },
                      ].map((t) => (
                        <div key={t.label} className={styles.careTile} style={{ borderColor: `${t.color}44` }}>
                          <span className={styles.careTileIcon} style={{ background: `${t.color}22` }}>{t.icon}</span>
                          <span className={styles.careTileLabel}>{t.label}</span>
                        </div>
                      ))}
                    </div>
                  )}

                </div>

                {c.disclaimer && (
                  <p className={styles.calmDisclaimer}>{c.disclaimer}</p>
                )}
              </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ ECOSYSTEM MAP ══════════ */}
      <section className={styles.ecoSection} id="ecosystem">
        <div className={styles.ecoInner}>

          {/* section heading */}
          <div className={styles.ecoHead}>
            <span className="pill">One Coherent Ecosystem</span>
            <h2 className={styles.ecoTitle}>
              Everything connected.{" "}
              <span className="grad-primary">Nothing missing.</span>
            </h2>
            <p className={styles.ecoSub}>
              Clora&apos;s direction connects everyday tracking, conversational
              guidance, professional care, diagnostics, reports, and supportive
              services in one coherent ecosystem.
            </p>
          </div>

          {/* mind-map canvas */}
          <div className={styles.ecoMap} aria-hidden="true">

            {/* SVG dashed connector lines — drawn behind nodes */}
            <svg className={styles.ecoSvg} viewBox="0 0 900 480" preserveAspectRatio="xMidYMid meet">
              {/* centre point ≈ (450, 240) */}
              {/* top-left  → Track   ≈ (130, 100) */}
              <line x1="450" y1="240" x2="165" y2="115" className={styles.ecoLine} />
              {/* top-right → Understand ≈ (770, 100) */}
              <line x1="450" y1="240" x2="735" y2="115" className={styles.ecoLine} />
              {/* bottom-left → Care ≈ (130, 370) */}
              <line x1="450" y1="240" x2="165" y2="365" className={styles.ecoLine} />
              {/* bottom-right → Continue ≈ (770, 370) */}
              <line x1="450" y1="240" x2="735" y2="365" className={styles.ecoLine} />
            </svg>

            {/* ── centre logo orb ── */}
            <div className={styles.ecoOrb}>
              <div className={styles.ecoOrbRing} />
              <div className={styles.ecoOrbRing2} />
              <Image
                src={cloraLogo}
                alt="Clora"
                className={styles.ecoOrbLogo}
                width={120}
                height={54}
              />
              <span className={styles.ecoOrbSparkle} style={{ top: "10%", left: "18%" }}>✦</span>
              <span className={styles.ecoOrbSparkle} style={{ bottom: "12%", right: "16%" }}>✦</span>
            </div>

            {/* ── node: Track (top-left) ── */}
            <div className={`${styles.ecoNode} ${styles.ecoNodeTL}`} style={{ "--node-accent": "#ff94bb" }}>
              <span className={styles.ecoNodeNum}>01</span>
              <span className={styles.ecoNodeLabel}>Track</span>
              <p className={styles.ecoNodeDesc}>Daily logs, cycle phases &amp; symptom patterns</p>
            </div>

            {/* ── node: Understand (top-right) ── */}
            <div className={`${styles.ecoNode} ${styles.ecoNodeTR}`} style={{ "--node-accent": "#b8e8fc" }}>
              <span className={styles.ecoNodeNum}>02</span>
              <span className={styles.ecoNodeLabel}>Understand</span>
              <p className={styles.ecoNodeDesc}>AI insights, hormone trends &amp; health scores</p>
            </div>

            {/* ── node: Care (bottom-left) ── */}
            <div className={`${styles.ecoNode} ${styles.ecoNodeBL}`} style={{ "--node-accent": "#b983ff" }}>
              <span className={styles.ecoNodeNum}>03</span>
              <span className={styles.ecoNodeLabel}>Care</span>
              <p className={styles.ecoNodeDesc}>Teleconsults, diagnostics &amp; prescriptions</p>
            </div>

            {/* ── node: Continue (bottom-right) ── */}
            <div className={`${styles.ecoNode} ${styles.ecoNodeBR}`} style={{ "--node-accent": "#ffb4a2" }}>
              <span className={styles.ecoNodeNum}>04</span>
              <span className={styles.ecoNodeLabel}>Continue</span>
              <p className={styles.ecoNodeDesc}>Reports, progress &amp; lifelong companion</p>
            </div>

          </div>{/* /ecoMap */}

          {/* bottom stat strip */}
          <div className={styles.ecoStrip}>
            {[
              { val: "5+",   label: "Integrated modules",  accent: "#ff94bb" },
              { val: "1",    label: "Seamless ecosystem",   accent: "#b983ff" },
              { val: "24/7", label: "AI always available",  accent: "#b8e8fc" },
              { val: "∞",    label: "Personalised for you", accent: "#ffb4a2" },
            ].map((s) => (
              <div key={s.label} className={styles.ecoStat}>
                <span className={styles.ecoStatVal} style={{ color: s.accent }}>{s.val}</span>
                <span className={styles.ecoStatLabel}>{s.label}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════ MEET THE FOUNDERS ══════════ */}
      <section className={styles.foundersSection} id="founders">
        <div className={styles.foundersInner}>

          {/* heading */}
          <div className={styles.foundersHead}>
            <span className="pill">The People Behind Clora</span>
            <h2 className={styles.foundersTitle}>
              Meet our <span className="grad-primary">founders.</span>
            </h2>
            <p className={styles.foundersSub}>
              A team united by one belief — that every woman deserves
              healthcare that actually understands her.
            </p>
          </div>

          {/* accordion card row — hover to expand */}
          <div className={styles.foundersRow}>
            {FOUNDERS.map((f) => (
              <div
                key={f.name}
                className={styles.founderCard}
                style={{ "--fc-accent": f.accent, "--fc-bg": f.accentBg }}
              >
                {/* photo fills the card */}
                <Image
                  src={f.img}
                  alt={f.name}
                  fill
                  className={styles.founderPhoto}
                  sizes="(max-width:860px) 80vw, 25vw"
                />

                {/* always-visible bottom strip */}
                <div className={styles.founderStrip}>
                  <p className={styles.founderRole} style={{ color: f.accent }}>{f.role}</p>
                  <h3 className={styles.founderName}>{f.name}</h3>
                </div>

                {/* hover overlay */}
                <div className={styles.founderOverlay}>
                  <p className={styles.founderOverlayRole} style={{ color: f.accent }}>{f.role}</p>
                  <h3 className={styles.founderOverlayName}>{f.name}</h3>
                  <p className={styles.founderOverlayBio}>{f.bio}</p>
                  {/* accent bottom bar */}
                  <div className={styles.founderAccentBar} style={{ background: f.accent }} />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════ FAQs ══════════ */}
      <FAQSection />

      {/* ══════════ DOWNLOAD CTA ══════════ */}
      <section className={styles.dlSection} id="download">
        {/* decorative orbs */}
        <div className={styles.dlOrb} />
        <div className={styles.dlOrbB} />

        <div className={styles.dlInner}>
          {/* logo */}
          <div className={styles.dlLogoWrap}>
            <Image
              src={cloraLogo}
              alt="Clora"
              className={styles.dlLogoImg}
              width={160}
              height={72}
              priority
            />
          </div>

          {/* eyebrow */}
          <p className={styles.dlEyebrow}>YOUR HEALTH. YOUR RHYTHM. YOUR CLORA.</p>

          {/* headline */}
          <h2 className={styles.dlTitle}>
            Start noticing what your<br />
            body has been telling you.
          </h2>

          {/* sub */}
          <p className={styles.dlSub}>
            Download Clora and bring your cycle, questions, patterns,
            and care journey into one thoughtful space.
          </p>

          {/* CTA */}
          <a href="#" className={styles.dlBtn}>
            Download Clora
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>

      {/* ══════════ JOIN THE MOVEMENT — above footer ══════════ */}
      <section className={styles.joinSection} id="care">
        <div className={styles.joinInner}>
          <div className={styles.joinBanner}>
            <div className={styles.joinLeft}>
              <span className="pill">Join the Movement</span>
              <h2 className={styles.joinTitle}>
                One platform.{" "}
                <span className="grad-peach">Every stage of her life.</span>
              </h2>
              <p className={styles.joinBody}>
                From first period to menopause — Clora grows with you. Whether
                you&apos;re managing PCOS, tracking fertility, navigating pregnancy,
                or understanding perimenopause, Clora is built to be your lifelong
                women&apos;s health companion. Not a one-time app. An ecosystem.
              </p>
              <div className={styles.joinBtns}>
                <button className="btn-primary">
                  Get Clora Free
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="btn-ghost">Learn More</button>
              </div>
            </div>
            <div className={styles.joinRight} aria-hidden="true">
              {/* Clora logo — glowy */}
              <div className={styles.joinLogoWrap}>
                <Image src={cloraLogo} alt="Clora" className={styles.joinLogoImg} width={300} height={140} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ FOOTER ══════════ */}
      <footer className={styles.footer}>
        <div className={styles.footerOrb} />
        <div className={styles.footerOrbB} />

        <div className={styles.footerInner}>

          <div className={styles.footerTop}>

            {/* brand */}
            <div className={styles.footerBrand}>
              <Image src={cloraLogo} alt="Clora" className={styles.footerLogoImg} width={130} height={58} />
              <p className={styles.footerTagline}>Your health. Your rhythm. Your Clora.</p>
            </div>

            {/* links */}
            <div className={styles.footerCol}>
              <h4 className={styles.footerColHead}>Navigate</h4>
              <a href="#intro"    className={styles.footerLink}>Home</a>
              <a href="#features" className={styles.footerLink}>Features</a>
              <a href="#founders" className={styles.footerLink}>Meet Our Founders</a>
              <a href="#faq"      className={styles.footerLink}>FAQs</a>
            </div>

            {/* legal + download */}
            <div className={styles.footerCol}>
              <h4 className={styles.footerColHead}>Legal</h4>
              <a href="#" className={styles.footerLink}>Privacy Policy</a>
              <a href="#" className={styles.footerLink}>Terms of Service</a>
              <a href="#" className={styles.footerLink}>Medical Disclaimer</a>
              <a href="#" className={styles.footerLink}>Contact</a>
            </div>

          </div>

          <div className={styles.footerDivider} />

          <div className={styles.footerBottom}>
            <p className={styles.footerCopy}>© 2025 Clora · Autumn HealthLabs · All rights reserved.</p>
            <p className={styles.footerDisclaimer}>Not a medical device. Content is for informational purposes only.</p>
          </div>

        </div>
      </footer>

    </div>
  );
}

