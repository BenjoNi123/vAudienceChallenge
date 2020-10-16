<template>
    <div class="sideNav">
        <MenuIcon :size="32" fillColor="#F9F9F9" />
        
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