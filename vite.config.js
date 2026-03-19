import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Allows building with the correct sub-path for GitHub Pages (e.g. /p121/).
  base: process.env.VITE_BASE || "/",
  plugins: [react()],
  server: {
    port: 3000
  }
});

