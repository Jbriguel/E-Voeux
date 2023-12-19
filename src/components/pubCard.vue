<template>

  <!--  from-red-900 to-red-800 opacity-80 -->
  <div class="mt-6">
    <div class="relative h-full overflow-hidden bg-cover rounded-xl">
      <img
        src="@/assets/images/imgs/image_1.png"
        loading="lazy"
        alt="Photo"
        class="w-screen h-screen object-cover object-center absolute inset-0"
      />
      <span
        class="w-full h-full bg-center bg-cover bg-gradient-to-tr from-black/30 to-black/40 absolute inset-0"
      ></span>

      <!-- animate-fade-up  -->
      <section
        class="animate-fade-up w-full bg-transparent p-2 mx-auto border shadow-soft-md border-red-700 md:gap-x-2 left-12 bottom-2 md:flex md:items-center rounded-xl"
      >
        <span class="inline-flex p-2 text-blue-500 rounded-lg shrink-0 bg-black/90">
          <img
            src="@/assets/hh/images/logo1.png"
            loading="lazy"
            alt="logo"
            class="w-20 h-full object-contain object-center"
          />
        </span>
        <p class="text-sm flex items-center shadow-sm  mt-2 text-justify text-gray-100">
          Profitez de nos services spéciaux pour la période des fêtes ! Offres spéciales,
          réductions exclusives et bien plus encore. Ne manquez pas cette occasion unique
          pour célébrer la saison avec nous !
        </p>
        <div class="flex items-center mt-2 gap-x-2 shrink-0 lg:mt-0">
          <button
            class="text-xs w-1/2 md:w-auto font-medium bg-green-400 hover:bg-green-500 rounded-md text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none"
          >
            <i class="fab fa-whatsapp"></i>
          </button>

          <button
            class="text-xs w-full md:w-auto font-medium bg-white hover:bg-red-400 hover:font-bold rounded-md text-slate-700 px-4 py-2.5 duration-300 transition-colors focus:outline-none"
          >
            <a class=" " href="/horacleHouse"> Découvrir </a>
          </button>
        </div>
      </section>
    </div>
  </div>

  <!--  -->
  
  <!--  -->
</template>

<script>
import { ref, reactive, watchEffect } from "vue";
export default {
  name: "PubCard",
};
</script>

<style scoped></style>
