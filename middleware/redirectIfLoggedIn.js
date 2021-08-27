export default function ({ store, redirect, route, from }) {
  if (store.state.accessToken && store.state.loggedIn) {
    if (from.name === 'dashboard-abtest') {
      return redirect(from.fullPath)
    }
    if (route.path === '/login') {
      return redirect('/dashboard')
    }
    return redirect(route.path)
  }
}
