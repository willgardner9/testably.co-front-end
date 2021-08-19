<template>
  <div class="hidden sm:block flex items-center">
    <nav v-if="this.$store.state.loggedIn" class="flex">
      <Button destination="/dashboard" text="Dashboard" ghost />
      <Button destination="/account" text="Account" ghost class="ml-3" />
      <ButtonJS text="Sign out" ghost class="ml-3" @click.native="logoutUser" />
    </nav>
    <nav v-else class="flex">
      <Button destination="/login" text="Sign in" ghost />
      <ButtonJS text="Pricing" class="ml-3" @click.native="goToPricing" />
      <!-- <Button destination="/register/?plan=free" text="Sign up" class="ml-3" /> -->
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pricingEl: '',
    }
  },
  mounted() {
    console.log(this)
    // this.pricingEl =
    //   this.$parent.$parent.$children[0].$el.children[0].children[10]
  },
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
      this.$cookiz.set('loggedOut', true)
    },

    goToPricing() {
      console.log('firing')
      // this.pricingEl.scrollIntoView({ behavior: 'smooth', block: 'center' })
    },
  },
}
</script>
