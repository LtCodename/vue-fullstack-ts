<template>
  <v-app>
    <v-toolbar app>
      <v-btn flat to="/">Messages</v-btn>
      <v-btn flat to="/NewMessage">New Message</v-btn>
      <v-spacer />
      <v-btn v-if="!$store.state.token" flat to="/Register">Register</v-btn>
      <v-btn v-if="!$store.state.token" flat to="/Login">Login</v-btn>
      <v-btn v-if="$store.state.token" flat @click="$store.commit('logout')"
        >Logout</v-btn
      >
    </v-toolbar>

    <v-content>
      <br />
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
