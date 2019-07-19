<template>
  <div class="footer">
    <div
      v-for="(item,index) of items"
      @click="$router.push(item.push)"
      :key="index"
    >
      <img
      :src="index === idx ? item.icon : item.iconSelect"
      alt="图片异常"
      />
      <p
      >
      {{item.name}}
      </p>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  props: ['idx'],
  data () {
    return {
      items: [
        {
          name: '首页',
          push: '/one',
          icon: require('./img/home.png'),
          iconSelect: require('./img/downhome.png')
        },
        {
          name: '中心页',
          push: '/two',
          icon: require('./img/show.png'),
          iconSelect: require('./img/shadowshow.png')
        },
        {
          name: '个人',
          push: '/there',
          icon: require('./img/personal.png'),
          iconSelect: require('./img/shadowpersonal.png')
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
.footer
  display flex
  position absolute
  left 0
  bottom 0
  box-sizing border-box
  height 60px
  line-height 12px
  text-align center
  background #FFFFFF
  border-top 1px solid #EFEFEF
  width 100%
  div
   flex 1
   font-size 13px
   img
    width 23px
    height 21px
    margin-top 10px
    margin-bottom -6px
   .on
    color #FD7D2B
</style>
