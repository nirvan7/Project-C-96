import firebase from 'firebase';

export const firebaseConfig = {
  apiKey: "AIzaSyD33-2cenquY5Uajv_qhNyVYsm8lxetHm0",
  authDomain: "story-telling-5ab44.firebaseapp.com",
  databaseURL: "https://story-telling-5ab44-default-rtdb.firebaseio.com",
  projectId: "story-telling-5ab44",
  storageBucket: "story-telling-5ab44.appspot.com",
  messagingSenderId: "210525815352",
  appId: "1:210525815352:web:192e8780532af545c11ccd",
  measurementId: "G-HVCLHKG2FQ"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export default  firebase.database()