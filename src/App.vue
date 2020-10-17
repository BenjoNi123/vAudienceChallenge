<template>
  <div id="app">
    <div id="nav">
      <Navigation/>
      
    </div>
    <router-view></router-view>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navigation from '@/layouts/Navigation.vue';

@Component({components: {Navigation}})
export default class App extends Vue {

}

</script>

<style>
body{ margin: 0}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: rgba(18, 18, 18, 1);
  height: 100vh;
  width: 100%;
    
  background-size: cover;
}
.routerClass{z-index: 100;}
#nav {
  z-index: 999;
  display: flex;
  background-color: rgba(24, 24, 24, 1);
  position: fixed;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
