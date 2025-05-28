import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()],
  server: {
    host: true, // Allows external devices to access
    cors: true, // Enables CORS
    strictPort: true, // Avoid port fallback
    origin: 'https://78b6-2405-201-c40d-d0db-84c3-8a9f-ac52-91a8.ngrok-free.app/',
    // ^ Set this to your actual ngrok URL if known
  }
})
