import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"https://juanlibares.github.io/portfolio",
  plugins: [react()],
})
