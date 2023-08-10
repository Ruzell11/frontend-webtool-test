import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
   server: {
    proxy: {
      '/booking_hub': {
        target: 'http://127.0.0.1:8000', // Replace with your backend API server URL
        changeOrigin: true,
      },
    },
  },
})
