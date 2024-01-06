import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAAx6ZEeBO_fOQZpby7Miyfh7Lsz1Y0ltE",
    authDomain: "codeswear-f73a6.firebaseapp.com",
    projectId: "codeswear-f73a6",
    storageBucket: "codeswear-f73a6.appspot.com",
    messagingSenderId: "588147540910",
    appId: "1:588147540910:web:a1fd3a347ec2b1ba19fe3f",
    measurementId: "G-GRGCYFHDHH"
  };

  firebase.initializeApp(firebaseConfig);
  let auth = firebase.auth();
  let provider = new firebase.auth.GoogleAuthProvider();
  export{auth,provider}