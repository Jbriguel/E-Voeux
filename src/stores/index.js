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
    },
    images: [
      "@/assets/images/imgs/image_1.png",
      "@/assets/images/imgs/image_1.png",
    ],
    voeux: {
      "fr": ["Quel meilleur message puis-je t’adresser que celui-ci : profite de cette année comme jamais ! 2020 est placé sous le signe de la joie et de la fête, j’en suis convaincu. J’espère que l’on se verra très bientôt pour célébrer de bons moments, en attendant, je te souhaite une très bonne année 2020.",
        "Je te souhaite bonheur et bonne santé pour la nouvelle année, mais surtout plein de magnifiques surprises, de sentiers aventureux, d’audaces et de folies ! Que 2020 soit étonnante ! Bonne année !",
        "Quelle joie et bonheur de te compter parmi mes amis. Non, je ne suis pas saoul, je tiens juste à te faire savoir, alors que la nouvelle année, commence, à quel point je tiens à toi. Très bonne année mon ami !",
        "2020 débute, c’est donc l’occasion pour moi de te souhaiter que tes projets les plus ambitions s’accomplissent. Que cette année t’accorde de l’amour et prospérité, accomplissements et bonheurs en tous genres !",
        "Je te souhaite évidemment une bonne année, mais j’y tiens, le plus important est que tu gardes une excellente santé ! C’est tellement important, même si on te la rabâche tous les ans ! Que cette nouvelle année te sois douce !",
        "J’espère que tu as passé de belles fêtes de Noël avec ta famille et que tu profites bien du réveillon. J’espère que tu vas bien et que nous pourrons nous voir très prochainement, sans laisser filer le temps qui passe !",
        "Bonne année ! Ça y est, nous sommes déjà en 2020 ! Fais-tu bien la fête pour célébrer cette nouvelle année ? Ce réveillon 2020 est-il un bon cru ? J’imagine que oui ! Profite de ce moment avec tes proches et attention aux excès ;) !",
        "Voici une nouvelle année qui commence ! Pas la peine de prendre de bonnes résolutions cette année, comme toujours tu donneras le meilleur de toi pour tes proches et tes amis, reste comme ça ! Je pense à toi et te souhaite une excellente année 2020 !",
        "Je te souhaite une magnifique année 2020, qu’elle te soit belle et pleine de promesses. Je suis certain que cette nouvelle année t’apportera confiance et assurance, pour dissiper les doutes, et plein de courage pour affronter les adversités ! Je te souhaite une très bonne année 2020.",
        "Cette année, je suis sûr que tu parviendras à mener à bien tous tes projets et que 2020 sera bien remplie pour toi et ta famille. Amours, amitiés, bonheurs de la vie quotidienne, je te souhaite le meilleur et que tes accomplissements te rendent heureux !"
      ], "en": ["May you enjoy the time of the holidays with your nearest and dearest, family and friends, those who love you and care for you. This is a time to be thankful and to look forward to what the future has to bring.",
        "I wish you a year full of happiness and beautiful surprises. Sunny days if not in the sky it will be in your heart and also in that of your loved ones. Happy New Year 2020",
        "We wish you a holiday season full of affection and joy, that the new year 2020 will be full of happiness, good surprises and prosperity. May all these wishes come true. Happy New Year 2020!",
        "May this new year 2020 bring you success in everything you undertake. May the difficulties of this new year be spared you all. May happiness be in your hearts and in those of your loved ones.  Happy New Year",
        "With this greeting card, and for the new year 2020, I wish you to dare.  Dare to make your dreams come true. Dare to make your projects come true. Dare to enjoy your happiness. Dare to appreciate the love you are given. Dare to have all the success you deserve.  It's all inside you, you just have to dare. Happy New Year 2020",
        "What a wonderful year has just passed! For the coming year, we wish you lots of love and smiles, lots of dreams and surprises, and lots of joy and success",
        "The new year marks the beginning of a new page: new people to meet, new adventures to experience, and new memories to create! I wish you a lot of happiness for all these new things, and a beautiful year 2020",
        "This year has once again flown by, but one thing's for sure: It's been filled with love and happiness!  We wish you a happy new year, full of emotions, smiles, friendships, and beautiful projects! Happy New Year, 2020!",
        "I would like to offer you my best wishes for a New Year filled with peace, health and happiness. (J'aimerais t'offrir mes meilleurs voeux pour une nouvelle année remplie de paix, de santé et de bonheur)",
        "This year has come to an end and it will take away all the pain and mistakes. Now you have a brand new beginning to look forward to. Happy New Years, with love from all of us!"
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
    getImage(index){ 

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
