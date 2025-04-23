import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src", // Directly use the absolute path to the src directory
    },
  },
  server: {
    port: 5173, // Default port for Vite
  },
  build: {
    outDir: "build", // Define output directory for production builds
  },
});
