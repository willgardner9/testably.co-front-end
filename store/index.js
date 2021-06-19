export const state = () => ({
  loggedIn: false,
  user: {},
  accessToken: undefined,
  accessTokenExpiresIn: undefined,
  menuVisible: false,
})

export const mutations = {
  toggleAuth(state, status) {
    state.loggedIn = status
  },

  setAccessToken(state, token) {
    state.accessToken = token
  },

  setAccessTokenExpiresIn(state, expiresIn) {
    state.accessTokenExpiresIn = expiresIn
  },

  setUser(state, user) {
    state.user = user
  },

  setMenuVisible(state, visibility) {
    state.menuVisible = visibility
  },
}
