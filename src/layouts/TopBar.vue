<template>
  <div class="topbar">
      <div>
    <span @click="$router.push('/home')">Spect8.live</span>
      </div>
      <div>
        
    <button class="button" @click="takeHome()">Home</button>
    <button class="button" @click="signIn()">SignIn</button>
    <button class="button" @click="signUp()">SignUp</button>

      </div>
  </div>
</template>
<script lang="ts">
import {  Component,Vue } from 'vue-property-decorator';
@Component({})
export default class TopBar extends Vue {

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
</style>
