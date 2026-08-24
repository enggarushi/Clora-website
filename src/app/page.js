import styles from "./page.module.css";
import Image from "next/image";
import bannerPicture from "./assets/BannerPicture.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>Clora</div>
        <nav className={styles.nav}>
          <a href="#about" className={styles.navLink}>About Ecosystem</a>
          <a href="#features" className={styles.navLink}>Features</a>
          <a href="#community" className={styles.navLink}>Community</a>
        </nav>
        <button className="btn-primary">Join the Movement</button>
      </header>

      <main>
        <section className={styles.hero}>
          <div className={styles.heroGlowOne}></div>
          <div className={styles.heroGlowTwo}></div>

          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <div className={styles.badge}>World&apos;s First Women&apos;s Health Ecosystem</div>

              <h1 className={styles.headline}>
                Not just a<br/>
                period tracker.<br/>
                <span className="text-gradient">An entire ecosystem.</span>
              </h1>

              <p className={styles.subheadline}>
                AI-driven insights, on-demand telehealth, and holistic menstrual
                care — redefining reproductive healthcare for 1 billion women.
              </p>

              <div className={styles.ctaGroup}>
                <button className="btn-primary">Get Started</button>
                <button className="btn-secondary">Learn More</button>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.photoFrame}>
                <Image
                  src={bannerPicture}
                  alt="Women in the Clora community"
                  className={styles.photo}
                  fill
                  sizes="(max-width: 960px) 340px, 520px"
                  priority
                />
              </div>
              <div className={styles.floatingChip}>
                <div className={styles.chipDots}>
                  <span></span><span></span><span></span>
                </div>
                <p>This is who we&apos;re building for.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}