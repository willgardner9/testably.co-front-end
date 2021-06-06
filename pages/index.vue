<template>
  <div class="container">
    <div>
      <p>home page</p>
    </div>
  </div>
</template>

<script>
export default {
  middleware: ['refreshOnLoad', 'checkAccessExpiry'],
}
</script>

<style></style>
