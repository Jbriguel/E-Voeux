<script>
import pageFooter from "@/components/pageComponents/pageFooter.vue";
import pageHeader from "@/components/pageComponents/pageHeader.vue";
import { ref, reactive, watchEffect, computed } from "vue";
import createvoeuxbtn from "@/components/buttons/createvoeuxbtn.vue";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
import { getVoeuxFormOnline, saveVoeux, printTime } from "../js/firebase/firbaseFunctions";
import linkCopyModal from "../components/modals/linkCopyModal.vue";
export default {
  name: "AddUserView",
  props: {},

  setup(props) {
    const targetRef = ref(null);

    function getImageUrl(index) {
      const ind = parseInt(index, 10);
      return imagesState.data[ind-1].image;
    }
    const imageIndex = ref("1");
    const prenom = ref("");
    const monVoeux = ref("");

    let imagesState = reactive({ data: [] });

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
    });
    return { getImageUrl, imagesState, imageIndex, prenom, monVoeux };
  },
  mounted() {},
  data() {
    return {
      showLoader: false,
      showLink: false,
      isLoading: false,
      fullPage: true,
      idVoeux: new Date().toLocaleTimeString(),
      lienPartage: "https://",
    };
  },

  components: {
    pageFooter,
    pageHeader,
    createvoeuxbtn,
    Loading,
    linkCopyModal,
  },
  methods: {
//  e.preventDefault();
checkForm: async function (e) {
  if (this.prenom.trim() !== "" && this.monVoeux.trim() !== "") { 
    this.isLoading = true;
    this.idVoeux = this.prenom.replace(/\s+/g, '')+"."+printTime();
    try {
      let value = await saveVoeux(this.idVoeux, this.monVoeux, this.prenom, this.imageIndex);
      if (value !== null) {
        //this.idVoeux = value;
        this.showLink = true;
         console.log("idVoeuxf : ", this.idVoeux);
      } else {
        this.showLink = false;
        console.log("erreur idVoeux : ");
      }
    } catch (error) {
      console.error("Erreur lors de la sauvegarde des vœux :", error);
      this.showLink = false;
    } finally {
      console.log("ended "); 
      this.isLoading = false;
    }
  } else {
    console.log("erreur, champs requis.");
    this.isLoading = false;
  }
},
    submit() {
      let loader = this.$loading.show({
        // Optional parameters
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: true,
        onCancel: this.onCancel,
      });
      // simulate AJAX
      setTimeout(() => {
        loader.hide();
      }, 5000);
    },
    genereLien() {
      this.lienPartage = `https://e-voeux.web.app/?m=${this.imageIndex}&v=202&l=en&p=${encodeURIComponent(this.prenom)}&s=${this.idVoeux}`;

      return this.lienPartage;
    },
    onCancel() {
      console.log("User cancelled the loader.");
    },
  },
};
</script>

<template>
  <linkCopyModal  :link="genereLien()" v-if="showLink==true" @close="showLink=false" :prenom="prenom" />
  <section class="w-full h-full py-5 m-0 bg-transparent relative">
    <img
      src="@/assets/images/bg/bg_6.jpg"
      loading="lazy"
      alt="Photo"
      class="w-full h-full object-cover object-center absolute inset-0"
    />

    <div class="snow mix-blend-multiply absolute inset-0 bg-slate-900 bg-opacity-30">
      <div></div>
    </div>
    <div class="h-full w-full flex flex-col bg-transparent z-10 relative">
      <header>
        <nav
          class="w-full fixed top-0 flex items-center justify-between p-1 bg-gray-900 bg-opacity-40 text-white"
        >
          <span class="navbar-brand text-white-50 font-medium ml-3"
            ><i class="fab fa-edge"></i>-<i class="fab fa-vimeo-v"></i>oeux</span
          >
          <a
            class="inline-block mx-8 my-1 mr-4 text-xs font-medium text-center uppercase align-middle"
            href="/"
          >
            <button
              class="px-6 py-2 font-medium text-blue-100 rounded bg-gradient-to-br from-red-600 to-red-400"
            >
              Accueil
            </button></a
          >
        </nav>
      </header>
      <main  >
         
        <div class="mt-5 md:p-4 p-2 bg-transparent flex items-center justify-center">
          <div class="w-full mx-auto">
            <h1
              class="topText text-center bg-gradient-to-r from-green-300 via-blue-200 to-purple-200 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
            >
              Voeux Personnalisé
            </h1>
            <p class="my-4 text-center text-white md:text-lg text-md">
              <span class="font-medium text-center"
                >Exprimez Votre Créativité en Vœux!</span
              >
            </p>
            <!--  -->
            <div class="xl:container grid gap-4 md:mx-auto mx-1 xl:grid-cols-5">
              <!--  -->
              <div
                class="w-full xl:col-span-2 rounded-md md:my-4 flex items-center justify-center"
              >
                <img
                  :src="getImageUrl(imageIndex)"
                  alt=""
                  class="block object-cover object-center w-full mx-5 md:h-full h-72 rounded-lg border-2 shadow-soft-md border-slate-100 bg-clip-border"
                />
              </div>
              <!--  -->
              <div class="w-full px-1 py-5 rounded-md md:px-4 xl:col-span-3">
                <form method="post" class="self-stretch space-y-1">
                  <div class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4 mt-4">
                    <div class="grid-cols-1 md:col-span-2 xl:col-span-3">
                      <label for="imagesListe" class="text-slate-100"
                        >Choisir image</label
                      >
                      <select
                        v-model="imageIndex"
                        class="imagesListe px-4 py-3 w-full text-slate-700 rounded-md bg-gray-100 border-transparent focus:border-gray-300 focus:bg-gray-100 focus:ring-0 text-sm"
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
                        <option value="13">Image #13</option> 
                        <option value="14">Image #14</option> 

                      </select>
                    </div>
                    <div class="grid-cols-1 md:col-span-2 xl:col-span-3">
                      <label for="prenom" class="text-slate-100">Votre Prénom</label>
                      <input
                        v-model="prenom"
                        id="prenom"
                        type="text"
                        placeholder="Votre prénom"
                        required
                        class="w-full py-3 placeholder-gray-400/70 text-slate-700 bg-gray-100 rounded-md border-2 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                      />
                    </div>
                  </div>
                  <div class="grid-cols-1 md:col-span-2 xl:col-span-3 ">
                    <textarea
                      v-model="monVoeux"
                      placeholder="Rédiger votre voeux..."
                      class="block mt-2 w-full placeholder-gray-400/70 text-slate-700 rounded-lg border border-gray-200 bg-gray-100 px-4 h-60 py-2 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                      required
                    ></textarea>

                    <p class="mt-3 text-xs text-gray-200">
                      Que cette saison festive vous apporte joie et bonheur!
                    </p>
                  </div>
                  <div class="text-center m-2 px-5">
                    <a type="submit" value="Submit" @click.prevent="checkForm">
                      <createvoeuxbtn
                        :btnLinkTo="''"
                        :btnTexte="'Créer ton voeux Personnel'"
                    /></a>
                  </div>
                </form>
              </div>

              <!--  -->
            </div>

            <!--  -->
          </div>
        </div>
      </main>
      <!-- <createvoeuxbtn /> -->
      <hr class="my-10" />
      <pageFooter class="fixed bottom-0"/>
    </div>
  </section>

  
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Mountains+of+Christmas&display=swap");

