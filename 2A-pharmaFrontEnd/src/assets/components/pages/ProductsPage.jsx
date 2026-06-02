import { useState,useEffect } from "react";
import { fetchProducts } from "../../../services/productService.js";
import { useLang, t } from "../../hooks/useLang.jsx";
import { PRODUCTS, CATEGORIES } from "../../data/products.js";
import ProductCard from "./ProductCard.jsx";
import styles from "./ProductsPage.module.css";


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
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const data = await fetchProducts();
      const normalized = data.map(p => ({
        ...p,
        name:          p.name_en,
        nameAl:        p.name_al,
        nameIt:        p.name_it,
        description:   p.desc_en,
        descriptionAl: p.desc_al,
        descriptionIt: p.desc_it,
        category:      p.category_en,
        categoryAl:    p.category_al,
        categoryIt:    p.category_it,
        image:         p.image_url || null,
      }));
      setProducts(normalized);
      setLoading(false);
    }
    load();
  }, []);

  const filtered = activeCategory === "All"
    ? products
    : products.filter(p => p.category === activeCategory);

  if (loading) return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "60vh", fontSize: "18px" }}>
      Se încarcă produsele...
    </div>
  );

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

      {filtered.length === 0 && (
        <div style={{ textAlign: "center", padding: "48px", color: "var(--gray-600)" }}>
          Nu există produse în această categorie.
        </div>
      )}
    </div>
  );
}