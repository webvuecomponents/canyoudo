<template>
  <div class="zoomImg" @click.stop.prevent="closeZoomImg" ref="zoomImg">
    <div class="box">
      <p class="txt">{{txt}}</p>
      <div class="VerimgBox">
        <img :src="bigImage" alt="" style="width: 100%;" class="bigImage">
        <img :src="smallImage" alt="" style="width: 50px;height: 50px;" class="smallImage" :style="{top: `${topNum}px`, left: `${leftNum}px`}">
      </div>
      <div class="imgBox" :class="{bg: isOk? true: false}">
        <span>{{isOk? suc: jiesuo}}</span>
        <div v-show="isEnd" class="img" :class="{'goStart': err}" ref="img" @touchstart.stop.prevent="imgTouchStart" @touchmove.stop.prevent="imgTouchMove" @touchend.stop.prevent="imgTouchEnd"></div>
      </div>
    </div>
    <div class="wrapBox" v-show="isOk"></div>
  </div>
</template>

<script>
/* eslint-disable */
  export default {
    props: {
      bigImage: {
        type: String
      },
      smallImage: {
        type: String
      },
      topNum: {
        type: Number
      },
      errMes: {
        type: Number
      }
    },
    watch: {
      errMes: {
        handler (val) {
          this.$emit('geturl');
          let img = this.$refs.img;
          this.err = true;
          img.style.left = 0;
          this.leftNum = 0;
        }
      }
    },
    data () {
      return {
        jiesuo: '向右滑动验证',
        suc: '通过验证',
        txt: '滑动验证',
        isEnd: true,
        isOk: false,
        sX: 0,
        sY: 0,
        t: 0,
        l: 0,
        r: 0,
        s: 1,
        v: 0,
        L1: 0,
        L2: 0,
        err: false,
        leftNum: '',
        sm: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561982619773&di=135963f9b353e118e0272674083141c2&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fsoft%2F6%2F571%2FcepyVKtIjudo6.jpg',
        bi: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561982619773&di=135963f9b353e118e0272674083141c2&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fsoft%2F6%2F571%2FcepyVKtIjudo6.jpg'
      }
    },
    methods: {
      imgTouchStart (ev) {
        this.err = false;
        let img = this.$refs.img;
        if (ev.targetTouches.length === 1) {
          this.sX = ev.targetTouches[0].pageX - img.offsetLeft;
        }
      },
      imgTouchMove (ev) {
        let img = this.$refs.img;
        if (ev.targetTouches.length === 1) {
          this.l = ev.targetTouches[0].pageX - this.sX;
          if (this.l >= 160) {
            this.l = 160;
            img.style.left = this.l + 'px'
          } else if (this.l < 0) {
            this.l = 0;
            img.style.left = '0px'
          } else {
            img.style.left = this.l + 'px';
          }
          this.leftNum = this.l;
        }
      },
      imgTouchEnd () {
        // this.$emit('getCode', parseInt(this.leftNum));
      },
      closeZoomImg () {
        this.$emit('closeVer');
      }
    }
  }
</script>

<style type="text/css" lang="stylus" scoped>
  .zoomImg
    position: fixed
    top: 0;
    left: 0
    right: 0
    bottom: 0
    background: rgba(0, 0, 0, .7);
    z-index: 100
    padding-top 40px
    .bg
      background #3388CB !important;
      color: #fff;
      transition all .5s;
    .box
      width 300px;
      height: 228px;
      margin 100px auto 0;
      text-align center;
      background #fff;
      border-radius 10px;
      overflow hidden;
      .txt
        font-size 16px;
        font-family: 'PingFangSC-Medium';
        font-weight: 500;
        color: rgba(51,51,51,1);
        margin 10px auto 10px;
      .VerimgBox
        position relative;
        margin 0 auto;
        width 209px;
        height 84px;
        .smallImage
          position absolute;
          // bottom 0;
          left 0;
      .imgBox
        margin 0 auto;
        width 72%;
        background #90c2ea;
        margin-top 40px;
        color #fff;
        position relative;
        height 40px;
        text-align:center;
        line-height 40px;
        font-size 14px
        border-radius 25px
        .img
          position: absolute
          height 40px;
          width 50px;
          left 0;
          border-radius 25px
          background #3388CB url(./unlocksign.png) no-repeat center;
          background-size 45%;
          top 0
        .goStart
          transition all .3s;  
  .wrapBox
    position absolute;
    bottom 0;
    left 0;
    right 0;
    top 0
</style>
