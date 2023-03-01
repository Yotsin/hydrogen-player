import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), UnoCSS()],
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, './src') },

    ],
    extensions: ['.ts', '.js'],
  },
  define: {
    'process.env': {},
  },
})
