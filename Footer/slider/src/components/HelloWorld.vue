<template>
  <div class="hello">
    <slideVer :errMes="errMes" :bigImage="bigImage" :smallImage="smallImage" :topNum="topNum"></slideVer>
  </div>
</template>

<script>
import slideVer from './slideVer/slideVer'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      errMes: 0,
      topNum: 0,
      bigImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt7khilfiQXw4IWzA5OufKsMl-Kgb9uY_kgyzyCqPb9rJI8B2S-g',
      smallImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt7khilfiQXw4IWzA5OufKsMl-Kgb9uY_kgyzyCqPb9rJI8B2S-g'
    }
  },
  components: {
    slideVer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
