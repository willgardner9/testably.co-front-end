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
        h-90vh
      "
    >
      <!-- Video demo -->
      <div class="video-wrapper bg-gray-300 rounded shadow-lg -mt-8"></div>

      <!-- Tagline and main copy -->
      <h4
        id="tagline"
        class="
          mt-14
          text-lg text-gray-500
          dark:text-gray-400
          font-light
          text-center
          uppercase
        "
      >
        Simple A/B testing
      </h4>
      <h3
        class="text-5xl text-black dark:text-white font-bold text-center mb-8"
      >
        Your landing page should
        <span class="italic gradient-text">convert more.</span>
      </h3>

      <!-- CTA buttons -->
      <div class="flex w-full items-center justify-center mt-4">
        <ButtonJS text="How it works" ghost class="mx-x text-lg" />
        <Button
          destination="register/?plan=free"
          text="Try for free"
          class="mx-4 text-lg"
        />
      </div>
    </div>
    <!-- below the fold -->
    <div
      class="
        flex flex-col
        w-full
        items-center
        bg-gray-50
        dark:bg-gray-800
        border-t border-gray-200
        dark:border-gray-700
      "
    >
      <!-- Pricing table -->
      <PricingTable class="mt-32" />
    </div>
  </div>
</template>

<script>
export default {
  middleware: ['refreshOnLoad', 'checkAccessExpiry'],
  data() {
    return {}
  },
}
</script>

<style>
.h-90vh {
  height: 90vh;
}

.video-wrapper {
  width: 768px;
  height: 400px;
}

#tagline {
  font-family: 'Space Grotesk', sans-serif;
}

.gradient-text {
  background: -webkit-linear-gradient(#4338ca, #818cf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
