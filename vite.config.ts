import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "robots.txt", "apple-touch-icon.png"],
      manifest: {
        name: "Vite PWA",
        short_name: "VitePWA",
        description: "Vite + React,TS Progressive Web App",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "/vite.svg",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/react.svg",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/spinner.svg",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
