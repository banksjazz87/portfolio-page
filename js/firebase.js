// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDf9UQGnf27RJZIqdQ43a2pmhXn0KXhBng",
    authDomain: "portfolio-page-7bfba.firebaseapp.com",
    projectId: "portfolio-page-7bfba",
    storageBucket: "portfolio-page-7bfba.appspot.com",
    messagingSenderId: "809843335556",
    appId: "1:809843335556:web:1d1633bdba79c7a4e57dd1",
    measurementId: "G-D9M0DEP7EJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);