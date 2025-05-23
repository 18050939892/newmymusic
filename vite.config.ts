import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vite.dev/config/

export default defineConfig({
  plugins: [react()],
    base: './', // 确保相对路径引用
    build: {
        outDir: 'dist'
    }
})
