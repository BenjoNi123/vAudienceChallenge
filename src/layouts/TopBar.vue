<template>
  <div class="topbar">
    <div class="leftNavGroup">
      <SideBar />
      <span class="menuSpan" @click="$router.push('/')">Spect8.live</span>
    </div>
    <div>
      <button v-if="!logedIn" class="button" @click="signIn()">SignIn</button>
      <button v-if="!logedIn" class="button" @click="signUp()">SignUp</button>
      <button v-if="logedIn" class="button" @click="logOut()">LogOut</button>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Watch, Vue } from "vue-property-decorator";

import SideBar from "@/layouts/SideBar.vue";
@Component({
  components: { SideBar },
})
export default class TopBar extends Vue {
  login = true;
  logedIn = false;
  showSideNav = false;

  mounted() {
    this.logedIn = localStorage.getItem("token") ? true : false;
  }

  takeHome() {
    this.$router.push("/");
  }
  signIn() {
    this.$router.push("/signin");
  }
  signUp() {
    this.$router.push("/signup");
  }
  logOut() {
    localStorage.removeItem("token");
    this.$router.push("/signIn");
  }
  @Watch("$route")
  onRouteChanged() {
    this.logedIn = localStorage.getItem("token") ? true : false;
  }
}
</script>

<style scoped>
.topbar {
  top: 0;
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 60px;
  background-color: rgba(24, 24, 24, 1);
  color: #fefefe;
}

.button {
  width: 100px;
  border: none;
  margin-right: 40px;
  background-color: rgb(255 85 0);
  color: white;
  height: 25px;
  border-radius: 8px;
}
.button:hover {
  cursor: pointer;
}
.leftNavGroup {
  display: flex;
  align-items: center;
}

.menuIcon {
  margin-left: 5px;
}

.menuSpan {
  margin-left: 60px;
}
</style>
