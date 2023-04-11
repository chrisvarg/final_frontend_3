import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sass from "vite-plugin-sass";

const sassPluginOptions = {
  // Incluye los archivos .scss y .sass
  include: /\.scss$/,
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sass(sassPluginOptions)],
});
