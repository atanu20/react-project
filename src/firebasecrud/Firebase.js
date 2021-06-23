
import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAm5GQHoP0pejqtzQGt5Wg0mFoZ0xpVd2Q",
    authDomain: "fir-crud-2b1f0.firebaseapp.com",
    projectId: "fir-crud-2b1f0",
    storageBucket: "fir-crud-2b1f0.appspot.com",
    messagingSenderId: "930316626664",
    appId: "1:930316626664:web:cc4b50d2141cd18030375d"
  };
  firebase.initializeApp(firebaseConfig);
  const db=firebase.firestore();

  export {db};