import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDw5idTdYn2ZReIw76l9m6HJRHBVb_gZqA",
  authDomain: "whatsapp-clone-da722.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-da722.firebaseio.com",
  projectId: "whatsapp-clone-da722",
  storageBucket: "whatsapp-clone-da722.appspot.com",
  messagingSenderId: "621939013896",
  appId: "1:621939013896:web:7a125b8c4c958a90f994bd",
  measurementId: "G-9JGWH8XQWB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider}
export default db