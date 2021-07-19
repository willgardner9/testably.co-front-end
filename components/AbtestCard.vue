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
        <h3
          class="
            break-normal
            sm:min-w-max
            dark:text-white
            text-xl
            font-semibold
            flex
            items-center
            mb-2
            sm:mb-0
          "
        >
          {{ abtest.name }}
        </h3>
        <div
          class="
            flex flex-col
            sm:flex-row
            w-full
            justify-start
            items-start
            sm:items-center
          "
        >
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
              mr-2
            "
          >
            <span>Created:&nbsp;</span>
            <span class="font-medium dark:text-gray-300">{{
              new Date(abtest.createdAt).toLocaleDateString()
            }}</span>
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
            <span>Conversion URL:&nbsp;</span>
            <span class="font-medium dark:text-gray-300">{{
              abtest.conversionURL
            }}</span>
          </div>
        </div>
        <Button
          v-if="showDetailsButton"
          class="my-4 sm:my-0 text-xs justify-start edit-button min-w-max"
          :destination="'dashboard/abtest/?t=' + abtest._id"
          text="More ›"
          ghost
        />
      </div>
      <div
        class="
          w-full
          items-center
          px-4
          py-2
          rounded-lg rounded-t-none
          border border-t-0 border-gray-200
          dark:bg-gray-800
          dark:border-gray-700
          overflow-x-auto
        "
      >
        <div
          v-if="abtest.variations.length === 0 && showPrompt"
          class="flex w-full justify-center"
        >
          <Button
            :destination="'dashboard/abtest/?t=' + abtest._id"
            text="Create first variation"
            ghost
            class="max-w-max"
          />
        </div>
        <div v-else-if="abtest.variations.length === 0 && !showPrompt">
          <p class="text-sm text-gray-500">Create your first variation below</p>
        </div>
        <table v-else class="min-w-full py-1 table-fixed">
          <thead>
            <tr>
              <TableHead class="min-w-14 pl-0" text="Variation" />
              <TableHead class="w-32" text="Sessions" text-center />
              <TableHead class="w-32" text="Conversions" text-center />
              <TableHead class="w-32" text="CVR" text-center />
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 dark:divide-gray-600">
            <tr v-for="variation in abtest.variations" :key="variation._id">
              <TableData :text="variation.variable" />
              <TableData :text="variation.sessions" text-center />
              <TableData :text="variation.conversions" text-center />
              <TableData
                v-if="variation.conversions !== 0 && variation.sessions !== 0"
                :text="
                  ((variation.conversions / variation.sessions) * 100).toFixed(
                    0
                  ) + '%'
                "
                text-center
              />
              <TableData
                v-if="variation.conversions === 0 || variation.sessions === 0"
                text="0%"
                text-center
              />
            </tr>
          </tbody>
        </table>
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

.min-w-14 {
  min-width: 14rem;
}
</style>
