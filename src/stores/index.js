// src/store/index.js
import { defineStore } from 'pinia'; 
import {getBrowserLanguage} from '@/functions/allFonctions.js';
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
      ],
      "en": [
        "Your wishes with you.",
        "Happy New Year, 2020.",
        "Press here to create your wish.",
        "Created by Joys Floresco",
        "All rights reserved.",
        "Share via whatsapp.",
        "Choose image",
        "Choose your wish",
        "Your name",
        "Cancel"
      ],
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
