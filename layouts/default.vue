<template>
  <div>
    <Navbar />
    <Nuxt />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;700&display=swap');
/* body {
  background-color: #fffaf0;
} */
</style>

<script>
export default {
  middleware: ['hideMenuOnLoad'],
  head: {
    bodyAttrs: {
      class: 'bg-gray-50 dark:bg-gray-900',
    },
  },
}
</script>
