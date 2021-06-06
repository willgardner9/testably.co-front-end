<template>
  <section class="w-full flex flex-col h-80vh items-center mt-10vh">
    <!-- container -->
    <div
      class="
        md:w-1/2
        lg:w-1/3
        xl:w-1/4
        w-4/5
        p-8
        bg-white
        flex flex-col
        justify-center
        items-center
        rounded-lg
        border border-orange-100
      "
    >
      <div class="lds-dual-ring"></div>
      <h4 class="text-black font-semibold text-3xl mt-2 text-center">
        Something went wrong...
      </h4>
      <h3 class="text-gray-600 font-normal text-md mt-4 text-center">
        We couldn't find the requested URL
        <code class="bg-gray-200 p-1 rounded">{{ this.$route.path }}</code
        >, redirecting you soon!
      </h3>
      <h3 class="text-gray-600 font-light text-xs mt-4 text-center">
        Or if you don't want to wait, press the back button or use the menu
        above
      </h3>
    </div>
  </section>
</template>

<script>
export default {
  created() {
    setTimeout(() => this.$router.push({ path: '/' }), 5000)
  },
}
</script>

<style>
.mt-10vh {
  margin-top: 10vh;
}
.text-blue-custom {
  color: #0066ff;
}

.lds-dual-ring {
  display: inline-block;
  width: 40px;
  height: 40px;
}
.lds-dual-ring:after {
  content: ' ';
  display: block;
  width: 32px;
  height: 32px;
  margin: 4px;
  border-radius: 50%;
  border: 3px solid #fff;
  border-color: rgb(0, 0, 0) transparent rgb(0, 0, 0) transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
