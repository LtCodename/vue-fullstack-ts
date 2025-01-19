<template>
  <v-card>
    <v-toolbar color="primary">
      <v-toolbar-title>Message</v-toolbar-title>
    </v-toolbar>
    <v-card-text>{{ message.text }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      message: '',
    };
  },
  async created() {
    this.message = (
      await this.$store.dispatch('getMessage', this.$route.params.id)
    ).data;
  },
};
</script>
