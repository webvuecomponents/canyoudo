<template>
  <div class="picWrapper">
    <pic-con :pics='pics'
             :curPos='curPos'
             :prePicVisible.sync='picV'
             :showDesc='showDesc || "uploadTime"'
             ref='pic'
             @leftClick='handleLeftClick'
             :direction='direction'
             @rightClick='handleRightClick'
             :imgStyle='imgStyle'></pic-con>
  </div>
</template>

<script>
import picCon from 'components/remoteInspection/'
export default {
  props: ['prePicVisible', 'data', 'imgStyle', 'showDesc'],
  components: {
    picCon
  },
  watch: {
    data: {
      handler (newVal, oldVal) {
        // data 使用对象变量传入 :data='obj' 避免重复刷新
        if (this.prePicVisible && typeof oldVal != 'undefined') this.getPic(0);
      },
      immediate: true,
      deep: true
    },
    prePicVisible: {
      handler (newVal, oldVal) {
        if (newVal) {
          this.getPic(0)
        } else {
          this.direction = 0;
        }
        this.picV = newVal;
      },
      immediate: true
    },
    picV: {
      handler (newVal, oldVal) {
        this.$emit('update:prePicVisible', newVal)
      },
      immediate: true
    }
  },
  data () {
    return {
      loading: false,
      picV: false,
      curPos: 0,
      direction: 0,
      pics: []
    }
  },
  methods: {
    handleLeftClick (ind) {
      if (this.loading || !this.pics) return;
      if (ind == 0) {
        this.getPic(-1, this.pics[0].uploadTime, (list) => {
          if (list && list.length > 0) {
            this.direction = -1;
            this.pics = [...list, ...this.pics];
          } else {
            alert('暂无图片')
          }
        })
      } else {
        this.curPos = ind - 1;
      }
    },
    handleRightClick (ind) {
      if (this.loading || !this.pics) return;
      if (ind == this.pics.length - 1) {
        this.getPic(1, this.pics[this.pics.length - 1].uploadTime, (list) => {
          if (list && list.length > 0) {
            this.direction = 1;
            this.pics = [...this.pics, ...list];
          } else {
            alert('暂无图片')
          }
        })
      } else {
        this.curPos = ind + 1;
      }
    },
    getPic (direction, startTime, cb) {
      this.loading = true;
      this.$axios.get(this.data.url, {
        data: {
          direction: direction || this.direction,
          berthId: this.data.berthId,
          startTime: startTime || this.data.startTime
        }
        // ,
        // headers: {
        //   'Session-Id': '24fbeaab26a0cd4cfb1b31a7cfb85111'
        // }
      }).then(res => {
        if (!cb) {
          this.pics = res.value.list;
          this.$refs.pic.posMove(res.value.showIndex, true); // 传入的+1的值
          //  this.curPos = res.value.showIndex - 1;
        } else {
          cb(res.value.list);
        }
        this.loading = false;
      }).catch(() => { this.loading = false })
    }
  },
  mounted () {
  }
}
</script>
