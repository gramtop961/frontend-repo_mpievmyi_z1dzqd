import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
    allowedHosts: [
      'ta-01k9rm8cb78heg0343fcnqhzxv-3000.wo-zok5aqqjsmublsr8ivc09mr0c.w.modal.host'
    ]
  }
})
