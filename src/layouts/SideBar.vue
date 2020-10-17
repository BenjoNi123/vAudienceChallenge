<template>
  <div class="sideNav"></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Navigation extends Vue {}
</script>

<style scoped>
.sideNav {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  flex-direction: column;
  width: 60px;
  height: 100vh;
  z-index: 1;
  top: 20px;
}
</style>