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

      <v-btn @click="submit">submit</v-btn>
    </v-form>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      message: "",
    };
  },
  methods: {
    async submit() {
      try {
        this.$store.dispatch("postNewMessage", this.message);
      } catch (error) {
        // console.error(error);
      }
    },
  },
};
</script>
