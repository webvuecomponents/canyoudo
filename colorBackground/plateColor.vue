<template>
  <div id="plateColor">
    <span v-show="plateColorNum != 3"
          :style="carColor">{{plateCarNum}}</span>
    <span v-show="plateColorNum === 3" class="yellowGreen">
      {{plateCarNum}}
      <!-- <span class="labYellow">{{plateCarNum.slice(0, 2)}}</span>
      <span class="labGreen">{{plateCarNum.slice(2, 9)}}</span> -->
    </span>
  </div>
</template>

<script>
export default {
  props: ['plateCarNum', 'plateColorNum'],
  data () {
    return {
      blue: { background: '#1e90ff', color: '#fff' },
      yellow: { background: '#ffcc00', color: '#fff' },
      green: { background: '#00cc33', color: '#fff' },
      // yellowGreen: { background: '#1e90ff', color: '#fff' },
      black: { background: '#000', color: '#fff' },
      white: { background: 'rgb(255, 255, 255)', color: '#000', border: '1px solid #ccc' }
      // color: this.plateColorNum
    };
  },
  computed: {
    carColor () {
      if (this.plateColorNum === 0) {
        return this.blue;
      }
      if (this.plateColorNum === 1) {
        return this.yellow;
      }
      if (this.plateColorNum === 2) {
        return this.green;
      }
      if (this.plateColorNum === 4) {
        return this.black;
      }
      if (this.plateColorNum === 5) {
        return this.white;
      }
    }
  },
  mounted () {
    // this.color = 3;
    // console.log(this.plateCarNum);
    // console.log(this.plateColorNum);
  }
};
</script>

<style lang="stylus" scoped>
#plateColor
  display inline-block
  vertical-align middle
  height 20px
  line-height 20px
  span
    display inline-block
    color #606266
    font-weight 500
    width 100%
    height 100%
    text-align center
  .yellowGreen
    color #ffffff
    background url('../../assets/images/yellowgreen.png') no-repeat center/100% 100%
    .labYellow
      background rgb(255, 204, 51)
      display inline-block
      float left
      width 42%
      height 100%
      text-align right
      color #fff
      margin-right 0!important
    .labGreen
      background rgb(49, 192, 58)
      display inline-block
      float left
      width 58%
      height 100%
      text-align left
      color #fff
</style>
