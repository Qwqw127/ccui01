// import Theme2 from 'vitepress/theme';
// 默认主题
import DefaultTheme from 'vitepress/theme'

// 将theme修改为自定义主题
import Theme from '../ccui-theme';
import './styles/index.scss';
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import { useComponents } from "./useComponents";
// 主要变化是这行代码
import vue_ui from '../../../ui/vue-ccui';

export default {
  // ...Theme2,
  ...Theme,
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册全局组件
    app.use(vue_ui);

    // 添加md组件预览
    useComponents(app);
  }
};
