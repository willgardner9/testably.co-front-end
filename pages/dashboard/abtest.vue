<template>
  <section class="w-full flex items-center justify-center mt-5vh">
    <!-- container -->
    <div
      class="
        w-full
        max-w-6xl
        px-4
        flex flex-col
        justify-between
        mt-5vh
        items-center
      "
    >
      Variations
    </div>
  </section>
</template>

<script>
export default {
  middleware: ['customAuth', 'checkAccessExpiry'],
  data() {
    return {}
  },
  //  refresh token every 19 mins
  created() {
    setTimeout(
      () =>
        this.$axios
          .get('http://localhost:3001/token/refresh', { withCredentials: true })
          .then((res) => {
            // refresh token is valid: set new access token and access token expires in
            if (res.status === 200) {
              this.$store.commit(
                'setAccessToken',
                res.data.accessTokenObj.accessToken
              )
              this.$store.commit(
                'setAccessTokenExpiresIn',
                res.data.accessTokenObj.accessTokenExpiresIn
              )
            }
          })
          .catch(() => {
            return ''
          }),
      19 * 60 * 1000
    )
  },

  methods: {},
}
</script>
