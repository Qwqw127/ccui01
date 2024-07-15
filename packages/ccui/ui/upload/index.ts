import type { App } from 'vue';
import DUpload from './src/upload';
import fileDropDirective from './src/file-drop-directive';
export * from './src/upload-types';

export { DUpload, fileDropDirective };

export default {
  title: 'Upload 上传',
  category: '数据录入',
  status: '100%',
  install(app: App): void {
    app.directive('file-drop', fileDropDirective);
    app.component(DUpload.name, DUpload);
  }
};
