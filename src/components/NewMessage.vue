<template>
  <v-card>
    <v-toolbar color="primary">
      <v-toolbar-title>New Message</v-toolbar-title>
    </v-toolbar>
    <v-form>
      <v-container>
        <v-layout>
          <v-text-field
            v-model="message"
            label="Message"
            required
          ></v-text-field>
        </v-layout>
      </v-container>

      <v-btn :disabled="!token" @click="submit">submit</v-btn>
    </v-form>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      message: '',
    };
  },
  computed: {
    token() {
      return this.$store.state.token;
    },
  },
  methods: {
    async submit() {
      this.$store.dispatch('postNewMessage', this.message);
      this.message = '';
    },
  },
};
</script>
