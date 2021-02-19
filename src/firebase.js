 // Your web app's Firebase configuration
 import firebase from 'firebase';

 var firebaseConfig = {
    apiKey: "AIzaSyAab_MjqO2WQK7K5Qq5UwzuPzLl6f1FdIo",
    authDomain: "login-f18ae.firebaseapp.com",
    projectId: "login-f18ae",
    storageBucket: "login-f18ae.appspot.com",
    messagingSenderId: "359329755785",
    appId: "1:359329755785:web:f815fb0900807d72184c58"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;