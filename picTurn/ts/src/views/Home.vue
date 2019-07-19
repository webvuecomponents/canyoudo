<template>
  <div class="home">
   <pic-turn></pic-turn>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PicTurn from '@/components/picTurn.vue'; // @ is an alias to /src

@Component({
  components: {
    PicTurn,
  },
})
export default class Home extends Vue {}
</script>
