import React, {Component} from 'react';
import { Button } from '@material-ui/core';
import { auth, Providers } from '../../config/firebase'
import { IResultObj } from '../pages/Login'

interface IGoogleLoginButtonProps {
  signInCallback: (returnObj: IResultObj) => void
}

class GoogleLoginButton extends Component<IGoogleLoginButtonProps, {}> {

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
        onClick={this.signInGoogle}>
        Google Login
      </Button>
    );
  }
}

export default GoogleLoginButton
