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
      px-4
      bg-gray-200
      shadow
      dark:bg-gray-600
      pb-4
      backdrop-filter backdrop-blur-md
      bg-opacity-30
      dark:bg-opacity-30
    "
  >
    <Button
      destination="/dashboard"
      text="Dashboard"
      ghost
      class="w-full justify-start px-4 py-4 text-md mt-4"
    />
    <Button
      destination="/account"
      text="Account"
      ghost
      class="w-full justify-start px-4 py-4 text-md mt-4"
    />
    <ButtonJS
      text="Sign out"
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
      px-4
      bg-gray-200
      shadow
      dark:bg-gray-600
      pb-4
      backdrop-filter backdrop-blur-md
      bg-opacity-30
      dark:bg-opacity-30
    "
  >
    <!-- <Button
      destination="/pricing"
      text="Pricing"
      class="w-full justify-start px-4 py-4 text-md mt-4"
      ghost
    /> -->
    <Button
      destination="/login"
      text="Sign in"
      class="w-full justify-start px-4 py-4 text-md mt-2"
      ghost
    />
    <ButtonJS
      text="Pricing"
      class="w-full justify-start px-4 py-4 text-md mt-2"
      @click.native="goToPricing"
    />
  </nav>
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

    goToPricing() {
      const pricingEl =
        this.$parent.$parent.$children[0].$children[0].$children[4].$el
      pricingEl.scrollIntoView({ behavior: 'smooth' })
    },
  },
}
</script>
