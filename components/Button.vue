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
        ? 'bg-white text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
        : 'bg-black text-white hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-gray-100 dark:hover:text-white dark:border dark:border-gray-500',
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
      required: true,
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
