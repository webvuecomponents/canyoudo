<template>
  <div>
    <el-row>
      <el-col
        :span="!val.col ? 24 / num : 24 / num * val.col"
        v-for="(val, ind) in tableData"
        :key="ind"
        v-show='ifShow(val)'
      >
        <div
          class="wrapperS"
          :style="wrapperStyle"
          :class="{
         'no-bottom': ind < tableData.length - num,
         'no-right': ind != (tableData.length - 1) && (ind == 0 || (ind + 1) % num != 0)
         }"
        >
          <div class="colName" :style="handleStyle(val.style, nameStyle)" :title="val.name">
            <span v-if="val.required" class="required"></span>
            {{val.name}}
          </div>
          <div class="colValue" :style="handleStyle(val.style, valueStyle)" :title="val.value">
            <slot :name="val.key || 'default'">
              <div
                v-html="val.html || val.format&&val.format(val.value || dataValue[val.key], val, dataValue) || val.value || dataValue&&dataValue[val.key]"
              ></div>
            </slot>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
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
   */
export default {
  props: [
    "dataValue",
    "tableData",
    "num",
    "nameStyle",
    "valueStyle",
    "wrapperStyle"
  ],
  methods: {
    ifShow(val) {
      if (typeof val.ifShow == 'function') {
         return val.ifShow(val.value || this.dataValue[val.key], val, this.dataValue)
      } else if (typeof val.ifShow == 'boolean') {
        return val.ifShow
      }
      return true
    },
    handleStyle(valStyle, valueStyle) {
      if (valStyle && valueStyle) {
        return { ...valueStyle, ...valStyle };
      } else if (valStyle) {
        return valStyle;
      } else {
        return valueStyle || {};
      }
    }
  }
};
</script>
<style scoped>
.colName {
  width: 30%;
  float: left;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  text-align: right;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  background: #eee;
}
.colValue {
  line-height: 30px;
  width: 60%;
  float: left;
  height: 30px;
  font-size: 14px;
  text-align: left;
}
.wrapperS {
  overflow: hidden;
  border: 1px solid #ddd;
}
.no-bottom {
  border-bottom: 0;
}
.no-right {
  border-right: 0;
}
.required::before {
  content: "*";
  color: red;
}
</style>
