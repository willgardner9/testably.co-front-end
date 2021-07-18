<template>
  <section class="w-full flex flex-col items-center justify-center my-8">
    <!-- container -->
    <div
      class="w-full max-w-6xl px-4 flex flex-col justify-between items-start"
    >
      <Button destination="/dashboard" text="← Dashboard" ghost />
    </div>
    <div
      class="w-full max-w-6xl px-4 flex flex-col justify-between items-center"
    >
      <form
        class="
          w-full
          p-8
          bg-white
          dark:bg-gray-800
          mt-8
          shadow-sm
          flex flex-col
          items-center
          justify-center
          rounded-lg
          border border-gray-200
          dark:border-gray-700
        "
        @submit.prevent="addNewAbtest"
      >
        <h4
          class="
            text-black
            dark:text-white
            font-semibold
            text-3xl
            sm:mt-0
            text-center
            w-full
          "
        >
          Create a new A/B test
        </h4>
        <div class="w-full flex flex-col mt-4">
          <Label
            :class="[AbtestTypeError ? 'text-red-600' : '']"
            class="label"
            label="Type of A/B test"
            :text="AbtestTypeText"
          />
          <div class="w-full flex md:flex-row flex-col">
            <AbtestType
              class="md:mr-4 mr-0 md:mb-0 mb-4"
              :class="[AbtestTypeError ? 'input-error' : '']"
              image="text"
              ab-test-type="Text"
              ab-test-type-description="Vary a piece of copy on your website, e.g. hero text, a CTA, or tagline."
              :active-type="activeType"
              db-key="copy"
              @onUpdateType="updateActiveType"
              @click.native="dismissError"
            />
            <AbtestType
              class="md:mb-0 mb-4"
              :class="[AbtestTypeError ? 'input-error' : '']"
              image="color"
              ab-test-type="Color"
              ab-test-type-description="Vary the colour of an element on your website, e.g. hero background or CTA button background."
              :active-type="activeType"
              db-key="colour"
              @onUpdateType="updateActiveType"
              @click.native="dismissError"
            />
            <AbtestType
              class="md:ml-4 mr-0"
              :class="[AbtestTypeError ? 'input-error' : '']"
              image="src"
              ab-test-type="Image / Video"
              ab-test-type-description="Vary an image or video on your website, e.g. your hero image or featured video."
              :active-type="activeType"
              db-key="src"
              @onUpdateType="updateActiveType"
              @click.native="dismissError"
            />
          </div>
        </div>
        <div class="field w-full mt-8">
          <Label
            :class="[nameError ? 'text-red-600' : '']"
            class="label"
            label="name"
            :text="nameText"
          />
          <div class="flex items-center mb-4">
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
            <p class="text-sm text-gray-700 dark:text-gray-300 font-light ml-2">
              The name of your A/B so you can easily identify it, e.g. 'Landing
              page headline copy'
            </p>
          </div>
          <input
            v-model="name"
            class="
              input
              w-full
              transition
              duration-150
              ease-in-out
              rounded-lg
              hover:border-indigo-200
              dark:hover:border-gray-500
              hover:ring-4 hover:ring-indigo-100
              border border-gray-200
              dark:bg-gray-900
              dark:border-gray-600
              dark:hover:ring-gray-600
              dark:text-white
            "
            type="text"
            name="conversion-url"
            :class="[nameError ? 'text-red-600 input-error' : '']"
            @focus="dismissError"
          />
        </div>
        <div class="field w-full mt-8">
          <Label
            :class="[conversionURLError ? 'text-red-600' : '']"
            class="label"
            label="Conversion URL"
            :text="conversionURLText"
          />
          <div class="flex items-center mb-4">
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
            <p class="text-sm text-gray-700 dark:text-gray-300 font-light ml-2">
              The URL you want visitors to click through to. This will commonly
              be a sales or CTA page, e.g. your registration or free trial sign
              up page.
            </p>
          </div>
          <input
            v-model="conversionURL"
            class="
              input
              w-full
              transition
              duration-150
              ease-in-out
              rounded-lg
              hover:border-indigo-200
              dark:hover:border-gray-500
              hover:ring-4 hover:ring-indigo-100
              border border-gray-200
              dark:bg-gray-900
              dark:border-gray-600
              dark:hover:ring-gray-600
              dark:text-white
            "
            type="text"
            name="conversion-url"
            :class="[conversionURLError ? 'text-red-600 input-error' : '']"
            @focus="dismissError"
          />
        </div>
        <button
          type="submit"
          class="
            sm:w-1/2
            p-4
            text-md
            flex
            justify-center
            transition
            duration-150
            ease-in-out
            mt-8
            rounded-lg
            bg-indigo-500
            text-white
            border border-indigo-600
            hover:border-indigo-500
            hover:bg-indigo-400
            dark:bg-indigo-700
            dark:border-indigo-600
            dark:hover:bg-indigo-600
            dark:hover-border-indigo-500
          "
        >
          Next
        </button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  middleware: ['customAuth', 'checkAccessExpiry'],
  data() {
    return {
      conversionURL: '',
      conversionURLText: 'Conversion URL',
      conversionURLError: false,
      name: '',
      nameText: 'A/B Test Name',
      nameError: false,
      AbtestTypeText: 'Type of A/B test',
      AbtestTypeError: false,
      activeType: '',
      activeDbKey: '',
    }
  },
  methods: {
    async addNewAbtest() {
      if (!this.activeType) {
        this.AbtestTypeText = 'Please choose an A/B test type'
        this.AbtestTypeError = true
        return
      }

      if (!this.name) {
        this.nameText = 'Please enter your Conversion URL'
        this.nameError = true
        return
      }

      if (!this.conversionURL) {
        this.conversionURLText = 'Please enter your Conversion URL'
        this.conversionURLError = true
        return
      }

      const payload = {
        user: this.$store.state.user._id,
        type: this.activeDbKey,
        name: this.name,
        conversionURL: this.conversionURL,
      }

      const options = {
        headers: {
          Authorization: `Bearer ${this.$store.state.accessToken}`,
        },
        withCredentials: true,
      }

      const res = await this.$axios.post(
        'https://testably-back-end-iadh5.ondigitalocean.app/abtest',
        payload,
        options
      )
      //  successfully created new abtest, redirect to that test to create variations
      if (res.status === 200) {
        this.$router.push(`abtest/?t=${res.data._id}`)
      }
    },

    dismissError() {
      this.conversionURLText = 'Conversion URL'
      this.conversionURLError = false
      this.nameText = 'A/B Test Name'
      this.nameError = false
      this.AbtestTypeText = 'Type of A/B test'
      this.AbtestTypeError = false
    },

    updateActiveType(type, dbKey) {
      this.activeType = type
      this.activeDbKey = dbKey
    },
  },
}
</script>

<style scoped>
.h-80vh {
  height: 80vh;
}

h3,
h4 {
  font-family: 'Space Grotesk', sans-serif;
}

.field {
  display: flex;
  flex-direction: column;
}

.input {
  padding: 1rem;
}

.input-error {
  border: 1px solid #fc8181 !important;
}

.label {
  margin-top: 1.5rem;
}

.r-4 {
  right: 1rem;
}

.t-4 {
  top: 1rem;
}

.mt-5vh {
  margin-top: 5vh;
}
</style>
