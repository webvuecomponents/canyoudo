<template>
  <div class="remote-inspection"
       :style="{width: imgStyle.width,
            height: imgStyle.height}">
    <div class="picWrapper"
         :style="styleWrapper">
      <div @click.stop
           class="picItem"
           :key="ind"
           v-for="(pic, ind) in curPics"
           :style="{'background-image': `url(${pic.picUrl})`, ...imgStyle}">
           <div class='desc' v-if='showDesc'>{{pic[showDesc]}}</div>
           </div>
    </div>
    <div class="buttonWrapper">
      <div class="left-button"
           @click.stop="leftClick">&lt;</div>
      <div class="right-button"
           @click.stop="rightClick">&gt;</div>
    </div>
  </div>
</template>
<script>
/**
 * pics 图片数组
 * imgStyle 图片样式 宽高
 * curPos 传入的位置 以传入数组为准
 * leftClick 左点击 调用的函数 参数： 第一个 位置
 * rightClick 右点击 调用的函数 参数： 第一个 位置
 * showDesc 显示描述的字段
 */
export default {
  props: {
    direction: {
      default: 0
    },
    showDesc: {
      default: false
    },
    prePicVisible: {
      default: true
    },
    pics: {
      default: function () {
        return [];
      }
    },
    imgStyle: {
      default () {
        return {};
      }
    },
    curPos: {
      default: 0
    }
  },
  watch: {
    pics: {
      handler (newVal, oldVal) {
        if (newVal.length === 0) return;
        this.curPics = [newVal[newVal.length - 1], ...newVal, newVal[0]];
        if (oldVal) {
          let diff = newVal.length - oldVal.length;
          if (this.direction < 0) {
            this.posMove((this.innerPos = this.innerPos + diff));
            this.innerPos = this.innerPos - 1;
          } else if (this.direction > 0) {
            this.innerPos = this.innerPos + 1;
          }
          setTimeout(() => {
            this.setEle();
          }, 200);
        }
      },
      immediate: true
    },
    curPos: {
      handler (newVal) {
        this.innerPos = newVal + 1;
        this.setEle();
        setTimeout(() => {
          if (newVal < 0) {
            this.innerPos = this.pics.length;
            this.posMove(this.innerPos);
          } else if (newVal >= this.pics.length) {
            this.innerPos = 1;
            this.posMove(this.innerPos);
          }
        }, 500);
      },
      immediate: true
    }
  },
  data () {
    return {
      curPics: [],
      innerPos: 0,
      styleWrapper: {}
    };
  },
  beforeUpdate () {
    //  this.setEle();
  },
  methods: {
    leftClick () {
      this.$emit("leftClick", this.innerPos - 1);
    },
    rightClick () {
      this.$emit("rightClick", this.innerPos - 1);
    },
    posMove (ind, ifSetInerPos) {
      ifSetInerPos ? this.innerPos = ind : null;
      let width = parseInt(this.imgStyle.width);
      this.styleWrapper = {
        "transition-duration": "0s !important",
        width: this.curPics.length * width + "px",
        left: -1 * ind * width + "px"
      };
    },
    setEle () {
      let width = parseInt(this.imgStyle.width);
      this.styleWrapper = {
        "transition-duration": "0.2s",
        width: this.curPics.length * width + "px",
        left: -1 * this.innerPos * width + "px"
      };
    }
  },
  updated () { },
  mounted () {
    // this.setEle();
  }
};
</script>
<style  lang="stylus" rel="stylesheet/stylus">
.rankingList-listContent
  .el-tabs__nav
    transform translateX(75px) !important
  .el-tabs__content
    overflow visible !important
</style>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.remote-inspection {
  position: relative;
  overflow: hidden;
  background: #eee url(../../../static/car-pic.png) center no-repeat;
}
.picWrapper {
  position: absolute;
  transition: all linear 0.5s;
}
.picItem {
  background-size: 100% 100%;
  float: left;
  position: relative;
}
.buttonWrapper {
  bottom: 70px;
  right: 200px;
  position: absolute;
  opacity: 0.5;
  transition: 0.3s linear all;
}
.buttonWrapper:hover {
  opacity: 1;
}
.left-button,
.right-button {
  color: white;
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background: #666;
  text-align: center;
  line-height: 48px;
  font-size: 30px;
  cursor: pointer;
}
.right-button {
  left: 100px;
}
.mask-pic {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: rgba(6, 6, 6, 0.8);
  z-index: 100000;
}
.desc{
  font-size: 30px;
  line-height: 50px;
  text-align: center;
  position: absolute;
  width: 100%;
  height: 50px;
  bottom: 0;
  left: 0;
  background: rgba(255,255,255,0.5)
}
</style>

