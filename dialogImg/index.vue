<template>
    <div>
        <el-row>
            <el-col :span="12">
                <div class="grid-content bg-purple">
                    <h2>{{ dataText.plateNumber }}</h2>
                    <p>车牌颜色：{{ dataText.carColor }}</p>
                    <p>停 车 楼：{{ dataText.terminalName }}</p>
                    <p>上传时间：{{ dataText.tsStr }}</p>
                    <p style="width: 100%;word-wrap:break-word;word-break:break-all;overflow: hidden;">
                        描　　述：{{ dataText.content }}
                    </p>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple-light">
                    <div class="bigImg">
                        <img :src="require('./image/'+ bigImg +'.jpg')" alt="">
                    </div>
                    <div class="minImg">
                        <div style="margin-right:5px;" :key="index" v-for="(item, index) in arrImage" 
                        :class="{act: index === nowIndex}" @click="changeImg(index)">
                            <img :src="require('./image/'+ item.src +'.jpg')" aslt="">
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    props: {
        arrImage: {
            type: Array,
            default () {
                return []
            }
        },
        dataText: {
            type: Object,
            'default': null
        },
        newIndex: {
            type: Boolean,
            default: true
        }
    },
    data() {
      return{
          bigImg: '',
          nowIndex: ''
      }
    },
    methods: {
      changeImg(ind) {
          this.bigImg = this.arrImage[ind].src;
          if(this.nowIndex != ind){
				this.nowIndex = ind;
			}
      }
    },
    mounted() {
    },
    created() {
        this.bigImg = this.arrImage[0].src;
        this.nowIndex = 0;
    },
    watch:{
        newIndex(newValue) {
            if(newValue) {
                this.nowIndex = 0;
                this.bigImg = this.arrImage[0].src;
            }
        }
    }
}
</script>
<style scoped lang="scss">
    .bigImg{
        width: 200px;
        height: 200px;
        border: 5px solid #9999;
    }
    .bigImg img{
        width: 100%;
        height: 100%;
    }
    .minImg{ 
        width: 200px;
        height: 40px;
        display: flex;
        margin-top: 5px;
    }
    .minImg div{
        flex: 1;
        height: 35px;
        border: 1px solid #9999;
        cursor:pointer;
    }
    .minImg div:last-child{
        margin: 0!important;
    }
    .minImg div img{
        width: 100%;
        height: 100%;
    }
    .act{
        border: 1px solid blue !important;
    }
</style>
