import { useState } from "react";
import { useLang, t } from "../../hooks/useLang.jsx";
import styles from "./ContactPage.module.css";

export default function ContactPage() {
  const { lang } = useLang();
  const tx = t[lang];
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <div className="section-label">{tx.contact.label}</div>
        <h1 className={styles.pageTitle}>{tx.contact.title}</h1>
        <p className={styles.pageSub}>{tx.contact.sub}</p>
      </div>

      <div className={styles.grid}>
        {/* Info */}
        <div className={styles.info}>
          {[
            { icon: "📞", text: "+355 68 4083 950", href: "tel:+355684083950" },
            { icon: "📞", text: "+355 68 905 3225", href: "tel:+355689053225" },
            { icon: "✉️", text: "info@2apharma.al",  href: "mailto:info@2apharma.al" },
            { icon: "📍", text: "Tiranë, Shqipëri",  href: null },
            { icon: "🕐", text: tx.contact.hours,     href: null },
          ].map((item, i) => (
            <div key={i} className={styles.infoItem}>
              <span className={styles.infoIcon}>{item.icon}</span>
              {item.href
                ? <a href={item.href}>{item.text}</a>
                : <span>{item.text}</span>
              }
            </div>
          ))}
        </div>

        {/* Form */}
        <div className={styles.formWrap}>
          {sent ? (
            <div className={styles.successMsg}>
              <div className={styles.successIcon}>✓</div>
              <div className={styles.successTitle}>
                {lang === "al" ? "Mesazhi u dërgua!" : "Message sent!"}
              </div>
              <div className={styles.successSub}>
                {lang === "al"
                  ? "Do t'ju kontaktojmë sa më shpejt."
                  : "We will contact you as soon as possible."}
              </div>
              <button className={styles.resetBtn} onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", message: "" }); }}>
                {lang === "al" ? "Dërgo tjetër" : "Send another"}
              </button>
            </div>
          ) : (
            <form className={styles.form} onSubmit={submit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>{tx.contact.name}</label>
                  <input name="name" value={form.name} onChange={handle} required placeholder={tx.contact.name} />
                </div>
                <div className={styles.formGroup}>
                  <label>{tx.contact.email}</label>
                  <input name="email" type="email" value={form.email} onChange={handle} required placeholder={tx.contact.email} />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label>{tx.contact.phone}</label>
                <input name="phone" value={form.phone} onChange={handle} placeholder={tx.contact.phone} />
              </div>
              <div className={styles.formGroup}>
                <label>{tx.contact.message}</label>
                <textarea name="message" value={form.message} onChange={handle} required placeholder={tx.contact.message} rows={5} />
              </div>
              <button type="submit" className={styles.submitBtn}>{tx.contact.send}</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}