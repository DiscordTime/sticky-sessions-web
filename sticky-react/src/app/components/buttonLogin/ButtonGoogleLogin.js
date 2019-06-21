import React, {Component} from 'react';
//Components
import Button from '@material-ui/core/Button';
//Assets
import logoGoogle from '../../../assets/google.svg';
//Css
import './ButtonGoogleLogin.css';
//Firebase
import fire from '../../constants/firebase';
import withFirebaseAuth from 'react-with-firebase-auth';

const firebaseAppAuth = fire.firebaseAuth;
const providers = fire.providers;

class ButtonGoogleLogin extends Component {

    componentDidUpdate() {
        if (this.props.user){
            this.props.callbackFromParent(this.props.user);
        }
    }

    signInGoogle = () => {
        this.props.signInWithGoogle()
    }

    render(){
        return(
                <Button class="btnLogin"
                        type="button"
                        onClick={this.signInGoogle}>
                    <img class="btnImg" src={logoGoogle} alt="Login with Google"/>
                    <div class="btnText">
                        Log In with Gmail
                    </div>
                </Button>
        );
    }
}

export default withFirebaseAuth({
    providers,
    firebaseAppAuth
})(ButtonGoogleLogin);
