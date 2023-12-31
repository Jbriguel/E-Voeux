<template>
  <div id="top">
    <!-- 
  - #HEADER
-->

    <header class="header" data-header>
      <div class="container">
        <div class="overlay" data-overlay></div>

        <a href="#">
          <h1 class="logo">Horacle House</h1>
        </a>

        <nav class="navbar" data-navbar>
          <div class="navbar-top">
            <a href="#" class="logo">Horacle House</a>

            <button
              class="nav-close-btn"
              aria-label="Close Menu"
              v-on:click="toggleNav()"
            >
              <ion-icon name="close-outline"></ion-icon>
            </button>
          </div>

          <ul class="navbar-list">
            <li class="navbar-item">
              <a href="#home" class="navbar-link" data-navbar-link>Acceuil</a>
            </li>

            <li class="navbar-item">
              <a href="#about" class="navbar-link" data-navbar-link>A propos</a>
            </li>

            <li class="navbar-item">
              <a href="#offre" class="navbar-link" data-navbar-link>Spécial Offre</a>
            </li>

            <li class="navbar-item">
              <a href="#services" class="navbar-link" data-navbar-link>Services</a>
            </li>
          </ul>
        </nav>
        <div v-if="isMenuOpen">
          <div
            class="relative z-10"
            aria-labelledby="slide-over-title"
            role="dialog"
            aria-modal="true"
          >
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div class="fixed inset-0 overflow-hidden">
              <div class="absolute inset-0 overflow-hidden">
                <div class="p-5 bg-white border rounded shadow-sm">
                  <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center flex-no-shrink text-white mr-6">
                      <h3 class="text-slate-800">Horacle House</h3>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        @click="isMenuOpen = false"
                      >
                        <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav class="flex-col">
                    <ul class="navbar-list">
                      <li class="navbar-item">
                        <a
                          href="#"
                          class="navbar-link"
                          data-navbar-link
                          @click="isMenuOpen = false"
                          >Acceuil</a
                        >
                      </li>

                      <li class="navbar-item">
                        <a
                          href="#about"
                          class="navbar-link"
                          data-navbar-link
                          @click="isMenuOpen = false"
                          >A propos</a
                        >
                      </li>

                      <li class="navbar-item">
                        <a
                          href="#offre"
                          class="navbar-link"
                          data-navbar-link
                          @click="isMenuOpen = false"
                          >Spécial Offre</a
                        >
                      </li>

                      <li class="navbar-item">
                        <a
                          href="#services"
                          class="navbar-link"
                          data-navbar-link
                          @click="isMenuOpen = false"
                          >Services</a
                        >
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a   class="btn"   aria-label="Chat on WhatsApp" href="https://wa.me/22362828003">
          <i aria-hidden="true" class="fab fa-whatsapp"></i>
          <span>Me contacter</span>
        </a>

        <button
          class="nav-open-btn"
          aria-label="Open Menu"
          data-nav-open-btn
          v-on:click="toggleNav()"
        >
          <ion-icon name="menu-outline"></ion-icon>
        </button>
      </div>
    </header>

    <main>
      <article>
        <!-- 
      - #HERO
    -->

        <section class="hero" id="home">
          <div class="container">
            <div class="hero-content">
              <p class="hero-subtitle">
                Créez une identité visuelle unique et captivante.
              </p>

              <h2 class="h2 hero-title">
                Horacle House : L'Art de l'Innovation Créative
              </h2>
              <p class="hero-text">
                Cultivez votre identité, inspirez par votre créativité. Découvrez nos
                services pour propulser votre présence.
              </p>

              <div class="flex flex-row items-center">
                <a aria-label="Chat on WhatsApp" href="https://wa.me/22362828003">
                  <button class="btn m-2">Contacter</button>
                </a>

                <a href="/" class="m-2">
                  <span class="rounded-circle bg-slate-50">
                    <i class="md:p-5 p-5 fab fa-edge text-red-500"></i>
                  </span>
                </a>
              </div>
            </div>

            <figure class="hero-banner">
              <img
                src="@/assets/hh/images/manIllustration.png"
                width="694"
                height="529"
                loading="lazy"
                alt="hero-banner"
                class="w-100 banner-animation"
              />
            </figure>
          </div>
        </section>

        <offerCard />
        <!-- 
      - #ABOUT
    -->

        <section class="section about" id="about">
          <div class="container">
            <figure class="about-banner">
              <img
                src="@/assets/hh/images/design.png"
                width="700"
                height="532"
                loading="lazy"
                alt="about banner"
                class="w-100 banner-animation"
              />
            </figure>

            <div class="about-content">
              <h2 class="h2 section-title underline no-underline">A Propos</h2>

              <p class="about-text">
                Horacle House est une solution connectée de création de couverture depuis
                la base (la marque, le logo) ,la publicité médiatique et pour finir une
                couverture mondiale visant à attirer la curiosité en même temps plus de
                clientèle.
              </p>

              <p class="about-text">
                Pour plus d'information:<br /><span class="flex flex-grow p-2">
                  <i class="md:p-2 p-2 fa fa-envelope text-red-500"></i>
                  Horaclehouse@hotmail.com
                </span>
              </p>
              <a
                :href="flyer"
                download="flyer_HoracleHouse.jpg"
                target="_blank"
              >
                <button class="btn m-2">
                  <i class="fa fa-download"></i> Télécharger flyers
                </button></a
              >
            </div>
          </div>
        </section>

        <!-- Offre -->

        <!--  -->

        <h2 class="h2 section-title underline no-underline mt-20">Spécial Offre</h2>
        <div
          class="container relative rounded-lg block md:flex items-center bg-gray-100 shadow-soft-2xl"
        >
          <div
            class="relative w-full md:w-2/5 h-full overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg"
            style="min-height: 19rem"
          >
            <img
              class="absolute inset-0 w-full h-full object-cover object-center"
              src="@/assets/images/imgs/image_1.png"
              alt=""
            />
            <div class="absolute inset-0 w-full h-full bg-red-500 opacity-20"></div>
            <div
              class="absolute inset-0 w-full h-full flex items-center justify-center fill-current text-white"
            >
              <h2 class="text-white underline no-underline">Spécial Offre</h2>
            </div>
          </div>
          <div class="w-full md:w-3/5 h-full flex items-center bg-gray-100 rounded-lg">
            <div class="p-12 md:pr-24 md:pl-16 md:py-12">
              <h4 class="text-gray-900">
                Éclat des Fêtes : Calendriers & Cartes de Vœux Personnalisés !
              </h4>
              <p class="text-gray-600">
                Créez des souvenirs durables cette saison des fêtes avec nos calendriers
                et cartes de vœux uniques. Donnez vie à vos moments spéciaux et partagez
                la joie avec des designs personnalisés et une qualité exceptionnelle.
              </p>
              <div class="flex items-baseline mt-1">
                <a aria-label="Chat on WhatsApp" :href="profiterOffre_WhatsApp()">
                   <button class="btn animate-pulse">✨ Essayer maintenant</button>
                </a> 
              </div>
            </div>
            <svg
              class="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-gray-100 -ml-12"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
          </div>
        </div>
        <!--  -->
        <!-- Carousel -->
        <div class="container mt-10">
          <vueper-slides
            class="vueperslides--1"
            ref="vueperslides1"
            :touchable="false"
            fade="fade"
            :autoplay="true"
            :bullets="false"
            @slide="$refs.vueperslides2 &amp;&amp; $refs.vueperslides2.goToSlide($event.currentSlide.index, { emit: false })"
            fixed-height="400px"
          >
            <vueper-slide
              style="
                @media (max-width: 768px) {
                  background-size: contain;
                }
                background-repeat: no-repeat;
                background-position: center center;
              "
              v-for="(slide, i) in sliderState.data"
              :key="i"
              :image="slide.image"
            >
            </vueper-slide> </vueper-slides
          ><br />
          <vueper-slides
            class="no-shadow vueperslides--2"
            ref="vueperslides2"
            @slide="$refs.vueperslides1 &amp;&amp; $refs.vueperslides1.goToSlide($event.currentSlide.index, { emit: false })"
            :visible-slides="slider.data.length"
            fixed-height="75px"
            :bullets="false"
            :touchable="false"
            :gap="2.5"
            :arrows="false"
          >
            <vueper-slide
              v-for="(slide, i) in sliderState.data"
              :key="i"
              :image="slide.image"
              @click="$refs.vueperslides2 &amp;&amp; $refs.vueperslides2.goToSlide(i)"
            ></vueper-slide>
          </vueper-slides>
        </div>
        <!--  -->
        <!--  -->
       

        <section class="section service" id="services">
          <div class="container">
            <h2 class="h2 section-title underline no-underline">Nos Service</h2>

            <ul class="service-list">
              <li>
                <div class="service-card">
                  <div class="card-icon">
                    <ion-icon name="color-palette-outline"></ion-icon>
                  </div>

                  <h3 class="h3 title">Design Graphique</h3>

                  <p class="text">
                    Création de logos et d'identité visuelle. Des designs uniques qui
                    captent l'essence de votre entreprise.
                  </p>
                </div>
              </li>

              <li>
                <div class="service-card">
                  <div class="card-icon">
                    <ion-icon name="extension-puzzle-outline"></ion-icon>
                  </div>

                  <h3 class="h3 title">Multimédia</h3>

                  <p class="text">
                    Production de vidéos et animations. Des contenus multimédias
                    percutants pour votre stratégie marketing.
                  </p>
                </div>
              </li>

              <li>
                <div class="service-card">
                  <div class="card-icon">
                    <ion-icon name="map-outline"></ion-icon>
                  </div>

                  <h3 class="h3 title">Référence Google-Map</h3>

                  <p class="text">
                    Optimisation de référencement local sur Google Map. Augmentez votre
                    visibilité et attirez plus de clients locaux.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </article>
    </main>

    <!-- 
  - #FOOTER
