import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"
// https://vite.dev/config/
import path from 'path'

//to set default path for imports in vite.config.js, you can use the resolve.alias option. This allows you to define custom aliases for your import paths, making it easier to manage and organize your codebase. Here's an example of how to set up a default path for imports:
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
