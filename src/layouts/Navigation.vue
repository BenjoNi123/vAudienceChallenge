<template>
    <div>
        <SideBar/>
        <TopBar/>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import SideBar from './SideBar.vue';
import TopBar from './TopBar.vue'
@Component({
    components:{
        SideBar,
        TopBar
    }
})
export default class Navigation extends Vue {
   

}
</script>