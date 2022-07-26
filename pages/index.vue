<template>
  <v-container class="login-container">
    <h1>Welcome To Synker</h1>
  </v-container>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  middleware: ['auth'],
  data() {
    return {
      email: '',
      password: '',
      snackbar: false,
      text: 'User or password incorrect',
    }
  },
})
</script>

<style></style>
