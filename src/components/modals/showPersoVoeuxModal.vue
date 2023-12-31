<template>
  <div class="container sm:mx-2">
    <div
      class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30"
    >
      <div class="max-w-lg p-2 shadow-md mx-2 bg-white text-gray-900 rounded-md">
        <div class="flex justify-between pb-2 border-bottom">
          <div class="flex items-center">
            <h3
              class="topText py-2 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-xl font-extrabold text-transparent sm:text-xl"
            >
              Carte de Voeux
            </h3>
          </div>
          <div class="flex items-center justify-between">
            <svg
              @click="$emit('close')"
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8 text-red-400 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
        <div class="space-y-4">
          <div class="space-y-2">
            <img
              :src="`${getImageUrl(imageIndex)}`"
              alt=""
              class="block object-cover object-center w-full rounded-md h-72 "
            />
            
          </div>
          <div class="space-y-2">
            <p class="mb-4  text-center text-base text-black">
              {{ contenu }}
            </p>
            <div class="flex items-start text-xs">
              <span class="italic">→ {{ prenom }} </span>
            </div>
          </div>


          <createvoeuxbtn
              @click="$emit('close')"
              class="animate-pulse mt-2"
              :btnLinkTo="'/'"
              :btnTexte="textesData.getLocalizedText(11)"
            />
        </div>
      </div>
    </div>

    <!-- <div
      class="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50"
    >
      <div class="md:max-w-2xl w-full mx-2 p-6 rounded-md shadow-xl relative">
        <div
          class=" border-slate-50 rounded-md absolute inset-0"
          :style="{
            'background-image': `url(${getImageUrl(imageIndex)})`,
            'background-size': 'cover',
            'background-position': 'center',
          }"
        ></div>
        <div
          class="m-1 mix-blend-multiply border-slate-50 rounded-md absolute inset-0 bg-black bg-opacity-10"
        ></div>
        <div class="relative">
          <div class="flex items-center justify-between">
            <svg
              @click="$emit('close')"
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8 text-white cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div class="mt-4 mx-5 text-center text-white" style="">
            <h3
              class="topText py-2 bg-gradient-to-r from-green-300 via-blue-200 to-purple-200 bg-clip-text text-xl font-extrabold text-transparent sm:text-xl"
            >
              Carte de Voeux
            </h3>
            <p class="mb-4  bg-black/50 text-clip text-base text-white">
              {{ contenu }}
            </p>
            <p class="mb-4   text-white text-sm italic">{{ prenom }}</p>
            <createvoeuxbtn
              @click="$emit('close')"
              class="animate-pulse mt-2"
              :btnLinkTo="'/'"
              :btnTexte="'Essayez maintenant'"
            />
          </div>
        </div>
      </div>
    </div> -->

    <!-- <vue-flip active-click v-model="flipped">
  <template v-slot:front>
    <div
      class="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50"
    >
      <div class="md:max-w-2xl w-full mx-2 p-6 rounded-md shadow-xl relative">
        <div
          class=" border-slate-50 rounded-md absolute inset-0"
          :style="{
            'background-image': `url(${getImageUrl(imageIndex)})`,
            'background-size': 'cover',
            'background-position': 'center',
          }"
        ></div>
        <div
          class="m-1 mix-blend-multiply border-slate-50 rounded-md absolute inset-0 bg-black bg-opacity-10"
        ></div>
        <div class="relative">
          <div class="flex items-center justify-between">
            <svg
              @click="$emit('close')"
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8 text-white cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div class="mt-4 mx-5 text-center text-white" style="">
            <h3
              class="topText py-2 bg-gradient-to-r from-green-300 via-blue-200 to-purple-200 bg-clip-text text-xl font-extrabold text-transparent sm:text-xl"
            >
              Carte de Voeux
            </h3>
            <p class="mb-4  bg-black/50 text-clip text-base text-white">
              {{ contenu }}
            </p>
            <p class="mb-4   text-white text-sm italic">{{ prenom }}</p>
            <createvoeuxbtn
              @click="$emit('close')"
              class="animate-pulse mt-2"
              :btnLinkTo="'/'"
              :btnTexte="'Essayez maintenant'"
            />
          </div>
        </div>
      </div>
    </div>
  </template>
  <template v-slot:back>
    <div
      class="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50"
    >
      <div class="md:max-w-2xl w-full mx-2 p-6 rounded-md shadow-xl relative">
        <div
          class=" border-slate-50 rounded-md absolute inset-0"
          :style="{
            'background-image': `url(${getImageUrl(imageIndex)})`,
            'background-size': 'cover',
            'background-position': 'center',
          }"
        ></div>
        <div
          class="m-1 mix-blend-multiply border-slate-50 rounded-md absolute inset-0 bg-black bg-opacity-10"
        ></div>
        <div class="relative">
          <div class="flex items-center justify-between">
            <svg
              @click="$emit('close')"
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8 text-white cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div class="mt-4 mx-5 text-center text-white" style="">
            <h3
              class="topText py-2 bg-gradient-to-r from-green-300 via-blue-200 to-purple-200 bg-clip-text text-xl font-extrabold text-transparent sm:text-xl"
            >
              Carte de Voeux
            </h3>
            <p class="mb-4  bg-black/50 text-clip text-base text-white">
              {{ contenu }}
            </p>
            <p class="mb-4   text-white text-sm italic">{{ prenom }}</p>
            <createvoeuxbtn
              @click="$emit('close')"
              class="animate-pulse mt-2"
              :btnLinkTo="'/'"
              :btnTexte="'Essayez maintenant'"
            />
          </div>
        </div>
      </div>
    </div>
  </template>
