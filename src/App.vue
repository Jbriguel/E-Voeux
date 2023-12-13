<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <main>
    <RouterView />
  </main>
</template>

<style lang="scss">
@import "@/assets/base.css";
@font-face {
  font-family: "Poppins";
  src: local("Poppins"), url(./assets/) format("truetype");
}

#here {
  margin: 0 auto;
  background-color: white;
  font-weight: normal;
  font-family: "Poppins";
  min-height: 100vh;
  margin-bottom: 0px;
}
* {
  font-family: "Poppins";
}
.textBlackShadow {
  --tw-drop-shadow: drop-shadow(0 10px 8px rgba(0, 0, 0, 0.344))
    drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale)
    var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia)
    var(--tw-drop-shadow);
}
.textwhiteShadow {
  --tw-drop-shadow: drop-shadow(0 10px 8px rgba(0, 0, 0, 0.344))
    drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale)
    var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia)
    var(--tw-drop-shadow);
}
</style>
