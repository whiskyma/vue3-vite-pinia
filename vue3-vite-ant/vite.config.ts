import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
    VitePWA({
      manifest: {
        name: '安装应用', // 安装应用后显示的应用名
        description: '这是一个应用',
        theme_color: '#ffffff',
        // 至少配置一个图标
        icons: [
          {
            // 注意如果应用不是部署在站点根目录则需要相对路径，图片文件放在项目/public/pwa/192x192.png
            src: '/public/pwa/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/public/pwa/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      registerType: 'autoUpdate',
      workbox: {
        // 缓存匹配所需的静态资源
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      },
      devOptions: {
        enabled: true,
      },
    }),
  ],

  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@comp': resolve(__dirname, 'src/components'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@img': resolve(__dirname, 'src/assets/img'),
      '@style': resolve(__dirname, 'src/assets/style'),
      '@views': resolve(__dirname, 'src/views'),
      '@router': resolve(__dirname, 'src/router'),
      '@store': resolve(__dirname, 'src/store'),
      '@js': resolve(__dirname, 'src/utils'),
    },
    extensions: ['.ts', '.js', '.mjs', '.jsx', '.tsx', '.json', '.vue', '.scss', '.styl'], //省略扩展名
  },
  server: {
    port: 2023,
    host: '0.0.0.0',
    open: false,
  },
})
