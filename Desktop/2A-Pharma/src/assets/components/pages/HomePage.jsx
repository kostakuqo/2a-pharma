import { Link } from "react-router-dom";
import { useLang, t } from "../../hooks/useLang.jsx";
import { PRODUCTS, PARTNERS, STATS } from "../../data/products.js";
import ProductCard from "./ProductCard.jsx";
import styles from "./HomePage.module.css";
import Map from "./Map.jsx";

/* ── Icons ── */
const IconShield = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>;
const IconPhone = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.47 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.54a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>;
const IconArrow = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>;
const IconTruck = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13" /><path d="M16 8h4l3 3v5h-7V8z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>;
const IconBox = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>;
const IconCert = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" /></svg>;
const IconHeadset = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 18v-6a9 9 0 0 1 18 0v6" /><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3v5z" /><path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3v5z" /></svg>;
const IconRefresh = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 4 23 10 17 10" /><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" /></svg>;

const FEATURE_ICONS = [<IconCert />, <IconTruck />, <IconHeadset />, <IconRefresh />];

const STOCK_DATA = [
  { name: "Blood pressure monitor", stock: "in" },
  { name: "Surgical gloves (L)", stock: "low" },
  { name: "Pulse oximeter", stock: "in" },
  { name: "Sterile syringes 5ml", stock: "out" },
];

export default function HomePage() {
  const { lang } = useLang();
  const tx = t[lang];

  const featured = PRODUCTS.slice(0, 3);

  return (
    <>
      {/* ══ HERO ══════════════════════════════════════ */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.heroBadge}>
            <IconShield /> {tx.hero.badge}
          </div>
          <h1 className={styles.heroTitle}>
            {tx.hero.title1}<br />
            <span>{tx.hero.title2}</span><br />
            {tx.hero.title3}
          </h1>
          <p className={styles.heroSub}>{tx.hero.sub}</p>
          <div className={styles.heroBtns}>
            <Link to="/products" className={`btn ${styles.btnGreen}`}>
              {tx.hero.btnProducts} <IconArrow />
            </Link>
            <Link to="/contact" className={`btn ${styles.btnOutline}`}>
              <IconPhone /> {tx.hero.btnContact}
            </Link>
          </div>
          <div className={styles.heroStats}>
            {STATS.map((s, i) => (
              <div key={i} className={styles.statItem}>
                <div className={styles.statNum}>{s.num}</div>
                <div className={styles.statLbl}>{lang === "al" ? s.labelAl : s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.heroRight}>
          <div className={styles.heroVisual}>
            {/* Stock card */}
            <div className={styles.hCard}>
              <div className={styles.hCardTop}>
                <div className={`${styles.hCardIcon} ${styles.iconNavy}`}><IconBox /></div>
                <div>
                  <div className={styles.hCardTitle}>{tx.stockTitle}</div>
                  <div className={styles.hCardSub}>{tx.stockSub}</div>
                </div>
              </div>
              {STOCK_DATA.map((s, i) => (
                <div key={i} className={styles.stockRow}>
                  <span className={styles.stockName}>{s.name}</span>
                  <span className={`${styles.badge} ${styles[`badge_${s.stock}`]}`}>
                    {tx.stock[s.stock]}
                  </span>
                </div>
              ))}
            </div>

            {/* Delivery card */}
            <div className={styles.hCardMini}>
              <div className={`${styles.hCardIcon} ${styles.iconGreen}`}><IconTruck /></div>
              <div>
                <div className={styles.hCardTitle}>{tx.deliveryTitle}</div>
                <div className={styles.hCardSub}>{tx.deliverySub}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ PRODUCTS ══════════════════════════════════ */}
      <section className={styles.productsSection}>
        <div className={styles.secHeader}>
          <div className="section-label">{tx.products.label}</div>
          <h2 className={styles.secTitle}>{tx.products.title}</h2>
          <p className={styles.secSub}>{tx.products.sub}</p>
        </div>
        <div className={styles.productsGrid}>
          {featured.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
        <div className={styles.viewAllWrap}>
          <Link to="/products" className={`btn ${styles.btnOutline}`}>
            {tx.products.viewAll} <IconArrow />
          </Link>
        </div>
      </section>

      {/* ══ FEATURES ══════════════════════════════════ */}
      <section className={styles.featuresSection}>
        <div className={styles.secHeaderCenter}>
          <div className="section-label">{tx.features.label}</div>
          <h2 className={styles.secTitle}>{tx.features.title}</h2>
        </div>
        <div className={styles.featuresGrid}>
          {tx.features.items.map((f, i) => (
            <div key={i} className={styles.fCard}>
              <div className={styles.fIcon}>{FEATURE_ICONS[i]}</div>
              <div className={styles.fTitle}>{f.title}</div>
              <div className={styles.fDesc}>{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ PARTNERS ══════════════════════════════════ */}
      <section className={styles.partnersSection}>
        <div className={styles.partnersLabel}>{tx.partners.title}</div>
        <div className={styles.partnersRow}>
          {PARTNERS.map(p => (
            <div key={p.id} className={styles.partner}>{p.name}</div>
          ))}
        </div>
      </section>
      

      {/* ══ CTA ═══════════════════════════════════════ */}
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>
          {lang === "al" ? "Keni nevojë për pajisje mjekësore?" : "Need medical equipment?"}
        </h2>
        
        <p className={styles.ctaSub}>
          {lang === "al"
            ? "Kontaktoni ekipin tonë sot dhe do t'ju ndihmojmë të gjeni zgjidhjen e duhur."
            : "Contact our team today and we'll help you find the right solution."}
        </p>
        
        <Link to="/contact" className={`btn ${styles.btnWhite}`}>
          <IconPhone />
          {lang === "al" ? "Na kontaktoni" : "Contact us"} <IconArrow />
        </Link>
        
      </section>
      <section>
        <Map />
      </section>
    </>
  );
}