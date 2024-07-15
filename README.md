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

- 本地链接使用 pnpm link  
    ```pnpm link ..\ccui01\packages\ccui\build\  ```

### 完整引入
```ts
import {createApp} from 'vue'
import './style.css'
import App from './App.vue'

import ccui from 'vue3-ccui01'
import 'vue3-ccui01/style.css'

createApp(App).use(ccui).mount('#app')
```


## 特性
+ 生成types文件
  + 通过vue-tsc，配置tsconf文件自动生成
+ [生成：global.d.ts](https://juejin.cn/post/7152330397689315341#heading-10) 
  + 在Vue3 + Volar中，如果组件库存在global.d.ts，那么在使用组件的时候就会提示组件的属性。
