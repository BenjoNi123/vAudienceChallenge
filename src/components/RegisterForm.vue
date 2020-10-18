<template>
  <div>
    <div>
      <div class="errorClass" v-if="showErrorBox">
        <ul class="errorList">
          <li v-if="!validUsername">
            Username should have minimum 4 characters
          </li>
          <li v-if="!validEmail">Email is not valid</li>
          <li v-if="!validPassword">
            Password should have minimum 8 characters
          </li>
          <li v-if="loginError.length > 0">{{ loginError }}</li>
        </ul>
      </div>
      <form @submit.prevent="submitRegister()">
        <div class="formClass">
          <span class="label">Enter Username:</span>
          <input
            @input="loginError = ''"
            v-model="username"
            type="text"
            class="inputField"
            placeholder="e.g. Testuser"
          />
          <span class="label">Enter E-Mail:</span>
          <input
            @input="loginError = ''"
            v-model="email"
            type="text"
            class="inputField"
            placeholder="e.g. test@test.com"
          />
          <span class="label"> Enter Password:</span>
          <div class="passField">
            <input
              v-model="password"
              class="inputField"
              type="password"
              placeholder="testerpass1234."
            />
          </div>
          <button type="submit" class="buttonClass">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import { apiSignUp } from "../ApiCenter";
import { login } from "../Auth";

@Component({
  components: {},
})
export default class LoginForm extends Vue {
  username = "";
  password = "";
  email = "";
  showError = false;
  loginError = "";

  get showErrorBox() {
    return this.showError &&
      !(
        this.validUsername &&
        this.validEmail &&
        this.validPassword &&
        this.loginError.length == 0
      )
      ? true
      : false;
  }
  get validUsername() {
    return this.username.length < 4 ? false : true;
  }
  get validPassword() {
    return this.password.length < 8 ? false : true;
  }

  get validEmail() {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(this.email).toLowerCase());
  }
  async submitRegister() {
    this.showError = false;
    if (this.validUsername && this.validPassword && this.validEmail) {
      try {
        const loginResponse = await apiSignUp(
          this.username,
          this.password,
          this.email
        );

        if (loginResponse.error) {
          this.showError = true;
          this.loginError = loginResponse.error;
        } else {
          login(this.username, this.password);
        }
      } catch (err) {
        console.log(err);
      }
    } else this.showError = true;
  }
}
</script>

<style scoped>
.label {
  color: white;
}
.formClass {
  max-width: 50vw;
  display: flex;
  flex-direction: column;
  align-content: center;
}
.inputField {
  width: 33vw;
  padding: 20px;
  margin: 5px 50px 20px;
  border-radius: 8px;
}

.iconStyle {
  padding: 10px;
  color: green;
  min-width: 50px;
  text-align: center;
}
.buttonClass {
  display: flex;
  justify-content: space-around;
  padding: 20px;
  margin: 0 50px;
  border-radius: 8px;
  background-color: rgb(255 85 0);
}
.buttonClass:hover {
  cursor: pointer;
}
.label {
  margin: 0px;
  display: flex;
  margin-left: 50px;
  width: 33vw;
  padding: 20px 0 5px;
}
.errorClass {
  background-color: red;
  padding: 8px;
  border-radius: 16px;
}
.errorList {
  display: flex;
  list-style-type: none;
  flex-direction: column;
  align-items: end;
}
</style>