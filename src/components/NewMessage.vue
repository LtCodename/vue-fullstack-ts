<template>
  <v-card>
    <v-toolbar color="primary">
      <v-toolbar-title>New Message</v-toolbar-title>
    </v-toolbar>
    <v-form>
      <v-container>
        <v-layout>
          <v-text-field
            v-model="messageBody"
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
      messageBody: "",
    };
  },
  methods: {
    async submit() {
      try {
        this.$store.dispatch("newMessage", this.messageBody);
      } catch (error) {
        // console.error(error);
      }
    },
  },
};
</script>
