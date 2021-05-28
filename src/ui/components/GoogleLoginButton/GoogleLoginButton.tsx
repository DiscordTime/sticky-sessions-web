import React from 'react';
import { Button } from '@material-ui/core';
// Firebase Auth
import FirebaseAuth from '../../../config/firebase_auth'
// css files
import './GoogleLoginButton.css'
// Assets
import logoGoogle from '../../../assets/google.svg';

import { IResultObj } from '../../pages/Login/Login'


interface IGoogleLoginButtonProps {
  signInCallback: (returnObj: IResultObj) => void
}

class GoogleLoginButton extends React.Component<IGoogleLoginButtonProps, {}> {

  constructor(props: IGoogleLoginButtonProps) {
    super(props)
    this.state = {
      signInCallback: props.signInCallback
    }
  }

  async signInGoogle() {
    const firebaseAuth = new FirebaseAuth()
    let result: IResultObj
    try {
      const user = await firebaseAuth.signInGoogle()
      result = user
    } catch(error) {
      result = { success: false }
    }
    this.props.signInCallback(result)
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
