# 时间控件

> 时间手动输入并格式化

## 使用
```javascript  
// 引入  
import controlTime from '@/components/controlTime'

// 例子  
<template>
  <div class="helloBox">
    <controlTime @getTime="getTime"
                 :initTime="initTime"/>
  </div>
</template>

```
```javascript
 依赖  
 在index.html按照顺序引入 
  <link rel="stylesheet" href="/static/jquery.datetimepicker.min.css">
  <script src="/static/jquery.min.js"></script>
  <script src="/static/jquery-mousewheel.js"></script>
  <script src="/static/jquery.datetimepicker.full.min.js"></script>
  
```
## 参数
|  参数 |  说明  | 类型 | 默认值 |  
| :----:   | :----:  | :----:  | :----:  |  
|  initTime | 初始化时间  | String  | --  | 可不传（默认当前时间） |

## 方法
|  参数 | 说明 | 回调 |   
| :----:   | :----:  | :----:  |  
| getTime | 获取选中的时间 | funtion(time) |

