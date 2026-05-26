import { Link } from "react-router-dom";
import { useLang, t } from "../../hooks/useLang.jsx";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }) {
  const { lang } = useLang();
  const tx = t[lang];
  const name  = lang === "al" ? product.nameAl  : product.name;
  const desc  = lang === "al" ? product.descriptionAl : product.description;
  const cat   = lang === "al" ? product.categoryAl : product.category;
  const stockLabel = tx.stock[product.stock];
  const stockClass = styles[`badge_${product.stock}`];

  const imgClass = product.image
    ? styles.img_real
    : styles[`img_${product.stock}`];

  return (
    <div className={styles.card}>
      <div className={`${styles.img} ${imgClass}`}>
        {product.image ? (
          <img src={product.image} alt={name} className={styles.image} />
        ) : (
          <span className={styles.icon}>{product.icon}</span>
        )}
      </div>

      <div className={styles.body}>
        <div className={styles.cat}>{cat}</div>
        <div className={styles.name}>{name}</div>
        <div className={styles.desc}>{desc}</div>
        <div className={styles.footer}>
          <span className={`${styles.badge} ${stockClass}`}>{stockLabel}</span>
          <Link to={`/products/${product.id}`} className={styles.detailBtn}>
            {tx.products.details}
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}