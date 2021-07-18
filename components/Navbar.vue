<template>
  <!-- header -->
  <div class="sticky top-0">
    <header
      class="
        w-full
        h-10vh
        flex
        items-center
        justify-center
        z-50
        shadow-sm
        border-b border-gray-200
        bg-white
        dark:bg-gray-700
        dark:border-gray-600
        backdrop-filter backdrop-blur-md
        bg-opacity-30
        dark:bg-opacity-30
      "
    >
      <!-- container -->
      <div class="w-full max-w-6xl px-4 flex justify-between">
        <!-- logo and slogan container -->
        <div class="relative min-w-max">
          <NuxtLink to="/" class="absolute flex items-center">
            <h1
              class="
                font-extrabold
                text-2xl
                select-none
                text-black
                dark:text-white
              "
            >
              testably
            </h1>
          </NuxtLink>
        </div>
        <!-- menu links -->

        <!-- tablet, laptop, desktop nav -->
        <Navigation />
        <!-- mobile nav toggle -->
        <button
          class="
            block
            flex
            sm:hidden
            items-center
            uppercase
            text-sm
            px-2
            py-1
            rounded
            cursor-pointer
            bg-white
            border border-gray-300
            text-gray-700
            shadow-sm
            hover:bg-gray-100
            hover:border-gray-400
            dark:bg-gray-800
            dark:text-gray-300
            dark:border-gray-700
            dark:hover:bg-gray-700
            dark:hover:border-gray-600
            dark:hover:text-white
          "
          @click="toggleMenu"
        >
          menu
        </button>
      </div>
    </header>
    <!-- mobile nav -->
    <MobileNavigation />
  </div>
</template>

<script>
export default {
  data() {
    return {}
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
      this.$cookiz.set('hasLoggedIn', false)
    },

    toggleMenu() {
      this.visibility = !this.visibility
      this.$store.commit('setMenuVisible', !this.$store.state.menuVisible)
    },
  },
}
</script>

<style scoped>
h1,
h2 {
  font-family: 'Space Grotesk', sans-serif;
}

.h-10vh {
  height: 10vh;
}
</style>
