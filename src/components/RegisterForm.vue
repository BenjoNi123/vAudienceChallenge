<template>
    <div>
        <div>
        <form>
        <div class="formClass">
            <span class="label">Enter Username:</span>
            <input v-model="username" type="text" class="inputField" placeholder="e.g. Testuser">
            <span class="label">Enter E-Mail:</span>
            <input v-model="email" type="email" class="inputField" placeholder="e.g. test@test.com">
            <span class="label"> Enter Password:</span>
            <div class="passField">
                <input v-model="password" class="inputField" type="text"  placeholder="testerpass1234." >       
            </div>
            <button id="submitButton" @click.prevent="testMe()" class="buttonClass" >Log In</button>
        </div>  
        </form>  
       </div>
    </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import {apiLogin} from '../ApiCenter';
import {login} from '../Auth'

@Component({
   components:{
   
   },
  }
)



export default class LoginForm extends Vue {

    username!: string;
    password!: string;
     
    
  
    testMe(){
        console.log('signup')
    }
    async logMe(){
        try {
            const loginResponse = await apiLogin(this.username, this.password);
            login(loginResponse.token);
        } 
        catch(err) {
         console.log(err)
        }}
  
}
</script>

<style scoped>
.label{
    color: white
}
.formClass{
    max-width: 50vw;
    display: flex;
    flex-direction: column;
    align-content: center;
  
}
.inputField{
    width: 33vw;
    padding: 20px;
    margin: 5px 50px 20px;
    border-radius: 8px; 

 
}

.iconStyle{
padding: 10px; 
            color: green; 
            min-width: 50px; 
            text-align: center; }
.buttonClass{
       display: flex;
    justify-content: space-around;
    padding: 20px;
    margin: 0 50px;
    border-radius: 8px;
    background-color: rgb(255 85 0)
}
#submitButton:hover{cursor: pointer;}


.label{
        margin: 0px;
    display: flex;
    margin-left: 50px;
    width: 33vw;
    padding: 20px 0 5px;
   
}

</style>