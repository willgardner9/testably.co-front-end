<template>
  <section class="w-full flex flex-col items-center">
    <div
      v-if="abtest"
      class="
        w-full
        rounded-lg
        flex flex-col
        items-center
        justify-between
        shadow-sm
      "
    >
      <div
        class="
          flex flex-col
          items-start
          justify-between
          sm:flex-row
          w-full
          sm:items-center
          p-4
          rounded-lg rounded-b-none
          border border-b-0
          bg-white
          border-gray-200
          dark:bg-gray-800
          dark:border-gray-700
        "
      >
        <div
          class="
            min-w-max
            dark:text-white
            text-2xl
            font-semibold
            flex
            items-center
            mb-2
            sm:mb-0
          "
        >
          {{ abtest.name }}
        </div>
        <div class="flex w-full justify-start items-center">
          <span
            class="
              mx-2
              hidden
              sm:block
              text-gray-500
              dark:text-gray-400
              font-light
              select-none
            "
            >•</span
          >
          <div
            class="
              text-xs
              flex
              justify-end
              text-gray-500
              dark:text-gray-400
              mr-2
              visual-v-align
            "
          >
            <span>Type:&nbsp;</span>
            <span
              v-if="abtest.type === 'src'"
              class="font-medium dark:text-gray-300"
            >
              Image/Video</span
            >
            <span
              v-else-if="abtest.type === 'copy'"
              class="font-medium dark:text-gray-300"
            >
              Text</span
            >
            <span v-else class="font-medium dark:text-gray-300"> Color</span>
          </div>
          <div
            class="
              text-xs
              flex
              justify-end
              text-gray-500
              dark:text-gray-400
              visual-v-align
            "
          >
            <span>Created:&nbsp;</span>
            <span class="font-medium dark:text-gray-300">{{
              new Date(abtest.createdAt).toLocaleDateString()
            }}</span>
          </div>
        </div>
        <Button
          v-if="showDetailsButton"
          class="text-xs justify-start edit-button min-w-max"
          :destination="'dashboard/abtest/?t=' + abtest._id"
          text="Edit ›"
          ghost
        />
      </div>
      <div
        class="
          flex flex-col
          w-full
          items-center
          px-4
          pt-2
          pb-4
          rounded-lg rounded-t-none
          border border-t-0 border-gray-200
          dark:bg-gray-800
          dark:border-gray-700
          overflow-x-auto
        "
      >
        <div class="w-full flex flex-row py-1">
          <div
            class="
              w-full
              flex flex-grow
              text-gray-500 text-xs
              font-medium
              pr-2
              dark:text-gray-400
            "
          >
            <p>Variation</p>
          </div>
          <div
            class="
              flex
              text-gray-500 text-xs
              font-medium
              px-2
              dark:text-gray-400
            "
          >
            <p>Sessions</p>
          </div>
          <div
            class="
              flex
              text-gray-500 text-xs
              font-medium
              px-2
              dark:text-gray-400
            "
          >
            <p>Conversions</p>
          </div>
          <div
            class="
              min-w-max
              flex
              text-gray-500 text-xs
              font-medium
              px-2
              dark:text-gray-400
            "
          >
            <p>Conversion Rate</p>
          </div>
        </div>
        <div v-if="abtest.variations.length === 0 && showPrompt" class="mt-4">
          <Button
            :destination="'dashboard/abtest/?t=' + abtest._id"
            text="Create first variation"
            ghost
          />
        </div>
        <div
          v-else-if="abtest.variations.length === 0 && !showPrompt"
          class="mt-4"
        >
          <p class="text-sm text-gray-500">Create your first variation below</p>
        </div>
        <div
          v-for="variation in abtest.variations"
          v-else
          :key="variation._id"
          class="w-full flex flex-row py-1"
        >
          {{ variation.variable }}
          {{ variation.sessions }}
          {{ variation.conversions }}
          {{ variation.sessions / variation.conversions }}
        </div>
      </div>
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
    showPrompt: {
      type: Boolean,
      required: false,
      default: false,
    },
    showDetailsButton: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
}
</script>

<style scoped>
.edit-button {
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
}
.visual-v-align {
  margin-top: 0.125rem;
}
</style>
