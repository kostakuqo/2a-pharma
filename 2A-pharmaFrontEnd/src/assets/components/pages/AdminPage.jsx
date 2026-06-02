import { useState, useEffect } from "react";
import { auth, db } from "../../../../src/firebase.js";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen, faGear } from "@fortawesome/free-solid-svg-icons";
import styles from "./AdminPage.module.css";



async function uploadImage(file) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "2a-pharma-upload");

  const res = await fetch(
    "https://api.cloudinary.com/v1_1/diwmjt7aa/image/upload",
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await res.json();
  return data.secure_url;
}

export default function AdminPage() {
  const [imageFile, setImageFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editProduct, setEditProduct] = useState(null);

  const emptyForm = {
    name_en: "", name_al: "", name_it: "",
    desc_en: "", desc_al: "", desc_it: "",
    category_en: "", category_al: "", category_it: "",
    stock: "in", icon: "", image_url: ""
  };

  const [form, setForm] = useState(emptyForm);

  // Kontrollon nëse përdoruesi është i loguar
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, u => {
      if (u) setUser(u);
      else navigate("/login");
    });
    return () => unsub();
  }, []);

  // Ngarkon produktet
  useEffect(() => {
    if (user) loadProducts();
  }, [user]);

  async function loadProducts() {
    setLoading(true);
    const snap = await getDocs(collection(db, "products"));
    setProducts(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    setLoading(false);
  }

  async function handleSave() {
    setUploading(true);

    let imageUrl = form.image_url;

    // dacă utilizatorul a selectat o poză nouă
    if (imageFile) {
      imageUrl = await uploadImage(imageFile);
    }

    const finalData = {
      ...form,
      image_url: imageUrl,
    };

    if (editProduct) {
      await updateDoc(doc(db, "products", editProduct.id), finalData);
    } else {
      await addDoc(collection(db, "products"), finalData);
    }

    setUploading(false);
    setShowForm(false);
    setEditProduct(null);
    setForm(emptyForm);
    setImageFile(null);
    loadProducts();
  }

  async function handleDelete(id) {
    if (!confirm("A je i sigurt që do ta fshish produktin?")) return;
    await deleteDoc(doc(db, "products", id));
    loadProducts();
  }

  function handleEdit(product) {
    setEditProduct(product);
    setForm(product);
    setShowForm(true);
  }

  async function handleLogout() {
    await signOut(auth);
    navigate("/login");
  }

  if (loading) return <div className={styles.loading}>Duke u ngarkuar...</div>;

  return (
    <div className={styles.page}>

      {/* Header */}
      <div className={styles.header}>
        <h1 className={styles.title}>Paneli Admin — 2A Pharma</h1>
        <div className={styles.headerRight}>
          <span className={styles.userEmail}>{user?.email}</span>
          <button className={styles.logoutBtn} onClick={handleLogout}>
            Dil (Logout)
          </button>
        </div>
      </div>

      {/* Statistika */}
      <div className={styles.stats}>
        <div className={styles.statCard}>
          <div className={styles.statNum}>{products.length}</div>
          <div className={styles.statLbl}>Produkte gjithsej</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statNum}>{products.filter(p => p.stock === "in").length}</div>
          <div className={styles.statLbl}>Në stok</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statNum}>{products.filter(p => p.stock === "out").length}</div>
          <div className={styles.statLbl}>Pa stok</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statNum}>{products.filter(p => p.stock === "low").length}</div>
          <div className={styles.statLbl}>Stok i ulët</div>
        </div>
      </div>

      {/* Butoni shto */}
      <div className={styles.toolbar}>
        <h2 className={styles.subtitle}>Produktet</h2>
        <button
          className={styles.addBtn}
          onClick={() => {
            setShowForm(true);
            setEditProduct(null);
            setForm(emptyForm);
          }}
        >
          + Shto produkt
        </button>
      </div>

      {/* Forma shto / edito */}
      {showForm && (
        <div className={styles.formCard}>
          <h3>{editProduct ? "Ndrysho produktin" : "Produkt i ri"}</h3>

          <div className={styles.formGrid}>

            <div className={styles.formGroup}>
              <label>Emri EN</label>
              <input value={form.name_en} onChange={e => setForm({ ...form, name_en: e.target.value })} />
            </div>

            <div className={styles.formGroup}>
              <label>Emri AL</label>
              <input value={form.name_al} onChange={e => setForm({ ...form, name_al: e.target.value })} />
            </div>

            <div className={styles.formGroup}>
              <label>Emri IT</label>
              <input value={form.name_it} onChange={e => setForm({ ...form, name_it: e.target.value })} />
            </div>

            <div className={styles.formGroup}>
              <label>Kategoria EN</label>
              <input value={form.category_en} onChange={e => setForm({ ...form, category_en: e.target.value })} />
            </div>

            <div className={styles.formGroup}>
              <label>Kategoria AL</label>
              <input value={form.category_al} onChange={e => setForm({ ...form, category_al: e.target.value })} />
            </div>

            <div className={styles.formGroup}>
              <label>Kategoria IT</label>
              <input value={form.category_it} onChange={e => setForm({ ...form, category_it: e.target.value })} />
            </div>

            <div className={styles.formGroup}>
              <label>Përshkrimi EN</label>
              <textarea value={form.desc_en} onChange={e => setForm({ ...form, desc_en: e.target.value })} />
            </div>

            <div className={styles.formGroup}>
              <label>Përshkrimi AL</label>
              <textarea value={form.desc_al} onChange={e => setForm({ ...form, desc_al: e.target.value })} />
            </div>

            <div className={styles.formGroup}>
              <label>Përshkrimi IT</label>
              <textarea value={form.desc_it} onChange={e => setForm({ ...form, desc_it: e.target.value })} />
            </div>

            <div className={styles.formGroup}>
              <label>Stoku</label>
              <select value={form.stock} onChange={e => setForm({ ...form, stock: e.target.value })}>
                <option value="in">Në stok</option>
                <option value="out">Pa stok</option>
                <option value="low">Stok i ulët</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label>Ikona (emoji)</label>
              <input value={form.icon} onChange={e => setForm({ ...form, icon: e.target.value })} />
            </div>

            <div className={styles.formGroup}>
              <label>Imagine</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImageFile(e.target.files[0])}
              />
            </div>

          </div>

          <div className={styles.formActions}>
            <button className={styles.saveBtn} onClick={handleSave}>
              ✅ {editProduct ? "Ruaj ndryshimet" : "Shto produkt"}
            </button>
            <button className={styles.cancelBtn} onClick={() => { setShowForm(false); setEditProduct(null); }}>
              ✖️ Anulo
            </button>
          </div>
        </div>
      )}

      {/* Tabela */}
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Ikona</th>
              <th>Emri</th>
              <th>Kategoria</th>
              <th>Stoku</th>
              <th>Veprimet</th>
            </tr>
          </thead>

          <tbody>
            {products.map(p => (
              <tr key={p.id}>
                <td className={styles.iconCell}>{p.icon}</td>
                <td className={styles.productName}>{p.name_en}</td>
                <td className={styles.productCat}>{p.category_en}</td>
                <td>
                  <span className={`${styles.badge} ${styles[`badge_${p.stock}`]}`}>
                    {p.stock === "in" ? "Në stok" : p.stock === "out" ? "Pa stok" : "Stok i ulët"}
                  </span>
                </td>
                <td>
                  <div className={styles.actions}>
                    <button
                      className={styles.editBtn}
                      onClick={() => handleEdit(p)}
                      title="Modifiko"
                    >
                      <FontAwesomeIcon icon={faGear} />
                      <span className={styles.btnText}>Modifiko</span>
                    </button>

                    <button
                      className={styles.deleteBtn}
                      onClick={() => handleDelete(p.id)}
                      title="Fshi"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                      <span className={styles.btnText}>Fshi</span>
                    </button>

                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div >
  );
}