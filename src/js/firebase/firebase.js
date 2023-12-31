
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection } from "firebase/firestore";

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


export const db = getFirestore(firebaseApp);
export const visiteurCollection = 'visiteurs';
export const paysCollection = 'paysDesVisiteurs';
export const personnalVoeuxCollection = 'personnalsVoeuxCollection'; 