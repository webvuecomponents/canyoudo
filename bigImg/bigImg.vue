<template>
  <div class="bigImgBox" ref="maskBox" @mousedown="onmousedown">
    <img :src="srcPath" alt="加载失败"
         :style="{'width': imgW + 'px','height': imgH + 'px','top': top + 'px', 'left': left + 'px', 'transform': scale}"/>
    <img :src="srcPath" ref="resource" alt="" v-show="false">
  </div>
</template>

<script>
export default {
  props: ['srcPath'],
  data () {
    return {
      imgW: 0,
      imgH: 0,
      top: 0,
      left: 0,
      src: '',
      reW: 0, // 原图
      reH: 0,
      scale: 'scale(1)',
      size: 0
    }
  },
  methods: {
    hideMask (e) {
      this.$emit('clickMask', false)
    },
    mWheel (e) {
      let ev = e || window.event
      let dir = ev.detail ? ev.detail * (-120) : ev.wheelDelta
      // dir = -dir;
      if (dir > 0) {
        this.size += dir / 2000
        this.scale = `scale(${1 + this.size})`
      } else {
        this.size += dir / 2000
        if (this.size < -1) {
          this.size = -1
          this.scale = `scale(${1 + this.size})`
          return
        }
        this.scale = `scale(${1 + this.size})`
      }
    },
    onmousedown (e) {
      let that = this
      let isMove5 = false
      this.$refs.maskBox.onmousemove = function (el) {
        let ev = el || window.event
        ev.preventDefault()
        if (Math.abs(ev.movementX) > 5 || Math.abs(ev.movementY) > 5) {
          isMove5 = true
        }
        that.left += ev.movementX
        that.top += ev.movementY
      }
      this.$refs.maskBox.onmouseup = function () {
        if (that.isIE() || that.isIE11()) {
          that.hideMask()
        }
        this.onmousemove = null
        this.onmouseup = null
        if (!isMove5) {
          that.hideMask()
        }
      }
      // 阻止默认事件
      if (e.preventDefault) {
        e.preventDefault()
      } else {
        return false
      }
    },
    isIE () {
      if (!!window.ActiveXObject || 'ActiveXObject' in window) {
        return true
      } else {
        return false
      }
    },
    isIE11 () {
      if ((/Trident\/7\./).test(navigator.userAgent)) {
        return true
      } else {
        return false
      }
    }
  },
  mounted () {
    // console.log(this.$refs.maskBox, this.$refs.maskBox.height)
    this.reW = this.imgW = this.$refs.resource.width
    this.reH = this.imgH = this.$refs.resource.height
    // 宽高比例
    let whRatio = this.reW / this.reH
    let hwRatio = this.reH / this.reW
    let bodyW = document.body.clientWidth
    let bodyH = document.body.clientHeight
    // console.log(this.reW, this.reH, bodyW, bodyH)
    // 图片宽度大于高度
    if (this.reW >= this.reH) {
      let nih = this.imgH = hwRatio * bodyW
      if (nih > bodyH) {
        this.imgH = bodyH
        this.imgW = whRatio * bodyH
        this.left = (bodyW - whRatio * bodyH) / 2
      } else {
        this.imgW = bodyW
        this.top = (bodyH - nih) / 2
      }
    } else {
      let niw = this.imgW = (bodyH / this.reH) * this.reW
      this.imgH = bodyH
      this.left = (bodyW - niw) / 2
    }
    // FF doesn't recognize mousewheel as of FF3.x
    let mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? 'DOMMouseScroll' : 'mousewheel'
    this.$refs.maskBox.addEventListener(mousewheelevt, this.mWheel, false)
  }
}
</script>

<style>
.bigImgBox {
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
z-index: 9000;
background-color: rgba(0, 0, 0, .6)
}
.bigImgBox img {
position: fixed;
z-index: 9001;
}
</style>
