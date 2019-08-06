<template>
  <el-menu background-color="rgba(50,55,66,1)" text-color='#A1B0C8'  active-text-color='#409EFF' :default-active="defaults"  :router='false' :unique-opened='true'>
    <el-submenu background-color="#fff"  v-for="(item, index1) in HomeList" :key='index1'   :index="index1+1+''">
      <template slot="title"><span slot='title'>{{item.name}}</span></template>
      <el-menu-item  @click='handleHome(item2)' v-for="(item2,index2) in item.children" :key='index2' :index="(index1+1)+'-'+parseInt(index2+1)"><span slot='title' :title="(index1+1)+'-'+parseInt(index2+1)">{{item2.name}}</span></el-menu-item>
    </el-submenu>
  </el-menu>
</template>
<script>
  export default {
    name: 'app',
    data () {
      return {
        defaults: '1-1',
      }
    },
    methods: {
      handleHome(e){
        this.$emit('selectFunc', e)
      }
    },
    props: ['HomeList'],
    mounted() {

    }
  }
</script>
<style>
  #app>ul{
    width: 20%;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
    border: 0;
  }
  .el-menu {
    border: 0;
  }
  .el-menu-item:hover {
    background-color: rgba(79,88,106,1) !important;
  }
  .el-submenu__title:hover {
    background-color: rgba(79,88,106,1) !important;
  }
</style>
