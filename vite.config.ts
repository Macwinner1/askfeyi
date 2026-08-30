import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'node:url'

// fileURLToPath(new URL(...)) works on every Node that can run Vite.
// import.meta.dirname would be tidier but only exists from Node 20.11.
const srcDir = fileURLToPath(new URL('./src', import.meta.url))

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { '@': srcDir },
  },
  build: isSsrBuild
    ? {
        // scripts/prerender.mjs imports this by name. Without pinning it, any
        // plugin that changes output layout renames or relocates the entry and
        // the prerender step dies with ERR_MODULE_NOT_FOUND.
        rollupOptions: {
          output: { entryFileNames: 'entry-server.js' },
        },
      }
    : {},
}))
