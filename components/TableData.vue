<template>
  <td
    class="text-gray-700 text-sm font-normal dark:text-gray-300 rounded"
    :class="textCenter ? 'text-center' : 'text-left'"
  >
    <div class="my-2 p-1 rounded" :style="{ backgroundColor: text }">
      {{ text }}
    </div>
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