.topText {
  font-family: "Mountains of Christmas", serif;
}

.snow {
  /* width: 500px;
  height: 100px; */
  border: 1px solid rgba(255, 255, 255, 0.1);
  background-image: url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 50 50' style='enable-background:new 0 0 50 50%3B' xml:space='preserve'%3E%3Cstyle type='text/css'%3E.st1%7Bopacity:0.3%3Bfill:%23FFFFFF%3B%7D.st3%7Bopacity:0.1%3Bfill:%23FFFFFF%3B%7D%3C/style%3E%3Ccircle class='st1' cx='5' cy='8' r='1'/%3E%3Ccircle class='st1' cx='38' cy='3' r='1'/%3E%3Ccircle class='st1' cx='12' cy='4' r='1'/%3E%3Ccircle class='st1' cx='16' cy='16' r='1'/%3E%3Ccircle class='st1' cx='47' cy='46' r='1'/%3E%3Ccircle class='st1' cx='32' cy='10' r='1'/%3E%3Ccircle class='st1' cx='3' cy='46' r='1'/%3E%3Ccircle class='st1' cx='45' cy='13' r='1'/%3E%3Ccircle class='st1' cx='10' cy='28' r='1'/%3E%3Ccircle class='st1' cx='22' cy='35' r='1'/%3E%3Ccircle class='st1' cx='3' cy='21' r='1'/%3E%3Ccircle class='st1' cx='26' cy='20' r='1'/%3E%3Ccircle class='st1' cx='30' cy='45' r='1'/%3E%3Ccircle class='st1' cx='15' cy='45' r='1'/%3E%3Ccircle class='st1' cx='34' cy='36' r='1'/%3E%3Ccircle class='st1' cx='41' cy='32' r='1'/%3E%3C/svg%3E");
  background-position: 0px 0px;
  animation: animatedBackground 10s linear infinite;
}

.snow div {
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 50 50' style='enable-background:new 0 0 50 50%3B' xml:space='preserve'%3E%3Cstyle type='text/css'%3E.st1%7Bopacity:0.7%3Bfill:%23FFFFFF%3B%7D.st3%7Bopacity:0.1%3Bfill:%23FFFFFF%3B%7D%3C/style%3E%3Ccircle class='st3' cx='4' cy='14' r='1'/%3E%3Ccircle class='st3' cx='43' cy='3' r='1'/%3E%3Ccircle class='st3' cx='31' cy='30' r='2'/%3E%3Ccircle class='st3' cx='19' cy='23' r='1'/%3E%3Ccircle class='st3' cx='37' cy='22' r='1'/%3E%3Ccircle class='st3' cx='43' cy='16' r='1'/%3E%3Ccircle class='st3' cx='8' cy='45' r='1'/%3E%3Ccircle class='st3' cx='29' cy='39' r='1'/%3E%3Ccircle class='st3' cx='13' cy='37' r='1'/%3E%3Ccircle class='st3' cx='47' cy='32' r='1'/%3E%3Ccircle class='st3' cx='15' cy='4' r='2'/%3E%3Ccircle class='st3' cx='9' cy='27' r='1'/%3E%3Ccircle class='st3' cx='30' cy='9' r='1'/%3E%3Ccircle class='st3' cx='25' cy='15' r='1'/%3E%3Ccircle class='st3' cx='21' cy='45' r='2'/%3E%3Ccircle class='st3' cx='42' cy='45' r='1'/%3E%3C/svg%3E");
  background-position: 0px 0px;
  animation: animatedBackground 15s linear infinite;
}

@keyframes animatedBackground {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 0px 300px;
  }
}
</style>
