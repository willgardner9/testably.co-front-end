/* eslint-disable no-console */
<template>
  <!-- section -->
  <section class="w-full flex flex-col h-80vh items-center mt-10vh">
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
      @submit.prevent="processLogin"
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
        Login
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
            hover:border-indigo-200
            dark:hover:border-gray-500
            hover:ring-4 hover:ring-indigo-200
            focus:ring-4 focus:ring-indigo-200
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

      <div class="field">
        <Label
          :class="[passwordError ? 'input-error-text' : '']"
          class="label"
          label="password"
          :text="passwordText"
        />
        <div class="relative">
          <input
            v-model="password"
            :class="[passwordError ? 'text-red-600 input-error' : '']"
            class="
              input
              w-full
              transition
              duration-150
              ease-in-out
              rounded-lg
              hover:border-indigo-200
              dark:hover:border-gray-500
              hover:ring-4 hover:ring-indigo-200
              focus:ring-4 focus:ring-indigo-200
              dark:focus:ring-gray-600
              outline-none
              border border-gray-200
              dark:bg-gray-900
              dark:border-gray-600
              dark:hover:ring-gray-600
              dark:text-white
            "
            :type="passwordFieldType"
            name="password"
            @focus="dismissError"
          />
          <button
            class="absolute r-4 t-4 focus:ring-2 ring-indigo-300 rounded"
            type="button"
            @click="showHidePassword"
          >
            <svg
              v-show="!isVisible"
              xmlns="http://www.w3.org/2000/svg"
              class="
                h-6
                w-6
                text-gray-500
                hover:text-gray-600
                transition
                duration-150
                ease-in-out
              "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
              />
            </svg>
            <svg
              v-show="isVisible"
              xmlns="http://www.w3.org/2000/svg"
              class="
                h-6
                w-6
                text-gray-500
                hover:text-gray-600
                transition
                duration-150
                ease-in-out
              "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </button>
        </div>
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
          bg-indigo-500
          text-white
          border border-indigo-600
          hover:border-indigo-500
          hover:bg-indigo-400
          hover:shadow-sm
          dark:bg-indigo-700
          dark:border-indigo-600
          dark:hover:bg-indigo-600
          dark:hover-border-indigo-500
          focus:ring-4
          ring-indigo-200
          dark:ring-indigo-800
          outline-none
          dark:focus:border-indigo-500
        "
      >
        Login
      </button>
      <p
        class="
          mt-6
          flex
          justify-center
          text-xs text-gray-600
          dark:text-gray-300
          font-thin
        "
      >
        Don't have an account?
        <NuxtLink to="/register" class="ml-1 text-indigo-400 font-light"
          >Register</NuxtLink
        >
      </p>
    </form>
  </section>
</template>

<script>
export default {
  middleware: ['refreshOnLoad', 'redirectIfLoggedIn', 'checkAccessExpiry'],

  data() {
    return {
      email: '',
      password: '',
      passwordFieldType: 'password',
      isVisible: false,
      emailError: false,
      passwordError: false,
      passwordText: 'Password',
      emailText: 'Email',
      errorText: '',
    }
  },
  methods: {
    async processLogin() {
      console.log('firing processLogin')

      try {
        if (!this.email) {
          this.emailError = true
          this.emailText = 'Email required'
          return
        }
        if (!this.password) {
          this.passwordError = true
          this.passwordText = 'Password required'
          return
        }

        console.log('still here')

        const res = await this.$axios.post(
          `https://testably-back-end-iadh5.ondigitalocean.app/user/login`,
          {
            email: this.email,
            password: this.password,
          }
        )

        console.log('res', res)

        this.$cookiz.set('loggedOut', false)
        this.errorMessage = ''
        this.$store.commit('toggleAuth', true)
        this.$store.commit(
          'setAccessToken',
          res.data.accessTokenObj.accessToken
        )
        this.$store.commit(
          'setAccessTokenExpiresIn',
          res.data.accessTokenObj.accessTokenExpiresIn
        )
        this.$store.commit('setUser', res.data.user)
        this.$router.push('/dashboard')
        return res
      } catch (error) {
        this.emailError = true
        this.emailText = 'Email or password incorrect'
        this.passwordError = true
        this.passwordText = 'Email or password incorrect'
        return error
      }
    },

    dismissError() {
      this.emailText = 'Email'
      this.passwordText = 'Password'
      this.emailError = false
      this.passwordError = false
    },

    showHidePassword() {
      this.passwordFieldType =
        this.passwordFieldType === 'password' ? 'text' : 'password'
      this.isVisible = !this.isVisible
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

.h-80vh {
  height: 80vh;
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
