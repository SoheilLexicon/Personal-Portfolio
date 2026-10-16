import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Relative URLs make the static build work on GitHub Pages project paths.
export default defineConfig({
  plugins: [react()],
  base: './',
})
