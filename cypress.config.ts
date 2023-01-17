import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "w7gsgy",
  e2e: {
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}",
    baseUrl: "http://localhost:5173",
  },
});
