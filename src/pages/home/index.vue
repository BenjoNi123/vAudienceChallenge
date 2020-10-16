<template>
  <div class="home">
    <VideosList/>

  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import VideosList from '@/components/VideosList.vue';

@Component({
  components:{
    VideosList,
    
  }
})
export default class Home extends Vue {}
</script>
<style scoped>
  .home{
   
    height: 95vh;
    display: flex;
    flex-direction: column;
  }
  
</style>