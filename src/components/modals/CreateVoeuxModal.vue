<template>
  <fwb-modal @close="$emit('close')" persistent>
    <template #header>
      <div class="flex items-center text-lg">Creer votre voeux</div>
    </template>
    <template #body>
      <div class="space-y-1 m-0 p-0">
        <img
          src="@/assets/images/bg/bg_1.jpg"
          alt=""
          class="block object-cover object-center w-full rounded-md h-64"
        />
        <div class="flex items-center text-xs">
          <span>---</span>
        </div>
      </div>
      <p class="text-base leading-relaxed text-gray-500">
        The European Union’s General Data Protection Regulation (G.D.P.R.) goes into
        effect on May 25 and is meant to ensure a common set of data rights in the
        European Union. It requires organizations to notify users as soon as possible of
        high-risk data breaches that could personally affect them.
      </p>
      <div class="w-full flex justify-center items-center">
        <div class="relative w-full mx-5">
          <input
            type="text"
            readonly
            class="h-14 w-full px-2 py-2 rounded-md border-slate-100 z-0 pointer-events-none"
            :value="lienPartage"
            id="lienv"
          />
          <div class="absolute top-2 right-2">
            <button
              @click="partagerWhatsApp()"
              class="h-10 px-2 text-center text-white rounded-md bg-green-400 hover:bg-green-500"
            >
              {{ textesData.getLocalizedText(5) }} <i class="fab fa-whatsapp"></i>
            </button>
          </div>
        </div>
      </div>
      <hr class="my-1" />
      <div>
        <div class="grid-cols-1">
          <label class="text-slate-700" for="langselect"
            >Choisir une langue / Choose a language
            <i class="fas fa-hand-point-down cligno" style="color: darkgreen"></i
            ><i class="far fa-hand-point-down cligno1" style="color: red"></i
            ><i class="fas fa-hand-point-down cligno2" style="color: darkgreen"></i
          ></label>
          <select
            class="voeuxListe px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-300 focus:bg-gray-100 focus:ring-0 text-sm"
          >
            <option value="fr">Français</option>
            <option value="en">English</option>
          </select>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4 mt-4">
          <div class="grid-cols-1 md:col-span-2 xl:col-span-3">
            <label for="voeuxListe" class="text-slate-700">Choisir Voeux</label>
            <select
              class="voeuxListe px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-300 focus:bg-gray-100 focus:ring-0 text-sm"
            >
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
            <label for="imagesListe" class="text-slate-700">Choisir image</label>
            <select
              class="imagesListe px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-300 focus:bg-gray-100 focus:ring-0 text-sm"
            >
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
            </select>
          </div>
        </div>
        <hr class="my-1" />
        <fieldset class="w-full space-y-1 mt-2">
          <label for="prenom" class="text-slate-700">Prénom</label>
          <div class="flex">
            <span
              class="flex items-center text-gray-700 font-semibold px-3 pointer-events-none sm:text-sm rounded-l-md bg-gray-300"
            >
              Votre Prénom</span
            >
            <input
              type="text"
              name="prenom"
              id="prenom"
              class="flex flex-1 bg-gray-100 border-gray-100 rounded-r-md focus:border-gray-300"
              placeholder="Saisir votre prenom"
              max="20"
              required
            />
          </div>
        </fieldset>
      </div>
    </template>
    <template #footer>
      <div class="flex justify-center text-center"> 
        <fwb-button @click="$emit('close')" class="px-4 py-2 w-full bg-gradient-to-r from-red-400 to-red-500 hover:opacity-80 text-white font-semibold rounded-md">  {{ textesData.getLocalizedText(9) }} </fwb-button>
      </div>
    </template>
  </fwb-modal>
</template>
<script>
import { ref, reactive, watchEffect, computed } from "vue";
import { FwbButton, FwbModal, FwbSelect } from "flowbite-vue";
import { textesDataStore } from "@/stores";
export default {
  name: "CreateVoeuxModal",
  props: {},

  setup(props) {
    const textesData = ref(textesDataStore());
    watchEffect(() => {}); // expose the state to the template
    return { textesData };
  },
  mounted() {},
  data() {
    return {
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
      imgSelected: "",
      voeuxSelected: "",
      lienPartage: "https://",
    };
  },
  methods: {
    genereLien() {
      this.lienPartage = `https://192.168.43.246/briguel_voeux/?m=${this.imgSelected}&v=${this.voeuxSelected}`;
    },
    // Dans la méthode partagerWhatsApp()
    partagerWhatsApp() {
      const text = "Votre ami vous a déposé un voeu. Cliquez sur ce lien pour le lire.";
      const message =
        encodeURIComponent(text) + " - " + encodeURIComponent(this.lienPartage);

      if (this.isMobile.any()) {
        // Appareil mobile : utiliser le protocole whatsapp://
        const whatsappUrl = "whatsapp://send?text=" + message;
        window.location.href = whatsappUrl;
      } else {
        // Navigateur web : utiliser un lien web vers WhatsApp
        const webWhatsAppUrl = "https://web.whatsapp.com/send?text=" + message;
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
  },
  watch: {
    imgSelected() {
      this.genereLien();
      // Effectuer une requête AJAX si nécessaire avec this.imgSelected
    },
    voeuxSelected() {
      // Effectuer une requête AJAX si nécessaire avec this.voeuxSelected
    },
  },
  components: { FwbModal, FwbSelect },
};
</script>
