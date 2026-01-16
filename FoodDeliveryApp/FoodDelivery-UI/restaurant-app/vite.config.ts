import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "restaurantApp",
      filename: "remoteEntry.js",
      exposes: {
        "./OwnerDashboard": "./src/components/owner/OwnerDashboard.tsx",
        "./RestaurantProfile":
          "./src/components/restaurant/RestaurantProfile.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 5003,
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
