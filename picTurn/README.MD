## 图片轮播组件
- 实现左右轮播 并且可以在左右添加新图片  
1. 在 `<script></script>` 标签导入组件,并注册
```javascript
    import picCon from 'components/remoteInspection/'

    export default {
        components: {
            picCon
        }
    }
```
2. 在  `<template></template>` 标签加入组件
```html
  <div class="picWrapper">
    <!-- 这里添加了部分属性 -->
    <pic-con :pics='pics' 
             :curPos='curPos'
             :showDesc='showDesc || "uploadTime"'
             ref='pic'
             @leftClick='handleLeftClick'
             :direction='direction'
             @rightClick='handleRightClick'
             :imgStyle='imgStyle'></pic-con>
  </div>
```
例子中加入了部分属性，详细查看文档。

# document


#### Attributes 

|  参数 |  说明  | 类型 | 可选值 | 默认值 |
| :----:   | :----:  | :----:  | :----:  | :----:  |
|  pics | 图片数组  | Array  | --  | [ ]  |
|  curPos | 显示图片的位置  | Number  | --  | 0 |
|  imgStyle | 图片的样式  | Object  | --  | { } |
|  direction | 需要增加图片添加图片位置的标识  | Number  | -1，1  | -- |

#### Events

|  参数 |  说明  | 回调参数 |
| :----:   | :----:  | :----:  |
| leftClick   | 左轮播事件  | Function (pos: number) |
| rightClick   | 右轮播事件  | Function (pos: number) |
