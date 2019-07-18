## 组件 
### 参数
#### arrImage: Arrey[{src: 'xxx'}]用来传图片
#### dataText: Object{plateNumber:'车牌号'，carColor：'车牌颜色', terminalName：'停车楼'，tsStr：'上传时间', content: '描述'} 文字标题
#### newIndex: Boolean ：true || false控制弹窗显示隐藏
### 实例方式
+ el-dialogtitle="标题":visible.sync="dialogVisible"width="30%":before-close="handleClose" center>
+ dialog-img :arrImage="dataImg" :dataText="dataText" :newIndex='dialogVisible'>
+ /dialog-img>
+ /el-dialog>
          