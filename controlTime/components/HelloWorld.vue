<template>
  <div class="helloBox">
    <controlTime @getTime="getTime"
                 :initTime="initTime"/>
  </div>
</template>

<script>
import controlTime from './controlTime'
export default {
  name: 'HelloWorld',
  components: {
    controlTime
  },
  data () {
    return {
      initTime: '2019-07-22 10:50:20',
      value: ''
    }
  },
  methods: {
    getTime (time) {
      console.log(time)
    }
  },
  created () {
    setTimeout(() => {
      this.initTime = '2018-12-20 08:50:20'
    }, 5000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.helloBox {
  font-size: 20px;
  width: 158px;
  height: 30px;
  .box {
    font-weight: 600;
    color: red;
  }
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
.box img {
  width: 40px;
  height: 40px;
  vertical-align: middle;
}
</style>
