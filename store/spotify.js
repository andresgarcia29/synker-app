export const state = () => ({
  playlists: [],
  tracks: [],
  dialogTracks: false,
})

export const mutations = {
  SET_PLAYLISTS(state, playlists) {
    state.playlists = playlists
  },
  SET_TRACKS(state, tracks) {
    state.tracks = tracks
  },
  SHOW_DIALOG(state) {
    state.dialogTracks = true
  },
  HIDE_DIALOG(state) {
    state.dialogTracks = false
  },
}

export const actions = {
  async getPlaylists({ commit }) {
    const result = await this.$axios.$get('/synker/spotify/playlists')
    if (!result) {
      result = []
    }

    commit('SET_PLAYLISTS', result)
  },

  async getTracks({ commit }, uri) {
    const result = await this.$axios.$get(`/spotify/me/playlist/${uri}/tracks`)

    if (result) {
      commit('SET_TRACKS', result)
    } else {
      commit('SET_TRACKS', [])
    }

    commit('SHOW_DIALOG')
  },
}
