## 组件说明
 * 引入方法
   import picUp from 'components/picUp.vue'

    export default {
        components: {
            picUp
        }
    }
 * 用法
   > <picUp @picUp="picUp" @cleanImgUrl="cleanImgUrl"></picUp>
 * 操作
   > 在需要的页面引入--关注数据imgUrl的值变化
 * API
   > picUp: 接收上传图片返回的url
   > cleanImgUrl: 清除上传图片返回的url
