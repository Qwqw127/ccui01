# 简介
## 快速开始
### 安装
```shell
# NPM
$ npm install vue3-ccui01 --save

# Yarn
$ yarn add vue3-ccui01

# pnpm
$ pnpm install vue3-ccui01
```

### 完整引入
```ts
import {createApp} from 'vue'
import './style.css'
import App from './App.vue'

import ccui from 'vue3-ccui01'
import 'vue3-ccui01/style.css'

createApp(App).use(ccui).mount('#app')
```


## todo
+ 迁移组件 测试用例 更新为 vitest
