import type { App } from 'vue';
import DIcon from './src/icon';
import DIconGroup from './src/icon-group';

export * from './src/icon-types';

export { DIcon, DIconGroup };

export default {
  title: 'Icon 图标',
  category: '通用',
  status: '100%',
  install(app: App): void {
    app.component(DIcon.name, DIcon);
    app.component(DIconGroup.name, DIconGroup);
  }
};
