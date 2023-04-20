// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqtSAgUsTvqMHTyVjERqUXJtfP1uXp9xM",
  authDomain: "the-news-dragon-client-b6a4b.firebaseapp.com",
  projectId: "the-news-dragon-client-b6a4b",
  storageBucket: "the-news-dragon-client-b6a4b.appspot.com",
  messagingSenderId: "1053201719876",
  appId: "1:1053201719876:web:1095c6e743dd72e3779211"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;