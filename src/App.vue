<template>
  <v-app>
    <v-toolbar class="main-toolbar" color="primary">
      <v-btn to="/">Messages</v-btn>
      <v-btn to="/new-message">New Message</v-btn>
      <v-spacer />
      <v-btn v-if="!$store.state.token" to="/register">Register</v-btn>
      <v-btn v-if="!$store.state.token" to="/login">Login</v-btn>
      <v-btn v-if="$store.state.token" @click="$store.commit('logout')"
        >Logout</v-btn
      >
    </v-toolbar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
};
</script>

<style>
.main-toolbar {
  margin-bottom: 10px;
}
</style>
