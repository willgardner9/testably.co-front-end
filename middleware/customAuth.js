export default function ({ store, redirect }) {
  if (!store.state.accessToken || !store.state.loggedIn) {
    return redirect('/login')
  }
}
