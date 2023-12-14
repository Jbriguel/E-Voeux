//import './assets/main.css'
import './index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { VueFire, VueFireFirestoreOptionsAPI } from "vuefire";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection } from 'firebase/firestore'
// ... other firebase imports




import App from './App.vue'
import router from './router'

const app = createApp(App)
//******************** */


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCkpr7hcocyw2kuaKDdiAypxO7KJ3vV2Tc",
  authDomain: "e-voeux.firebaseapp.com",
  projectId: "e-voeux",
  storageBucket: "e-voeux.appspot.com",
  messagingSenderId: "927280062343",
  appId: "1:927280062343:web:0b1ffb478195b4b955fd22",
  measurementId: "G-R8H6WD0T1K"
};

// Initialize Firebase 
export const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

// used for the firestore refs
const db = getFirestore(firebaseApp)

// here we can export reusable database references
export const visiteursRef = collection(db, 'visiteurs')
//***************** *********** */

app.use(createPinia())
app.use(router)
app.use(analytics)

app.use(VueFire, {
    firebaseApp,
    modules: [VueFireFirestoreOptionsAPI()],
});


app.mount('#app')