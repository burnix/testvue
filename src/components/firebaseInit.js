import firebase from 'firebase'
import 'firebase-admin'
import firebaseConfig from './firebaseConfig'
import { scrypt } from 'crypto';
const firebaseApp = firebase.initializeApp(firebaseConfig)
export default firebaseApp.firestore()