-->

    <footer class="footer">
      <div class="footer-bottom">
        <p class="copyright">
          <i class="far fa-copyright text-secondary"></i>&nbsp;Creation de Joys Floresco
          <i class="fab fa-empire fa-spin"></i> &amp; Joseph Briguel
          <i class="fab fa-battle-net fa-spin"></i>. Tous droits réservés
          <i class="far fa-registered text-secondary"></i>
        </p>
      </div>
    </footer>

    <!-- 
  - #GO TO TOP
-->

    <a href="#top" class="go-top active" aria-label="Go To Top" data-go-top>
      <ion-icon name="arrow-up-outline"></ion-icon>
    </a>
  </div>
</template>
<script>
import offerCard from "../components/cards/offerCard.vue";
import { VueperSlides, VueperSlide } from "vueperslides";
import { ref, watchEffect, reactive, onMounted } from "vue";
import "vueperslides/dist/vueperslides.css";
import "@/assets/hh/css/style.css";

export default {
  name: "HHpresentation",
  components: {
    offerCard,
    VueperSlides,
    VueperSlide,
  },
  setup(props) {
    const flyer = ref();
    let isMenuOpen = ref(false);
    function toggleNav() {
      isMenuOpen.value = !isMenuOpen.value;
    }
    let sliderState = reactive({ data: [] });
    watchEffect(async () => {
      sliderState.data = [
        {
          key: 1,
          image: (await import(/* @vite-ignore */ `@/assets/hh/images/calendar/1.jpg`))
            .default,
        },
        {
          key: 2,
          image: (await import(/* @vite-ignore */ `@/assets/hh/images/calendar/2.jpg`))
            .default,
        },
        {
          key: 3,
          image: (await import(/* @vite-ignore */ `@/assets/hh/images/calendar/3.jpg`))
            .default,
        },
      ];
// Graphic Design flyer.pdf
      flyer.value = (
        await import(/* @vite-ignore */ `@/assets/hh/images/flyer_HoracleHouse.jpg`)
      ).default;
    });


    function profiterOffre_WhatsApp() {
      const text = "Bonjour Horacle House, j'aimerais profiter de votre Spécial offre 'Éclat des Fêtes'.";
      const message =
        encodeURIComponent(text) ;
      return "https://wa.me/22362828003?text="+ message;
       
    };

    return { flyer, sliderState, isMenuOpen, toggleNav,profiterOffre_WhatsApp };
  },
  data() {
    return {
      slider: {
        data: [
          { image: import.meta.glob("@/assets/images/imgs/image_1.png") },
          {
            image: import.meta.glob("@/assets/images/imgs/image_1.png"),
          },
          {
            image: import.meta.glob("@/assets/images/imgs/image_1.png"),
          },
        ],
      },
    };
  },
  mounted() {},
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Source+Sans+Pro:wght@600;700&display=swap");

.vueperslides--2 {
  margin: auto;
  max-width: 300px;

  .vueperslide {
    box-sizing: border-box;
    border: 1px solid #fff;
    transition: 0.3s ease-in-out;
    opacity: 0.7;
  }

  .vueperslide--active {
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
    opacity: 1;
    border-color: #000;
  }
}
</style>
