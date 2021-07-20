<template>
  <section class="w-full">
    <div
      class="
        flex flex-col
        items-start
        justify-between
        sm:flex-row
        w-full
        sm:items-center
        p-4
        rounded-lg rounded-b-none
        border border-b-0
        bg-white
        border-gray-200
        dark:bg-gray-800
        dark:border-gray-700
      "
    >
      <h3
        class="
          break-normal
          sm:min-w-max
          dark:text-white
          text-xl
          font-semibold
          flex
          items-center
          mb-2
          sm:mb-0
        "
      >
        Testably code snippets
      </h3>
    </div>
    <div
      class="
        w-full
        items-center
        p-4
        rounded-lg rounded-t-none
        border border-t-0 border-gray-200
        dark:bg-gray-800
        dark:border-gray-700
      "
    >
      <h4 class="text-gray-600 dark:text-gray-300 mt-2">
        Follow the instructions below to add the testably code snippets to your
        website and get your A/B test started.
      </h4>

      <!-- Copy test section -->
      <div v-if="abtest.type === 'copy'" class="mt-8 flex flex-col">
        <h3 class="text-lg text-gray-900 font-medium dark:text-gray-200">
          1) Text snippet
        </h3>
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <p class="text-gray-600 text-sm dark:text-gray-400">
              Copy and paste this snippet into the element whose text you are
              testing.
            </p>
            <button
              v-show="!showOneExample"
              class="
                ml-2
                font-semibold
                text-gray-500
                dark:text-gray-300
                text-sm
                border-b border-dashed border-gray-500
                dark:border-gray-300
                min-w-max
              "
              @click="revealOneExample"
            >
              Show examples
            </button>
            <button
              v-show="showOneExample"
              class="
                ml-2
                font-semibold
                text-gray-500
                dark:text-gray-300
                text-sm
                border-b border-dashed border-gray-500
                dark:border-gray-300
                min-w-max
              "
              @click="revealOneExample"
            >
              Hide examples
            </button>
          </div>
          <ButtonJS
            text="copy"
            class="px-1 py-1 ml-2"
            ghost
            @click.native="copyIDCode"
          />
        </div>
        <div
          v-show="showOneExample"
          class="
            rounded-lg
            bg-green-50
            dark:bg-gray-900
            border border-gray-200
            dark:border-gray-700
            dark:text-gray-400
            shadow-inner
            p-4
            flex flex-col
            mt-2
            overflow-auto
          "
        >
          <code class="text-xs">{{ exampleBeginSnippet }}</code>
          <code class="text-xs">{{ textSnippetExample }}</code>
          <code class="text-xs">{{ textSnippetExampleOne }}</code>
        </div>
      </div>
      <!-- End copy test section -->

      <!-- Color test section -->
      <div v-if="abtest.type === 'colour'" class="mt-8 flex flex-col">
        <h3 class="text-lg text-gray-900 font-medium dark:text-gray-200">
          1) Color snippet
        </h3>
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <p class="text-gray-600 text-sm dark:text-gray-400">
              Copy and paste this snippet into the element whose color you are
              testing.
            </p>
            <button
              v-show="!showOneExample"
              class="
                ml-2
                font-semibold
                text-gray-500
                dark:text-gray-300
                text-sm
                border-b border-dashed border-gray-500
                dark:border-gray-300
                min-w-max
              "
              @click="revealOneExample"
            >
              Show examples
            </button>
            <button
              v-show="showOneExample"
              class="
                ml-2
                font-semibold
                text-gray-500
                dark:text-gray-300
                text-sm
                border-b border-dashed border-gray-500
                dark:border-gray-300
                min-w-max
              "
              @click="revealOneExample"
            >
              Hide examples
            </button>
          </div>
          <ButtonJS
            text="copy"
            class="px-1 py-1 ml-2"
            ghost
            @click.native="copyIDCode"
          />
        </div>
        <div
          v-show="showOneExample"
          class="
            rounded
            bg-green-50
            dark:bg-gray-900
            border border-gray-200
            dark:border-gray-700
            dark:text-gray-400
            shadow-inner
            p-4
            flex flex-col
            mt-2
            overflow-auto
          "
        >
          <code class="text-xs">{{ exampleBeginSnippet }}</code>
          <code class="text-xs">{{ colorSnippetExample }}</code>
          <code class="text-xs">{{ colorSnippetExampleOne }}</code>
        </div>
      </div>
      <!-- End color test section -->

      <!-- Src test section -->
      <div v-if="abtest.type === 'src'" class="mt-8 flex flex-col">
        <h3 class="text-lg text-gray-900 font-medium dark:text-gray-200">
          1) Image / Video snippet
        </h3>
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <p class="text-gray-600 text-sm dark:text-gray-400">
              Copy and paste this snippet into the element whose image / video
              you are testing.
            </p>
            <button
              v-show="!showOneExample"
              class="
                ml-2
                font-semibold
                text-gray-500
                dark:text-gray-300
                text-sm
                border-b border-dashed border-gray-500
                dark:border-gray-300
                min-w-max
              "
              @click="revealOneExample"
            >
              Show examples
            </button>
            <button
              v-show="showOneExample"
              class="
                ml-2
                font-semibold
                text-gray-500
                dark:text-gray-300
                text-sm
                border-b border-dashed border-gray-500
                dark:border-gray-300
                min-w-max
              "
              @click="revealOneExample"
            >
              Hide examples
            </button>
          </div>
          <ButtonJS
            text="copy"
            class="px-1 py-1 ml-2"
            ghost
            @click.native="copyIDCode"
          />
        </div>
        <div
          v-show="showOneExample"
          class="
            rounded-lg
            bg-green-50
            dark:bg-gray-900
            border border-gray-200
            dark:border-gray-700
            dark:text-gray-400
            shadow-inner
            p-4
            flex flex-col
            mt-2
            overflow-auto
          "
        >
          <code class="text-xs">{{ exampleBeginSnippet }}</code>
          <code class="text-xs">{{ srcSnippetExample }}</code>
          <code class="text-xs">{{ srcSnippetExampleOne }}</code>
        </div>
      </div>
      <!-- End src test section -->

      <!-- Id snippet -->
      <div
        id="textcode"
        class="
          rounded-lg
          bg-gray-100
          dark:bg-gray-900
          border border-gray-200
          dark:border-gray-700
          dark:text-gray-400
          shadow-inner
          p-4
          flex flex-col
          mt-2
          overflow-auto
        "
      >
        <code class="text-xs">id="testably-{{ abtest._id }}"</code>
      </div>
      <!-- End Id snippet -->

      <!-- Conversion snippet -->
      <div class="mt-8 flex flex-col">
        <h3 class="text-lg text-gray-900 font-medium dark:text-gray-200">
          2) Conversions snippet
        </h3>
        <div class="flex items-center justify-between">
          <p class="text-gray-600 text-sm dark:text-gray-400">
            Copy and paste this snippet into the button(s) and link(s) that lead
            to your conversion goal, for example your CTA buttons.
          </p>
          <ButtonJS
            text="copy"
            class="px-1 py-1 ml-2"
            ghost
            @click.native="copyConversionCode"
          />
        </div>
      </div>

      <div
        id="conversioncode"
        class="
          rounded-lg
          bg-gray-100
          dark:bg-gray-900
          border border-gray-200
          dark:border-gray-700
          dark:text-gray-400
          shadow-inner
          p-4
          flex flex-col
          mt-2
          overflow-auto
        "
      >
        <code class="text-xs">data-testably-conversion</code>
      </div>
      <!-- End conversion snippet -->

      <!-- JavaScript snippet explainer -->
      <div class="mt-8 flex flex-col">
        <h3 class="text-lg text-gray-900 font-medium dark:text-gray-200">
          3) JavaScript snippet
        </h3>
        <div class="flex items-center justify-between">
          <p class="text-gray-600 text-sm dark:text-gray-400">
            Copy and paste this snippet just before the
            <span class="font-mono">{{ bodyTag }}</span> tag closes on the page
            of your website running the A/B test.
          </p>
          <ButtonJS
            text="copy"
            class="px-1 py-1 ml-2"
            ghost
            @click.native="copyJavaScriptCode"
          />
        </div>
      </div>
      <!-- End JavaScript snippet explainer -->

      <!-- JavaScript snippet -->
      <div
        id="javascriptcode"
        class="
          rounded-lg
          bg-gray-100
          dark:bg-gray-900
          border border-gray-200
          dark:border-gray-700
          dark:text-gray-400
          shadow-inner
          p-4
          flex flex-col
          mt-2
          overflow-auto
        "
      >
        <code class="text-xs">{{ startScriptTag }};</code>
        <code class="text-xs">const elId = 'testably-{{ abtest._id }}';</code>
        <code class="text-xs">const testType = '{{ abtest.type }}';</code>
        <code class="text-xs"
          >const variationCount = {{ abtest.variations.length }};</code
        >
        <code class="text-xs">
          const variationInfo = [
          <code
            v-for="variation in abtest.variations"
            :key="variation._id"
            class="text-xs"
            >['{{ variation._id }}', '{{ variation.variable }}'],</code
          >
          ]
        </code>
        <code class="text-xs">
          const
          el=document.getElementById(elId),getActiveVariationIndex=(a,b)=>Math.floor(Math.random()*(b-a+1))+a,activeVariationIndex=getActiveVariationIndex(0,variationCount-1);"copy"===testType&&(el.textContent=variationInfo[activeVariationIndex][1]),"src"===testType&&(el.src=variationInfo[activeVariationIndex][1]),"colour"===testType&&(el.style.backgroundColor=variationInfo[activeVariationIndex][1]);const
          testablyUpdate=a=>{const b=new
          XMLHttpRequest;b.open("PATCH",`http://localhost:1407/${variationInfo[activeVariationIndex][0]}`),b.setRequestHeader("Accept","application/json"),b.setRequestHeader("Content-Type","application/json"),b.setRequestHeader("Access-Control-Allow-Origin",window.location.href);const
          c={id:variationInfo[activeVariationIndex][0],sessions:!0,conversions:a};b.send(JSON.stringify(c))};window.onload=testablyUpdate(!1);const
          conversionElements=document.querySelectorAll("[data-testably-conversion]");conversionElements.forEach(a=>a.addEventListener("click",function(){testablyUpdate(!0)}));
        </code>
        <code class="text-xs">{{ endScriptTag }}t></code>
      </div>
      <!-- End JavaScript snippet -->
    </div>
  </section>
