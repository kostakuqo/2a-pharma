import { Outlet } from "react-router-dom";
import { LangProvider } from "../../hooks/useLang.jsx";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

export default function Layout() {
  return (
    <LangProvider>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </LangProvider>
  );
}