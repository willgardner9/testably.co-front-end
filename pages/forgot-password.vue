/* eslint-disable no-console */
<template>
  <!-- section -->
  <section class="w-full flex flex-col items-center mt-10vh">
    <!-- container -->
    <form
      class="
        md:w-1/2
        lg:w-1/3
        xl:w-1/4
        w-4/5
        p-8
        bg-white
        flex flex-col
        justify-center
        rounded-lg
        border border-gray-200
        dark:bg-gray-800
        dark:border-gray-600
        shadow-sm
      "
      @submit.prevent="processResetPassword"
    >
      <h4
        class="
          text-black
          dark:text-white
          font-semibold
          text-3xl
          sm:mt-0
          text-center
        "
      >
        Forgot password
      </h4>
      <div class="field">
        <Label
          :class="[emailError ? 'text-red-600' : '']"
          class="label"
          label="email"
          :text="emailText"
        />
        <input
          v-model="email"
          :class="[emailError ? 'text-red-600 input-error' : '']"
          class="
            input
            w-full
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
          type="email"
          name="email"
          @focus="dismissError"
        />
      </div>

      <button
        type="submit"
        class="
          p-4
          text-md
          flex
          justify-center
          transition
          duration-300
          ease-in-out
          mt-8
          rounded-lg
          bg-green-500
          text-white
          border border-green-600
          hover:border-green-500
          hover:bg-green-400
          hover:shadow-sm
          dark:bg-green-700
          dark:border-green-600
          dark:hover:bg-green-600
          dark:hover-border-green-500
          focus:ring-4
          ring-green-200
          dark:ring-green-800
          outline-none
          dark:focus:border-green-500
        "
      >
        {{ buttonText }}
      </button>
    </form>
  </section>
</template>

<script>
export default {
  middleware: ['refreshOnLoad', 'redirectIfLoggedIn', 'checkAccessExpiry'],

  data() {
    return {
      buttonText: 'Send reset link',
      email: '',
      isVisible: false,
      emailError: false,
      emailText: 'Email',
      errorText: '',
    }
  },
  methods: {
    async processResetPassword() {
      try {
        if (!this.email) {
          this.emailError = true
          this.emailText = 'Email required'
          return
        }

        const res = await this.$axios.post(
          `https://testably-back-end-iadh5.ondigitalocean.app/user/forgot-password`,
          {
            email: this.email,
          }
        )

        if (res) {
          this.buttonText = 'Link set!'
        } else {
          this.buttonText = 'Error sending email'
        }
        return res
      } catch (error) {
        this.emailError = true
        this.emailText = 'Error sending email'
        return error
      }
    },

    dismissError() {
      this.emailText = 'Email'
      this.emailError = false
    },

    dismissLoginError() {
      this.errorText = false
    },
  },
}
</script>

<style scoped>
button:focus {
  outline: none !important;
}

h3,
h4 {
  font-family: 'Space Grotesk', sans-serif;
}

.field {
  display: flex;
  flex-direction: column;
}

.input {
  padding: 1rem;
}

.input-error {
  border: 1px solid #fc8181 !important;
}

.input-error-text {
  color: #fc8181 !important;
}

.label {
  margin-top: 1.5rem;
}

.r-4 {
  right: 1rem;
}

.t-4 {
  top: 1rem;
}

.mt-10vh {
  margin-top: 10vh;
}
</style>
