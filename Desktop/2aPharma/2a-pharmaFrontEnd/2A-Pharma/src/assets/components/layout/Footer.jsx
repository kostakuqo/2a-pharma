import { Link } from "react-router-dom";
import { useLang, t } from "../../hooks/useLang.jsx";
import styles from "./Footer.module.css";

export default function Footer() {
  const { lang } = useLang();
  const tx = t[lang];

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <div className={styles.logoMark}>2A</div>
          <div>
            <div className={styles.logoText}><span>2A</span> Pharma</div>
            <div className={styles.logoSub}>Pajisje Mjekësore</div>
          </div>
        </div>

        <div className={styles.cols}>
          <div className={styles.col}>
            <div className={styles.colTitle}>{tx.nav.products}</div>
            <Link to="/products">Diagnostics</Link>
            <Link to="/products">Respiratory</Link>
            <Link to="/products">Consumables</Link>
            <Link to="/products">Mobility</Link>
          </div>
          <div className={styles.col}>
            <div className={styles.colTitle}>Company</div>
            <Link to="/about">{tx.nav.about}</Link>
            <Link to="/partners">{tx.nav.partners}</Link>
            <Link to="/contact">{tx.nav.contact}</Link>
          </div>
          <div className={styles.col}>
            <div className={styles.colTitle}>Contact</div>
            <a href="tel:+355684083950">+355 68 4083 950</a>
            <a href="tel:+355689053225">+355 68 905 3225</a>
            <a href="mailto:info@2apharma.al">info@2apharma.al</a>
            <span>Tiranë, Shqipëri</span>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.copy}>{tx.footer.copy}</div>
        <div className={styles.links}>
          <Link to="#">{tx.footer.privacy}</Link>
          <Link to="#">{tx.footer.terms}</Link>
          <Link to="#">{tx.footer.sitemap}</Link>
        </div>
      </div>
    </footer>
  );
}