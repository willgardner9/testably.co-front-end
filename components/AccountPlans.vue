<template>
  <div>{{ user.currentPlan }}</div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  methods: {
    async handleChangePlan() {
      const payload = {
        priceId: 'price_1JDRsWBn4cPkjuwoDUnMQiia',
        stripeCustomerID: this.userObj.stripeCustomerID,
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

      this.$stripe.redirectToCheckout({ sessionId: session.data })
    },
  },
}
</script>
