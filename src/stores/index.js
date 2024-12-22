// src/store/index.js
import { defineStore } from 'pinia';
import { getBrowserLanguage } from '../js/functions/allFonctions';
export const textesDataStore = defineStore('textesData', {
  state: () => ({
    text: {
      "fr": [
        "Vos voeux avec vous",
        "Bonne et heureuse année 2020",
        "Appuie ici pour créer ton voeux",
        "Création de Joys Floresco",
        "Tous droits reservés",
        "Partager via whatsapp",
        "Choisir l'image",
        "Choisir le voeux",
        "Votre prenom",
        "Fermer"
        , "Créez et Partagez Vos Vœux Personnalisés!",
        "Essayer Aussi",
        "Créer un voeux Personnel",
        "Appuie ici pour créer un voeux",
        "Partager via Facebook",
        "Veuillez saisir le prénom avant",
        "Lien copié",
        "Obligatoire",
        "Créez votre vœu",
        "Carte de vœux",
        "Vœux personnalisés",
        "Exprimez votre créativité dans vos vœux !",
          "Écrire ses vœux...",
        "Que ces fêtes de fin d'année vous apportent joie et bonheur !",
        "Créer ton voeux Personnel",
        "Accueil"
      ],
      "en": [
        "Your wishes with you.",
        "Happy New Year, 2020.",
        "Press here to create your wish.",
        "Created by Joys Floresco",
        "All rights reserved.",
        "Share with whatsapp.",
        "Choose image",
        "Choose your wish",
        "Your name",
        "Cancel",
        "Create and Share Your Personalized Wishes!",
        "Try it too",
        "Create a Personal wish", 
        "Click here to create a wish",
        "Share with Facebook",
        "Please enter the first name before",
        "link copied",
        "required",
        "Create your wish",
        "Greeting Card",
        "Personalised greetings",
        "Express your creativity in your greetings!",
        "Writing your wishes...",
        "May the festive season bring you joy and happiness!",
        "Create your own wish",
        "Home"
      ],
    },
    images: [
      "@/assets/images/imgs/image_1.png",
      "@/assets/images/imgs/image_1.png",
    ],
    voeux: {
      "fr": [
        "Que cette année soit le théâtre de votre métamorphose, où chaque défi devient une opportunité et chaque épreuve une leçon précieuse. Meilleurs vœux pour une année transformative et éblouissante !",
        "Puissiez-vous être entouré(e) de moments qui volent votre souffle et d'instants qui touchent votre cœur au plus profond. Que 2024 soit une symphonie d'émotions intenses et de souvenirs inoubliables !",
        "Que cette nouvelle année déverse sur vous une pluie d'étoiles filantes, chacune portant vos souhaits les plus chers. Que chaque étoile vous rappelle votre lumière intérieure. Bonne année lumineuse et pleine d'émotions !",
        "Que chaque battement de votre cœur soit une mélodie enchanteresse, que chaque pas que vous faites soit une danse vers la réalisation de vos rêves. Que 2024 soit une symphonie magique et émouvante !",
        "Que cette année vous connecte à des moments si précieux qu'ils brillent comme des gemmes dans votre mémoire. Puissent ces émotions être votre richesse éternelle. Meilleurs vœux pour une année brillamment émouvante !",
        "Puissent vos jours être tissés de moments qui suspendent le temps, de rires qui résonnent dans l'éternité et de sourires qui éclairent votre chemin. Bonne et émouvante année 2024 !",
        "Que chaque aurore de 2024 vous enrobe dans sa lumière douce et apaise votre âme. Que chaque crépuscule vous chante une berceuse de tranquillité. Meilleurs vœux pour une année émotionnellement riche et apaisante !",
        "Puissiez-vous écrire votre histoire avec des pages d'une beauté si poignante qu'elles captivent le monde et réchauffent les cœurs. Bonne année, pleine de récits mémorables et d'émotions intenses !",
        "Que chaque émotion que vous ressentez en 2024 soit une couleur vive sur la toile de votre vie, créant un tableau éblouissant et émouvant. Meilleurs vœux pour une année artistiquement riche et émotionnellement vibrante !",
        "Que chaque instant de cette nouvelle année résonne comme une note parfaite dans la symphonie de votre vie. Puissent les mélodies de 2024 être une harmonie d'amour, de paix et d'accomplissement."

      ], "en":
        [
          "May this year be the stage for your transformation, where every challenge becomes an opportunity and every trial a precious lesson. Best wishes for a transformative and dazzling year!",
          "May you be surrounded by moments that take your breath away and instants that touch your heart profoundly. May 2024 be a symphony of intense emotions and unforgettable memories!",
          "May this new year shower upon you a rain of shooting stars, each carrying your dearest wishes. May each star remind you of your inner light. Happy and luminous New Year filled with emotions!",
          "May each beat of your heart be an enchanting melody, may each step you take be a dance toward the realization of your dreams. May 2024 be a magical and moving symphony!",
          "May this year connect you to moments so precious they shine like gems in your memory. May these emotions be your eternal wealth. Best wishes for a brilliantly emotional year!",
          "May your days be woven with moments that suspend time, laughter that echoes into eternity, and smiles that light up your path. Happy and emotionally moving year 2024!",
          "May every dawn of 2024 envelop you in its gentle light and soothe your soul. May every dusk sing you a lullaby of tranquility. Best wishes for an emotionally rich and soothing year!",
          "May you write your story with pages so poignant in beauty that they captivate the world and warm hearts. Happy New Year, filled with memorable tales and intense emotions!",
          "May every emotion you feel in 2024 be a vivid color on the canvas of your life, creating a dazzling and emotionally vibrant masterpiece. Best wishes for an artistically rich and emotionally resonant year!",
          "May every moment of this new year resonate like a perfect note in the symphony of your life. May the melodies of 2024 be a harmony of love, peace, and fulfillment."
        ]
    }
  }),
  actions: {
    // addConcept(type) {
    //   this.concepts.push({
    //     conceptName: '',
    //     contentType: type,
    //     paragraphContent: '',
    //     listItems: '',
    //     question: '',
    //     options: '',
    //     answer: '',
    //   });
    // },

    getLocalizedText(index) {
      const language = getBrowserLanguage(); // Récupère la langue du navigateur
      const messages = this.text[language] || this.text['fr']; // Utilise la langue détectée, sinon français par défaut

      if (index >= 0 && index < messages.length) {
        return messages[index];
      } else {
        return '---';
      }
    },
    getVoeuxText(index, language) {
      const lesVoeux = this.voeux[language] || this.voeux['fr']; // Utilise la langue détectée, sinon français par défaut

      if (index >= 0 && index < lesVoeux.length) {
        return lesVoeux[index];
      } else {
        return '---';
      }
    },
    getImage(index) {

      if (index >= 0 && index < this.images.length) {
        return this.images[index];
      } else {
        return '@/assets/images/imgs/image_1.png';
      }
    }
    // generateJSON() {
    //   const jsonData = {
    //     module: this.moduleName,
    //     concepts: this.concepts,
    //   };
    //   return JSON.stringify(jsonData, null, 2);
    // },
  },
});
