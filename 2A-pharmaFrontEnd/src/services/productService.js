// src/services/productsService.js
import { db } from "../firebase"; 
import { collection, getDocs } from "firebase/firestore";

export async function fetchProducts() {
  const snap = await getDocs(collection(db, "products"));

  return snap.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}