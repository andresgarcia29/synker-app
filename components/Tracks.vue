<template>
  <v-dialog v-model="dialogTracks" @click:outside="HIDE_DIALOG">
    <v-data-table
      :headers="headers"
      :items="tracks"
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
      <template class="playlist-text" v-slot:item.artist="{ item }">
        <p>{{ item.artist }}</p>
      </template>
      <template class="playlist-text" v-slot:item.album="{ item }">
        <p>{{ item.album }}</p>
      </template>
    </v-data-table>
  </v-dialog>
</template>

<script>
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  data() {
    return {
      headers: [
        { text: 'Image', value: 'image' },
        { text: 'Name', value: 'name' },
        { text: 'Artist', value: 'artist' },
        { text: 'Album', value: 'album' },
      ],
    }
  },
  computed: {
    ...mapState('spotify', ['tracks', 'dialogTracks']),
  },
  methods: {
    ...mapMutations('spotify', ['HIDE_DIALOG']),
  },
}
</script>

<style></style>
