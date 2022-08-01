<template>
  <v-container>
    <Information :playlists="playlists"></Information>
    <SearchBar @search="searchPlaytlist"></SearchBar>
    <Tracks></Tracks>
    <v-data-table
      :headers="headers"
      :items="searchBar"
      :items-per-page="50"
      class="elevation-1"
    >
      <template v-slot:item.image="{ item }">
        <v-avatar size="80" class="ma-5">
          <v-img
            lazy-src="https://picsum.photos/id/11/10/6"
            max-height="150"
            max-width="150"
            :src="item.image"
          ></v-img>
        </v-avatar>
      </template>
      <template class="playlist-text" v-slot:item.name="{ item }">
        <p>{{ item.name }}</p>
      </template>
      <template v-slot:item.url="{ item }">
        <a :href="item.url" target="_blank">Go</a>
      </template>
      <template v-slot:item.synk="{ item }">
        <div class="d-flex flex-column">
          <v-chip
            :color="setColor(item.playlistConfiguration.sync)"
            filter
            link
            pill
            >Not Sync</v-chip
          >
        </div>
      </template>
      <template v-slot:item.restore="{ item }">
        <div class="d-flex flex-column">
          <v-chip
            :color="setColor(item.playlistConfiguration.save)"
            filter
            link
            pill
            >Not Backup</v-chip
          >
        </div>
      </template>
      <template v-slot:item.songs="{ item }">
        <div class="d-flex flex-column">
          <v-chip color="primary" filter link pill @click="getTracks(item.uri)"
            ><v-icon> mdi-music-box </v-icon></v-chip
          >
        </div>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import Vue from 'vue'
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex'
import Information from './Information.vue'
import SearchBar from './SearchBar.vue'
import Tracks from './Tracks.vue'
export default Vue.extend({
  name: 'playlist',
  components: {
    Information,
    SearchBar,
    Tracks,
  },
  data() {
    return {
      search: '',
      headers: [
        { text: 'Image', value: 'image' },
        { text: 'Name', value: 'name' },
        { text: 'Total', value: 'totalTracks' },
        { text: 'Url', value: 'url' },
        { text: 'Synk', value: 'synk' },
        { text: 'Restore', value: 'restore' },
        { text: 'Songs', value: 'songs' },
      ],
    }
  },
  computed: {
    ...mapState('spotify', ['playlists']),
    searchBar() {
      if (this.search === '') {
        return this.playlists
      }
      return this.playlists.filter((e) => {
        if (e.name.toLowerCase().includes(this.search.toLowerCase())) return e
      })
    },
  },
  methods: {
    ...mapActions('spotify', ['getTracks']),
    setColor(flag) {
      if (flag) return 'success'
      return 'error'
    },
    searchPlaytlist(search) {
      this.search = search
    },
  },
})
</script>

<style>
.playlist-text {
  width: 50%;
}

a {
  text-decoration: none;
}
</style>
