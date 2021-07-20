<template>
  <div class="w-full flex flex-col items-center">
    <!-- above the fold -->
    <div
      class="
        bg-white
        dark:bg-gray-900
        flex flex-col
        w-full
        items-center
        justify-center
        px-12
      "
    >
      <!-- Tagline, main copy, CTA -->
      <div class="mt-12 flex flex-col max-w-4xl items-center justify-center">
        <h3
          class="
            text-6xl text-black
            dark:text-white
            font-semibold
            text-center
            max-w-xl
          "
        >
          Your landing page can
          <span class="italic gradient-text">perform better.</span>
        </h3>
        <p class="mt-6 text-center text-xl text-gray-700 dark:text-gray-400">
          A/B testing increases conversions and sales. But existing tools are
          complex, expensive, and slow. We built testably so you can start
          optimising your landing page in 5 minutes at a fraction of the cost.
        </p>
        <Button
          destination="/register/?plan=free"
          text="Try for FREE"
          class="text-base mt-6"
        />
      </div>

      <!-- Video demo -->
      <div class="video-wrapper bg-gray-300 rounded shadow-lg mt-16"></div>
    </div>
    <!-- below the fold -->
    <div
      class="
        flex flex-col
        w-full
        items-center
        bg-gray-50
        dark:bg-gray-800
        mt-16
      "
    >
      <!-- Pricing table -->
      <PricingTable class="mt-16" />
    </div>
  </div>
</template>

<script>
export default {
  middleware: ['refreshOnLoad', 'checkAccessExpiry'],
  data() {
    return {}
  },
  methods: {},
}
</script>

<style>
.video-wrapper {
  width: 1280px;
  height: 720px;
}

.gradient-text {
  background: -webkit-linear-gradient(#047857, #34d399);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding-left: 3px;
}
</style>
