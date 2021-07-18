<template>
  <div
    class="
      h-80vh
      bg-white
      flex flex-col
      w-full
      items-center
      justify-center
      px-12
    "
  >
    <h4
      id="tagline"
      class="text-lg text-gray-500 font-light text-center uppercase"
    >
      A/B testing made easy
    </h4>
    <h3 class="text-5xl text-black font-bold text-center mb-8">
      Boost your conversion rate
      <span class="italic gradient-text">forever</span>
    </h3>
    <div class="flex w-full items-center justify-center">
      <Button
        destination="register/?plan=free"
        text="Try for free"
        class="mx-2"
      />
      <Button destination="features" text="Learn how" ghost class="mx-2" />
    </div>
  </div>
</template>

<script>
export default {
  middleware: ['refreshOnLoad', 'checkAccessExpiry'],
  data() {
    return {}
  },
  mounted() {
    setInterval(() => (this.buttonA = !this.buttonA), 5000)
  },
}
</script>

<style>
.h-80vh {
  height: 80vh;
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
