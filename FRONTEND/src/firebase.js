import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

var firebaseConfig = {

    apiKey: "AIzaSyAKqZpIJu4POT15Wh0CUpgz8utOqv5ep2I",
    authDomain: "tem54-e5264.firebaseapp.com",
    projectId: "tem54-e5264",
    storageBucket: "tem54-e5264.appspot.com",
    messagingSenderId: "348907008279",
    appId: "1:348907008279:web:2ea574dde0b49fe8974752",
    measurementId: "G-0MK26GHXGF"
  };
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp); 

export { db };