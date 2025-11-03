import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/plant-shop-app/',  // <-- set this to your repo name preceded and followed by '/'
  // other config...
})
