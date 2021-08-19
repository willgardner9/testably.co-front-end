<template>
  <section class="w-full flex items-center justify-center">
    <!-- container -->
    <div class="w-full max-w-6xl flex flex-col justify-between items-center">
      <div v-if="userObj.currentPlan === 'none'" class="w-full">
        <h3
          class="font-light text-xl text-center dark:text-gray-300 mt-12 px-4"
        >
          Hi
          <span class="font-medium dark:text-white">{{ userObj.email }}</span>
          you don't currently have an active plan. Please Choose a plan below to
          start A/B testing.
        </h3>
        <PricingTable class="mt-12" />
      </div>
      <div v-else>
        <div class="flex flex-col sm:flex-row w-full items-center px-4 mt-12">
          <h3
            class="
              text-base text-gray-500
              dark:text-gray-400
              font-light
              sm:mr-2
            "
          >
            Hi
            <span class="font-medium text-black dark:text-gray-300">{{
              userObj.email
            }}</span
            >, you're currently on the
            <span class="font-medium text-black dark:text-gray-300">{{
              userObj.currentPlan === '0' ? 'free plan.' : ''
            }}</span>
            <span class="font-medium text-black dark:text-gray-300">{{
              userObj.currentPlan === '699' ? 'basic plan.' : ''
            }}</span>
            <span class="font-medium text-black dark:text-gray-300">{{
              userObj.currentPlan === '1499' ? 'premium plan.' : ''
            }}</span>
            If you want to change or cancel your plan, please click the 'Manage
            billing' button. As a reminder, testably plans are show below.
          </h3>
          <div>
            <ButtonJS
              text="Manage billing"
              class="min-w-max sm:ml-2 mt-8 sm:mt-0"
              @click.native="handleManageBilling"
            />
          </div>
        </div>
        <PricingTable no-buttons-control class="mt-20" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  middleware: ['customAuth', 'checkAccessExpiry'],
  computed: {
    userObj() {
      return this.$store.state.user
    },
  },
  methods: {
    async handleManageBilling() {
      const payload = {
        stripeCustomerID: this.$store.state.user.stripeCustomerID,
      }

      const options = {
        headers: {
          Authorization: `Bearer ${this.$store.state.accessToken}`,
        },
        withCredentials: true,
      }

      const session = await this.$axios.post(
        'https://testably-back-end-iadh5.ondigitalocean.app/stripe/customer-portal',
        payload,
        options
      )
      window.location.href = session.data.session.url
    },
  },
}
</script>

<style scoped></style>
