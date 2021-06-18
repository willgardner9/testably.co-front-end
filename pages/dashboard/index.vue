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
        <div
          class="
            w-full
            flex flex-col
            sm:flex-row
            justify-between
            items-center
            mb-8
          "
        >
          <h3 class="text-base text-gray-500 dark:text-gray-400 font-light">
            Hi
            <span class="font-medium text-black dark:text-gray-300">{{
              userEmail
            }}</span
            >, you are currently running
            <span v-if="abtestsList.length >= 2"
              ><span class="font-medium text-black dark:text-gray-300">{{
                abtestsList.length
              }}</span>
              A/B tests:</span
            >
            <span v-else
              ><span class="font-medium text-black dark:text-gray-300">{{
                abtestsList.length
              }}</span>
              A/B test:</span
            >
          </h3>
          <Button
            destination="/dashboard/new-abtest"
            text="Create new A/B test"
            class="max-w-max mt-4 sm:mt-0"
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
              flex flex-col
              items-start
              sm:flex-row
              w-full
              sm:items-center
              p-4
              rounded-lg rounded-b-none
              border border-b-0
              bg-white
              border-gray-200
              dark:bg-gray-800
              dark:border-gray-700
            "
          >
            <div
              class="
                dark:text-white
                text-2xl
                font-semibold
                flex
                items-center
                mb-2
                sm:mb-0
              "
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
                text-xs
                flex
                justify-end
                text-gray-500
                dark:text-gray-400
                mr-2
                mb-2
                sm:mb-0
              "
            >
              <span>Type:&nbsp;</span>
              <span
                v-if="abtest.type === 'src'"
                class="font-medium dark:text-gray-300"
              >
                Image/Video</span
              >
              <span
                v-else-if="abtest.type === 'copy'"
                class="font-medium dark:text-gray-300"
              >
                Text</span
              >
              <span v-else class="font-medium dark:text-gray-300"> Color</span>
            </div>
            <div
              class="text-xs flex justify-end text-gray-500 dark:text-gray-400"
            >
              <span>Created:&nbsp;</span>
              <span class="font-medium dark:text-gray-300">{{
                new Date(abtest.createdAt).toLocaleDateString()
              }}</span>
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
              overflow-x-auto
            "
          >
            <div
              class="
                w-full
                flex flex-grow
                text-gray-500 text-xs
                font-medium
                pr-2
              "
            >
              <p>Variation</p>
            </div>
            <div class="flex text-gray-500 text-xs font-medium px-2">
              <p>Sessions</p>
            </div>
            <div class="flex text-gray-500 text-xs font-medium px-2">
              <p>Conversions</p>
            </div>
            <div class="min-w-max flex text-gray-500 text-xs font-medium px-2">
              <p>Conversion Rate</p>
            </div>
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
