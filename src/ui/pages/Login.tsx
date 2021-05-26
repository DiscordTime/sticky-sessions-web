import React, {Component} from 'react';

//Components
//import ButtonGoogleLogin from '../../components/buttonLogin/ButtonGoogleLogin';
//import * as ROUTES from '../../constants/routes';
//import * as SETTINGS from '../../constants/settings'
//Assets
//import logo from '../../../assets/logo.svg';
//Css
//import './Login.css';
import { Container } from '@material-ui/core';
import GoogleLoginButton from '../components/GoogleLoginButton'

export interface IResultObj {
  success: Boolean,
  user?: Object
}

interface LoginProps {
  loginCallback: (returnObj: IResultObj) => void
}

class Login extends Component<LoginProps, {}> {

  constructor(props: LoginProps) {
    super(props)
    console.log('constructor props', props)
    console.log('this constructor props', this.props)
  }

  signInCallback(result: IResultObj) {
    console.log('Login:', result)
    if (result.success) {
      console.log('SUCCESS')
    }

    console.log('props:', this.props)
    if (!this.props) {
        console.log('props undefined')
        return
    }
    if (this.props.loginCallback)
        this.props.loginCallback(result)
  }

  render() {
    return(
      <Container maxWidth="sm">
        <GoogleLoginButton signInCallback={this.signInCallback.bind(this)} />
      </Container>
    );
  }
}

export default Login
