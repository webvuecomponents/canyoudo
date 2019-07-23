使用`npm install info-table --save` 安装 然后
可以全局注册
```javascript
import Vue from 'vue';
import InfoTable from 'info-table';
Vue.use(InfoTable);
```
或者组建内引用
```javascript
import InfoTable from 'info-table';
export default {
    components: {
        InfoTable
    }
}
```
```javascript
// tableData 数据来源 num 列数 nameStyle： 名称的样式对象
// valueStyle 对应值的样式对象
// wrapperStyle 外层包裹的样式对象
// 通过col属性合并单元格
// 使用 slot 来分发特定内容 数据项中使用key 来确定分发位置
// 数据 required 设置是否必选
// format 格式化数据 参数： 1. 对应的值 2.对应的行对象 3.取值对象
// dataValue 通过key 取值对象
/**
   * 示例
   * tableData: [{
          name: '处理结果',
          key: 'jiname', // 带有key 的 内容 需要分发
          required: true
        }], {
          name: '上报时间',
          value: '2019年12月12日 17:00',
          format: (dataObj) => { // dataObj 是当前对象
            return `<div style='color: red'>
                  ${dataObj.value}
            </div>`
          }
        },,
        {
          name: '状态',
          value: '1',
          html: `
            <div style='width:50px;line-height:20px;background: orangered;display:inline-block;color: white'>
              待处理
            </div>
          `
        }]
```