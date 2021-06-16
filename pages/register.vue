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
        border border-gray-100
        dark:bg-gray-800
        dark:border-gray-600
        shadow-sm
      "
      @submit.prevent="processRegister"
    >
      <h4
        class="
          text-gray-900
          font-semibold
          text-3xl
          sm:mt-0
          text-center
          dark:text-white
        "
      >
        Register
      </h4>
      <div class="field">
        <Label
          class="label"
          label="email"
          :text="emailText"
          :class="[emailError ? 'text-red-600' : '']"
        />
        <input
          v-model="email"
          :class="[emailError ? 'text-red-600 input-error' : '']"
          class="
            input
            w-full
            transition
            duration-300
            ease-in-out
            rounded-lg
            hover:border-orange-200
            dark:hover:border-gray-500
            hover:ring-2 hover:ring-orange-100
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
          class="label"
          label="password"
          :text="passwordText"
          :class="[passwordError ? 'text-red-600' : '']"
        />
        <div class="relative">
          <input
            v-model="password"
            :class="[passwordError ? 'text-red-600 input-error' : '']"
            class="
              input
              w-full
              transition
              duration-300
              ease-in-out
              rounded-lg
              hover:border-orange-200
              dark:hover:border-gray-500
              hover:ring-2 hover:ring-orange-100
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
            class="absolute r-4 t-4"
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
          bg-black
          text-white
          hover:bg-gray-800
          dark:bg-gray-600
          dark:hover:bg-gray-500
          dark:text-gray-100
          dark:hover:text-white
          dark:border dark:border-gray-500
        "
      >
        Register
      </button>

      <p
        class="
          mt-6
          sm:block
          text-center
          justify-center
          text-xs text-gray-600
          font-thin
          dark:text-gray-300
        "
      >
        By registering you agree to our
        <NuxtLink to="/terms" class="text-blue-custom font-light mx-1"
          >Terms</NuxtLink
        >
        and
        <NuxtLink to="/privacy" class="text-blue-custom font-light ml-1"
          >Privacy Policy</NuxtLink
        >
      </p>
      <p
        class="
          mt-2
          flex
          justify-center
          text-xs text-gray-600
          dark:text-gray-300
          font-thin
        "
      >
        Already have an account?
        <NuxtLink to="/login" class="ml-1 text-blue-custom font-light"
          >Login</NuxtLink
        >
      </p>
    </form>
  </section>
</template>

<script>
export default {
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
    }
  },
  methods: {
    async processRegister() {
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

        const res = await this.$axios.post('user/register', {
          email: this.email,
          password: this.password,
        })
        this.errorMessage = ''
        this.$router.push('/login')
        return res
      } catch (error) {
        this.emailText = 'Oops, this email is already registered.'
        this.emailError = true
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
  },
}
</script>

<style scoped>
.h-80vh {
  height: 80vh;
}

@media (max-width: 640px) {
  .h-80vh {
    height: auto;
  }
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

.label {
  margin-top: 1.5rem;
}

.r-4 {
  right: 1rem;
}

.t-4 {
  top: 1rem;
}

.blue-button {
  background-color: #000000;
  color: #fff;
}

.blue-button:hover {
  background-color: #1a202c;
}

.bg-blue-custom {
  background-color: #0066ff;
}

.text-blue-custom {
  color: #0066ff;
}

.bg-side {
  background: rgb(0, 102, 255);
  background: linear-gradient(
    0deg,
    rgba(0, 102, 255, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );
}

.mt-10vh {
  margin-top: 10vh;
}
</style>
