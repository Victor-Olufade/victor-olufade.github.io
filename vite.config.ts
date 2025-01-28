import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// export default defineConfig({
//   base: '/your-repo-name/', // Add your repository name here
//   build: {
//     outDir: 'dist',
//   },
// });

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "victor-olufade.github.io",
  build: {
    outDir: "dist",
  },
});
