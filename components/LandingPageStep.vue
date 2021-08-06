<template>
  <div
    class="flex flex-col items-center w-full mb-8 mt-8 pb-12"
    :class="[ltor ? 'lg:flex-row-reverse' : 'lg:flex-row']"
  >
    <img
      :src="image"
      :alt="image"
      class="
        rounded-lg
        shadow
        w-full
        md:w-2/3
        lg:w-1/2
        opacity-75
        hover:opacity-100
        transition
        duration-150
        ease-in-out
        mb-4
      "
    />
    <div class="w-full lg:w-1/2 flex flex-col p-4 mx-8">
      <div
        class="
          w-full
          flex flex-col
          sm:flex-row
          items-center
          justify-center
          md:justify-start
        "
      >
        <div
          class="
            min-w-12 min-h-12
            bg-green-500
            text-white text-2xl
            font-semibold
            rounded-full
            flex
            items-center
            justify-center
            mr-6
          "
        >
          {{ step }}
        </div>
        <h5
          class="text-xl text-black dark:text-white font-semibold mt-4 sm:mt-0"
        >
          {{ action }}
        </h5>
      </div>
      <p class="text-lg text-gray-700 dark:text-gray-400 mt-4">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    step: {
      type: String,
      required: true,
    },
    action: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    ltor: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
}
</script>

<style scoped>
.min-w-12,
.min-h-12 {
  min-width: 2.5rem;
  min-height: 2.5rem;
}
</style>
