<template>
  <v-card>
    <v-toolbar color="primary">
      <v-toolbar-title>Messages</v-toolbar-title>
    </v-toolbar>

    <v-list>
      <v-list-item
        v-for="(message, index) in $store.state.messages"
        :key="index"
        :to="'message/' + index"
        :title="message.text"
        :subtitle="message.user"
      ></v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  async created() {
    this.$store.dispatch('getMessages');
  },
};
</script>
