<template>
  <section class="w-full">
    <h2 class="text-xl text-black dark:text-white font-semibold">
      Testably code snippets
    </h2>
    <h4 class="text-gray-600 dark:text-gray-300 mt-2">
      Please follow the instructions below to add the two testably code snippets
      to your website and get your A/B test started.
    </h4>

    <div v-if="abtest.type === 'copy'" class="mt-4 flex flex-col">
      <h3 class="text-lg text-gray-900 font-medium dark:text-gray-200">
        1) Text snippet
      </h3>
      <p class="text-gray-600 text-sm">
        Please copy and paste this snippet into the element whose text you are
        testing.
      </p>
    </div>
    <div v-if="abtest.type === 'colour'" class="mt-4 flex flex-col">
      <h3 class="text-lg text-gray-900 font-medium dark:text-gray-200">
        1) Color snippet
      </h3>
      <p class="text-gray-600 text-sm">
        Please copy and paste this snippet into the element whose color you are
        testing.
      </p>
    </div>
    <div v-if="abtest.type === 'src'" class="mt-4 flex flex-col">
      <h3 class="text-lg text-gray-900 font-medium dark:text-gray-200">
        1) Image / Video snippet
      </h3>
      <p class="text-gray-600 text-sm">
        Please copy and paste this snippet into the element whose image / video
        you are testing.
      </p>
    </div>
    <div
      class="
        rounded
        bg-gray-100
        border border-gray-200
        shadow-inner
        p-4
        flex flex-col
      "
    >
      <code class="text-sm">data-testably-abtest-id="{{ abtest._id }}"</code>
      <code class="text-sm"
        >data-testably-count="{{ abtest.variations.length }}"</code
      >
      <code
        v-for="(variation, index) in abtest.variations"
        :key="variation._id"
        class="text-sm"
        >data-testably-variation-{{ index }}-id="{{ variation._id }}"</code
      >
    </div>
  </section>
</template>

<script>
export default {
  props: {
    abtest: {
      type: Object,
      required: true,
    },
  },
}
</script>
