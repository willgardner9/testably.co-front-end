<template>
  <th
    scope="col"
    class="
      py-3
      pr-3
      sm:px-0
      text-xs
      font-medium
      text-gray-500
      dark:text-gray-400
    "
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
