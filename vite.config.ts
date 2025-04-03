import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";

export default defineConfig({
  plugins: [react(), tailwindcss(), TanStackRouterVite()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),

      routes: `${path.resolve(__dirname, "./src/routes/")}`,

      services: `${path.resolve(__dirname, "./src/services/")}`,

      utils: `${path.resolve(__dirname, "./src/utils/")}`,

      pages: `${path.resolve(__dirname, "./src/pages/")}`,
    },
  },
  define: { global: "window" },
});
