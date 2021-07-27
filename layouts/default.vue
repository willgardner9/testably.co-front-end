<template>
  <div>
    <Navbar />
    <Nuxt />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');
@media screen and (min-width: 960px) {
  html {
    margin-left: calc(100vw - 100%);
    margin-right: 0;
  }
}
</style>

<script>
export default {
  middleware: ['hideMenuOnLoad'],
  head: {
    bodyAttrs: {
      class: 'bg-white dark:bg-gray-900',
    },
  },
}
</script>
