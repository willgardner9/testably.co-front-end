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
        <!-- dashboard welcome message -->
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
          <div class="flex flex-col">
            <h3 class="text-base text-gray-500 dark:text-gray-400 font-light">
              Hi
              <span class="font-medium text-black dark:text-gray-300">{{
                userObj.email
              }}</span
              >, you are currently running
              <span v-if="abtestsList.length >= 2"
                ><span class="font-medium text-black dark:text-gray-300">{{
                  abtestsList.length
                }}</span>
                A/B tests.</span
              >
              <span v-else
                ><span class="font-medium text-black dark:text-gray-300">{{
                  abtestsList.length
                }}</span>
                A/B test.</span
              >
            </h3>
            <div
              v-show="userObj.currentPlan === 'none'"
              class="
                flex flex-row
                text-sm text-gray-500
                dark:text-gray-500
                font-light
              "
            >
              <h4 class="mr-4">{{ abtestsList.length }}/1 tests</h4>
              <h4>{{ totalSessions }}/500 sessions</h4>
            </div>
            <div
              v-show="userObj.currentPlan === '699'"
              class="
                flex flex-row
                text-sm text-gray-500
                dark:text-gray-500
                font-light
              "
            >
              <h4 class="mr-4">{{ abtestsList.length }}/3 tests</h4>
              <h4>{{ totalSessions }}/5000 sessions</h4>
            </div>
            <div
              v-show="userObj.currentPlan === '1499'"
              class="
                flex flex-row
                text-sm text-gray-500
                dark:text-gray-500
                font-light
              "
            >
              <h4 class="mr-4">{{ abtestsList.length }}/unlimited tests</h4>
              <h4>{{ totalSessions }}/unlimited sessions</h4>
            </div>
          </div>

          <Button
            v-show="!isButtonDisabled"
            destination="/dashboard/new-abtest"
            text="Create new A/B test"
            class="max-w-max mt-4 sm:mt-0"
          />
          <Button
            v-show="isButtonDisabled"
            destination="/account"
            text="Upgrade plan"
            class="max-w-max mt-4 sm:mt-0"
          />
        </div>
        <div
          v-for="abtest in abtestsList"
          :key="abtest._id"
          class="w-full flex flex-col items-center justify-between"
        >
          <AbtestCard
            :abtest="abtest"
            class="mb-8"
            show-prompt
            show-details-button
          />
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
    const abtests = await this.$axios.get(
      'https://testably-back-end-iadh5.ondigitalocean.app/abtest/',
      {
        params: {
          user: this.$store.state.user._id,
        },
        headers: {
          Authorization: `Bearer ${this.$store.state.accessToken}`,
        },
        withCredentials: true,
      }
    )
    this.abtestsList = abtests.data
  },
  data() {
    return {
      abtestsList: null,
    }
  },
  computed: {
    userObj() {
      return this.$store.state.user
    },

    totalSessions() {
      const variationArray = []
      this.abtestsList.forEach((test) => {
        variationArray.push(test.variations)
      })
      let totalSessions = 0
      variationArray.flat().forEach((variation) => {
        totalSessions += variation.sessions
      })
      return totalSessions
    },

    isButtonDisabled() {
      let isDisabled = false
      if (this.userObj.currentPlan === 'none') {
        if (this.totalSessions >= 500 || this.abtestsList.length >= 1) {
          isDisabled = true
        }
      }
      if (this.userObj.currentPlan === '699') {
        if (this.totalSessions >= 5000 || this.abtestsList.length >= 3) {
          isDisabled = true
        }
      }
      console.log(isDisabled)
      return isDisabled
    },
  },
  mounted() {
    if (this.userObj.currentPlan === 'none') {
      return this.$router.push('/account')
    }
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
