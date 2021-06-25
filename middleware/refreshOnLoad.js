import axios from 'axios'

export default function ({ app, store, redirect, route }) {
  const hasLoggedIn = app.$cookiz.get('hasLoggedIn')
  if (!store.state.accessToken && hasLoggedIn) {
    // attempt refresh
    axios
      .get('http://localhost:3001/token/refresh', { withCredentials: true })
      .then((res) => {
        // refresh token is valid: login user, set new access token, redirect to dashboard
        if (res.status === 200) {
          store.commit('toggleAuth', true)
          const { accessToken, accessTokenExpiresIn } =
            res.data.newAccessTokenObj
          store.commit('setAccessToken', accessToken)
          store.commit('setAccessTokenExpiresIn', accessTokenExpiresIn)
          axios
            .get(`http://localhost:3001/user/${res.data.id}`, {
              withCredentials: true,
            })
            .then((res) => {
              store.commit('setUser', res.data)
            })
            .then(() => redirect('/dashboard'))
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
