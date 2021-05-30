// Firebase
import firebase from 'firebase/app'
import { auth, Providers } from './firebase'
import { UserRequest } from '../ui/pages/Login/Login'
import { Logger } from '../utils/Logger'

class FirebaseAuth {

  static TAG = FirebaseAuth.name

  mapRequestToUser(result: firebase.auth.UserCredential): UserRequest {
    if (result === null || !result.user) {
      throw new Error('Could not get user')
    }

    const oCred = (result.credential as firebase.auth.OAuthCredential) || null
    if (oCred === null)
      throw new Error('Could not get credentials')

    const user: UserRequest = {
      name: result.user.displayName || '',
      email: result.user.email || '',
      idToken: oCred.idToken || ''
    }
    return user
  }

  async signInGoogle() {
    try {
      const result = await auth.signInWithPopup(Providers.google)
      return this.mapRequestToUser(result)
    } catch(error) {
      Logger.log(FirebaseAuth.TAG, '[Error] ' + error)
      throw error
    }
  }
}

export default FirebaseAuth


