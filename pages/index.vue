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
            text-5xl text-black
            dark:text-white
            font-semibold
            text-center
            max-w-3xl
          "
        >
          Start A/B testing your landing page and convert more.
        </h3>
        <p class="mt-6 text-center text-xl text-gray-700 dark:text-gray-400">
          A/B testing can increase conversions and sales. But existing tools are
          complex, expensive, and slow. We built testably so you can start
          optimising your landing page in 5 minutes at a fraction of the cost.
        </p>
        <Button
          destination="/register/?plan=free"
          text="Try for free"
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
          Don't focus on getting more visitors - make the most of the traffic
          you have.
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
        <h5 class="scribble-text text-2xl select-none mt-4">Here's how...</h5>
      </div>

      <!-- step by step -->
      <div class="flex flex-col max-w-6xl mt-4 p-4">
        <LandingPageStep
          ltor
          class="border-b border-gray-200 dark:border-gray-800"
          step="1"
          action="Set up your A/B test and variations"
          :image="require('~/assets/newtestscreenshot.png')"
          description="Start using testably by registering in under a minute and setting up your first A/B test. You can A/B test different copy, colours, images, and videos on your landing page using testably."
        />
        <LandingPageStep
          class="border-b border-gray-200 dark:border-gray-800"
          step="2"
          action="Add testably to your landing page"
          :image="require('~/assets/snippetscreenshot.png')"
          description="Follow our easy instructions to add the testably code snippets to your landing page. If you get stuck, you can reach out to us for support."
        />
        <LandingPageStep
          ltor
          class="pb-0"
          step="3"
          action="Watch your conversion rate increase"
          :image="require('~/assets/conversionsscreenshot.png')"
          description="Sit back, relax, and discover which of your A/B test variations performs the best - keep optimizing your landing page to boost conversions."
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

        <h5 class="scribble-text text-2xl select-none mt-4">
          Testably is a perfect fit for your landing page because we're...
        </h5>
      </div>

      <!-- features -->
      <div
        class="
          flex flex-col
          md:flex-row md:flex-wrap
          w-full
          max-w-6xl
          mt-12
          p-4
        "
      >
        <div class="w-full md:w-1/2 lg:w-1/4 rounded p-4 flex flex-col mb-8">
          <div class="flex items-center mb-4">
            <div
              class="
                min-w-12 min-h-12
                w-10
                h-10
                bg-green-500
                text-white text-2xl
                font-semibold
                rounded-full
                flex
                items-center
                justify-center
                mr-4
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <h5 class="text-black dark:text-white font-semibold text-xl">
              Lightning fast
            </h5>
          </div>
          <p class="text-gray-700 dark:text-gray-400 text-lg">
            Testably won't slow your landing page test down - our A/B tests run
            directly on your website so visitors won't have to wait for content
            to load.
          </p>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/4 rounded p-4 flex flex-col mb-8">
          <div class="flex items-center mb-4">
            <div
              class="
                min-w-12 min-h-12
                w-10
                h-10
                bg-green-500
                text-white text-2xl
                font-semibold
                rounded-full
                flex
                items-center
                justify-center
                mr-4
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <h5 class="text-black dark:text-white font-semibold text-xl">
              Super Simple
            </h5>
          </div>
          <p class="text-gray-700 dark:text-gray-400 text-lg">
            Testably isn't a website builder-esque advanced A/B testing suite.
            Set up your tests in under 5 minutes. Get stuck? Contact us for
            support.
          </p>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/4 rounded p-4 flex flex-col mb-8">
          <div class="flex items-center mb-4">
            <div
              class="
                min-w-12 min-h-12
                w-10
                h-10
                bg-green-500
                text-white text-2xl
                font-semibold
                rounded-full
                flex
                items-center
                justify-center
                mr-4
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <h5 class="text-black dark:text-white font-semibold text-xl">
              Flexible
            </h5>
          </div>
          <p class="text-gray-700 dark:text-gray-400 text-lg">
            No year-long contracts or high entry-level costs. Get started for
            free or upgrade to a monthly rolling contract.
          </p>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/4 rounded p-4 flex flex-col mb-8">
          <div class="flex items-center mb-4">
            <div
              class="
                min-w-12 min-h-12
                w-10
                h-10
                bg-green-500
                text-white text-2xl
                font-semibold
                rounded-full
                flex
                items-center
                justify-center
                mr-4
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                  clip-rule="evenodd"
                />
                <path
                  d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"
                />
              </svg>
            </div>
            <h5 class="text-black dark:text-white font-semibold text-xl">
              Privacy friendly
            </h5>
          </div>
          <p class="text-gray-700 dark:text-gray-400 text-lg">
            All our data is anonymous by design: no cookies, trackers,
            fingerprinting, or anything else. No cookie consent banners needed!
          </p>
        </div>
      </div>

      <!-- scribble text and arrow 5 -->
      <div
        id="pricing-section"
        class="flex flex-col w-full items-center justify-center text-gray-400"
      >
        <svg width="20" height="95" xmlns="http://www.w3.org/2000/svg">
          <g
            id="svg_1"
            transform="rotate(90 10 47.5)"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
          >
            <path
              id="svg_2"
              d="m-34.029,49.03c1.522,1.408 3.577,1.145 5.935,1.174c9.331,0.121 18.768,-0.963 28.067,-1.583c15.529,-1.034 32.082,-3.414 47.576,-0.777"
            />
            <path
              id="svg_3"
              d="m44.162,54.298c2.522,-3.59 6.828,-3.986 9.867,-6.88c-2.967,-1.208 -8.871,-3.928 -10.767,-6.716"
              stroke-linejoin="round"
            />
          </g>
        </svg>

        <h5 class="scribble-text text-2xl select-none mt-4">
          Simple pricing for simple A/B testing
        </h5>
      </div>

      <!-- Pricing table -->
      <PricingTable ref="pricing" class="mt-12 mb-8" />

      <!-- scribble text and arrow 6 -->
      <div
        class="
          flex flex-col
          w-full
          items-center
          justify-center
          text-gray-400
          mt-8
        "
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

        <h5 class="scribble-text text-2xl select-none mt-4">
          Still not convinced? Fill in your stats and try our ROI calculator
        </h5>
      </div>

      <!-- ROI Calculator -->
      <ROICalc class="mt-12 mb-12" />
    </div>
  </div>
</template>

<script>
export default {
  middleware: ['refreshOnLoad', 'checkAccessExpiry'],
  data() {
    return {
      jumpToPricing: this.$route.query.section,
    }
  },
  mounted() {
    if (this.jumpToPricing) {
      setTimeout(function () {
        const el = document.getElementById('pricing-section')
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 300)
    }
  },
}
</script>

<style scoped>
.scribble-text {
  font-family: 'Caveat', cursive;
}

.mt-5 {
  margin-top: 1.25rem;
}

.min-w-12,
.min-h-12 {
  min-width: 2.5rem;
  min-height: 2.5rem;
}
</style>
