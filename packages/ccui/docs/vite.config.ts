import { defineConfig } from 'vite';
import { MdTransformer } from './.vitepress/plugins/md-transformer';

// jsx 依赖
import vueJsx from '@vitejs/plugin-vue-jsx';
import svgLoader from 'vite-svg-loader';

// https://vitejs.dev/config/
export default defineConfig({
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
  }
});
