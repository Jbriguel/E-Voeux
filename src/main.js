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
    apiKey: "AIzaSyADVyl2JGQSxiyl4z12EJSj324EDB_jBQM",
    authDomain: "evoeux-a188d.firebaseapp.com",
    projectId: "evoeux-a188d",
    storageBucket: "evoeux-a188d.appspot.com",
    messagingSenderId: "732089609641",
    appId: "1:732089609641:web:4387da60fe9ade9451a8b8",
    measurementId: "G-EYR51M1FN5"
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