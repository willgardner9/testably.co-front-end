<template>
  <label
    :for="label"
    class="text-md font-light text-gray-700 dark:text-white mb-2"
  >
    {{ text }}
  </label>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
}
</script>
