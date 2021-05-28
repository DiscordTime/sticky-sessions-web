// Firebase
import firebase from 'firebase/app'
import { auth, Providers } from './firebase'
import { IResultObj } from '../ui/pages/Login/Login'

interface UserRequest extends IResultObj {
  name: string,
  email: string,
  idToken: string,
}

class FirebaseAuth {
  mapRequestToUser(result: firebase.auth.UserCredential): IResultObj {
    console.log('mapRequestToUser', result)
    if (result === null || !result.user) {
      return { success: false }
    }

    const oCred = (result.credential as firebase.auth.OAuthCredential) || null
    if (oCred === null)
      return { success: false }

    const user: UserRequest = {
      success: true,
      name: result.user.displayName || "",
      email: result.user.email || "",
      idToken: oCred.idToken || ""
    }
    return user
  }

  async signInGoogle() {
    try {
      const result = await auth.signInWithPopup(Providers.google)
      console.log('GoogleLoginButton result:', result)
      return this.mapRequestToUser(result)
    } catch(error) {
      console.log('GoogleLoginButton error:', error)
      throw error
    }
  }
}

export default FirebaseAuth


