import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import lightningcss from "vite-plugin-lightningcss";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    lightningcss({
      browserslist: "last 2 versions",
    }),
  ],
})