</vue-flip> -->
  </div>
</template>
<script>
import { ref, reactive, watchEffect, computed } from "vue";
import { FwbButton, FwbModal, FwbSelect } from "flowbite-vue";
import createvoeuxbtn from "../buttons/createvoeuxbtn.vue";
import { VueFlip } from "vue-flip";
import { textesDataStore } from "../../stores";
export default {
  name: "ShowPersoVoeuxModal",
  props: {
    imageIndex: {
      type: String,
      required: true,
    },
    contenu: {
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
    watchEffect(() => {}); // expose the state to the template
    let imagesState = reactive({ data: [] });
    //
    function getImageUrl(index) {
      const ind = parseInt(index, 10);
      return imagesState.data[ind - 1].image;
    }

    watchEffect(async () => {
      imagesState.data = [
        {
          key: 1,
          image: (await import(/* @vite-ignore */ `@/assets/images/imgs/image_1.jpg`))
            .default,
        },
        {
          key: 2,
          image: (await import(/* @vite-ignore */ `@/assets/images/imgs/image_2.jpg`))
            .default,
        },
        {
          key: 3,
          image: (await import(/* @vite-ignore */ `@/assets/images/imgs/image_3.jpg`))
            .default,
        },
        {
          key: 4,
          image: (await import(/* @vite-ignore */ `@/assets/images/imgs/image_4.jpg`))
            .default,
        },
        {
          key: 5,
          image: (await import(/* @vite-ignore */ `@/assets/images/imgs/image_5.jpg`))
            .default,
        },
        {
          key: 6,
          image: (await import(/* @vite-ignore */ `@/assets/images/imgs/image_6.jpg`))
            .default,
        }, {
          key: 7,
          image: (await import(/* @vite-ignore */ `@/assets/images/imgs/image_7.jpg`))
            .default,
        }, {
          key: 8,
          image: (await import(/* @vite-ignore */ `@/assets/images/imgs/image_8.jpg`))
            .default,
        }, {
          key: 9,
          image: (await import(/* @vite-ignore */ `@/assets/images/imgs/image_9.jpg`))
            .default,
        }, {
          key: 10,
          image: (await import(/* @vite-ignore */ `@/assets/images/imgs/image_10.jpg`))
            .default,
        } , {
          key: 11,
          image: (await import(/* @vite-ignore */ `@/assets/images/imgs/image_11.jpg`))
            .default,
        }  , {
          key: 12,
          image: (await import(/* @vite-ignore */ `@/assets/images/imgs/image_12.jpg`))
            .default,
        } , {
          key: 13,
          image: (await import(/* @vite-ignore */ `@/assets/images/imgs/image_13.jpg`))
            .default,
        } , {
          key: 14,
          image: (await import(/* @vite-ignore */ `@/assets/images/imgs/image_14.jpg`))
            .default,
        } 
      ];

      // logo.value = (
      //   await import(/* @vite-ignore */ `@/assets/images/imgs/image_1.png`)
      // ).default;
    });
    return { getImageUrl,textesData };
  },
  mounted() {},
  data() {
    return {
      flipped: true,
    };
  },
  methods: {},
  watch: {},
  components: { "vue-flip": VueFlip, FwbModal, createvoeuxbtn },
};
</script>
<style lang="scss"  >
* {
  font-family: 'Poppins';
} 
</style>
