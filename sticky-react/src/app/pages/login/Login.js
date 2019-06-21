import React, {Component} from 'react';
//Components
import ButtonGoogleLogin from '../../components/buttonLogin/ButtonGoogleLogin';
import * as ROUTES from '../../constants/routes';
//Assets
import logo from '../../../assets/logo.svg';
//Css
import './Login.css';
import { Container } from '@material-ui/core';

const VALID_MAIL = "@cesar.org.br";

class Login extends Component {

    validUser = (user) => {
        if(user.email.endsWith(VALID_MAIL)) {
            window.location.replace(ROUTES.HOME)
        }
    }

    render() {
        return(
            <div class="loginRoot">
                <Container class="box" maxWidth="sm">
                    <img class="logoImg" src={logo} alt="Logo"/>
                    <div class="textAppName">
                        Sticky Sessions
                    </div>
                    <ButtonGoogleLogin
                        class="btnLogin"
                        callbackFromParent={this.validUser}/>
                    <span class="textVersion">
                        v 00.00.01
                    </span>
                </Container>
            </div>
        );
    }
}

export default Login;
