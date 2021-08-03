<template>
  <NuxtLink
    :to="destination"
    class="
      px-2
      py-2
      text-sm
      flex
      justify-center
      transition
      duration-300
      ease-in-out
      rounded
    "
    :class="[
      ghost
        ? 'bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-300  dark:hover:bg-gray-600  dark:hover:text-white focus:ring-4 ring-gray-300 dark:ring-gray-700 outline-none dark:bg-gray-700  dark:focus:bg-gray-600'
        : 'bg-green-500 text-white hover:bg-green-400 dark:bg-green-700 dark:hover:bg-green-600  focus:ring-4 ring-green-200 dark:ring-green-800 outline-none',
    ]"
  >
    {{ text }}
  </NuxtLink>
</template>

<script>
export default {
  props: {
    destination: {
      type: String,
      required: false,
      default: '',
    },
    text: {
      type: String,
      required: true,
    },
    ghost: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
}
</script>

<style scoped>
button:focus {
  outline: none !important;
}
</style>
