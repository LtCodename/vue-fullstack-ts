<template>
  <v-card tile>
    <v-toolbar color="primary">
      <v-toolbar-title>Message</v-toolbar-title>
    </v-toolbar>
    <v-card-item>
      <v-toolbar-title>{{ message.text }}</v-toolbar-title>
    </v-card-item>
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
