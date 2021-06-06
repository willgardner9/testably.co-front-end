<template>
  <!-- header -->
  <header
    class="
      w-full
      h-10vh
      bg-white
      dark:bg-gray-800
      flex
      items-center
      justify-center
      sticky
      border-b border-orange-100
      dark:border-gray-600
    "
  >
    <!-- container -->
    <div class="w-full max-w-6xl px-4 flex justify-between">
      <!-- logo and slogan container -->
      <div class="flex items-center">
        <NuxtLink to="/" class="flex items-center">
          <h1
            class="
              font-extrabold
              text-2xl
              select-none
              text-black
              dark:text-white
            "
          >
            Ably
          </h1>
        </NuxtLink>
        <span
          class="
            mx-2
            hidden
            sm:block
            text-gray-500
            dark:text-gray-400
            font-light
            select-none
          "
          >•</span
        >
        <h2
          class="
            text-sm
            font-light
            text-gray-600
            dark:text-gray-400
            hidden
            sm:block
            select-none
          "
        >
          A/B testing made easy
        </h2>
      </div>
      <!-- menu links -->

      <!-- buttons -->
      <div class="flex items-center">
        <div v-if="this.$store.state.loggedIn" class="flex">
          <button
            class="
              px-2
              py-2
              text-sm
              flex
              justify-center
              transition
              duration-300
              ease-in-out
              rounded
              bg-white
              text-gray-700
              hover:bg-gray-200
              dark:bg-gray-800
              dark:text-gray-400
              dark:hover:bg-gray-700
              dark:hover:text-white
            "
            @click="logoutUser"
          >
            Logout
          </button>
          <Button destination="/dashboard" text="Dashboard" class="ml-3" />
        </div>
        <div v-else class="flex">
          <Button destination="pricing" text="Pricing" ghost />
          <Button destination="login" text="Login" ghost class="ml-3" />
          <Button destination="register" text="Try Ably" class="ml-3" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {}
  },
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

<style scoped>
h1,
h2 {
  font-family: 'Space Grotesk', sans-serif;
}

.h-10vh {
  height: 10vh;
}

.ghost-button {
  color: #4a5568;
}

.ghost-button:hover {
  background-color: #edf2f7;
  color: #2d3748;
}
</style>
