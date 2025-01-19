<template>
  <v-card>
    <v-toolbar color="primary">
      <v-toolbar-title>Login</v-toolbar-title>
    </v-toolbar>

    <v-form>
      <v-container>
        <v-layout>
          <v-text-field
            v-model="userName"
            label="User Name"
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="Password"
            required
          ></v-text-field>
        </v-layout>
      </v-container>

      <v-btn @click="login">Login</v-btn>
    </v-form>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      password: "",
    };
  },
  methods: {
    async login() {
      this.$store.dispatch("login", {
        userName: this.userName,
        password: this.password,
      });
      this.userName = "";
      this.password = "";
    },
  },
};
</script>
