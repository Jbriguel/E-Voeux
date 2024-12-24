// src/store/index.js
import { defineStore } from 'pinia';
import { getBrowserLanguage } from '../js/functions/allFonctions';
export const textesDataStore = defineStore('textesData', {
  state: () => ({
    text: {
      "fr": [
        "Vos voeux avec vous",
        "Bonne et heureuse année 2025",
        "Appuie ici pour créer ton vœu",
        "Création de Joys Floresco",
        "Tous droits reservés",
        "Partager via whatsapp",
        "Choisir l'image",
        "Choisir le vœu",
        "Votre prenom",
        "Fermer"
        , "Créez et Partagez Vos Vœux Personnalisés!",
        "Essayer Aussi",
        "Créer un vœu Personnel",
        "Appuie ici pour créer un vœu",
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
        "Créer ton vœu Personnel",
        "Accueil"
      ],
      "en": [
        "Your wishes with you.",
        "Happy New Year, 2025.",
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
   "voeux": {
  "fr": [
    "Que 2025 soit l'année où vos rêves prennent forme, où chaque sourire soit une victoire et chaque moment partagé une promesse d'avenir. Meilleurs vœux pour une année pleine de découvertes et de merveilles !",
    "Puissiez-vous être enveloppé(e) de lumière et de douceur, chaque jour apportant son lot de joies inattendues et d'instants précieux. Que 2025 soit une année éclatante de bonheur et de sérénité !",
    "Que cette nouvelle année soit une constellation de moments magiques, où chaque étoile représente un souhait exaucé et chaque nuit une nouvelle chance. Bonne année pleine de promesses et d'étoiles filantes !",
    "Que chaque respiration soit un souffle d'inspiration, chaque pas une avancée vers l'accomplissement de vos rêves les plus chers. Que 2025 soit une danse joyeuse vers votre bonheur !",
    "Que cette année vous guide vers des instants qui font briller vos yeux et chauffer votre cœur, chaque souvenir étant une pépite précieuse à chérir. Meilleurs vœux pour une année empreinte de lumière et d'amour !",
    "Puissent vos journées être remplies de rires sincères, d'instants suspendus dans le temps et de rencontres enrichissantes. Bonne année 2025, pleine d'émotions et de partages !",
    "Que chaque aurore de 2025 soit une promesse d'espoir et chaque coucher de soleil une invitation à la paix intérieure. Meilleurs vœux pour une année apaisée et pleine de joie !",
    "Puissiez-vous créer des souvenirs si puissants qu'ils marqueront votre âme et inspireront ceux qui vous entourent. Bonne année, riche en émotions et en récits à raconter !",
    "Que chaque émotion vécue en 2025 soit un rayon de couleur dans le tableau de votre vie, créant une œuvre vibrante et pleine d'amour. Meilleurs vœux pour une année colorée et émotive !",
    "Que chaque instant de cette année soit une note de musique qui résonne en harmonie avec vos rêves, chaque mélodie étant un hommage à votre voyage intérieur. Meilleurs vœux pour une année riche en émotions et en accomplissements !"
  ],
  "en": [
    "May 2025 be the year where your dreams come true, where every smile is a victory and every shared moment a promise for the future. Best wishes for a year full of discoveries and wonders!",
    "May you be surrounded by light and gentleness, with each day bringing unexpected joys and precious moments. May 2025 be a year shining with happiness and serenity!",
    "May this new year be a constellation of magical moments, where each star represents a wish fulfilled and every night a new opportunity. Happy New Year filled with promises and shooting stars!",
    "May each breath be a source of inspiration, each step a movement toward fulfilling your deepest dreams. May 2025 be a joyful dance toward your happiness!",
    "May this year lead you to moments that make your eyes sparkle and warm your heart, each memory a precious gem to cherish. Best wishes for a year full of light and love!",
    "May your days be filled with genuine laughter, moments suspended in time, and enriching encounters. Happy 2025, full of emotions and connections!",
    "May every dawn of 2025 bring a promise of hope, and every sunset be an invitation to inner peace. Best wishes for a year peaceful and full of joy!",
    "May you create memories so powerful that they touch your soul and inspire those around you. Happy New Year, full of emotions and stories to tell!",
    "May every emotion you feel in 2025 be a ray of color on the canvas of your life, creating a vibrant and love-filled masterpiece. Best wishes for a colorful and emotional year!",
    "May every moment of this year be a note of music resonating in harmony with your dreams, each melody a tribute to your inner journey. Best wishes for a year full of emotions and achievements!"
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
