import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
  server: {
    allowedHosts: [
      '7487-2405-201-6811-a833-dd2f-540c-b290-b7e.ngrok-free.app'
    ]
  }
  
})
