import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  server: {
    port: 3001,
    proxy: {
      '/f': {
        target: 'http://117.50.117.110:9999/f/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/f/, '')
      }
    }
  },
  resolve: {
    alias: {
      // '~': path.resolve(__dirname, './'),
      '@': path.resolve(__dirname, 'src')
    }
  },
})