import path from 'path'
/// <reference types="vitest" />
import { defineConfig } from 'vite'

console.log(path.resolve(__dirname, 'src'))

export default defineConfig({
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src')
    }
  },
  test: {
    setupFiles: path.resolve(__dirname, 'setup.js'),
    environment: 'jsdom',
    globals: true,
    root: path.resolve(__dirname)
  }
})

// const config = {
//   root: path.resolve(__dirname),
//   resolve: {
//     alias: {
//       '~': path.resolve(__dirname, '..', 'src')
//     }
//   }
// }
