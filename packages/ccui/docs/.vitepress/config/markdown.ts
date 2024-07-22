import { blockPlugin } from '../plugins/block-plugin';
import { renderPlugin, codePlugin } from 'vitepress-theme-demoblock';

const options = { cssPreprocessor: 'scss' };

// 组件代码展示高亮
const markdown = {
  // 需要在markdown的配置中开启，标题
  headers:{
    level:[1,2,3,4,5,6]
  },
  config: (md) => {
    md.use((curMd) => {
      curMd.use(blockPlugin, options);
      curMd.use(codePlugin, options);
      curMd.use(renderPlugin, options);
    });
  }
};
export default markdown;
