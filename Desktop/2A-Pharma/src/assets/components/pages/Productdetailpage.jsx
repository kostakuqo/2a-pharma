import { useParams, Link, useNavigate } from "react-router-dom";
import { useLang, t } from "../../hooks/useLang.jsx";
import { PRODUCTS } from "../../data/products.js";
import styles from "./ProductDetailPage.module.css";

const IconArrowLeft = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M19 12H5M12 5l-7 7 7 7"/>
  </svg>
);
const IconPhone = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.47 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.54a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const IconMail = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);
const IconCheck = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const PRODUCT_DETAILS = {
  1: {
    specs: ["Measurement method: Oscillometric","Cuff size: 22–42 cm","Memory: 60 readings","Power: 4x AA batteries or AC adapter","Display: Large LCD","Accuracy: ±3 mmHg"],
    features: ["Irregular heartbeat detection","Multi-user memory function","Auto power-off after 1 minute","WHO blood pressure classification"],
    warranty: "2 years",
  },
  2: {
    specs: ["SpO2 range: 0–100%","Pulse rate: 30–250 bpm","Display: OLED color","Battery: 2x AAA","Battery life: 30+ hours","Weight: 50g"],
    features: ["6-second fast reading","Low battery alert","Auto power-off","4 display rotation modes"],
    warranty: "1 year",
  },
  3: {
    specs: ["Volume: 5ml","Tip: Luer lock","Material: Medical-grade PP","Sterile: Yes (EO sterilized)","Packaging: Individual blister","Quantity: 100 pcs/box"],
    features: ["Single-use only","Latex-free","Graduated markings","Clear barrel for visibility"],
    warranty: "N/A (consumable)",
  },
  4: {
    specs: ["Material: Nitrile (latex-free)","Size: Large","Powder: Free","Sterile: Yes","Thickness: 0.25mm","Quantity: 50 pairs/box"],
    features: ["Ambidextrous design","Textured fingertips","High elasticity","Allergy-safe material"],
    warranty: "N/A (consumable)",
  },
  5: {
    specs: ["Range: 32.0°C – 42.9°C","Accuracy: ±0.1°C","Reading time: 60 seconds","Tip: Flexible","Display: Digital LCD","Battery: LR41 button cell"],
    features: ["Fever alert beep","Memory recall last reading","Waterproof tip","Auto power-off"],
    warranty: "2 years",
  },
  6: {
    specs: ["Frame: Steel powder-coated","Seat width: 46cm","Max load: 100kg","Wheel size: 24 inch rear","Weight: 16kg","Folded dimensions: 28x80x89cm"],
    features: ["Foldable frame for transport","Adjustable footrests","Removable armrests","Anti-tip rear wheels"],
    warranty: "3 years frame, 1 year parts",
  },
};

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { lang } = useLang();
  const tx = t[lang];

  const product = PRODUCTS.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className={styles.notFound}>
        <div className={styles.notFoundIcon}>🔍</div>
        <h2>{lang === "al" ? "Produkti nuk u gjet" : "Product not found"}</h2>
        <Link to="/products" className={styles.backBtn}>
          <IconArrowLeft />
          {lang === "al" ? "Kthehu te produktet" : "Back to products"}
        </Link>
      </div>
    );
  }

  const name    = lang === "al" ? product.nameAl  : product.name;
  const desc    = lang === "al" ? product.descriptionAl : product.description;
  const cat     = lang === "al" ? product.categoryAl : product.category;
  const stock   = tx.stock[product.stock];
  const details = PRODUCT_DETAILS[product.id] || {};
  const related = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <div className={styles.page}>

      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <Link to="/">{lang === "al" ? "Kryefaqja" : "Home"}</Link>
        <span>/</span>
        <Link to="/products">{lang === "al" ? "Produktet" : "Products"}</Link>
        <span>/</span>
        <span className={styles.breadActive}>{name}</span>
      </div>

      {/* Main grid */}
      <div className={styles.mainGrid}>

        {/* Image */}
        <div className={styles.imageWrap}>
          <div className={`${styles.imageBox} ${!product.image ? styles[`img_${product.stock}`] : ""}`}>
            {product.image ? (
              <img src={product.image} alt={name} className={styles.productImage} />
            ) : (
              <span className={styles.productIcon}>{product.icon}</span>
            )}
          </div>
          <div className={`${styles.stockBadge} ${styles[`badge_${product.stock}`]}`}>
            {stock}
          </div>
        </div>

        {/* Info */}
        <div className={styles.info}>
          <div className={styles.cat}>{cat}</div>
          <h1 className={styles.name}>{name}</h1>
          <p className={styles.desc}>{desc}</p>

          {details.features && (
            <div className={styles.features}>
              {details.features.map((f, i) => (
                <div key={i} className={styles.featureItem}>
                  <span className={styles.featureCheck}><IconCheck /></span>
                  <span>{f}</span>
                </div>
              ))}
            </div>
          )}

          {details.warranty && (
            <div className={styles.warrantyRow}>
              <span className={styles.warrantyLabel}>{lang === "al" ? "Garancia" : "Warranty"}:</span>
              <span className={styles.warrantyVal}>{details.warranty}</span>
            </div>
          )}

          <div className={styles.cta}>
            <a href="tel:+355684083950" className={styles.ctaBtnPrimary}>
              <IconPhone />
              {lang === "al" ? "Na kontaktoni për çmim" : "Contact us for price"}
            </a>
            <a href="mailto:info@2apharma.al" className={styles.ctaBtnOutline}>
              <IconMail />
              {lang === "al" ? "Dërgo email" : "Send email"}
            </a>
          </div>
        </div>
      </div>

      {/* Specs */}
      {details.specs && (
        <div className={styles.specsSection}>
          <h2 className={styles.specsTitle}>
            {lang === "al" ? "Specifikimet teknike" : "Technical specifications"}
          </h2>
          <div className={styles.specsGrid}>
            {details.specs.map((s, i) => {
              const [label, value] = s.split(": ");
              return (
                <div key={i} className={styles.specRow}>
                  <span className={styles.specLabel}>{label}</span>
                  <span className={styles.specValue}>{value}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Related */}
      {related.length > 0 && (
        <div className={styles.relatedSection}>
          <h2 className={styles.relatedTitle}>
            {lang === "al" ? "Produkte të ngjashme" : "Related products"}
          </h2>
          <div className={styles.relatedGrid}>
            {related.map(p => (
              <Link key={p.id} to={`/products/${p.id}`} className={styles.relatedCard}>
                <div className={`${styles.relatedImg} ${styles[`img_${p.stock}`]}`}>
                  {p.image
                    ? <img src={p.image} alt="" style={{width:"100%",height:"100%",objectFit:"cover"}} />
                    : <span>{p.icon}</span>
                  }
                </div>
                <div className={styles.relatedBody}>
                  <div className={styles.relatedName}>{lang === "al" ? p.nameAl : p.name}</div>
                  <span className={`${styles.relatedBadge} ${styles[`badge_${p.stock}`]}`}>
                    {tx.stock[p.stock]}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Back */}
      <div className={styles.backWrap}>
        <button className={styles.backBtn} onClick={() => navigate(-1)}>
          <IconArrowLeft />
          {lang === "al" ? "Kthehu" : "Go back"}
        </button>
      </div>

    </div>
  );
}