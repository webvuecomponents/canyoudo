# slidever

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
## 底部组件说明
 * 引入方法
   > import引入
 * 用法
   > 页面引入改变相应的值即可
   
   > 示例：《slideVer :errMes="errMes" :bigImage="bigImage" :smallImage="smallImage" :topNum="topNum"></slideVer》
 * 操作
   > 在需要的页面引入--改变绑定值即可
   > npm install stylus --save-dev
 * Methods
   >
    顶部间距  | 左边间距  | touchstart | touchmove | touchend
    ---- | ----- | ------ | ------ | ------ |
    topNum  | leftNum | 开始滑动 | 连续滑动 | 滑动结束
 * Attention!!!
   > topNum是需要处理的这个是后端返回的小图y轴坐标
