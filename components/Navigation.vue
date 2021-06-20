<template>
  <div class="hidden sm:block flex items-center">
    <nav v-if="this.$store.state.loggedIn" class="flex">
      <Button destination="/dashboard" text="Dashboard" ghost />
      <Button text="Logout" ghost class="ml-3" @click.native="logoutUser" />
    </nav>
    <nav v-else class="flex">
      <Button destination="pricing" text="Pricing" ghost />
      <Button destination="login" text="Login" ghost class="ml-3" />
      <Button destination="register" text="Try testably →" class="ml-3" />
    </nav>
  </div>
</template>
