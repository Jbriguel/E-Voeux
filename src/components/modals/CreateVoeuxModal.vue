<template>
  <fwb-modal @close="$emit('close')" persistent class="m-0">
    <template #header>
      <div class="flex items-center text-lg text-slate-700">
        {{ textesData.getLocalizedText(18) }}
      </div>
    </template>
    <template #body>
      <div class="space-y-1 m-0 p-0">
        <!-- `${imageUrl}` getImageUrl('1') :src="`${state.image1}`"      src="../../assets/images/imgs/image_1.png"-->
        <img :src="getImageUrl(imageIndex)" alt="" class="block object-cover object-center w-full rounded-md h-72" />
        <!-- <div class="h-64 w-full">
          <div
            :class="`block object-contain   w-full rounded-md  h-64 ${imageIndex}`"
          ></div>
        </div> -->

        <div class="flex items-center text-xs">
          <span>---</span>
        </div>
      </div>
      <p class="text-sm md:text-base leading-relaxed text-gray-500 text-center">
        {{ textesData.getVoeuxText(parseInt(voeuxIndex, 10) - 1, language) }}
      </p>
      <div class="flex flex-wrap items-center content-center justify-center">
        <div class="w-full p-2">
          <!-- Input pour afficher le lien -->
          <div class="relative flex items-center">
            <input type="text" readonly
              class="h-14 w-full px-2 py-2 text-xs placeholder-gray-400/70 text-slate-700 rounded-md border border-slate-100 z-0 pointer-events-none"
              :value="genereLien()" id="lienv" />
            <!-- Bouton pour copier le lien -->
            <button @click="copyLink"
              class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-md"
              title="Copier le lien">
              <i class="fas fa-copy text-slate-600"></i>
            </button>
          </div>
          <div v-if="showCopiedMessage" class="text-green-500 text-sm mt-1">
            {{ textesData.getLocalizedText(16) }} 
          </div>
          <div v-if="showErrorCopiedMessage" class="text-red-500 text-sm mt-1">
            {{ textesData.getLocalizedText(15) }} 
          </div>
        </div> 
      </div>

      <hr class="my-1" />
      <div>
        <div class="grid-cols-1">
          <label class="text-slate-700" for="langselect">Choisir une langue / Choose a language
            <i class="fas fa-hand-point-down cligno" style="color: darkgreen"></i><i
              class="far fa-hand-point-down cligno1" style="color: red"></i><i class="fas fa-hand-point-down cligno2"
              style="color: darkgreen"></i></label>
          <select v-model="language"
            class="voeuxListe px-4 py-3 text-slate-700 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-300 focus:bg-gray-100 focus:ring-0 text-sm">
            <option value="fr">Français</option>
            <option value="en">English</option>
          </select>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4 mt-4">
          <div class="grid-cols-1 md:col-span-2 xl:col-span-3">
            <label for="voeuxListe" class="text-slate-700">   {{ textesData.getLocalizedText(7) }}</label>
            <select v-model="voeuxIndex"
              class="voeuxListe px-4 py-3 w-full text-slate-700 rounded-md bg-gray-100 border-transparent focus:border-gray-300 focus:bg-gray-100 focus:ring-0 text-sm">
              <option value="1" selected>Voeux #1</option>
              <option value="2">Voeux #2</option>
              <option value="3">Voeux #3</option>
              <option value="4">Voeux #4</option>
              <option value="5">Voeux #5</option>
              <option value="6">Voeux #6</option>
              <option value="7">Voeux #7</option>
              <option value="8">Voeux #8</option>
              <option value="9">Voeux #9</option>
              <option value="10">Voeux #10</option>
            </select>
          </div>
          <div class="grid-cols-1 md:col-span-2 xl:col-span-3">
            <label for="imagesListe" class="text-slate-700">   {{ textesData.getLocalizedText(6) }}</label>
            <select v-model="imageIndex"
              class="imagesListe px-4 py-3 w-full text-slate-700 rounded-md bg-gray-100 border-transparent focus:border-gray-300 focus:bg-gray-100 focus:ring-0 text-sm">
              <option value="1" selected>Image #1</option>
              <option value="2">Image #2</option>
              <option value="3">Image #3</option>
              <option value="4">Image #4</option>
              <option value="5">Image #5</option>
              <option value="6">Image #6</option>
              <option value="7">Image #7</option>
              <option value="8">Image #8</option>
              <option value="9">Image #9</option>
              <option value="10">Image #10</option>
              <option value="11">Image #11</option>
              <option value="12">Image #12</option>
              <option value="13">Image #13</option>
              <option value="14">Image #14</option>
            </select>
          </div>
        </div>
        <hr class="my-1" />

        <fieldset class="w-full space-y-1 mt-2">
          <label for="prenom" class="text-slate-700">   {{ textesData.getLocalizedText(8) }}<span class="text-red-500 text-xxs"> * (   {{ textesData.getLocalizedText(17) }})
            </span> </label>

          <input v-model="prenom" type="text" name="First Name" :placeholder="textesData.getLocalizedText(8)" required
            class="px-4 py-3 w-full rounded-md placeholder-gray-400/70 text-slate-700 bg-gray-100 border-transparent focus:border-gray-300 focus:bg-gray-100 focus:ring-0 text-sm" />
        </fieldset>

        <div class="w-full flex items-center justify-center my-2  p-1">

          <ShareNetwork v-if="isShared() == true" network="whatsapp" :url="genereLien()" title="E-Voeux"
            :description="`Un vœu vous attend de la part de ${prenom} pour célébrer la nouvelle année ! Cliquez sur le lien ci-dessous pour découvrir ce message spécial de Nouvel An et débuter 2025 avec des émotions chaleureuses et positives.`"
            media="../../assets/evoeux.jpg" class="w-full m-2">

            <button data-action="share/whatsapp/share"
              class="animate-pulse sm:h-14 w-full h-12 px-2 text-center text-white rounded-md bg-green-400 hover:bg-green-500">
              {{ textesData.getLocalizedText(5) }} <i class="fab fa-whatsapp"></i>
            </button>
          </ShareNetwork>

          <button disabled v-else data-action="share/disabled/share"
            class="sm:h-14 w-full h-12 px-2 text-center border-2 border-red-200/50   rounded-md  text-gray-300 ">
            {{ textesData.getLocalizedText(5) }} <i class="fa fa-ban"></i>
          </button>


          <!-- Partage sur Facebook -->
          <ShareNetwork v-if="isShared()" network="facebook" :url="genereLien()" title="E-Voeux"
            :description="`Un vœu vous attend de la part de ${prenom} pour célébrer la nouvelle année ! Cliquez sur le lien ci-dessous pour découvrir ce message spécial de Nouvel An et débuter 2025 avec des émotions chaleureuses et positives.`"
            media="../../assets/evoeux.jpg" class="w-full m-2">
            <button data-action="share/facebook/share"
              class="animate-pulse sm:h-14 w-full h-12 px-2 text-center text-white rounded-md bg-blue-600 hover:bg-blue-700">
              {{ textesData.getLocalizedText(14) }} <i class="fab fa-facebook"></i>
            </button>
          </ShareNetwork>

          <!-- Bouton désactivé -->
          <button v-else disabled data-action="share/disabled/share"
            class="sm:h-14 w-full h-12 px-2 text-center border-2 border-red-200/50 rounded-md text-gray-300">
            {{ textesData.getLocalizedText(14) }}
            <i class="fas fa-ban"></i>
          </button>

        </div>
      </div>
    </template>
    <template #footer>
      <div class="flex justify-center text-center">
        <fwb-button @click="$emit('close')"
          class="px-4 py-2 w-full bg-gradient-to-r from-red-400 to-red-500 hover:opacity-80 text-white font-semibold rounded-md">
          {{ textesData.getLocalizedText(9) }}
        </fwb-button>
      </div>
    </template>
  </fwb-modal>
