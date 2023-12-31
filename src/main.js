//import './assets/main.css'
import './index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// Import the functions you need from the SDKs you need
import { VueFire, VueFireFirestoreOptionsAPI } from "vuefire";
import { firebaseApp } from './js/firebase/firebase';
// ... other firebase imports 
import VueCookies from 'vue3-cookies'

// import VueSocialSharing from '@/vue-social-sharing'
import VueSocialSharing from 'vue-social-sharing'

import {LoadingPlugin} from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

import App from './App.vue'
import router from './router'

const app = createApp(App)
//******************** */



// // used for the firestore refs
// const db = getFirestore(firebaseApp)

// // here we can export reusable database references
// export const visiteursRef = collection(db, 'visiteurs')
//***************** *********** */

app.use(createPinia())
app.use(router)
// app.use(analytics)
// default options config: { expires: '1d', path: '/', domain: '', secure: '', sameSite: 'Lax' }
app.use(VueCookies, {
    expireTimes: "30d",
    path: "/",
    domain: "",
    secure: true,
    sameSite: "None"
})
app.use(VueFire, {
    firebaseApp,
    modules: [VueFireFirestoreOptionsAPI()],
});

app.use(LoadingPlugin);
app.use(VueSocialSharing);

app.mount('#app')