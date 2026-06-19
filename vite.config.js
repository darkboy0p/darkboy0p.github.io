import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Just '/' for user site (darkboy0p.github.io)
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})