<script>
import pageFooter from "@/components/pageComponents/pageFooter.vue";
import pageHeader from "@/components/pageComponents/pageHeader.vue";
import { FwbButton, FwbModal } from "flowbite-vue";
import { ref, reactive, watchEffect, computed } from "vue";
import CreateVoeuxModal from "@/components/modals/CreateVoeuxModal.vue";
import createvoeuxbtn from "@/components/buttons/createvoeuxbtn.vue";
import { saveUserProvide } from "../js/firebase/firbaseFunctions";
import { useCookies } from "vue3-cookies";

export default {
  name: "Accueil",
  props: {},
  setup(props) {
    const isShowModal = ref(false);

    function closeModal() {
      isShowModal.value = false;
    }
    function showModal() {
      isShowModal.value = true;
    }

    watchEffect(() => {}); // expose the state to the template
    return { closeModal, showModal, isShowModal };
  },
  mounted() {
    //à réactiver après
    // saveUserProvide();
  },

  data() {
    return {};
  },
  methods: {},
  components: {
    pageFooter,
    pageHeader,
    FwbButton,
    FwbModal,
    CreateVoeuxModal,
    createvoeuxbtn,
  },
};
</script>

<template>
  <section class="py-5">
    <img
      src="@/assets/images/bg/bg_1.jpg"
      loading="lazy"
      alt="Photo"
      class="w-full h-full object-cover object-center absolute inset-0"
    />

    <div class="snow mix-blend-multiply absolute inset-0 bg-slate-900 bg-opacity-30">
      <div></div>
    </div>
    <div class="h-full flex items-center justify-center text-white absolute inset-0">
      <pageHeader class="fixed w-full top-0" />
      <main>
        <div
          class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
        >
          <div class="mx-auto max-w-3xl text-center">
            <h1
              class="topText py-2 bg-gradient-to-r from-green-300 via-blue-200 to-purple-200 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
            >
              Merry Christmas &amp;

              <span
                class="sm:block sm:mt-3 text-3xl font-extrabold text-transparent sm:text-5xl topText"
              >
                Happy New Year.
              </span>
            </h1>

            <p class="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
              tenetur fuga ducimus numquam ea!
            </p>

            <div class="mt-6 md:mx-4 mx-1">
              <button @click="showModal" class="button" type="button">
                Appuie ici pour créer ton voeux

                <img
                  class="button-hat"
                  src="https://res.cloudinary.com/freecodez/image/upload/v1701705719/images/guidvrtf8kre7pc3jdk5.webp"
                  alt=""
                />
              </button>

              <createvoeuxbtn
                :btnLinkTo="'/personnalVoeux'"
                :btnTexte="'Créer ton voeux Personnel'"
              />
            </div>
          </div>
        </div>
      </main>

      <hr class="my-4" />
      <pageFooter />
    </div>
  </section>

  <CreateVoeuxModal v-if="isShowModal" @close="closeModal" class="my-2" />
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Mountains+of+Christmas&display=swap");
body {
  background-color: #061123;
  height: 100vh;
  display: grid;
  justify-content: center;
  align-content: center;
}
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

/*  */
.button {
  position: relative;
  border: 1px solid transparent;
  border-radius: 6px;
  padding: 8px 16px;
  min-width: 8em;
  text-align: center;
  font-family: "Lobster", cursive;
  color: #fff;
  background-image: linear-gradient(to bottom, #f12828, #c7003c, #cc1943),
    linear-gradient(to bottom, #e00446, #af1077);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  box-shadow: inset 0 1px rgb(255 255 255 / 0.25), inset 0 -1px rgb(0 0 0 / 0.1),
    0 2px 4px rgb(0 0 0 / 0.25);
  transition: 0.2s;
  will-change: transform;
}

.button:active {
  transform: scale(0.92);
  filter: brightness(0.8);
}

.button-hat {
  position: absolute;
  top: -15px;
  left: -17px;
  height: 44px;
  filter: drop-shadow(0 2px 1px rgb(0 0 0 / 0.25));
}
</style>
