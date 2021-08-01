<template>
  <div class="w-full flex flex-col items-center">
    <!-- above the fold -->
    <div
      class="
        bg-white
        dark:bg-gray-900
        flex flex-col
        w-full
        items-center
        justify-center
        px-12
      "
    >
      <!-- Tagline, main copy, CTA -->
      <div
        class="mt-12 mb-2 flex flex-col max-w-4xl items-center justify-center"
      >
        <h3
          class="
            text-6xl text-black
            dark:text-white
            font-semibold
            text-center
            max-w-xl
          "
        >
          Your landing page can
          <span class="italic gradient-text">perform better.</span>
        </h3>
        <p class="mt-6 text-center text-xl text-gray-700 dark:text-gray-400">
          A/B testing increases conversions and sales. But existing tools are
          complex, expensive, and slow. We built testably so you can start
          optimising your landing page in 5 minutes at a fraction of the cost.
        </p>
        <Button
          destination="/register/?plan=free"
          text="Try for FREE"
          class="text-base mt-6"
        />
      </div>

      <!-- scribble text and arrow -->
      <div
        class="
          flex
          w-full
          justify-center
          sm:justify-end
          mt-6
          text-gray-400
          max-w-6xl
          z-10
        "
        aria-hidden
      >
        <h5 class="scribble-text text-base sm:text-2xl select-none">
          Which landing page copy do you think will convert more?
        </h5>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="mt-4"
          width="60"
          viewBox="0 0 43.61 59.71"
        >
          <defs>
            <clipPath id="a">
              <path d="M0 0h43.61v59.71H0z" />
            </clipPath>
          </defs>
          <g clip-path="url(#a)">
            <mask id="b" x="-200%" y="-200%" width="400%" height="400%">
              <rect
                x="-200%"
                y="-200%"
                width="400%"
                height="400%"
                fill="#fff"
              />
              <path
                d="M21.5 2.19c7.14-2.54 16.1 2.26 19.18 9.01C49.13 29.74 17.96 46.65 6.5 54.65"
              />
            </mask>
            <path
              d="M21.5 2.19c7.14-2.54 16.1 2.26 19.18 9.01C49.13 29.74 17.96 46.65 6.5 54.65"
              fill="none"
            />
            <path
              d="M21.5 2.19c7.14-2.54 16.1 2.26 19.18 9.01C49.13 29.74 17.96 46.65 6.5 54.65"
              fill="none"
              mask="url(#b)"
              vector-effect="non-scaling-stroke"
              stroke-width="4"
              stroke="currentColor"
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-miterlimit="10"
            />
            <mask id="c" x="-200%" y="-200%" width="400%" height="400%">
              <rect
                x="-200%"
                y="-200%"
                width="400%"
                height="400%"
                fill="#fff"
              />
              <path
                d="M6.12 47.1c-.2 4.4-3.61 7.04-4.62 11.11 3.15-.57 9.59-1.45 12.69-.12"
              />
            </mask>
            <path
              d="M6.12 47.1c-.2 4.4-3.61 7.04-4.62 11.11 3.15-.57 9.59-1.45 12.69-.12"
              fill="none"
            />
            <path
              d="M6.12 47.1c-.2 4.4-3.61 7.04-4.62 11.11 3.15-.57 9.59-1.45 12.69-.12"
              fill="none"
              mask="url(#c)"
              vector-effect="non-scaling-stroke"
              stroke-width="4"
              stroke="currentColor"
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-miterlimit="10"
            />
          </g>
        </svg>
      </div>

      <!-- gif comparison -->
      <div
        class="
          px-4
          flex
          max-w-xl
          sm:max-w-3xl
          md:max-w-6xl
          items-center
          justify-center
        "
      >
        <img
          class="rounded-lg shadow-lg -mt-4 sm:-mt-12"
          src="~/assets/landingpages.gif"
          alt="An animation that shows two landing page identical except for their headline copy."
        />
      </div>

      <!-- scribble text and arrow 2 -->
      <div
        class="
          flex
          w-full
          justify-center
          sm:justify-start
          text-gray-400
          max-w-6xl
          z-10
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="60"
          class="-mt-4"
        >
          <g
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
          >
            <path
              d="M43.354 6.702C20.408-11.712-9.671 34 6.028 51.78c9.196 10.415 28.308 2.704 38.322-2.215"
            />
            <path
              d="M43.69 57.59c.203-4.383 3.623-7.026 4.636-11.1-3.151.572-9.593 1.444-12.688.108"
            />
          </g>
        </svg>
        <h5 class="scribble-text text-base sm:text-2xl select-none mt-5">
          Leave the hunches and guesswork behind!
        </h5>
      </div>

      <!-- secondary tagline and copy -->
      <div class="flex flex-col sm:flex-row max-w-6xl my-4 rounded-lg p-4">
        <h4
          class="
            text-3xl text-black
            dark:text-white
            font-semibold
            flex-b
            sm:w-1/2
            p-4
          "
        >
          Use a <span class="gradient-text italic">data-driven</span> approach
          to optimise your landing page.
        </h4>
        <h5 class="text-xl text-gray-700 dark:text-gray-400 p-4 sm:w-1/2">
          With testably, you can quickly and easily A/B test different copy,
          colours, images, and videos to make your landing page perform better.
        </h5>
      </div>

      <!-- scribble text and arrow 3 -->
      <div
        class="flex flex-col w-full items-center justify-center text-gray-400"
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="70" viewBox="0 0 20 75">
          <defs />
          <g
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="2"
          >
            <path
              d="M10.01 2.35c.07 9.49-1.68 19.22-.27 28.65.44 2.88 1.48 9.7 4.86 10.94 2.8 1.03 3.58-1.4 3.37-3.87-.22-2.5-2.11-6.75-5.12-6.84-3.96-.12-4.82 5.88-5.2 8.68-1.2 9.06 1.02 18.13.99 27.19"
            />
            <path
              d="M2 63.17c3.72 2.33 4.35 6.6 7.4 9.48 1.05-3.02 3.44-9.07 6.13-11.11"
            />
          </g>
        </svg>
        <h5 class="scribble-text text-base sm:text-2xl select-none mt-4">
          Here's how...
        </h5>
      </div>

      <!-- step by step -->
      <div class="flex flex-col max-w-6xl mt-4 p-4">
        <LandingPageStep
          class="border-b border-gray-200"
          step="1"
          action="Set up your A/B test and variations"
          :image="require('~/assets/newtestscreenshot.png')"
          description="Start using testably by registering in under a minute and setting up your first A/B test. Then, add variations you want to A/B test."
        />
        <LandingPageStep
          class="border-b border-gray-200"
          step="2"
          action="Add testably to your landing page"
          :image="require('~/assets/snippetscreenshot.png')"
          description="Follow our easy instructions to add the testably code snippets to your landing page. If you get stuck, you can reach out to us for support."
        />
        <LandingPageStep
          class="pb-0"
          step="3"
          action="Watch your conversion rate increase"
          :image="require('~/assets/conversionsscreenshot.png')"
          description="Sit back, relax, and discover which of your variations performs the best - keep optimizing your landing page to boost conversions."
        />
      </div>

      <!-- scribble text and arrow 4 -->
      <div
        class="flex flex-col w-full items-center justify-center text-gray-400"
      >
        <svg width="30" height="60" xmlns="http://www.w3.org/2000/svg">
          <g
            transform="rotate(-180 14.9625 30.022)"
            stroke="currentColor"
            stroke-miterlimit="10"
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="2"
            fill="none"
          >
            <path
              d="m10.30617,6.09899c5.58826,2.238 14.7369,5.858 15.54277,12.551c0.71398,5.938 -5.39498,11.437 -9.37784,15.21c-5.80583,5.502 -25.58706,21.344 -6.65711,23.567c6.24626,0.733 12.38056,-0.262 18.31102,-2.13"
            />
            <path
              d="m10.4139,13.76499c-0.44993,-4.367 -4.20149,-6.833 -5.48898,-10.849c3.35549,0.411 10.19849,0.953 13.39027,-0.541"
            />
          </g>
        </svg>

        <h5 class="scribble-text text-base sm:text-2xl select-none mt-4">
          A perfect fit for you
        </h5>
      </div>
    </div>

    <!-- below the fold -->
    <div class="flex flex-col w-full items-center mt-8">
      <PricingTable />
    </div>
  </div>
</template>

<script>
export default {
  middleware: ['refreshOnLoad', 'checkAccessExpiry'],
  data() {
    return {}
  },
  methods: {},
}
</script>

<style scoped>
.gradient-text {
  background: -webkit-linear-gradient(#047857, #34d399);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding-left: 3px;
}
.scribble-text {
  font-family: 'Caveat', cursive;
}

.mt-5 {
  margin-top: 1.25rem;
}
</style>
