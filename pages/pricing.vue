<template>
  <div class="w-full flex justify-center">
    <PricingTable class="mt-8" />
  </div>
</template>

<script>
export default {
  middleware: ['checkAccessExpiry', 'refreshOnLoad'],
}
</script>

<style scoped></style>
