
import * as firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDYAloLtp9QVw5gIEwCeD8ZROz_ls1vf3k",
  authDomain: "fir-auth-a9a0a.firebaseapp.com",
  projectId: "fir-auth-a9a0a",
  storageBucket: "fir-auth-a9a0a.appspot.com",
  messagingSenderId: "380035219652",
  appId: "1:380035219652:web:70de5f66a92c14c3290991"
};
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };