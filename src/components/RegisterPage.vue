<template>
  <v-card>
    <v-toolbar color="primary">
      <v-toolbar-title>Register</v-toolbar-title>
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

      <v-btn @click="register">Register</v-btn>
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
    async register() {
      this.$store.dispatch("register", {
        userName: this.userName,
        password: this.password,
      });
    },
  },
};
</script>
