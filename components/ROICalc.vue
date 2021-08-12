<template>
  <div class="flex flex-col w-full max-w-6xl px-4 items-center justify-center">
    <div class="flex flex-col lg:flex-row w-full items-center justify-center">
      <!-- visitors -->
      <div class="px-4 w-full lg:w-1/5 flex flex-col">
        <label
          for="visitors"
          class="text-xs font-light text-gray-500 dark:text-white"
          >Average monthly visitors</label
        >
        <input
          v-model="visitors"
          name="visitors"
          type="number"
          class="
            font-semibold
            text-center
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
            dark:bg-gray-800
            dark:border-gray-600
            dark:hover:ring-gray-600
            dark:text-white
          "
        />
      </div>
      <!-- multiply sign -->
      <h4 class="text-xl text-gray-400 px-4 mt-5">x</h4>
      <!-- conversion rate -->
      <div class="px-4 w-full lg:w-1/5 flex flex-col">
        <label
          for="conversion"
          class="text-xs font-light text-gray-500 dark:text-white"
          >Current conversion rate %</label
        >
        <input
          v-model="conversionrate"
          name="conversion"
          type="number"
          class="
            font-semibold
            text-center
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
            dark:bg-gray-800
            dark:border-gray-600
            dark:hover:ring-gray-600
            dark:text-white
          "
        />
      </div>
      <!-- multiply sign -->
      <h4 class="text-xl text-gray-400 px-4 mt-5">x</h4>
      <!-- ARPU -->
      <div class="px-4 w-full lg:w-1/5 flex flex-col">
        <label
          for="arpu"
          class="text-xs font-light text-gray-500 dark:text-white"
          >Average revenue per user £/$/€
        </label>
        <input
          v-model="arpu"
          name="arpu"
          type="number"
          class="
            font-semibold
            text-center
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
            dark:bg-gray-800
            dark:border-gray-600
            dark:hover:ring-gray-600
            dark:text-white
          "
        />
      </div>
      <!-- = sign -->
      <h4 class="text-xl text-gray-400 px-4 mt-5">=</h4>
    </div>
    <div
      class="
        flex flex-col
        items-center
        justify-center
        text-center
        max-w-2xl
        mt-4
      "
    >
      <!-- new MMR -->
      <div class="w-full flex flex-col items-center justify-center mt-4">
        <h4 class="text-gray-500 dark:text-gray-400 text-md">
          Your current New MMR is
          <span class="font-semibold text-xl"
            >£{{ currentMMR.toFixed(2) }}</span
          >
        </h4>
        <h4 class="text-black dark:text-white font-medium text-2xl mt-2">
          Your New MMR could be
          <span
            class="
              text-4xl text-green-500
              opacity-25
              font-extrabold
              absolute
              inline-flex
              animate-ping
            "
            >£{{ futureMMR.toFixed(2) }}</span
          >
          <span
            class="text-4xl font-extrabold relative inline-flex text-green-500"
            >£{{ futureMMR.toFixed(2) }}</span
          >
        </h4>
      </div>

      <h4 class="text-xs font-light text-gray-400 mt-8">
        Your current New MMR is
        <span class="font-semibold">£{{ currentMMR.toFixed(2) }}</span
        >. If your conversion rate increased by 2.5% to
        {{ parseFloat(conversionrate) + 2.5 }}%, your New MMR would increase to
        <span class="font-semibold">£{{ futureMMR.toFixed(2) }}</span
        >. These figures are for illustrative purposes only - testably does not
        guarantee any increase in conversion rate.
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visitors: 5000,
      conversionrate: 2,
      arpu: 6.99,
    }
  },
  computed: {
    currentMMR() {
      return this.visitors * ((this.conversionrate || 0) / 100) * this.arpu
    },
    futureMMR() {
      const newConversionRate = parseFloat(this.conversionrate || 0) + 2.5 || 1
      return this.visitors * (newConversionRate / 100) * this.arpu
    },
  },
}
</script>

<style scoped></style>
