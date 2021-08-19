<template>
  <section
    class="w-full flex flex-col md:flex-row max-w-6xl justify-center px-4"
  >
    <PricingCard :pricing-data="freePricing" :no-buttons="noButtonsControl" />
    <PricingCard :pricing-data="basicPricing" :no-buttons="noButtonsControl" />
    <PricingCard
      :pricing-data="premiumPricing"
      :no-buttons="noButtonsControl"
    />
  </section>
</template>

<script>
export default {
  props: {
    noButtonsControl: {
      type: Boolean,
      required: false,
    },
  },
  data() {
    return {
      freePricing: {
        featured: false,
        title: 'Free Plan',
        tagline: 'Great for idea validation',
        price: 'Free',
        benefits: ['1 A/B test', '500 sessions a month'],
        stripePrice: 'price_1J9xSNBn4cPkjuwoqHrQbulB',
        routerName: 'free',
      },
      basicPricing: {
        featured: true,
        title: 'Basic Plan',
        tagline: 'Best for launches and early stage startups',
        price: '£6.99',
        benefits: ['3 A/B tests', '5000 sessions a month'],
        stripePrice: 'price_1J9xTQBn4cPkjuwoCQi7Dzux',
        routerName: 'basic',
      },
      premiumPricing: {
        featured: false,
        title: 'Premium Plan',
        tagline: 'Perfect for scale-up online businesses',
        price: '£14.99',
        benefits: ['Unlimited A/B tests', 'Unlimited sessions a month'],
        stripePrice: 'price_1J9xUeBn4cPkjuwoK815Zt3h',
        routerName: 'premium',
      },
    }
  },
}
</script>
