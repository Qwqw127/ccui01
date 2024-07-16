import { blockPlugin } from '../plugins/block-plugin';
import { renderPlugin, codePlugin } from 'vitepress-theme-demoblock';

const options = { cssPreprocessor: 'scss' };

// 组件代码展示高亮
const markdown = {
  config: (md) => {
    md.use((curMd) => {
      curMd.use(blockPlugin, options);
      curMd.use(codePlugin, options);
      curMd.use(renderPlugin, options);
    });
  }
};
export default markdown;
