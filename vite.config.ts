import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/zenquotes': {
        target: 'https://zenquotes.io',
        changeOrigin: true,
        rewrite: (path) => path.replace('/api/zenquotes', '/api/random'),
      },
    },
  },
})
