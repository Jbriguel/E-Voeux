// utils.js

// Fonction pour nettoyer une chaîne de caractères
function sainText(str) {
    return str.trim().replace(/\\/g, '').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Fonction pour générer un identifiant unique basé sur le timestamp
function generateUniqueName() {
    const timestamp = new Date().getTime();
    return 'cff_' + timestamp;
}

//get Adresse du visiteur
async function getVisIpAddr() {
    // Exemple d'utilisation de l'API d'un service tiers pour récupérer l'adresse IP
    // Cet exemple utilise 'ipinfo.io' comme service d'exemple
    // Vous pouvez remplacer l'URL par d'autres services tiers qui fournissent une API similaire

    try {
        const response = await fetch('https://ipinfo.io/json');
        const data = await response.json();
        // console.log("getVisIpAddr data ",data)
        // return data.ip;
        return data;
    } catch (error) {
        console.error('Erreur lors de la récupération de l\'adresse IP :', error);
        return null;
    }
}

//Récuperation de la langue 
function getBrowserLanguage() {
    const userLanguage = navigator.language || navigator.userLanguage || 'en'; // Langue par défaut en cas d'absence
    return userLanguage.startsWith('en') ? 'en' : 'fr'; // Si anglais détecté, retourne 'en', sinon 'fr'
  }

// Export des fonctions pour les rendre disponibles dans d'autres fichiers
export { sainText, generateUniqueName, getVisIpAddr, getBrowserLanguage };