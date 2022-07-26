<template>
  <v-container class="login-container">
    <v-form class="login-form">
      <v-row no-gutters>
        <v-col cols="12">
          <p class="login-title">Synker Login</p>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="12">
          <v-img
            class="login-logo"
            src="img/robot.png"
            max-height="250"
            max-width="250"
            style="margin: 0 auto"
          />
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="12">
          <v-text-field
            v-model="email"
            type="email"
            prepend-icon="mdi-account"
            label="Email"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="12">
          <v-text-field
            v-model="password"
            v-on:keyup.enter="login"
            type="password"
            prepend-icon="mdi-lock"
            label="Password"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="12">
          <v-btn color="primary" block @click="login">Log In!</v-btn>
        </v-col>
      </v-row>
    </v-form>
    <v-snackbar v-model="snackbar" timeout="1000">
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn depressed text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  layout: 'login',
  data() {
    return {
      email: '',
      password: '',
      snackbar: false,
      text: 'User or password incorrect',
    }
  },
  methods: {
    async login() {
      try {
        result = await this.$auth.loginWith('local', {
          data: { email: this.email, password: this.password },
        })
        console.log(result)
      } catch (err) {
        this.snackbar = true
      }
    },
  },
})
</script>

<style>
.login-title {
  text-align: center;
  margin: 1em 0px;
  font-size: 2em;
}
.login-container {
  height: 100vh;
  display: flex;
  justify-content: center;
}
.login-form {
  width: 60%;
  padding: 20px;
  box-shadow: 0px 0px 10px grey;
  justify-content: center !important;
  align-content: center;
  align-self: center;
}
.row {
  justify-content: center;
}
</style>
