<template>
  <!-- header -->
  <div>
    <header
      class="
        w-full
        h-10vh
        flex
        items-center
        justify-center
        sticky
        shadow-sm
        border-b border-gray-200
        bg-white
        dark:bg-gray-800
        dark:border-gray-700
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
              testably
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

        <!-- tablet, laptop, desktop nav -->
        <div class="hidden sm:block flex items-center">
          <nav v-if="this.$store.state.loggedIn" class="flex">
            <Button destination="/dashboard" text="Dashboard" ghost />
            <Button
              text="Logout"
              ghost
              class="ml-3"
              @click.native="logoutUser"
            />
          </nav>
          <nav v-else class="flex">
            <Button destination="pricing" text="Pricing" ghost />
            <Button destination="login" text="Login" ghost class="ml-3" />
            <Button destination="register" text="Try testably →" class="ml-3" />
          </nav>
        </div>

        <!-- mobile nav -->
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
    <nav
      v-show="this.$store.state.menuVisible"
      v-if="this.$store.state.loggedIn"
      id="loggedInMobileNav"
      class="flex flex-col absolute"
    >
      <Button destination="/dashboard" text="Dashboard" ghost />
      <Button text="Logout" ghost @click.native="logoutUser" />
    </nav>
    <nav
      v-show="this.$store.state.menuVisible"
      v-else
      id="loggedOutMobileNav"
      class="
        flex flex-col
        absolute
        w-full
        items-star
        px-4
        bg-white
        dark:bg-gray-800
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
  </div>
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

.ghost-button {
  color: #4a5568;
}

.ghost-button:hover {
  background-color: #edf2f7;
  color: #2d3748;
}
</style>
