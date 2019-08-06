使用`npm install info-table --save` 然后
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
# document

### Attritube
|  参数 |  说明  | 类型 | 可选值 | 默认值 |  
| :----:   | :----:  | :----:  | :----:  | :----:  |
| tableData | 取值对象数组 （对象格式见下表） | Array  | --  | [ ]  |
|  valueStyle | 数据格的样式  | Object  | --  |  { }  |
|  wrapperStyle | wrapper的样式  | Object  | --  | { } |
|  nameStyle | 名称格的样式  | Object  | --  |  { }  |
|  num | 每行数据的条数  | number  | --  |  1  |
|  dataValue | 取数据值的对象  | Object  | --  |  { }  |

### 取值对象格式
|  参数 |  说明  | 类型 | 可选值 | 默认值 |  
| :----:   | :----:  | :----:  | :----:  | :----:  |
| col | 当前数据所占数据几个 | number  | --  | 1 |
|  num | 每行数据的条数  | number  | --  |  1  |
|  format | 格式化数据格显示内容  | function  | --  |  function （callValue:any, colObj:Object, dataValue:Object） |
|  key | slot的name值和取值是的key  |  String  | --  | -- |
| required | 是否必选  | Boolean  | true、false  |  false  |
| ifShow | 是否显示当前  | Boolean  | Boolean 或 function （参数同format） |  --  |
| style | 当前单元格样式包含名字和value  | Boolean  | -- | --|

### format
- 可以返回html字符串

