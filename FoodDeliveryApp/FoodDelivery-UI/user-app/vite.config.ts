import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "userApp",
      filename: "remoteEntry.js",
      exposes: {
        "./CustomerDashboard":
          "./src/components/customer/CustomerDashboard.tsx",
        "./CustomerOrders": "./src/components/customer/CustomerOrders.tsx",
        "./UserProfile": "./src/components/user/UserProfile.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 5001,
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
