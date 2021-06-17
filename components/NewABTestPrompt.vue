<template>
  <div class="w-full flex flex-col items-center justify-center relative mt-8">
    <div
      class="w-full add-first-abtest rounded h-24 flex justify-center relative"
    >
      <h3
        class="
          flex
          items-center
          font-medium
          text-xl text-center
          dark:text-gray-300
        "
      >
        Your A/B tests will appear here, create your first one now!
      </h3>
      <div class="absolute bottom-25 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="75"
          height="20"
          class="transform rotate-90 stroke-current dark:text-gray-100"
        >
          <g
            fill="none"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
          >
            <path
              d="M2.347 9.986c9.493-.062 19.22 1.688 28.654.271 2.884-.434 9.69-1.479 10.938-4.862 1.027-2.788-1.396-3.576-3.87-3.362-2.499.217-6.745 2.109-6.838 5.112-.122 3.962 5.874 4.825 8.68 5.199 9.058 1.206 18.126-1.019 27.186-.983"
            />
            <path
              d="M63.172 18c2.325-3.721 6.603-4.349 9.481-7.403-3.027-1.045-9.07-3.442-11.113-6.125"
            />
          </g>
        </svg>
      </div>
    </div>
    <Button
      destination="/dashboard/new-abtest"
      text="Create new abtest"
      class="mt-20 max-w-max"
    />
  </div>
</template>

<style scoped>
.bottom-25 {
  bottom: -35px;
}
</style>
