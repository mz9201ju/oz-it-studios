import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/oz-studios/",   // <--- YOUR REPO NAME HERE
  build: {
    outDir: "dist",
  }
});
