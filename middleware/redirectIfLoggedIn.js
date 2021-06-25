export default function ({ store, redirect, route }) {
  if (store.state.accessToken && store.state.loggedIn) {
    return redirect(route)
  }
}
