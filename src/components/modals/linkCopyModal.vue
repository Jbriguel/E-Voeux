<template>
  <fwb-modal @click="$emit('close')" class="my-2">
    <template #header>
      <div class="flex items-center text-lg text-slate-900">Partager le vœux</div>
    </template>
    <template #body>
      <div class="w-full p-1 mx-2">
          <input
            type="text"
            readonly
            class="h-14 w-full px-2 py-2 text-xs placeholder-gray-400/70 text-slate-700 rounded-md border-slate-100 z-0 pointer-events-none"
            :value="link"
            id="lienv"
          />
        </div> 
      <div class="w-full  items-center content-center  p-1">

      <ShareNetwork
        network="whatsapp"
        :url="link"
        title="E-Voeux"
        :description="`${prenom} vous a laissé un voeux.\n Veuillez cliquer sur le lien pour accéder au voeux.`"
        media="../../assets/evoeux.jpg"
      >
        <button
          data-action="share/whatsapp/share"
          class="sm:h-14 w-full h-12 px-2    text-center text-white rounded-md bg-green-400 hover:bg-green-500"
        >
          {{ textesData.getLocalizedText(5) }} <i class="fab fa-whatsapp"></i>
        </button>
     </ShareNetwork>
       <!-- <button @click="closeModal"
              class=" w-full my-4 px-6 py-2 font-medium text-white rounded bg-gradient-to-br from-red-400 to-red-400"
            >
            {{ textesData.getLocalizedText(9) }}
            </button> -->
     </div>
    </template>

  </fwb-modal>
</template>
<script>
import { ref, reactive, watchEffect, computed } from "vue";
import { FwbButton, FwbModal } from "flowbite-vue";
import { textesDataStore } from "@/stores";
export default {
  name: "ShowLinkSharedModal",
  props: {
    link: {
      type: String,
      required: true,
    },
    prenom: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const textesData = ref(textesDataStore());
    watchEffect(async () => {});
    return { textesData };
  },
  mounted() {},
  data() {
    return {};
  },
  methods: {},
  watch: {},
  components: { FwbButton, FwbModal },
};
</script>
