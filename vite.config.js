import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Change base to '/portfolio/' for GitHub Pages with repo name
// For Vercel/Netlify, keep base as '/'
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          motion: ['framer-motion'],
        },
      },
    },
  },
})
