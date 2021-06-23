<template>
  <section class="w-full flex flex-col items-center">
    <div class="w-full rounded-lg flex flex-col justify-between mt-8">
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
            p-2
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
  data() {
    return {
      variationError: false,
      variationText: 'Type your variation',
      variationValue: '',
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
