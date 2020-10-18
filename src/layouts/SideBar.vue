<template>
  <div class="sideNav">
    <MenuIcon
      v-if="logedIn"
      @click="showSideNav = !showSideNav"
      class="menuIcon"
      :size="32"
      fillColor="#F9F9F9"
    />
    <div class="menuDiv" v-if="showSideNav">
      <div class="homeButton">
        <home-icon @click="goHome" :size="32" class="homeIcon"></home-icon>
        <span class="homeSpan">Home</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Watch, Component, Vue } from "vue-property-decorator";
import MenuIcon from "vue-material-design-icons/Menu.vue";
import HomeIcon from "vue-material-design-icons/Home.vue";
import { didLogin } from "@/Auth";

@Component({
  components: { MenuIcon, HomeIcon },
})
export default class Navigation extends Vue {
  showSideNav = false;
  logedIn = false;
  goHome() {
    this.$router.push("/");
  }
  @Watch("$route")
  onRouteChanged() {
    this.logedIn = didLogin() ? true : false;
  }
}
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
  top: 12px;
}
.menuIcon {
  cursor: pointer;
}
.menuDiv {
  background-color: rgba(24, 24, 24, 1);
  height: 100vh;
  width: 80px;
}

.homeButton {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  height: 80px;
  width: 80px;
  text-align: center;
  cursor: pointer;
}
.homeButton:hover {
  background-color: rgb(47 47 47);
}
.homeIcon {
  margin-left: 10px;
}

.homeSpan {
  margin-left: 10px;
}
</style>