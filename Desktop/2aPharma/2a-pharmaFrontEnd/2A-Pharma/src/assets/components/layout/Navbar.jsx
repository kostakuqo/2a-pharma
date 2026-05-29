import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { useLang, t } from "../../hooks/useLang.jsx";
import styles from "./Navbar.module.css";

/* ── Steaguri SVG inline ── */
const FlagAL = () => (
  <svg width="20" height="14" viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg">
    <rect width="20" height="14" fill="#E41E20"/>
    <path d="M10 2.5 L11.5 6H15L12.2 8.1L13.2 11.5L10 9.5L6.8 11.5L7.8 8.1L5 6H8.5Z" fill="#000"/>
  </svg>
);

const FlagEN = () => (
  <svg width="20" height="14" viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg">
    <rect width="20" height="14" fill="#012169"/>
    <path d="M0 0L20 14M20 0L0 14" stroke="#fff" strokeWidth="2.8"/>
    <path d="M0 0L20 14M20 0L0 14" stroke="#C8102E" strokeWidth="1.8"/>
    <path d="M10 0V14M0 7H20" stroke="#fff" strokeWidth="4.5"/>
    <path d="M10 0V14M0 7H20" stroke="#C8102E" strokeWidth="2.8"/>
  </svg>
);

const FlagIT = () => (
  <svg width="20" height="14" viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg">
    <rect width="20" height="14" fill="#CE2B37"/>
    <rect width="7" height="14" fill="#009246"/>
    <rect x="7" width="6" height="14" fill="#fff"/>
  </svg>
);

const LANGS = [
  { code: "al", label: "AL", Flag: FlagAL },
  { code: "en", label: "EN", Flag: FlagEN },
  { code: "it", label: "IT", Flag: FlagIT },
];

export default function Navbar() {
  const { lang, toggle } = useLang();
  const tx = t[lang];
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>

        {/* Logo */}
        <Link to="/" className={styles.logo}>
          <div className={styles.logoMark}>2A</div>
          <div className={styles.logoText}>
            <span className={styles.logoGreen}></span> Pharma
          </div>
        </Link>

        {/* Desktop links */}
        <nav className={styles.links}>
          <NavLink to="/"        end className={({ isActive }) => isActive ? styles.active : ""}>{tx.nav.home}</NavLink>
          <NavLink to="/about"       className={({ isActive }) => isActive ? styles.active : ""}>{tx.nav.about}</NavLink>
          <NavLink to="/products"    className={({ isActive }) => isActive ? styles.active : ""}>{tx.nav.products}</NavLink>
          <NavLink to="/partners"    className={({ isActive }) => isActive ? styles.active : ""}>{tx.nav.partners}</NavLink>
          <NavLink to="/contact"     className={({ isActive }) => isActive ? styles.active : ""}>{tx.nav.contact}</NavLink>
        </nav>

        {/* Right */}
        <div className={styles.right}>

          {/* Lang switcher cu steaguri */}
          <div className={styles.langGroup}>
            {LANGS.map(({ code, label, Flag }) => (
              <button
                key={code}
                className={`${styles.langBtn} ${lang === code ? styles.langActive : ""}`}
                onClick={() => toggle(code)}
                title={label}
              >
                <Flag />
                <span className={styles.langLabel}>{label}</span>
              </button>
            ))}
          </div>

          <a href="tel:+355684083950" className={styles.phone}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.47 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.54a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            +355 68 4083 950
          </a>

          <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <NavLink to="/"       end onClick={() => setMenuOpen(false)}>{tx.nav.home}</NavLink>
          <NavLink to="/about"      onClick={() => setMenuOpen(false)}>{tx.nav.about}</NavLink>
          <NavLink to="/products"   onClick={() => setMenuOpen(false)}>{tx.nav.products}</NavLink>
          <NavLink to="/partners"   onClick={() => setMenuOpen(false)}>{tx.nav.partners}</NavLink>
          <NavLink to="/contact"    onClick={() => setMenuOpen(false)}>{tx.nav.contact}</NavLink>

          {/* Lang switcher mobile */}
          <div className={styles.mobileLangGroup}>
            {LANGS.map(({ code, label, Flag }) => (
              <button
                key={code}
                className={`${styles.mobileLangBtn} ${lang === code ? styles.mobileLangActive : ""}`}
                onClick={() => { toggle(code); setMenuOpen(false); }}
              >
                <Flag />
                <span>{label}</span>
              </button>
            ))}
          </div>

          <a href="tel:+355684083950" className={styles.mobilePhone}>+355 68 4083 950</a>
        </div>
      )}
    </header>
  );
}