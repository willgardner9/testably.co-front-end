<template>
  <section class="w-full flex flex-col items-center">
    <div class="w-full mt-8">
      <div v-if="testType === 'copy'" class="flex flex-col items-start">
        <VariationTips
          variation-desc-start="This A/B test varies some"
          variation-desc-type="text"
          variation-desc-end="on your website. Your variations should be different copy you want to measure the performance of."
          variation-example-one="If you are testing a 'Subscribe now' button on your website, your variations might be:"
          variation-example-one-item-a="'Get started for free!'"
          variation-example-one-item-b="'Start your 7 day free trial'"
          variation-example-two="If you are testing the headline on your landing page, your variations might be:"
          variation-example-two-item-a="'A/B testing made easy'"
          variation-example-two-item-b="'Simple A/B testing'"
        />
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
      //  successfully created new abtest, refresh to show new test and reset value
      if (res.status === 200) {
        this.$nuxt.refresh()
        this.variationValue = ''
      }

      // access token has expired, reload to generate new token
      if (res.status === 401) {
        location.reload()
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
