<template>
  <th
    class="py-3 text-gray-700 text-sm font-normal dark:text-gray-300"
    :class="textCenter ? 'text-center' : 'text-left'"
  >
    {{ text }}
  </th>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    textCenter: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
}
</script>
