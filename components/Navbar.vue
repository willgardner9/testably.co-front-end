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
        shadow-drop
        border-b border-gray-200
        bg-white
        dark:bg-gray-700
        dark:border-gray-700
        backdrop-filter backdrop-blur-md
        bg-opacity-30
        dark:bg-opacity-30
      "
    >
      <!-- container -->
      <div class="w-full max-w-6xl px-4 flex justify-between items-center">
        <!-- logo and slogan container -->
        <div class="min-w-max">
          <NuxtLink to="/" class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              style="isolation: isolate"
              viewBox="0 0 100 100"
              width="100pt"
              height="100pt"
              class="w-8 h-auto mr-2 dark:text-white"
            >
              <defs>
                <clipPath id="_clipPath_VolGTqHEAuUn6w20vShWDBR1zMBg2F76">
                  <rect width="100" height="100" />
                </clipPath>
              </defs>
              <g clip-path="url(#_clipPath_VolGTqHEAuUn6w20vShWDBR1zMBg2F76)">
                <path
                  d=" M 67.321 50 L 50 20 L 32.679 50 L 67.321 50 Z  M 73.094 60 L 84.641 80 L 50 80 L 15.359 80 L 26.906 60 L 73.094 60 Z "
                  fill-rule="evenodd"
                  fill="currentColor"
                />
              </g>
            </svg>

            <!-- <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              style="isolation: isolate"
              viewBox="0 0 100 100"
              width="100pt"
              height="100pt"
              class="w-8 h-auto mr-2 dark:text-white"
            >
              <defs>
                <clipPath id="_clipPath_1CpPgUN5A72802e4nb0dwvRqtCfdAuZ8">
                  <rect width="100" height="100" />
                </clipPath>
              </defs>
              <g clip-path="url(#_clipPath_1CpPgUN5A72802e4nb0dwvRqtCfdAuZ8)">
                <path
                  d=" M 0 50 C 0 22.404 22.404 0 50 0 C 77.596 0 100 22.404 100 50 C 100 77.596 77.596 100 50 100 C 22.404 100 0 77.596 0 50 Z  M 75.16 65.419 L 84.411 56.168 L 73.078 44.835 L 88.806 29.107 L 79.092 19.393 L 63.364 35.12 L 49.564 21.32 L 40.312 30.572 L 54.112 44.372 L 36.689 61.796 L 36.689 61.796 Q 34.376 64.109 32.294 62.027 L 32.294 62.027 L 21.963 51.696 L 12.712 60.948 L 28.902 77.138 L 28.902 77.138 Q 31.523 79.759 34.877 79.721 L 34.877 79.721 L 34.877 79.721 Q 38.231 79.682 40.852 77.061 L 40.852 77.061 L 63.827 54.086 L 75.16 65.419 Z "
                  fill-rule="evenodd"
                  fill="currentColor"
                />
              </g>
            </svg> -->
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
.-mt-custom {
  margin-top: -4px;
}
h1,
h2 {
  font-family: 'Space Grotesk', sans-serif;
}

.h-10vh {
  height: 10vh;
}

.shadow-drop {
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 2%), 0 4px 6px -2px rgb(0 0 0 / 2%);
}
</style>
