import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import mdPlugin from 'vite-plugin-markdown'

const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '/@': path.resolve(__dirname, './src')
    }
  },
  plugins: [vue(), mdPlugin({ mode: 'html' })]
})
