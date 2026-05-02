import { defineConfig } from 'vite'

export default defineConfig(({ command }) => ({
  base: command === 'serve' ? '/' : '/css3-practice-lab/',
  build: {
    outDir: 'dist'
  }
}))
