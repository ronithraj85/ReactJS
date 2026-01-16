import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "orderApp",
      filename: "remoteEntry.js",
      exposes: {
        "./OrderList": "./src/components/order/OrderList.tsx",
        "./OrderDetails": "./src/components/order/OrderDetails.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 5002,
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
