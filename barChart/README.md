## 简介
基于ECharts包装的柱状图组件。

## 使用
~~~
// 根据路径引入
import zBarChart from '${path}/barChart'
// 安装后可全局使用
vue.use(zBarChart)

// 示例
<template>
    <div style="width:800px;height:300px;">
        <z-bar-chart :data="data" :xName="xName" showLegend></z-bar-chart>
    </div>
</template>

<script>
export default {
    name: "example",
    data() {
        return {
            xName: ["1月", "2月", "3月", "4月", "5月"],
            data: {
                电子支付: [5, 12, 56, 22, 41],
                现金: [9, 20, 36, 28, 60]
            }
        };
    }
};
</script>
~~~

## 参数属性
|参数|说明|类型|默认值|示例|
|:---:|:---:|:---:|:---:|:---:|
|data|图表数据,对象的key将作为图例的name;对象的value以数组形式承载一组数据|Object|-|{'电子支付':[56, 85, 96, 26], '现金支付': [36, 56, 66, 12]}|
|showLegend|是否显示图例|Boolean|false|-|
|xName|X轴坐标名称|Array|-|['1月', '2月', '3月', '4月']|
|stack|数据是否堆叠|Boolean|false|-|
|barWidth|柱的宽度(单位为px)|Number|22|-|
|barGap|不同系列的柱间距离，为百分比（如 '30%'，表示柱子宽度的 30%）,'-100%'则柱子重叠|String|'0'|'50%'|
|bgColor|背景分割区的颜色,将循环数组内的颜色|Array| [] | ['#FAFAFC'] |
|color|柱子的颜色|Array|["#01ACE6", "#FFA924"]蓝色和橘色|-|
|showSplitLine|是否显示分割线|Boolean|true|-|
|splitLineType|分割线类型|String (solid/dashed/dotted可选)|'solid'|-|
|splitLineColor|分割线颜色|String|'#eee'|-|
|showYLabel|是否显示y轴坐标名称|Boolean|true|-|



