import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "ReactIconsax",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react"],
      output: {
        // Provide global variables to use in the UMD build
        // Add external deps here
        preserveModules: true,
        dir: "dist",
        preserveModulesRoot: "src",
        format: "esm",
        entryFileNames: ({ name: fileName }) => {
          return `${fileName}.js`;
        },
        globals: {
          react: "react",
        },
      },
    },
  },
  resolve: {
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
