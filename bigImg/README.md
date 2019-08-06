# 图片放大组件

> 实现图片的放大、缩小、拖拽

## 使用

```  javascript  

// 引入  
import bigImg from './bigImg'  

// 例子
  <div class="hello">  
    <div class="helloBox" @click="showBigImage(require('../assets/images/12.png'))"></div>  
    <bigImg :srcPath="url" v-if="isShow" @clickMask="isShow = false"/>  
  </div>

  
```
## 说明
> 本地图片需使用require  
> 线上图片，不用require
## 参数
| 参数  | 说明  | 类型  | 默认 |  
| :-: | :-: | :-: |  
| srcPath | 图片地址 | string | 必传 |