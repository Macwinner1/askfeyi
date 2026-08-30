import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'node:url'

// fileURLToPath(new URL(...)) works on every Node that can run Vite.
// import.meta.dirname would be tidier but only exists from Node 20.11, and
// build platforms still default to 18, where it is silently undefined.
const srcDir = fileURLToPath(new URL('./src', import.meta.url))

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { '@': srcDir },
  },
})
