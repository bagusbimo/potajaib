// Initialize Firebase
import Firebase from 'firebase';

let config = {
    apiKey: "AIzaSyDwaS7fLwySrRE9joxX0IWlV_aZSI6Od7w",
    authDomain: "magitot-beta1.firebaseapp.com",
    databaseURL: "https://magitot-beta1.firebaseio.com",
    projectId: "magitot-beta1",
    storageBucket: "magitot-beta1.appspot.com",
    messagingSenderId: "409535784516"
  };
  
  let app = Firebase.initializeApp(config);
  let db = app.database();
  let potRef = db.ref('pots');
  
  export default potRef;