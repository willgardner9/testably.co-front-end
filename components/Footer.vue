<template>
  <footer
    class="
      h-12
      w-full
      bg-gray-50
      py-8
      dark:border-gray-800
      flex
      items-center
      justify-center
      mt-12
      absolute
      bottom-0
    "
  >
    <section
      class="max-w-6xl w-full flex justify-between text-gray-400 text-sm px-4"
    >
      <h1>© 2021 Testably, made in 🇪🇺</h1>
      <h1
        class="
          text-gray-400
          hover:text-gray-500
          dark:hover:text-gray-300
          cursor-pointer
        "
        @click="returnToTop"
      >
        To top
      </h1>
    </section>
  </footer>
</template>

<script>
export default {
  methods: {
    returnToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
  },
}
</script>
