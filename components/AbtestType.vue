<template>
  <div
    class="
      md:w-1/3
      w-full
      abtest-type
      p-4
      rounded-lg
      flex
      cursor-pointer
      border border-gray-200
      hover:border-green-200
      hover:ring-4 hover:ring-green-100
      dark:border-gray-600
      dark:hover:border-gray-400
      dark:hover:bg-gray-700
      dark:hover:ring-gray-300
      transition
      duration-300
      ease-in-out
    "
    :class="{
      'border-green-300 dark:bg-gray-700 dark:border-gray-400 ring-4 ring-green-100 dark:ring-gray-300':
        activeType === abTestType,
    }"
    tabindex="1"
    @click="updateActiveType"
    @keydown.space="updateActiveType"
  >
    <div class="w-16 flex items-center justify-center">
      <img
        class="svg-width h-6 w-6 text-white stroke-current"
        :src="require(`~/assets/${image}.svg`)"
        :alt="image"
      />
    </div>
    <div class="flex flex-col justify-center md:ml-4">
      <h4
        class="
          text-md
          font-medium
          text-gray-800
          dark:text-white
          leading-7
          ml-2
          md:ml-0
        "
      >
        {{ abTestType }}
      </h4>
      <p
        class="text-sm text-gray-700 dark:text-gray-200 font-light ml-2 md:ml-0"
      >
        {{ abTestTypeDescription }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    abTestType: {
      type: String,
      required: true,
    },
    abTestTypeDescription: {
      type: String,
      required: true,
    },
    activeType: {
      type: String,
      required: true,
    },
    dbKey: {
      type: String,
      required: true,
    },
  },

  methods: {
    updateActiveType() {
      this.$emit('onUpdateType', this.abTestType, this.dbKey)
    },
  },
}
</script>

<style scoped>
.svg-width {
  min-width: 5rem;
}
</style>
