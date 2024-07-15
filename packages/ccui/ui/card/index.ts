import type { App } from 'vue';
import DCard from './src/card';

export * from './src/card-types';

export { DCard };

export default {
  title: 'DCard 卡片',
  category: '数据展示',
  status: '100%',
  install(app: App): void {
    // 设置了 as string 就不会被判断为组件了，或者将tsconf strict设置为false
    app.component(DCard.name, DCard);
  }
};
