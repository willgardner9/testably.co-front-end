import axios from 'axios'

export default function ({ app, store, redirect, route, from }) {
  const hasLoggedIn = app.$cookiz.get('hasLoggedIn')
  if (!store.state.accessToken && hasLoggedIn) {
    // attempt refresh
    axios
      .get('https://testably-back-end-iadh5.ondigitalocean.app/token/refresh', {
        withCredentials: true,
      })
      .then((res) => {
        console.log('refreshonload res', res)
        // refresh token is valid: login user, set new access token, redirect to dashboard
        if (res.status === 200) {
          store.commit('toggleAuth', true)
          const { accessToken, accessTokenExpiresIn } =
            res.data.newAccessTokenObj
          store.commit('setAccessToken', accessToken)
          store.commit('setAccessTokenExpiresIn', accessTokenExpiresIn)
          axios
            .get(
              `https://testably-back-end-iadh5.ondigitalocean.app/user/${res.data.id}`,
              {
                withCredentials: true,
              }
            )
            .then((res) => {
              console.log('user', res)
              store.commit('setUser', res.data)
            })
            .then(() => {
              if (from.name === 'dashboard-abtest') {
                return redirect(from.fullPath)
              }
              if (route.path === '/login') {
                return redirect(from.fullPath)
              }
              return redirect(route.path)
            })
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
