<template>
  <div class="hidden sm:block flex items-center">
    <nav v-if="this.$store.state.loggedIn" class="flex">
      <Button destination="/dashboard" text="Dashboard" ghost />
      <Button destination="/account" text="Account" ghost class="ml-3" />
      <ButtonJS text="Logout" ghost class="ml-3" @click.native="logoutUser" />
    </nav>
    <nav v-else class="flex">
      <Button destination="/pricing" text="Pricing" ghost />
      <Button destination="/login" text="Login" ghost class="ml-3" />
      <Button
        destination="/register/?plan=free"
        text="Try for free"
        class="ml-3"
      />
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    logoutUser() {
      this.$axios.get(
        'https://testably-back-end-iadh5.ondigitalocean.app/user/logout',
        {
          withCredentials: true,
        }
      )
      this.$store.commit('toggleAuth', false)
      this.$store.commit('setAccessToken', undefined)
      this.$store.commit('setUser', {})
      this.$router.push('/logout')
      this.$cookiz.set('hasLoggedIn', false)
    },
  },
}
</script>
