<template>
  <div class="checkColorBox">
    <span class="checkColor"
          v-for="(item,index) in colorList"
          :style="{'background':item.color1}"
          @click="check(index)"
          :key="index"
          :class="{'disabled' : disabled}">
      <i :style="{'color':item.black}"
         :class="plateColor=== item.value?'el-icon-check':''"></i>
      <span :class="item.colorleft"></span>
      <span :class="item.colorright"></span>
    </span>
  </div>
</template>
<script>
export default {
  props: [
    'plateColor',
    'disabled' // 是否可选
  ],
  data () {
    return {
      colorList: [
        {
          color1: '#0476bf',
          value: 0
        },
        {
          color1: 'rgba(255, 204, 51, 1)',
          value: 1
        },
        {
          color1: 'rgba(49, 192, 58, 1)',
          value: 2
        },
        {
          color1: '',
          colorleft: 'colorleft',
          colorright: 'colorright',
          value: 3
        },
        {
          color1: 'black',
          value: 4
        },
        {
          color1: '#fff',
          black: 'black',
          value: 5
        }
      ]
    };
  },
  methods: {
    check (index) {
      console.log(index)
      if (!this.disabled) {
        this.$emit("changeColor", this.colorList[index].value);
      }
    }
  },
  mounted () {
    // console.log(this.plateColor);
  }
};
</script>
<style  scoped>
.disabled {
  cursor: not-allowed !important;
  opacity: 0.6;
}

.checkColorBox {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 40px;
  line-height: 50px;
}
.el-icon-check {
  position: absolute;
  top: 1px;
  left: 10px;
  color: white;
  font-size: 20px;
  font-weight: 900;
}
.colorleft {
  background: rgba(255, 204, 51, 1);
  height: 20px;
  display: inline-block;
  width: 30%;
  float: left;
}
.colorright {
  background: rgba(49, 192, 58, 1);
  height: 20px;
  display: inline-block;
  width: 70%;
}
.checkColor {
  cursor: pointer;
  position: relative;
  width: 40px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  display: inline-;
  border: 1px solid #000;
  box-sizing: border-box;
  box-sizing: content-box;
  -moz-box-sizing: content-box;
}
</style>
