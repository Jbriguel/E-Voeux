<template>
    <div>
      <!-- Zone contenant la carte de vœux -->
      <div ref="card" class="card">
        <h1>{{ title }}</h1>
        <p>{{ message }}</p>
        <footer>{{ footer }}</footer>
      </div>
  
      <!-- Bouton pour télécharger la carte en PNG -->
      <button @click="exportAsPNG">Exporter en PNG</button>
    </div>
  </template>
  
  <script>
  import html2canvas from 'html2canvas';
  
  export default {
    name: "GreetingCard",
    data() {
      return {
        title: "Joyeuses Fêtes !",
        message: "Que cette année vous apporte joie et réussite.",
        footer: "Avec mes meilleurs vœux, [Votre nom]",
      };
    },
    methods: {
      async exportAsPNG() {
        const cardElement = this.$refs.card; // Référence à la carte
        const canvas = await html2canvas(cardElement); // Convertit la carte en canvas
        const link = document.createElement("a");
        link.download = "carte_de_voeux.png"; // Nom du fichier exporté
        link.href = canvas.toDataURL("image/png"); // Convertit le canvas en base64
        link.click(); // Déclenche le téléchargement
      },
    },
  };
  </script>
  
  <style>
  .card {
    width: 400px;
    height: 300px;
    padding: 20px;
    border: 2px solid #ccc;
    border-radius: 10px;
    text-align: center;
    background: linear-gradient(to bottom, #ffe5b4, #fff);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  .card h1 {
    font-size: 24px;
    color: #ff5722;
  }
  .card p {
    font-size: 16px;
    margin: 10px 0;
  }
  .card footer {
    font-size: 14px;
    color: #555;
    margin-top: 20px;
  }
  button {
    margin-top: 20px;
    padding: 10px 15px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover {
    background-color: #0056b3;
  }
  </style>
  