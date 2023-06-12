import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
   rollupOptions: {
    output: {
      manualChunks(id) {
        if (id.indexOf('/node_modules/') !== -1) {
          return id.toString().split('/node_modules/')[1].split('/')[0].toString();
        }
      },
    },
    preserveSymlinks: true // 将硬链接转换为常规文件
   }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    }
  }
})
