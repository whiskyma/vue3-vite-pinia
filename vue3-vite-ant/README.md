# vue3-vite-pwa

如果说项目需要配置pwa(离线缓存机制),则需要安装以下组件依赖。

1. [vite-plugin-pwa](https://blog.51cto.com/u_12603214/6155909)
2. [workbox-window](https://cloud.tencent.com/developer/ask/sof/1290315)

安装步骤如下：

```sh
pnpm install vite-plugin-pwa --save-dev

pnpm install workbox-window --save-dev
```

### 配置如下图所示

![Pandao editor.md](https://raw.githubusercontent.com/whiskyma/vue3-vite-pinia/main/vue3-vite-pwa/public/images/1.png 'Pandao editor.md')

#### 1、vite.config.ts 文件配置如下

```sh
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      manifest: {
        name: 'pwa', // 安装应用后显示的应用名
        description: 'pwa',
        theme_color: '#ffffff',
        // 至少配置一个图标
        icons: [
          {
            // 注意如果应用不是部署在站点根目录则需要相对路径，图片文件放在项目/public/pwa/192x192.png
            src: '/public/pwa/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/public/pwa/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      registerType: 'autoUpdate',
      workbox: {
        // 缓存匹配所需的静态资源
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
      devOptions: {
        enabled: true
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
```

#### 2、main.ts 文件配置如下

```sh
import { registerSW } from 'virtual:pwa-register'
const updateSW = registerSW({
  onNeedRefresh() {
    console.log(1)
  },
  onOfflineReady() {
    console.log(2)
  }
})
updateSW()
```

#### 3、配置别名：alias----[原文链接](https://blog.csdn.net/weixin_44692055/article/details/126196759)

1. vite.config.ts配置如下：

```sh
resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@comp': resolve(__dirname, 'src/components'),
      '@assets': resolve(__dirname, 'src/components/assets'),
      '@img': resolve(__dirname, 'src/components/assets/img'),
      '@styl': resolve(__dirname, 'src/components/assets/styl'),
      '@views': resolve(__dirname, 'src/views'),
      '@router': resolve(__dirname, 'src/router'),
      // '@store': resolve(__dirname, 'src/store'),
    },
    extensions: ['.ts', '.js', '.mjs', '.jsx', '.tsx', '.json', '.vue'], //省略扩展名
  },
```

2. tsconfig.app.json或者是tsconfig.json

```sh
"baseUrl": ".",
"paths": {
    "@/*": ["./src/*"],
    "@comp/*": ["./src/components/*"],
    "@assets/*": ["./src/components/assets/*"],
    "@img/*": ["./src/components/assets/img/*"],
    "@styl/*": ["./src/components/assets/styl/*"],
    "@views/*": ["./src/views/*"],
    "@router/*": ["./src/router/*"]
}
```

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

```

```
