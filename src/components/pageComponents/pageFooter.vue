<template>
  <footer
    class="  w-full bottom-0 flex justify-center pt-1 space-x-2 align-center p-1 bg-gray-900 bg-opacity-40 text-gray-300">
    <div class="text-center items-center text-sm md:text-base">
      <i class="far fa-copyright text-secondary"></i>&nbsp; {{ textesData.getLocalizedText(3) }}
      <i class="fab fa-empire fa-spin"></i> &amp; Joseph Briguel
      <i class="fab fa-battle-net fa-spin"></i>. {{ textesData.getLocalizedText(4) }}
      <i class="far fa-registered text-secondary"></i>
    </div>
  </footer>
</template>

<script>

import { ref, reactive, watchEffect, computed } from "vue";
import { textesDataStore } from "@/stores";
export default {
  name: "AddUserView",
  props: {},

  setup(props) {
    const targetRef = ref(null);
    const textesData = ref(textesDataStore());
    

    return { textesData };
  },
};
</script>

<style></style>
