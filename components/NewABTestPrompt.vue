<template>
  <div class="w-full flex flex-col items-center justify-center mt-8">
    <div class="w-full rounded flex justify-center">
      <h3 class="font-light text-xl text-center dark:text-gray-300 mt-12 px-4">
        Your A/B tests will appear here,
        <span class="font-medium dark:text-white">create your first one</span>
        now!
      </h3>
    </div>
    <Button
      destination="/dashboard/new-abtest"
      text="Create new A/B test"
      class="max-w-max mt-12"
    />
  </div>
</template>
