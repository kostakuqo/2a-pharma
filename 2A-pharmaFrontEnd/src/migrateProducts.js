import { db } from "./firebase.js";
import { collection, addDoc } from "firebase/firestore";
import { PRODUCTS, CATEGORIES, PARTNERS } from "./assets/data/products.js";

async function migrate() {
  console.log("🚀 Începe migrarea...");

  for (const product of PRODUCTS) {
    await addDoc(collection(db, "products"), {
      name_en:     product.name,
      name_al:     product.nameAl || "",
      name_it:     product.nameIt || "",
      desc_en:     product.description || "",
      desc_al:     product.descriptionAl || "",
      desc_it:     product.descriptionIt || "",
      category_en: product.category || "",
      category_al: product.categoryAl || "",
      category_it: product.categoryIt || "",
      stock:       product.stock || "in",
      icon:        product.icon || "",
      image_url:   product.image || "",
    });
    console.log(`✅ Produs adăugat: ${product.name}`);
  }

  for (const cat of CATEGORIES) {
    if (cat === "All") continue;
    await addDoc(collection(db, "categories"), { name_en: cat });
    console.log(`✅ Categorie: ${cat}`);
  }

  for (const partner of PARTNERS) {
    await addDoc(collection(db, "partners"), { name: partner.name });
    console.log(`✅ Partener: ${partner.name}`);
  }

  console.log("🎉 Migrare completă!");
}

migrate();