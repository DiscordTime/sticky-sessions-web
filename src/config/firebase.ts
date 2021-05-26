import firebase from 'firebase/app'
import 'firebase/auth'

import config from './config_keys'
// Initialize Firebase
const Firebase = firebase.initializeApp(config.firebase);

export const Providers = {
  google: new firebase.auth.GoogleAuthProvider()
}

export const auth = firebase.auth()
export default Firebase
