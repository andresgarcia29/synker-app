export const state = () => ({
  email: '',
  password: '',
  token: '',
})

export const actions = {
  async login({ commit }, body) {
    const result = await $axios.$post('/auth/login', body)
  },
}
