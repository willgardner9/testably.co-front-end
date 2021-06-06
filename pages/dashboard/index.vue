<template>
  <section class="w-full flex items-center justify-center">
    <!-- container -->
    <div
      class="
        w-full
        max-w-6xl
        px-4
        flex flex-col
        justify-between
        mt-5vh
        items-center
      "
    >
      <!-- show abtests -->
      <section
        v-if="abtestsList && abtestsList.length >= 1"
        class="w-full flex flex-col items-center"
      >
        <div
          v-for="abtest in abtestsList"
          :key="abtest._id"
          class="
            w-full
            rounded
            flex flex-col
            items-center
            justify-between
            border
            p-4
            mb-4
            bg-white
            border-orange-100
            dark:bg-gray-800
            dark:border-gray-700
          "
        >
          <p class="w-full mb-2 text-gray-500 text-xs uppercase">details</p>
          <div class="flex w-full items-center justify-between">
            <div
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
            </div>
            <div class="mr-2 ml-4 w-full dark:text-white text-lg font-semibold">
              {{ abtest.conversionURL }}
            </div>
            <div class="mr-2 w-24 text-xs flex justify-end dark:text-gray-400">
              {{ new Date(abtest.createdAt).toLocaleDateString() }}
            </div>
          </div>
          <p class="w-full mt-4 text-gray-500 text-xs uppercase">variations</p>
        </div>
        <Button
          destination="/dashboard/new-abtest"
          text="Create new abtest"
          class="mt-20 max-w-max"
        />
      </section>
      <!-- show dialogue to create first abtest -->
      <section
        v-else-if="abtestsList"
        class="w-full flex flex-col items-center"
      >
        <div
          class="
            w-full
            add-first-abtest
            rounded
            h-24
            flex
            justify-center
            relative
          "
        >
          <h3
            class="
              flex
              items-center
              font-medium
              text-xl text-center
              dark:text-gray-300
            "
          >
            Your A/B tests will appear here, create your first one now!
          </h3>
          <div class="absolute bottom-25 animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="75"
              height="20"
              class="transform rotate-90 stroke-current dark:text-gray-100"
            >
              <g
                fill="none"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
              >
                <path
                  d="M2.347 9.986c9.493-.062 19.22 1.688 28.654.271 2.884-.434 9.69-1.479 10.938-4.862 1.027-2.788-1.396-3.576-3.87-3.362-2.499.217-6.745 2.109-6.838 5.112-.122 3.962 5.874 4.825 8.68 5.199 9.058 1.206 18.126-1.019 27.186-.983"
                />
                <path
                  d="M63.172 18c2.325-3.721 6.603-4.349 9.481-7.403-3.027-1.045-9.07-3.442-11.113-6.125"
                />
              </g>
            </svg>
          </div>
        </div>
        <Button
          destination="/dashboard/new-abtest"
          text="Create new abtest"
          class="mt-20 max-w-max"
        />
      </section>
      <!-- show skeleton loader -->
      <section v-else class="w-full">
        <div
          class="
            w-full
            bg-white
            dark:bg-gray-800
            rounded-md
            border border-orange-100
            dark:border-gray-600
            h-32
            flex flex-col
            justify-center
            relative
            p-4
          "
        >
          <div
            class="
              bg-orange-100
              dark:bg-gray-700
              w-full
              h-10
              rounded-md
              animate-pulse
            "
          ></div>
          <div class="w-full flex mt-4">
            <div
              class="
                bg-orange-100
                dark:bg-gray-700
                w-1/4
                h-10
                rounded-md
                animate-pulse
                mr-2
              "
            ></div>
            <div
              class="
                bg-orange-100
                dark:bg-gray-700
                w-1/4
                h-10
                rounded-md
                animate-pulse
                ml-2
                mr-2
              "
            ></div>
            <div
              class="
                bg-orange-100
                dark:bg-gray-700
                w-1/4
                h-10
                rounded-md
                animate-pulse
                ml-2
                mr-2
              "
            ></div>
            <div
              class="
                bg-orange-100
                dark:bg-gray-700
                w-1/4
                h-10
                rounded-md
                animate-pulse
                ml-2
              "
            ></div>
          </div>
        </div>
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
    //  need to implement some kind of refresh for jwt if we get a 401, refresh page
    console.log(abtests)
    console.log(abtests.data)
    this.abtestsList = abtests.data
  },
  data() {
    return {
      abtestsList: null,
    }
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
.mt-5vh {
  margin-top: 5vh;
}

button {
  background-color: #000000;
  color: #fff;
  width: max-content;
}

button:hover {
  background-color: #1a202c;
}

.bottom-25 {
  bottom: -35px;
}
</style>
