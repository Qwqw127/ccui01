import type { App } from 'vue';
import DNotification from './src/notification';
import DNotificationService from './src/notification-service';
export * from './src/notification-types';

export { DNotification, DNotificationService };

export default {
  title: 'Notification 全局通知',
  category: '反馈',
  status: '100%',
  install(app: App): void {
    app.component(DNotification.name, DNotification);
    app.config.globalProperties.$notificationService = DNotificationService;
  }
};
