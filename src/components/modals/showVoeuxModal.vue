<template>
  <fwb-modal @close="$emit('close')" persistent class="m-0">
    <template #header>
      <div class="flex items-center text-lg text-slate-700">
        Creer votre voeux {{ `${imageBaseUrl}${imageIndex}.png` }}
      </div>
    </template>
    <template #body>
      <div class="space-y-1 m-0 p-0">
        <img
          :src="`${imageBaseUrl}${imageIndex}.png`"
          alt=""
          class="block object-cover object-center w-full rounded-md h-64"
        />
        <div class="flex items-center text-xs">
          <span>---</span>
        </div>
      </div>
      <p class="text-sm md:text-base leading-relaxed text-gray-500 text-center">
        {{ textesData.getVoeuxText(voeuxIndex, language) }}
      </p>
     

      
    </template>
    <template #footer>
      <div class="flex justify-center text-center">
        <fwb-button
          @click="$emit('close')"
          class="px-4 py-2 w-full bg-gradient-to-r from-red-400 to-red-500 hover:opacity-80 text-white font-semibold rounded-md"
        >
          {{ textesData.getLocalizedText(9) }}
        </fwb-button>
      </div>
    </template>
  </fwb-modal>
</template>
<script>
import { ref, reactive, watchEffect, computed } from "vue";
import { FwbButton, FwbModal, FwbSelect } from "flowbite-vue";
import { textesDataStore } from "@/stores";
export default {
  name: "ShowVoeuxModal",
  props: {},

  setup(props) {
    const imageBaseUrl = "../../assets/images/imgs/image_";
    const textesData = ref(textesDataStore());
    watchEffect(() => {}); // expose the state to the template
    return { textesData, imageBaseUrl };
  },
  mounted() {},
  data() {
    return { 
    };
  },
  methods: { 
    
  },
  watch: {},
  components: { FwbModal },
};
</script>
