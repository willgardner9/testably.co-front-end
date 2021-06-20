<template>
  <nav
    v-show="this.$store.state.menuVisible"
    v-if="this.$store.state.loggedIn"
    id="loggedInMobileNav"
    class="
      sm:hidden
      flex flex-col
      absolute
      w-full
      items-star
      px-4
      bg-white
      dark:bg-gray-900
      pb-4
      border-b border-gray-200
      dark:border-gray-700
    "
  >
    <Button
      destination="/dashboard"
      text="Dashboard"
      ghost
      class="w-full justify-start px-4 py-4 text-md mt-4"
    />
    <Button
      text="Logout"
      ghost
      class="w-full justify-start px-4 py-4 text-md mt-4"
      @click.native="logoutUser"
    />
  </nav>
  <nav
    v-show="this.$store.state.menuVisible"
    v-else
    id="loggedOutMobileNav"
    class="
      sm:hidden
      flex flex-col
      absolute
      w-full
      items-star
      px-4
      bg-white
      dark:bg-gray-900
      pb-4
      border-b border-gray-200
      dark:border-gray-700
    "
  >
    <Button
      destination="pricing"
      text="Pricing"
      class="w-full justify-start px-4 py-4 text-md mt-4"
      ghost
    />
    <Button
      destination="login"
      text="Login"
      class="w-full justify-start px-4 py-4 text-md mt-2"
      ghost
    />
    <Button
      destination="register"
      text="Try testably →"
      class="w-full justify-start px-4 py-4 text-md mt-2"
    />
  </nav>
</template>

<script>
export default {
  methods: {
    logoutUser() {
      this.$axios.get('http://localhost:3001/user/logout', {
        withCredentials: true,
      })
      this.$store.commit('toggleAuth', false)
      this.$store.commit('setAccessToken', undefined)
      this.$store.commit('setUser', {})
      this.$router.push('/logout')
      this.$cookiz.set('hasLoggedIn', false)
    },
  },
}
</script>
