import { useState } from "react";
import { useLang, t } from "../../hooks/useLang.jsx";
import { PRODUCTS, CATEGORIES } from "../../data/products.js";
import ProductCard from "./ProductCard.jsx";
import styles from "./ProductsPage.module.css";

/* Traduceri categorii */
const CAT_LABELS = {
  All:         { al: "Të gjitha", en: "All",          it: "Tutti" },
  Diagnostics: { al: "Diagnostikë", en: "Diagnostics", it: "Diagnostica" },
  Respiratory: { al: "Respirator",  en: "Respiratory", it: "Respiratorio" },
  Consumables: { al: "Konsumabël",  en: "Consumables", it: "Materiali di consumo" },
  Mobility:    { al: "Lëvizshmëri", en: "Mobility",    it: "Mobilità" },
};

export default function ProductsPage() {
  const { lang } = useLang();
  const tx = t[lang];
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <div className="section-label">{tx.products.label}</div>
        <h1 className={styles.pageTitle}>{tx.products.title}</h1>
        <p className={styles.pageSub}>{tx.products.sub}</p>
      </div>

      <div className={styles.filters}>
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterActive : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {CAT_LABELS[cat]?.[lang] || cat}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filtered.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}