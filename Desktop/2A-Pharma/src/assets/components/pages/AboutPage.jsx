import { useLang } from "../../hooks/useLang.jsx";
import { STATS } from "../../data/products.js";
import styles from "./AboutPage.module.css";

export default function AboutPage() {
  const { lang } = useLang();

  const content = {
    al: {
      label: "Rreth nesh",
      title: "Kush jemi ne",
      sub: "2A Pharma është distributor kryesor i pajisjeve mjekësore dhe farmaceutike në Shqipëri, me mbi 12 vjet përvojë në industri.",
      mission: "Misioni ynë",
      missionText: "Të ofrojmë pajisje mjekësore të cilësisë së lartë dhe të certifikuara për profesionistët e kujdesit shëndetësor në të gjithë Shqipërinë, duke garantuar shërbim të shpejtë dhe mbështetje eksperte.",
      vision: "Vizioni ynë",
      visionText: "Të jemi partneri i parë i zgjedhur për çdo institucion shëndetësor në Shqipëri, duke kontribuar në përmirësimin e cilësisë së kujdesit shëndetësor.",
    },
    en: {
      label: "About us",
      title: "Who we are",
      sub: "2A Pharma is a leading distributor of medical and pharmaceutical equipment in Albania, with over 12 years of industry experience.",
      mission: "Our mission",
      missionText: "To provide high-quality, certified medical equipment to healthcare professionals across Albania, ensuring fast delivery and expert support.",
      vision: "Our vision",
      visionText: "To be the preferred partner for every healthcare institution in Albania, contributing to the improvement of healthcare quality.",
    },
  };

  const c = content[lang];

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <div className="section-label">{c.label}</div>
        <h1 className={styles.pageTitle}>{c.title}</h1>
        <p className={styles.pageSub}>{c.sub}</p>
      </div>

      <div className={styles.statsRow}>
        {STATS.map((s, i) => (
          <div key={i} className={styles.statCard}>
            <div className={styles.statNum}>{s.num}</div>
            <div className={styles.statLbl}>{lang === "al" ? s.labelAl : s.label}</div>
          </div>
        ))}
      </div>

      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.cardIcon}>🎯</div>
          <div className={styles.cardTitle}>{c.mission}</div>
          <div className={styles.cardText}>{c.missionText}</div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardIcon}>🔭</div>
          <div className={styles.cardTitle}>{c.vision}</div>
          <div className={styles.cardText}>{c.visionText}</div>
        </div>
      </div>
    </div>
  );
}