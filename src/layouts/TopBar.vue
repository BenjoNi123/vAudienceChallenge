<template>
  <div class="topbar">
      <div class="leftNavGroup">
        <MenuIcon style="margin-left: 5px" v-if="login==true" :size="32" fillColor="#F9F9F9" />
        <span style="margin-left: 20px" @click="$router.push('/')">Spect8.live</span>
      </div>
      <div>
        

    <button class="button" @click="signIn()">SignIn</button>
    <button class="button" @click="signUp()">SignUp</button>

      </div>
  </div>
</template>
<script lang="ts">
import {  Component,Vue } from 'vue-property-decorator';
import MenuIcon from 'vue-material-design-icons/Menu.vue';
@Component({
   components:{ MenuIcon}
})
export default class TopBar extends Vue {
  login=true;
     takeHome(){
      this.$router.push('/')
     
    }
    signIn(){
     
         this.$router.push('/signin');
        
    }
    signUp(){
      
        this.$router.push('/signup');
        

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
      margin-right: 20px;
      background-color: rgb(255 85 0);
      color: white;
      height: 25px;
      border-radius: 8px;
  }
  .leftNavGroup{
    display: flex; 
    align-items: center;
  }
</style>
