## 弹框点击切换图片组件  

> 实现点击小图放大切换显示 并且可以传入标题及内容


1. 在 `<script></script>` 标签导入组件,并注册
```javascript
    import dialogChange from 'components/dialogChange'

    export default {
        components: {
            dialogChange
        }
    }
```
2. 在  `<template></template>` 标签加入组件
```html
  <div class="dialogWrapper">
    <!-- 这里添加了部分属性 -->
    <el-dialog
        title="弹框标题"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose"
        center>
        <dialog-img :arrImage="dataImg" :dataText="dataText" :newIndex='dialogVisible'></dialog-img>
        </el-dialog>
  </div>
```
例子中加入了部分属性，详细查看文档。

# document


### Attributes 

|  参数 |  说明  | 类型 | 可选值 | 默认值 |  
| :----:   | :----:  | :----:  | :----:  | :----:  |
|  arrImage | 图片数组  | Array  | --  | [ ]  |
|  dataText | 标题及内容  | Object  | --  | { plateNumber：车牌号，carColor：车牌颜色，terminalName：停车区，tsTime：时间，content：内容 } |
|  newIndex | 控制弹框显示隐藏  | Boolean  | -1，1  | -- |

### Methods

| 方法 |  说明  | 参数 |
| :----:   | :----:  | :----:  |

### Events

|  参数 |  说明  | 回调参数 |
| :----:   | :----:  | :----:  |
| leftClick   | 左轮播事件  | Function (pos: number) |
| rightClick   | 右轮播事件  | Function (pos: number) |

          