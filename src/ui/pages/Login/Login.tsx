import React from 'react';

import { Container } from '@material-ui/core';
import GoogleLoginButton from '../../components/GoogleLoginButton/GoogleLoginButton'

//Assets
import logo from '../../../assets/logo.svg'
//Css
import './Login.css';
export interface IResultObj {
  success: Boolean,
}

interface LoginProps {
  loginCallback: (returnObj: IResultObj) => void
}

class Login extends React.Component<LoginProps, {}> {

  signInCallback(result: IResultObj) {
    console.log('Login:', result)
    if (result.success) {
      console.log('SUCCESS')
    }

    if (!this.props) {
        console.log('props undefined')
        return
    }
    if (this.props.loginCallback)
        this.props.loginCallback(result)
  }

  render() {
    return(
      <div className="loginRoot">
      <Container className="box" maxWidth="sm">
        <img className="logoImg" src={logo} alt="Logo" />
        <div className="textAppName">
          Sticky Sessions
        </div>
        <GoogleLoginButton signInCallback={this.signInCallback.bind(this)} />
        <span className="textVersion">
          v 00.00.02
        </span>
      </Container>
      </div>
    );
  }
}

export default Login
