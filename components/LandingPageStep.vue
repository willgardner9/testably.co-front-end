<template>
  <div
    class="
      flex flex-col
      lg:flex-row-reverse
      items-center
      w-full
      mb-8
      mt-8
      pb-12
    "
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
    <div class="w-full lg:w-1/2 flex flex-col p-4 mr-8">
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
            w-12
            h-12
            bg-green-500
            text-white text-3xl
            font-semibold
            rounded-full
            flex
            items-center
            justify-center
            mr-4
          "
        >
          {{ step }}
        </div>
        <h5
          class="text-3xl text-black dark:text-white font-semibold mt-4 sm:mt-0"
        >
          {{ action }}
        </h5>
      </div>
      <p class="text-xl text-gray-700 dark:text-gray-400 mt-4">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    step: {
      type: Number,
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
  },
}
</script>

<style scoped>
.min-w-12,
.min-h-12 {
  min-width: 3rem;
  min-height: 3rem;
}
</style>
