import { defineConfig } from 'vite';
import { MdTransformer } from './.vitepress/plugins/md-transformer';
import { resolve } from 'path';

// jsx 依赖
import vueJsx from '@vitejs/plugin-vue-jsx';
import svgLoader from 'vite-svg-loader';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      // { find: '@ccui/theme', replacement: resolve(__dirname, '../../ccui-theme/src') },
      {
        find: '@ccui/shared/components',
        replacement: resolve(__dirname, '../ui')
      },
      { find: '@ccui', replacement: resolve(__dirname, '../ui') },
      { find: 'vue-ccui', replacement: resolve(__dirname, '../ui') }
    ]
  },
  plugins: [vueJsx(), svgLoader(), MdTransformer()],
  optimizeDeps: {
    exclude: [
      'lodash-es',
      'mitt',
      'async-validator',
      'css-vars-ponyfill',
      'rxjs',
      '@vueuse/core',
      '@floating-ui/dom',
      'vue-router'
    ]
  },
  server: {
    fs: {
      strict: false
    }
  }
});