</template>
<script>
import { ref, reactive, watchEffect, computed, onMounted } from "vue";
import { FwbButton, FwbModal, FwbSelect } from "flowbite-vue";
import { textesDataStore } from "@/stores";
export default {
  name: "CreateVoeuxModal",
  props: {},

  setup(props) {
    function getImageUrl(index) {
      const ind = parseInt(index, 10);
      return imagesState.data[ind - 1].image;
    }
    const imageIndex = ref("1");
    let imageUrl = null;
    const imageBaseUrl = "";
    const textesData = ref(textesDataStore());

    let imagesState = reactive({ data: [] });
    watchEffect(async () => {
      imagesState.data = [
        {
          key: 1,
          image: (await import(/* @vite-ignore */ `@/assets/images/imgs/img_1.jpeg`))
            .default,
        },
        {
          key: 2,
          image: (await import(/* @vite-ignore */ `@/assets/images/imgs/img_2.jpeg`))
            .default,
        },
        {
          key: 3,
          image: (await import(/* @vite-ignore */ `@/assets/images/imgs/img_3.jpeg`))
            .default,
        },
        {
          key: 4,
          image: (await import(/* @vite-ignore */ `@/assets/images/imgs/img_4.jpeg`))
            .default,
        },
        {
          key: 5,
          image: (await import(/* @vite-ignore */ `@/assets/images/imgs/img_5.jpeg`))
            .default,
        },
        {
          key: 6,
          image: (await import(/* @vite-ignore */ `@/assets/images/imgs/img_6.jpeg`))
            .default,
        }, {
          key: 7,
          image: (await import(/* @vite-ignore */ `@/assets/images/imgs/img_7.jpeg`))
            .default,
        }, {
          key: 8,
          image: (await import(/* @vite-ignore */ `@/assets/images/imgs/img_8.jpeg`))
            .default,
        }, {
          key: 9,
          image: (await import(/* @vite-ignore */ `@/assets/images/imgs/img_9.jpeg`))
            .default,
        }, {
          key: 10,
          image: (await import(/* @vite-ignore */ `@/assets/images/imgs/img_10.jpeg`))
            .default,
        }, {
          key: 11,
          image: (await import(/* @vite-ignore */ `@/assets/images/imgs/img_11.jpeg`))
            .default,
        }, {
          key: 12,
          image: (await import(/* @vite-ignore */ `@/assets/images/imgs/img_12.jpeg`))
            .default,
        }, {
          key: 13,
          image: (await import(/* @vite-ignore */ `@/assets/images/imgs/img_13.jpeg`))
            .default,
        }, {
          key: 14,
          image: (await import(/* @vite-ignore */ `@/assets/images/imgs/img_14.jpeg`))
            .default,
        }
      ];

      // logo.value = (
      //   await import(/* @vite-ignore */ `@/assets/images/imgs/image_1.png`)
      // ).default;
    });

    return { textesData, imageBaseUrl, imageUrl, imageIndex, imagesState, getImageUrl };
  },
  mounted() { },
  data() {
    return {
      language: "fr",
      voeuxIndex: "1",
      prenom: "",
      showCopiedMessage: false,
      showErrorCopiedMessage:false,
      isMobile: {
        Android: function () {
          return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
          return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
          return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
          return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
          return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
          return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
          );
        },
      },
      lienPartage: "https://",
    };
  },
  methods: {
    genereLien() {
      if (this.prenom != "") {
        this.lienPartage = `https://e-voeux.web.app/?m=${this.imageIndex}&v=${this.voeuxIndex}&l=${this.language}&p=${encodeURIComponent(this.prenom)}&s=1`;
      } else {
        this.lienPartage = "https:/";
      }
      return this.lienPartage;
    },
    isShared() {
      if (this.prenom != "") {
        return true;
      } else {
        return false;
      }
    },
    // Dans la méthode partagerWhatsApp()
    partagerWhatsApp() {
      const text = "Votre ami vous a déposé un vœux. Cliquez sur ce lien pour le lire.";
      const message =
        encodeURIComponent(text) + " - " + encodeURIComponent(this.lienPartage);

      if (this.isMobile.any()) {
        // Appareil mobile : utiliser le protocole whatsapp://
        const whatsappUrl = "https://wa.me/?text=" + message;
        window.location.href = whatsappUrl;
      } else {
        // Navigateur web : utiliser un lien web vers WhatsApp
        const webWhatsAppUrl = "https://wa.me/?text=" + message;
        window.open(webWhatsAppUrl);
      }
    },
    onChangeImgSelect() {
      this.genereLien();
      // Effectuer une requête AJAX si nécessaire avec this.imgSelected
    },
    onChangeVoeuxSelect() {
      // Effectuer une requête AJAX si nécessaire avec this.voeuxSelected
    },
    copyLink() {
      // Copie le lien dans le presse-papier  
      const link = document.getElementById("lienv");
      var value = this.isShared();
      if (value==false) {
        // Affiche un message temporaire
        this.showErrorCopiedMessage = true;
        setTimeout(() => {
          this.showErrorCopiedMessage = false;
        }, 1000); // Masque le message après 1 seconde
      } else {
        if (link) {
          link.select();
          document.execCommand("copy");
          // Affiche un message temporaire
          this.showCopiedMessage = true;
          setTimeout(() => {
            this.showCopiedMessage = false;
          }, 1000); // Masque le message après 1 seconde
        }
      }
    },
  },
  watch: {},
  components: { FwbModal, FwbSelect },
};
</script>

<style lang="scss">
* {
  font-family: 'Poppins';
}
</style>
