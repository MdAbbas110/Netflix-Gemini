// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBpIXxRIIuXnQ67aGBTmWKuBwknjIH5bvA',
  authDomain: 'netflixgpt-d0eb7.firebaseapp.com',
  projectId: 'netflixgpt-d0eb7',
  storageBucket: 'netflixgpt-d0eb7.appspot.com',
  messagingSenderId: '851615586410',
  appId: '1:851615586410:web:8b014be69602ce0fc29213',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
