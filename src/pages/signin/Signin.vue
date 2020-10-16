<template>
    <div class="logIn">
        <LoginForm/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LoginForm from '@/components/LoginForm.vue'; 

@Component({
  components: {
    LoginForm,

  },
})
export default class Home extends Vue {}
</script>

<style scoped>
    .logIn{
       position: relative;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    height: 100vh;
    }
</style>