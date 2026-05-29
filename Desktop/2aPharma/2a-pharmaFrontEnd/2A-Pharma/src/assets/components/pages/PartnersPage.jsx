import { useLang, t } from "../../hooks/useLang.jsx";
import { PARTNERS } from "../../data/products.js";
import styles from "./PartnersPage.module.css";

export default function PartnersPage() {
  const { lang } = useLang();
  const tx = t[lang];

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <div className="section-label">{tx.partners.label}</div>
        <h1 className={styles.pageTitle}>{tx.partners.title}</h1>
        <p className={styles.pageSub}>
          {lang === "al"
            ? "Bashkëpunojmë me organizatat kryesore shëndetësore në Shqipëri."
            : "We collaborate with leading healthcare organizations across Albania."}
        </p>
      </div>

      <div className={styles.grid}>
        {PARTNERS.map(p => (
          <div key={p.id} className={styles.partnerCard}>
            <div className={styles.partnerLogo}>
              <span>{p.name.charAt(0)}</span>
            </div>
            <div className={styles.partnerName}>{p.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}