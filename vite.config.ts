import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({ registerType: 'autoUpdate' })
  ],
  // server: {
  //   port: 3000,
  //   proxy: {
  //     '/getActualBalance': {
  //       target: 'http://bun-burn-env.eba-ftyx2m3h.us-east-1.elasticbeanstalk.com',
  //       changeOrigin: true,

  //     },
  //     '/getProviders': {
  //       target: 'http://bun-burn-env.eba-ftyx2m3h.us-east-1.elasticbeanstalk.com',
  //       changeOrigin: true
  //     },
  //   },
  // },
  

});

