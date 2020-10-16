<template>
    <div class="logIn">
      <h1>Sign In</h1>
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
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    height: 100vh;
    }
</style>