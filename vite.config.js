import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ghPages } from "vite-plugin-gh-pages";

export default defineConfig({
  base: "/personal-portfolio-ui/",

  plugins: [react(), ghPages()],
});
