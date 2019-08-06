## 简介
一个多媒体画廊组件，实现全屏浏览媒体文件。
支持图片、视频和音频。
支持向前向后查看。

## 使用
~~~
// 根据路径引入
import zMediaViewer from '${path}/mediaViewer'
// 安装后可全局使用
vue.use(zMediaViewer)

// 示例
<template>
    <div class="img-list">
        <img :src="item.src" v-for="(item, index) in media" @click="checkImg(index)" :key="item.src">
    </div>
    <z-media-viewer :visible="visible" :media="media" @hide="visible = false" :current='current'></z-media-viewer>
</template>

<script>
export default {
    name: "example",
    data() {
        return {
            visible: false,
            current: 0,
            media: [
                {
                    src: require("./assets/1.jpg"),
                    title: "img1"
                },
                {
                    src: require("./assets/2.jpg"),
                    title: "img2",
                },
                {
                    src: require("./assets/3.jpg"),
                    title: "img3"
                },
                {
                    src: require("./assets/4.jpg"),
                    title: "img4"
                }
            ]
        };
    },
    methos: {
        checkImg(index) {
            this.current = index
            this.visible = true
        }
    }
};
</script>
~~~

## 属性
|参数|说明|类型|是否必须|默认值|
|:---:|:---:|:---:|:---:|:---:|
|media|需要显示的媒体对象数组(对象包含src和title属性)|Array|是|-|
|visible|媒体画廊的显示开关|Boolean|是|false|
|current|当前需显示的媒体的序号(从0开始)|Number|否|0|


## 事件
|名称|参数|说明|
|:---:|:---:|:---:|
|show|当前显示的媒体对象|显示画廊时触发|
|hide|当前显示的媒体对象|隐藏画廊时触发|
|change|切换后显示的媒体对象|切换媒体时触发|