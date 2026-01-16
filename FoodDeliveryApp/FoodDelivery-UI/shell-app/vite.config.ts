import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "shellApp",
      remotes: {
        userApp: "http://localhost:5001/assets/remoteEntry.js",
        orderApp: "http://localhost:5002/assets/remoteEntry.js",
        restaurantApp: "http://localhost:5003/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
});
