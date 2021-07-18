<template>
  <button
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
        ? 'bg-white border border-gray-200 hover:border-gray-300 text-gray-600 hover:text-gray-700 hover:shadow-sm dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:hover:text-white focus:ring-4 ring-gray-200 dark:ring-gray-700 outline-none focus:border-gray-300 dark:bg-gray-700 dark:focus:border-gray-500 dark:focus:bg-gray-600'
        : 'bg-indigo-500 text-white border border-indigo-600 hover:border-indigo-500 hover:bg-indigo-400 hover:shadow-sm dark:bg-indigo-700 dark:border-indigo-600 dark:hover:bg-indigo-600 dark:hover-border-indigo-500 focus:ring-4 ring-indigo-200 dark:ring-indigo-800 outline-none dark:focus:border-indigo-500',
    ]"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
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
