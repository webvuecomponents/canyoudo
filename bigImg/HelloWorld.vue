<template>
  <div class="hello" >
    <div class="helloBox" @click="showBigImage(require('../assets/images/12.png'))"></div>
    <bigImg :srcPath="url" v-if="isShow" @clickMask="isShow = false"/>

  </div>
</template>

<script>
// http://bj-pre-image.oss-cn-beijing.aliyuncs.com/busy/20190621/870661c7a36baf2ead54e72815d7d987.jpg
import list from './list'
import bigImg from './bigImg'
export default {
  name: 'HelloWorld',
  components: {
    list,
    bigImg
  },
  data () {
    return {
      url: '',
      isShow: false,
      arr: [1, 2, 3]
    }
  },
  methods: {
    showBigImage (url) {
      if (url) {
        this.url = url
        this.isShow = true
      }
      this.arr.splice(0, 1)
    }
  },
  created () {
  },
  watch: {
    arr: {
      handler (new1, old) {
        console.log(new1, 'new1')
      }
    }
  },
  updated () {
    console.log(this.arr)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.helloBox {
  font-size: 20px;
  width: 400px;
  height: 300px;
  background: url('../assets/images/12.png') no-repeat;
}
</style>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
