import { Routes, Route } from "react-router-dom";
import Layout from "../src/assets/components/layout/Layout.jsx";
import HomePage from "../src/assets/components/pages/HomePage.jsx";
import ProductsPage from "../src/assets/components/pages/ProductsPage.jsx";
import ProductDetailPage from "../src/assets/components/pages/ProductDetailPage.jsx";
import AboutPage from "../src/assets/components/pages/AboutPage.jsx";
import PartnersPage from "../src/assets/components/pages/PartnersPage.jsx";
import ContactPage from "../src/assets/components/pages/ContactPage.jsx";
import {APIProvider} from '@vis.gl/react-google-maps';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="products/:id" element={<ProductDetailPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="partners" element={<PartnersPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}