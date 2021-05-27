import React from 'react';
import { Button } from '@material-ui/core';
// Firebase
import { auth, Providers } from '../../../config/firebase'
// css files
import './GoogleLoginButton.css'
// Assets
import logoGoogle from '../../../assets/google.svg';

import { IResultObj } from '../../pages/Login/Login'

interface IGoogleLoginButtonProps {
  signInCallback: (returnObj: IResultObj) => void
}

class GoogleLoginButton extends React.Component<IGoogleLoginButtonProps, {}> {

  signInCallback(returnObj: IResultObj) {
    if (this.props.signInCallback) {
      this.props.signInCallback(returnObj)
    }
  }

  signInGoogle = () => {
    let returnObj: IResultObj = { success: false }
    auth.signInWithPopup(Providers.google)
      .then((result) => {
        console.log('GoogleLoginButton result:', result)
        returnObj.success = true
        if (result.user)
          returnObj.user = result.user

        this.signInCallback(returnObj)
      }).catch((error) => {
        console.log('GoogleLoginButton error:', error)
        returnObj.success = false
        this.signInCallback(returnObj)
      })
  }

  render() {
    return(
      <Button 
        variant="contained"
        className="btnLogin"
        onClick={this.signInGoogle}>
        <img className="btnImg" src={logoGoogle} alt="Login with Google" />
        <div className="btnText">
          Log In with Gmail
        </div>
      </Button>
    );
  }
}

export default GoogleLoginButton
