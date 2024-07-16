import type { App } from 'vue';
import LoadingDirective from './src/loading-directive';

export { LoadingDirective };

export default {
  title: 'Loading 加载效果',
  category: '通用',
  status: undefined, // TODO: 组件若开发完成则填入"100%"，并删除该注释
  install(app: App): void {
    app.directive('Loading', LoadingDirective);
  }
};
