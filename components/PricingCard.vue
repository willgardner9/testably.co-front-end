<template>
  <div
    class="
      md:w-1/3
      w-full
      p-4
      lg:p-8
      md:first:mr-4
      md:last:ml-4
      md:even:mx-4
      mt-4
      md:mt-0
      bg-white
      flex flex-col
      justify-center
      items-center
      rounded-lg
      border border-gray-200
      dark:bg-gray-800
      dark:border-gray-600
      shadow-sm
    "
  >
    <h4 class="text-gray-600 dark:text-white text-xl sm:mt-0 text-center">
      {{ pricingData.title }}
    </h4>
    <h5
      class="text-black dark:text-white font-semibold text-3xl my-4 text-center"
    >
      {{ pricingData.price }}
      <span class="text-gray-400 text-sm font-normal"> / month</span>
    </h5>
    <div class="px-4 flex flex-col items-start text-green-600">
      <div
        v-for="benefit in pricingData.benefits"
        :key="benefit"
        class="flex items-center my-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 min-width-1rem"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clip-rule="evenodd"
          />
        </svg>
        <p class="text-black dark:text-gray-300 ml-2">{{ benefit }}</p>
      </div>
    </div>
    <ButtonJS
      v-show="!noButtons"
      text="Choose plan"
      class="max-w-max mt-4"
      ghost
      @click.native="goToStripePlan"
    />
  </div>
</template>

<script>
export default {
  props: {
    pricingData: {
      type: Object,
      required: true,
    },
    noButtons: {
      type: Boolean,
      required: false,
    },
  },
  methods: {
    async goToStripePlan() {
      if (!this.$store.state.loggedIn) {
        return this.$router.push(
          `/register/?plan=${this.pricingData.routerName}`
        )
      }

      const payload = {
        priceId: this.pricingData.stripePrice,
        stripeCustomerID: this.$store.state.user.stripeCustomerID,
      }

      const options = {
        headers: {
          Authorization: `Bearer ${this.$store.state.accessToken}`,
        },
        withCredentials: true,
      }

      const session = await this.$axios.post(
        'https://testably-back-end-iadh5.ondigitalocean.app/stripe/create-checkout-session',
        payload,
        options
      )

      return this.$stripe.redirectToCheckout({ sessionId: session.data })
    },
  },
}
</script>

<style scoped>
.min-width-1rem {
  min-width: 1rem;
}
</style>
