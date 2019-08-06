
<template>
    <div :id="uuid" style="width:100%; height:100%;"></div>
</template>

<script>
import echarts from "echarts";
import uuid from 'uuid/v1'

export default {
    name: "zBarChart",
    props: {
        showLegend: Boolean,
        data: Object,
        xName: {
            type: Array,
            default: () => []
        },
        stack: {
            type: Boolean,
            default: false
        },
        barGap: {
            type: String,
            default: '0'
        },
        barWidth: {
            type: Number,
            default: 22
        },
        bgColor: {
            type: Array,
            default: () => []
        },
        color: {
            type: Array,
            default: () =>  ["#01ACE6", "#FFA924"]
        },
        showSplitLine: {
            type: Boolean,
            default: true
        },
        splitLineType: {
            type: String,
            default: 'solid'
        },
        splitLineColor: {
            type: String,
            default: '#eee'
        },
        showYLabel: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            uuid: ''
        }
    },
    methods: {
        setChart() {
            let myChart = echarts.init(
                document.getElementById(this.uuid)
            );
            let series = [];
            let legend = [];
            Object.keys(this.data).forEach(key => {
                series.push({
                    name: key,
                    data: this.data[key],
                    type: "bar",
                    stack: this.stack,
                    barWidth: this.barWidth,
                    barGap: this.barGap
                });
                legend.push(key);
            });
            myChart.setOption({
                color: this.color,
                tooltip: {
                    show: true,
                    trigger: "axis",
                    axisPointer: {
                        type: "shadow"
                    },
                    textStyle: {
                        fontSize: 25
                    }
                },
                grid: {
                    top: 30,
                    left: 50,
                    right: 30
                },
                legend: {
                    show: this.showLegend,
                    top: 0,
                    right: 40,
                    itemWidth: 16,
                    itemHeight: 12,
                    itemGap: 40,
                    data: legend,
                    textStyle: {
                        color: "#1F2D3D",
                        fontStyle: "PingFangSC-Medium",
                        fontSize: "13"
                    }
                },
                xAxis: {
                    data: this.xName,
                    axisLabel: {
                        color: "#999",
                        fontSize: "12",
                        interval: 0
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    }
                },
                yAxis: {
                    type: "value",
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: this.showYLabel,
                        color: "#999",
                        fontSize: "12",
                        interval: 0
                    },
                    splitLine: {
                        show: this.showSplitLine,
                        lineStyle: {
                            color: this.splitLineColor,
                            type: this.splitLineType
                        }
                    },
                    splitArea: {
                        show: this.bgColor.length,
                        areaStyle: {
                            color: this.bgColor
                        }
                    }
                },
                series
            });
        }
    },
    watch: {
        data: {
            handler() {
                this.setChart();
            },
            deep: true
        }
    },
    created() {
        this.uuid = uuid()
    },
    mounted() {
        this.setChart();
    }
};
</script>
