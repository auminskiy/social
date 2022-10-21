import {initializeApp} from 'firebase/app'
import { getDatabase } from 'firebase/database';


  export default function StartFirebase () {
const firebaseConfig = {
    apiKey: "AIzaSyAlUsd47zNyvy0THUueZp4f-bC7J-c-dkU",
    authDomain: "social1app.firebaseapp.com",
    databaseURL: "https://social1app-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "social1app",
    storageBucket: "social1app.appspot.com",
    messagingSenderId: "538488379088",
    appId: "1:538488379088:web:ed18457a7045a6d8ccf0d5"
  };
 
  const app = initializeApp(firebaseConfig);
 return getDatabase(app);
  }