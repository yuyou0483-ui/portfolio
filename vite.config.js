import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // GitHub Pages 部署在子目录（https://<user>.github.io/<repo>/），
  // 构建产物必须用相对路径，否则 /assets/... 会指向域名根目录导致 404。
  // 本地 dev 仍走根路径，不受影响。
  base: process.env.NODE_ENV === 'production' ? './' : '/',
  server: {
    host: true,
    port: 5174,
    open: false,
  },
  preview: {
    host: true,
    port: 4173,
    // 内网穿透域名（loca.lt 每次随机子域）会被 Vite 的 host 校验拦下，这里整体放行。
    allowedHosts: ['.loca.lt', '.lhr.life', '.trycloudflare.com', '.ngrok-free.app'],
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    // public/videos 里的 mp4 是只读文件，构建时清空 dist 会触发删除失败。
    // 关闭清空后重建不再报错（旧 hash 资源残留无害，如需彻底清空可手动删除 dist）。
    emptyOutDir: false,
  },
});
