<template>
  <div
    class="
      flex flex-col
      lg:flex-row
      w-full
      max-w-6xl
      px-4
      items-center
      justify-center
    "
  >
    <!-- visitors -->
    <div class="px-4 w-1/3 flex flex-col">
      <label
        for="visitors"
        class="text-xs font-light text-gray-700 dark:text-white"
        >Monthly visitors</label
      >
      <input
        v-model="visitors"
        name="visitors"
        type="number"
        class="
          p-4
          mt-2
          transition
          duration-150
          ease-in-out
          rounded-lg
          hover:border-green-200
          dark:hover:border-gray-500
          hover:ring-4 hover:ring-green-200
          focus:ring-4 focus:ring-green-200
          dark:focus:ring-gray-600
          outline-none
          border border-gray-200
          dark:bg-gray-900
          dark:border-gray-600
          dark:hover:ring-gray-600
          dark:text-white
        "
      />
    </div>
    <h4 class="text-xl text-gray-400 px-4 mt-5">x</h4>
    <!-- conversion rate -->
    <div class="px-4 w-1/3 flex flex-col">
      <label
        for="conversion"
        class="text-xs font-light text-gray-700 dark:text-white"
        >Conversion rate %</label
      >
      <input
        v-model="conversionrate"
        name="conversion"
        type="number"
        class="
          mt-2
          p-4
          transition
          duration-150
          ease-in-out
          rounded-lg
          hover:border-green-200
          dark:hover:border-gray-500
          hover:ring-4 hover:ring-green-200
          focus:ring-4 focus:ring-green-200
          dark:focus:ring-gray-600
          outline-none
          border border-gray-200
          dark:bg-gray-900
          dark:border-gray-600
          dark:hover:ring-gray-600
          dark:text-white
        "
      />
    </div>
    <h4 class="text-xl text-gray-400 px-4 mt-5">x</h4>
    <!-- ARPU -->
    <div class="px-4 w-1/3 flex flex-col">
      <label for="arpu" class="text-xs font-light text-gray-700 dark:text-white"
        >Average revenue per user (£)</label
      >
      <input
        v-model="arpu"
        name="arpu"
        type="number"
        class="
          mt-2
          p-4
          transition
          duration-150
          ease-in-out
          rounded-lg
          hover:border-green-200
          dark:hover:border-gray-500
          hover:ring-4 hover:ring-green-200
          focus:ring-4 focus:ring-green-200
          dark:focus:ring-gray-600
          outline-none
          border border-gray-200
          dark:bg-gray-900
          dark:border-gray-600
          dark:hover:ring-gray-600
          dark:text-white
        "
      />
    </div>
    <h4 class="text-xl text-gray-400 px-4 mt-5">=</h4>
    <div class="flex flex-col px-4 mt-5">
      <h4 class="font-semibold text-3xl text-gray-700">£{{ roi }}</h4>
      <h4 class="text-sm text-gray-500">Current MMR: £{{ currentMMR }}</h4>
      <h4 class="text-sm text-gray-500">
        MMR +2.5% conversion rate: £{{ futureMMR }}
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visitors: 5000,
      conversionrate: 5,
      arpu: 6.99,
    }
  },
  computed: {
    currentMMR() {
      return this.visitors * (this.conversionrate / 100) * this.arpu
    },
    futureMMR() {
      return this.visitors * ((this.conversionrate + 2.5) / 100) * this.arpu
    },
    roi() {
      return (
        this.visitors * ((this.conversionrate + 2.5) / 100) * this.arpu -
        this.visitors * (this.conversionrate / 100) * this.arpu
      )
    },
  },
}
</script>
