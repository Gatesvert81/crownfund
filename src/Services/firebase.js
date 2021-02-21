import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDZN9Jujj-lcXJdNtp2Wv6KGvAZKWyRhDI",
    authDomain: "crowdfund-26876.firebaseapp.com",
    projectId: "crowdfund-26876",
    storageBucket: "crowdfund-26876.appspot.com",
    messagingSenderId: "1033915997303",
    appId: "1:1033915997303:web:f7c59de8b79c040741fa72"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

  export const db = firebase.firestore()

  export default firebase