// import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue';
// import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue';

import Demo from '../demo/Demo.vue';
import DemoBlock from '../demo/DemoBlock.vue';

export const useComponents = (app) => {
  app.component('Demo', Demo);
  app.component('DemoBlock', DemoBlock);
};
