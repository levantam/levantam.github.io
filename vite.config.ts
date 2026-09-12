import { existsSync, renameSync } from "node:fs";
import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const viteHtmlEntry = path.resolve(__dirname, "index.vite.html");

export default defineConfig({
  plugins: [
    react(),
    {
      name: "rename-html-output",
      closeBundle() {
        const distDir = path.resolve(__dirname, "dist");
        const built = path.join(distDir, "index.vite.html");
        const target = path.join(distDir, "index.html");
        if (existsSync(built)) {
          renameSync(built, target);
        }
      },
    },
  ],
  base: "/",
  build: {
    rollupOptions: {
      input: viteHtmlEntry,
    },
  },
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
  json: { namedExports: true },
});
