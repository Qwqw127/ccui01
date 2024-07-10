import Theme from 'vitepress/theme';
import './styles/index.scss';
// import 'vitepress-theme-demoblock/theme/styles/index.css';
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import { useComponents } from "./useComponents";
// 主要变化是这行代码
import vue_ui from '../../../ui/vue-ccui';

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(vue_ui);
    useComponents(app);
  }
};
