import path from 'path'
/// <reference types="vitest" />
import { defineConfig } from 'vite'

export default defineConfig({
  root: path.resolve(__dirname),
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src')
    }
  },
  test: {
    setupFiles: path.resolve(__dirname, 'vitest.setup.js'),
    environment: 'jsdom',
    globals: true
  }
})
