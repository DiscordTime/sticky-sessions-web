import React, {Component} from 'react';

//Components
import * as ROUTES from '../../constants/routes';

import Header from '../../components/header/Header'
//Css
import './Home.css';
//Firebase
import fire from '../../constants/firebase';
import withFirebaseAuth from 'react-with-firebase-auth';
import Drawer from "../../components/drawer/Drawer";

const firebaseAppAuth = fire.firebaseAuth;
const providers = fire.providers;

class Home extends Component {
    componentWillReceiveProps(props){
        if(props.user == null) {
            window.location.replace(ROUTES.SIGN_IN)
        }
        this.user = props.user
        
    }

    render() {
        return(
            <div className="homeRoot">
                <Header user={this.user}/>
                <div className="bodyWrapper">
                    <iframe  width="100%" height="100%" style={{marginTop:'-5px'}}  src={process.env.REACT_APP_HOME_URL} title="Sticky sessions"/>
                    <Drawer/>
                </div>
            </div>
        );
    }
}

export default withFirebaseAuth({
    providers,
    firebaseAppAuth
})(Home);
