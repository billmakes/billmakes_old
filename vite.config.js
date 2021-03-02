import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import json from '@rollup/plugin-json'
// import builtins from 'rollup-plugin-node-builtins'
const path = require('path')
import mdPlugin from 'vite-plugin-markdown'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '/@': path.resolve(__dirname, './src')
    }
  },
  plugins: [vue(), mdPlugin({ mode: 'html' })]
  // build: {
  //   rollupOptions: {
  //     plugins: [json(), builtins()]
  //   }
  // }
})
