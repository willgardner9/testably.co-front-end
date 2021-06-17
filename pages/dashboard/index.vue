<template>
  <section class="w-full flex items-center justify-center">
    <!-- container -->
    <div
      class="w-full max-w-6xl px-4 flex flex-col justify-between items-center"
    >
      <!-- show abtests -->
      <section
        v-if="abtestsList && abtestsList.length >= 1"
        class="w-full flex flex-col items-center mt-12"
      >
        <div class="w-full flex justify-between items-center mb-8">
          <h3 class="text-base text-gray-500 dark:text-gray-400 font-light">
            Hi
            <span class="font-medium text-black dark:text-gray-300">{{
              userEmail
            }}</span
            >, you are currently running
            <span class="font-medium text-black dark:text-gray-300">{{
              abtestsList.length
            }}</span>
            A/B tests.
          </h3>
          <Button
            destination="/dashboard/new-abtest"
            text="Create new A/B test"
            class="max-w-max"
          />
        </div>
        <div
          v-for="abtest in abtestsList"
          :key="abtest._id"
          class="
            w-full
            rounded-lg
            flex flex-col
            items-center
            justify-between
            mb-8
            shadow-sm
          "
        >
          <div
            class="
              flex
              w-full
              items-center
              p-4
              rounded-lg rounded-b-none
              border border-b-0
              bg-white
              border-gray-200
              dark:bg-gray-800
              dark:border-gray-700
            "
          >
            <!-- <div
              v-if="abtest.type === 'src'"
              class="mr-4 w-8 flex justify-start text-gray-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div
              v-else-if="abtest.type === 'copy'"
              class="mr-4 w-8 flex justify-start text-gray-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <div v-else class="mr-4 w-8 flex justify-start text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                />
              </svg>
            </div> -->
            <div
              class="dark:text-white text-2xl font-semibold flex items-center"
            >
              {{ abtest.name }}
            </div>
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
            <div
              class="
                mr-2
                w-24
                text-xs
                flex
                justify-end
                text-gray-500
                dark:text-gray-400
              "
            >
              {{ new Date(abtest.createdAt).toLocaleDateString() }}
            </div>
          </div>
          <div
            class="
              flex
              w-full
              items-center
              p-4
              rounded-lg rounded-t-none
              border border-t-0 border-gray-200
              dark:bg-gray-800
              dark:border-gray-700
            "
          >
            <p class="w-fulltext-gray-500 text-xs uppercase">variations</p>
          </div>
        </div>
      </section>
      <!-- show dialogue to create first abtest -->
      <section
        v-else-if="abtestsList"
        class="w-full flex flex-col items-center"
      >
        <NewABTestPrompt />
      </section>
      <!-- show skeleton loader -->
      <section v-else class="w-full">
        <SkeletonLoader />
        <SkeletonLoader />
      </section>
    </div>
  </section>
</template>

<script>
export default {
  middleware: ['customAuth', 'checkAccessExpiry'],
  async fetch() {
    const abtests = await this.$axios.get('http://localhost:3001/abtest/', {
      params: {
        user: this.$store.state.user._id,
      },
      headers: {
        Authorization: `Bearer ${this.$store.state.accessToken}`,
      },
      withCredentials: true,
    })
    this.abtestsList = abtests.data
  },
  data() {
    return {
      abtestsList: null,
    }
  },
  computed: {
    userEmail() {
      return this.$store.state.user.email
    },
  },
  //  refresh token every 19 mins
  created() {
    setTimeout(
      () =>
        this.$axios
          .get('http://localhost:3001/token/refresh', { withCredentials: true })
          .then((res) => {
            // refresh token is valid: set new access token and access token expires in
            if (res.status === 200) {
              this.$store.commit(
                'setAccessToken',
                res.data.accessTokenObj.accessToken
              )
              this.$store.commit(
                'setAccessTokenExpiresIn',
                res.data.accessTokenObj.accessTokenExpiresIn
              )
            }
          })
          .catch(() => {
            return ''
          }),
      19 * 60 * 1000
    )
  },
}
</script>

<style scoped>
button {
  background-color: #000000;
  color: #fff;
  width: max-content;
}

button:hover {
  background-color: #1a202c;
}
</style>
