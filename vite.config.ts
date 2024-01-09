import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/react-study/",
  resolve: {
    alias: [
      { find: "@src", replacement: path.resolve(__dirname, "src") },
      { find: "@pages", replacement: path.resolve(__dirname, "src/pages") },
      {
        find: "@components",
        replacement: path.resolve(__dirname, "src/components")
      },
      {
        find: "@styles",
        replacement: path.resolve(__dirname, "src/assets/styles")
      },
      { find: "@store", replacement: path.resolve(__dirname, "src/store/") },
      { find: "@data", replacement: path.resolve(__dirname, "src/data") }
    ]
  }
});
