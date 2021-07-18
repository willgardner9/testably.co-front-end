<template>
  <section class="w-full flex flex-col items-center">
    <div
      class="
        flex flex-col
        items-start
        justify-between
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
      <h3
        class="
          break-normal
          sm:min-w-max
          dark:text-white
          text-xl
          font-semibold
          flex
          items-center
          mb-2
          sm:mb-0
        "
      >
        Add variations
      </h3>
    </div>
    <div
      class="
        w-full
        items-center
        p-4
        rounded-lg rounded-t-none
        border border-t-0 border-gray-200
        dark:bg-gray-800
        dark:border-gray-700
      "
    >
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
      <p v-else-if="testType === 'src'">
        <VariationTips
          variation-desc-start="This A/B test varies an"
          variation-desc-type="image / video"
          variation-desc-end="on your website. Your variations should be URLs to different images or videos you want to measure the performance of."
          variation-example-one="If you are testing your hero image on your landing page, your variations might be:"
          variation-example-one-item-a="An image showcasing your product"
          variation-example-one-item-b="An image showcasing your product with people"
          variation-example-two="If you are testing your production demonstration video, your variations might be:"
          variation-example-two-item-a="Your video with subtitles"
          variation-example-two-item-b="Your video with no subtitles"
        />
      </p>
      <p v-else>
        <VariationTips
          variation-desc-start="This A/B test varies the"
          variation-desc-type="color"
          variation-desc-end="of an element on your website. Your variations should be hex codes of colors you want to measure the performance of."
          variation-example-one="If you are testing the colour of your CTA button, your variations might be:"
          variation-example-one-item-a="A blue color in keeping with your website"
          variation-example-one-item-b="A red color that stands out"
          variation-example-two="If you are testing the background of your pricing section, your variations might be:"
          variation-example-two-item-a="A dark color that stands out"
          variation-example-two-item-b="A light color that blends in"
        />
      </p>
      <div class="w-full rounded-lg flex flex-col justify-between mt-4">
        <form class="w-full flex" @submit.prevent="handleNewVariation">
          <div
            v-if="testType === 'copy' || testType === 'src'"
            class="w-full flex"
          >
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
          </div>
          <div v-else class="w-full flex items-center">
            <label
              id="colorPickerLabel"
              class="
                w-4/5
                h-full
                rounded-md
                shadow-sm
                border border-gray-200
                dark:border-gray-700
              "
              :style="{ backgroundColor: variationValue }"
            >
              <input
                id="colorpicker"
                v-model="variationValue"
                type="color"
                name="Color picker"
                class="invisible w-full h-full"
              />
            </label>
            <p :style="{ color: variationValue }" class="ml-2 text-sm">
              {{ variationValue }}
            </p>
          </div>
          <ButtonJS
            text="Add variation"
            ghost
            class="ml-1 min-w-max items-center border-gray-200"
          />
        </form>
      </div>
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
        'https://testably-back-end-iadh5.ondigitalocean.app/variation',
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
