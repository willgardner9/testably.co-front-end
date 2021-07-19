<template>
  <section class="w-full flex flex-col items-center justify-center mt-8">
    <div
      class="w-full max-w-6xl px-4 flex flex-col justify-between items-start"
    >
      <Button destination="/dashboard" text="← Dashboard" ghost />
    </div>
    <!-- container -->
    <div
      class="w-full max-w-6xl px-4 flex flex-col justify-between items-center"
    >
      <AbtestCard v-if="abtest" :abtest="abtest" class="mt-8" />
      <VariationForm v-if="abtest" :test-type="abtest.type" class="mt-12" />
      <CodeSnippet v-if="abtest" :abtest="abtest" class="mt-12" />
      <div class="mt-4 w-full flex flex-row-reverse">
        <ButtonJS
          v-show="!showDelete"
          text="Delete A/B test"
          ghost
          @click.native="toggleShowDelete"
        />
        <button
          v-show="showDelete"
          class="
            px-2
            py-2
            text-sm
            flex
            justify-center
            transition
            duration-300
            ease-in-out
            rounded
            bg-red-500
            text-white
            border border-red-600
            hover:border-red-500
            hover:bg-red-400
            hover:shadow-sm
            dark:bg-red-700
            dark:border-red-600
            dark:hover:bg-red-600
            dark:hover-border-red-500
            focus:ring-4
            ring-red-300
            dark:ring-red-800
            outline-none
            dark:focus:border-red-500
          "
          @click="handleDelete"
        >
          Confirm delete and lose all A/B test data forever
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  middleware: ['customAuth', 'checkAccessExpiry'],
  async fetch() {
    const abtest = await this.$axios.get(
      `https://testably-back-end-iadh5.ondigitalocean.app/abtest/${this.$route.query.t}`,
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
    this.abtest = abtest.data
  },
  data() {
    return {
      abtest: null,
      showDelete: false,
    }
  },
  methods: {
    toggleShowDelete() {
      this.showDelete = !this.showDelete
    },

    async handleDelete() {
      const deletedTest = await this.$axios.delete(
        `https://testably-back-end-iadh5.ondigitalocean.app/abtest/${this.$route.query.t}`,
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

      return deletedTest ? this.$router.push('/dashboard') : ''
    },
  },
}
</script>

<style scoped>
button:focus {
  outline: none !important;
}
</style>
