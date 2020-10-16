<template>
  <div class="container">
    
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  name: string = "benaamin"!;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  background-color: black;
  height: 100vh;
  width: 100vh;
}
</style>
