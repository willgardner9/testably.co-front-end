<template>
  <td
    class="py-3 text-gray-700 text-sm font-normal dark:text-gray-300 rounded"
    :class="textCenter ? 'text-center' : 'text-left'"
    :style="{ backgroundColor: text }"
  >
    {{ text }}
  </td>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-prop-types
    text: {
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
