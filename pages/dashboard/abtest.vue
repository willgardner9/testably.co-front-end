<template>
  <section class="w-full flex flex-col items-center justify-center mt-8">
    <div
      class="w-full max-w-6xl px-4 flex flex-col justify-between items-start"
    >
      <Button destination="/dashboard" text="← Dashboard" ghost />
    </div>
    <!-- container -->
    <div
      class="w-full max-w-6xl px-4 flex flex-col justify-between items-center"
    >
      <AbtestCard v-if="abtest" :abtest="abtest" class="mt-8" />
      <VariationForm
        v-if="abtest"
        :test-type="abtest.type"
        class="mt-10 pt-10 border-t-2 border-gray-200"
      />
      <CodeSnippet
        v-if="abtest"
        :abtest="abtest"
        class="mt-10 pt-10 border-t-2 border-gray-200"
      />
    </div>
  </section>
</template>

<script>
export default {
  middleware: ['customAuth', 'checkAccessExpiry'],
  async fetch() {
    const abtest = await this.$axios.get(
      `http://localhost:3001/abtest/${this.$route.query.t}`,
      {
        params: {
          user: this.$store.state.user._id,
        },
        headers: {
          Authorization: `Bearer ${this.$store.state.accessToken}`,
        },
        withCredentials: true,
      }
    )
    this.abtest = abtest.data
  },
  data() {
    return {
      abtest: null,
    }
  },
  computed: {},
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
}
</script>
