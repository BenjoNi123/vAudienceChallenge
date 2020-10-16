<template>
    <div class="signUp">
        <h1>Please Sign Up</h1>
        <RegisterForm/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import RegisterForm from '@/components/RegisterForm.vue'; 

@Component({
  components: {
    RegisterForm,

  },
})
export default class Home extends Vue {}
</script>

<style scoped>
    .signUp{
       position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    height: 100vh;
    }
</style>