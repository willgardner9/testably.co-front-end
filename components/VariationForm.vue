<template>
  <section class="w-full flex flex-col items-center">
    <div class="w-full mt-8">
      <div v-if="testType === 'copy'" class="flex flex-col items-start">
        <div class="flex items-center">
          <div class="min-w-max mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 text-gray-600 dark:text-gray-300"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <p class="text-gray-600 dark:text-gray-300 text-sm">
            This A/B test changes the <span class="font-semibold">text</span> of
            some copy on your website. Your variations should be different copy
            you want to try out.
          </p>
          <button
            v-show="showCopyExamples"
            class="
              ml-2
              font-semibold
              text-gray-500
              dark:text-gray-300
              text-sm
              border-b border-dashed border-gray-500
              dark:border-gray-300
            "
            @click="revealCopyExamples"
          >
            Hide examples
          </button>
          <button
            v-show="!showCopyExamples"
            class="
              ml-2
              font-semibold
              text-gray-500
              dark:text-gray-300
              text-sm
              border-b border-dashed border-gray-500
              dark:border-gray-300
            "
            @click="revealCopyExamples"
          >
            Show examples
          </button>
        </div>
        <div
          v-show="showCopyExamples"
          class="ml-6 mt-2 text-gray-500 dark:text-gray-300 text-sm"
        >
          <p class="mt-2">
            If you're A/B testing a subscription button, your variations might
            be:
          </p>
          <ul class="list-disc list-inside ml-2">
            <li>"Choose plan"</li>
            <li>"Get started for free"</li>
          </ul>
          <p class="mt-2">
            If you're A/B testing your landing page headline, your variations
            might be:
          </p>
          <ul class="list-disc list-inside ml-2">
            <li>"A/B Testing Made Easy"</li>
            <li>"Simple A/B Testing"</li>
          </ul>
        </div>
      </div>
      <p v-else-if="testType === 'src'">Image/Video</p>
      <p v-else>Color</p>
    </div>
    <div class="w-full rounded-lg flex flex-col justify-between mt-4">
      <form class="w-full flex" @submit.prevent="handleNewVariation">
        <Label
          :class="[variationError ? 'text-red-600' : '']"
          class="text-gray-500 text-sm hidden"
          label="email"
          :text="variationText"
          aria-hidden="false"
        />
        <input
          v-model="variationValue"
          :placeholder="variationText"
          :class="[variationError ? 'text-red-600 input-error' : '']"
          class="
            p-3
            text-sm
            input
            w-full
            transition
            duration-150
            ease-in-out
            rounded
            mr-1
            text-gray-500
            hover:border-indigo-200
            dark:hover:border-gray-700
            hover:ring-2 hover:ring-indigo-200
            focus:ring-2 focus:ring-indigo-200
            dark:focus:ring-gray-600
            outline-none
            border border-gray-200
            dark:bg-gray-900
            dark:border-gray-600
            dark:hover:ring-gray-600
            dark:text-white
          "
          type="text"
          name="variation"
          @focus="dismissError"
        />
        <ButtonJS
          text="Add variation"
          ghost
          class="ml-1 min-w-max items-center border-gray-200"
        />
      </form>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    testType: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      variationError: false,
      variationText: 'Type your variation',
      variationValue: '',
      showCopyExamples: false,
    }
  },
  methods: {
    dismissError() {
      if (this.variationError === true) {
        this.variationError = false
        this.variationText = 'Type your variation'
        this.variationValue = ''
      }
    },
    async handleNewVariation() {
      if (!this.variationValue) {
        this.variationError = true
        this.variationText = 'Please add a variation'
        return
      }

      const payload = {
        abtest: this.$route.query.t,
        variable: this.variationValue,
      }

      const options = {
        headers: {
          Authorization: `Bearer ${this.$store.state.accessToken}`,
        },
        withCredentials: true,
      }

      const res = await this.$axios.post(
        'http://localhost:3001/variation',
        payload,
        options
      )
      //  successfully created new abtest, redirect to that test to create variations
      if (res.status === 200) {
        this.$nuxt.refresh()
        this.variationValue = ''
      }
    },

    revealCopyExamples() {
      this.showCopyExamples = !this.showCopyExamples
    },
  },
}
</script>

<style scoped>
.input-error {
  border: 1px solid #fc8181 !important;
}

.input-error-text {
  color: #fc8181 !important;
}
</style>
