import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBxQ0w24GpNYvhpf5GlosKD4rgXdXIQNqI",
  authDomain: "workflow-3b9d0.firebaseapp.com",
  projectId: "workflow-3b9d0",
  storageBucket: "workflow-3b9d0.appspot.com",
  messagingSenderId: "889346606612",
  appId: "1:889346606612:web:2c0ec162f6af9beda1c901"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }