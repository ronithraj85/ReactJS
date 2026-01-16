import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "restaurantApp",
      filename: "remoteEntry.js",
      exposes: {
        "./RestaurantProfile":
          "./src/components/restaurant/RestaurantProfile.tsx",
        "./MenuManager": "./src/components/restaurant/MenuManager.tsx",
        "./OrderDashboard": "./src/components/restaurant/OrderDashboard.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
