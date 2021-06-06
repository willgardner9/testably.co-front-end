import axios from 'axios'

export default function ({ store, redirect }) {
  //  check auth workflow required
  if (store.state.accessTokenExpiresIn) {
    // check if access token has expired, or will expire in 1 minute
    if (store.state.accessTokenExpiresIn < Date.now() + 60 * 1000) {
      //  refresh access token if so
      axios
        .get('http://localhost:3001/token/refresh', { withCredentials: true })
        .then((res) => {
          // refresh token is valid: set new access token, accesstokenexpires in
          if (res.status === 200) {
            const { accessToken, accessTokenExpiresIn } =
              res.data.newAccessTokenObj
            store.commit('setAccessToken', accessToken)
            store.commit('setAccessTokenExpiresIn', accessTokenExpiresIn)
          }
        })
    }
  }
}
