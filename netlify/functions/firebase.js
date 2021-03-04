const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyBP_qYQBNYiwt_g92JM6j7ha4iYrykZLT8",
  authDomain: "kiei-451-2021-winter-thur.firebaseapp.com",
  projectId: "kiei-451-2021-winter-thur",
  storageBucket: "kiei-451-2021-winter-thur.appspot.com",
  messagingSenderId: "1031905066899",
  appId: "1:1031905066899:web:0c7fec1bb85122637b7266"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase