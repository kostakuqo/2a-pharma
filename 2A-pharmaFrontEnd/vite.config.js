import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/2a-pharma/", // 🔥 IMPORTANT pentru GitHub Pages
  plugins: [react()],
  server: {
    port: 5173,
  },
  build: {
    outDir: "dist",
  },
});