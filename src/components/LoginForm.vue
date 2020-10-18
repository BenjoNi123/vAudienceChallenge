<template>
  <div>
    <div>
      <div v-if="showError" class="errorBox">
        <span class="errorText">Credentials are incorrect.</span>
      </div>
      <form @submit.prevent="submitLogin()">
        <div class="formClass">
          <span class="label">Enter Username or E-Mail:</span>
          <input
            v-model="username"
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
          <button type="submit" class="buttonClass">Log In</button>
        </div>
      </form>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import { login } from "../Auth";

@Component({
  components: {},
})
export default class LoginForm extends Vue {
  username = "";
  password = "";
  showError = false;

  async submitLogin() {
    this.showError = false;
    try {
      const didLogin = await login(this.username, this.password);
      if (!didLogin) {
        this.showError = true;
      }
    } catch (err) {
      console.log(err);
    }
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
.errorBox {
  background-color: red;
  padding: 8px;
  border-radius: 16px;
}
</style>