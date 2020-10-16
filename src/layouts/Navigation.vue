<template>
    <div class="sideNav">
        <menu-icon :size="32" fillColor="#F9F9F9" />
        <router-link to="/signin" >LogIN</router-link>
        <router-link to="/signup" >SignUp</router-link>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import MenuIcon from 'vue-material-design-icons/Menu.vue';
@Component({
    components:{
        MenuIcon
    }
})
export default class Navigation extends Vue {
    signIn(){
        this.$router.push("/signin");
        console.log("sign me in")
    }
    signUp(){
        this.$router.push("/signup")
        console.log("sign me up")
    }

}
</script>

<style scoped>
.sideNav{
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