</template>

<script>
export default {
  props: {
    abtest: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      startScriptTag: `<script>`,
      endScriptTag: `</scrip`,
      showOneExample: false,
      exampleBeginSnippet: `<!-- Example code -->`,
      textSnippetExample: `
      <button id="add-the-below-id-here">Click me!</button> 
      `,
      textSnippetExampleOne: `
      <h1 id="add-the-below-id-here">Attention-grabbing tag line</h1> 
      `,
      colorSnippetExample: `
      <button id="add-the-below-id-here">Click me!</button> 
      `,
      colorSnippetExampleOne: `
      <div id="add-the-below-id-here">...</div> 
      `,
      srcSnippetExample: `
      <video id="add-the-below-id-here" src="..." />
      `,
      srcSnippetExampleOne: `
      <img id="add-the-below-id-here" src="..." />
      `,
      bodyTag: `<body>`,
      bodyTagExample: `<body>...paste here</body>`,
    }
  },
  methods: {
    copyJavaScriptCode() {
      const { ClipboardItem } = window
      const rawData = document.getElementById('javascriptcode').textContent
      const data = [
        new ClipboardItem({
          'text/plain': new Blob([rawData], { type: 'text/plain' }),
        }),
      ]
      navigator.clipboard.write(data)
    },
    copyIDCode() {
      const { ClipboardItem } = window
      const rawData = document.getElementById('textcode').textContent
      const data = [
        new ClipboardItem({
          'text/plain': new Blob([rawData], { type: 'text/plain' }),
        }),
      ]
      navigator.clipboard.write(data)
    },
    copyConversionCode() {
      const { ClipboardItem } = window
      const rawData = document.getElementById('conversioncode').textContent
      const data = [
        new ClipboardItem({
          'text/plain': new Blob([rawData], { type: 'text/plain' }),
        }),
      ]
      navigator.clipboard.write(data)
    },
    revealOneExample() {
      this.showOneExample = !this.showOneExample
    },
  },
}
</script>
