<template>
  <div>
    <div class="flex items-center">
      <div class="min-w-max mr-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 text-gray-600 dark:text-gray-300"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <p class="text-gray-600 dark:text-gray-300 text-sm">
        {{ variationDescStart }}
        <span class="font-semibold">{{ variationDescType }}</span>
        {{ variationDescEnd }}
      </p>
      <button
        v-show="showExamples"
        class="
          ml-2
          font-semibold
          text-gray-500
          dark:text-gray-300
          text-sm
          border-b border-dashed border-gray-500
          dark:border-gray-300
          min-w-max
        "
        @click="revealExamples"
      >
        Hide examples
      </button>
      <button
        v-show="!showExamples"
        class="
          ml-2
          font-semibold
          text-gray-500
          dark:text-gray-300
          text-sm
          border-b border-dashed border-gray-500
          dark:border-gray-300
          min-w-max
        "
        @click="revealExamples"
      >
        Show examples
      </button>
    </div>
    <div
      v-show="showExamples"
      class="ml-6 mt-2 text-gray-500 dark:text-gray-300 text-sm"
    >
      <p class="mt-2">
        {{ variationExampleOne }}
      </p>
      <ul class="list-disc list-inside ml-2">
        <li>{{ variationExampleOneItemA }}</li>
        <li>{{ variationExampleOneItemB }}</li>
      </ul>
      <p class="mt-2">
        {{ variationExampleTwo }}
      </p>
      <ul class="list-disc list-inside ml-2">
        <li>{{ variationExampleTwoItemA }}</li>
        <li>{{ variationExampleTwoItemB }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    variationDescStart: {
      type: String,
      required: true,
    },
    variationDescEnd: {
      type: String,
      required: true,
    },
    variationDescType: {
      type: String,
      required: true,
    },
    variationExampleOne: {
      type: String,
      required: true,
    },
    variationExampleOneItemA: {
      type: String,
      required: true,
    },
    variationExampleOneItemB: {
      type: String,
      required: true,
    },
    variationExampleTwo: {
      type: String,
      required: true,
    },
    variationExampleTwoItemA: {
      type: String,
      required: true,
    },
    variationExampleTwoItemB: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      showExamples: false,
    }
  },
  methods: {
    revealExamples() {
      this.showExamples = !this.showExamples
    },
  },
}
</script>
