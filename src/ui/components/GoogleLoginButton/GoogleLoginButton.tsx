import React from 'react';
import { Button } from '@material-ui/core';
// Firebase Auth
import FirebaseAuth from '../../../config/firebase_auth'
// css files
import './GoogleLoginButton.css'
// Assets
import logoGoogle from '../../../assets/google.svg';

import { Nullable, UserRequest } from '../../pages/Login/Login'

import { Logger } from '../../../utils/Logger'

interface IGoogleLoginButtonProps {
  signInCallback: (returnObj: Nullable<UserRequest>) => void
}

class GoogleLoginButton extends React.Component<IGoogleLoginButtonProps, {}> {

  static TAG = GoogleLoginButton.name

  async signInGoogle() {
    const firebaseAuth = new FirebaseAuth()
    var user: Nullable<UserRequest>
    try {
      user = await firebaseAuth.signInGoogle()
    } catch(error) {
      user = undefined
      Logger.log(GoogleLoginButton.TAG, '[Error]: ' + error)
    }
    this.props.signInCallback(user)
  }

  render() {
    return(
      <Button 
        variant="contained"
        className="btnLogin"
        onClick={this.signInGoogle.bind(this)}>
        <img className="btnImg" src={logoGoogle} alt="Login with Google" />
        <div className="btnText">
          Log In with Gmail
        </div>
      </Button>
    );
  }
}

export default GoogleLoginButton
