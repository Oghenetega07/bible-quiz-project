import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),

    VitePWA({
      registerType: "autoUpdate",

      workbox: {
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
      },

      manifest: {
        name: "Bible Quiz",
        short_name: "Bible Quiz",
        description: "A Bible quiz application",

        theme_color: "#173f35",
        background_color: "#f5f1e8",

        display: "standalone",
        orientation: "portrait",

        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});