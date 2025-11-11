import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Allow any preview host from the sandbox environment
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
    // Accept all hosts to avoid blocking in ephemeral preview URLs
    allowedHosts: true,
  }
})
