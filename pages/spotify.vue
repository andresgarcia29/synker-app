<template>
  <v-container>
    <h1 class="spotify-title">Spotify</h1>
    <playlist></playlist>
  </v-container>
</template>

<script>
import Vue from 'vue'
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex'

import Playlist from '~/components/Playlist.vue'
export default Vue.extend({
  components: { Playlist },
  name: 'spotify',
  middleware: ['auth'],
  data() {
    return {}
  },
  methods: {
    ...mapActions('spotify', ['getPlaylists']),
  },
  created() {
    this.getPlaylists()
  },
})
</script>

<style>
.spotify-title {
  background: #1db954;
  color: white;
  text-align: center;
  box-shadow: 0px 0px 2px gray;
  border-radius: 10px 10px 10px;
}
</style>
