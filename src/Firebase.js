import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCHjddtOtyXZvwkGBiVLNr5H5rWwO8881M",
    authDomain: "somativaweb-cd3b8.firebaseapp.com",
    projectId: "somativaweb-cd3b8",
    storageBucket: "somativaweb-cd3b8.appspot.com",
    messagingSenderId: "435761530686",
    appId: "1:435761530686:web:06d03b707accfa307f4e6f"
};

if (!firebase.apps.length) {
  console.log('Conectando ao Firebase');
    firebase.initializeApp(firebaseConfig);
  }

export default firebase;