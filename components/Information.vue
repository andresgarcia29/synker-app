<template>
  <div class="d-flex justify-space-between ma-5">
    <p>Information</p>
    <v-chip close-icon="mdi-close-outline" color="secondary" filter pill
      >Total Playlists: {{ playlists.length }}</v-chip
    >
    <a :href="getLoginUrl()" target="_blank">
      <v-btn color="accent" elevation="2" rounded small
        >Access <v-icon> mdi-sync </v-icon></v-btn
      >
    </a>
    <a :href="getLoginUrl()" target="_blank">
      <v-btn color="info" elevation="2" rounded small
        >Data <v-icon> mdi-sync </v-icon></v-btn
      >
    </a>
  </div>
</template>

<script>
export default {
  props: ['playlists'],
  name: 'information',
  methods: {
    getLoginUrl() {
      return `${process.env.BASE_URL || '0.0.0.0:8000'}/spotify/login`
    },
  },
}
</script>

<style></style>
