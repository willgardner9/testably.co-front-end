<template>
  <section class="w-full">
    <h2 class="text-xl text-black dark:text-white font-semibold">
      Testably code snippets
    </h2>
    <h4 class="text-gray-600 dark:text-gray-300 mt-2">
      Please follow the instructions below to add the two testably code snippets
      to your website and get your A/B test started.
    </h4>

    <div v-if="abtest.type === 'copy'" class="mt-4 flex flex-col">
      <h3 class="text-lg text-gray-900 font-medium dark:text-gray-200">
        1) Text snippet
      </h3>
      <p class="text-gray-600 text-sm">
        Please copy and paste this snippet into the element whose text you are
        testing.
      </p>
    </div>
    <div v-if="abtest.type === 'colour'" class="mt-4 flex flex-col">
      <h3 class="text-lg text-gray-900 font-medium dark:text-gray-200">
        1) Color snippet
      </h3>
      <p class="text-gray-600 text-sm">
        Please copy and paste this snippet into the element whose color you are
        testing.
      </p>
    </div>
    <div v-if="abtest.type === 'src'" class="mt-4 flex flex-col">
      <h3 class="text-lg text-gray-900 font-medium dark:text-gray-200">
        1) Image / Video snippet
      </h3>
      <p class="text-gray-600 text-sm">
        Please copy and paste this snippet into the element whose image / video
        you are testing.
      </p>
    </div>
    <div
      class="
        rounded
        bg-gray-100
        border border-gray-200
        shadow-inner
        p-4
        flex flex-col
        mt-2
      "
    >
      <code class="text-xs">id="testably-{{ abtest._id }}"</code>
    </div>
    <div class="mt-4 flex flex-col">
      <h3 class="text-lg text-gray-900 font-medium dark:text-gray-200">
        2) JavaScript snippet
      </h3>
      <p class="text-gray-600 text-sm">
        Please copy and paste this snippet onto the page of your website running
        the A/B test.
      </p>
    </div>
    <div
      class="
        rounded
        bg-gray-100
        border border-gray-200
        shadow-inner
        p-4
        flex flex-col
        mt-2
      "
    >
      <code class="text-xs">{{ startScriptTag }}</code>
      <code class="text-xs">const elId = 'testably-{{ abtest._id }}'</code>
      <code class="text-xs">const testType = '{{ abtest.type }}'</code>
      <code class="text-xs"
        >const variationCount = {{ abtest.variations.length }}</code
      >
      <code class="text-xs"
        >const conversionUrl = '{{ abtest.conversionURL }}'</code
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
      <code class="text-xs"
        >const
        el=document.getElementById(elId),getActiveVariationIndex=(e,t)=>Math.floor(Math.random()*(t-e+1))+e,activeVariationIndex=getActiveVariationIndex(0,variationCount-1);"copy"===testType&&(el.textContent=variationInfo[activeVariationIndex][1]),"src"===testType&&(el.src=variationInfo[activeVariationIndex][1]),"colour"===testType&&(el.style.backgroundColor=variationInfo[activeVariationIndex][1]);const
        testablyUpdate=e=>{const t=new
        XMLHttpRequest;t.open("PATCH",`http://localhost:1407/${variationInfo[activeVariationIndex][0]}`),t.setRequestHeader("Accept","application/json"),t.setRequestHeader("Content-Type","application/json"),t.setRequestHeader("Access-Control-Allow-Origin",window.location.href);const
        n={id:variationInfo[activeVariationIndex][0],sessions:!0,conversions:e};t.send(JSON.stringify(n))};window.onload=testablyUpdate(!1);const
        conversionURLElements=document.querySelectorAll(`a[href="${conversionUrl}"]`);conversionURLElements.forEach(e=>e.addEventListener("click",function(){testablyUpdate(!0)}));</code
      >
      <code class="text-xs">{{ endScriptTag }}t></code>
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
    }
  },
}
</script>
