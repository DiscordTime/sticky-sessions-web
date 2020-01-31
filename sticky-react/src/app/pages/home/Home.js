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
import {Link, Redirect, Route, Switch} from "react-router-dom";
import Meetings from "../meetings/Meetings";
import NewMeeting from "../newMeeting/NewMeeting";

const firebaseAppAuth = fire.firebaseAuth;
const providers = fire.providers;

class Home extends Component {

    componentWillReceiveProps(props){

        if(props.user == null) {
            window.location.replace(ROUTES.SIGN_IN)
        }

        this.user = props.user

        console.log(this.props.match.url+ROUTES.MEETINGS)
    }

    render() {
        return(
            <div className="homeRoot">
                <Header firebaseAuth={firebaseAppAuth}/>
                {/*<Redirect to={'/home/a' + ROUTES.MEETINGS} />*/}
                <div className="bodyWrapper">
                    <Route path={this.props.match.url + ROUTES.MEETINGS} render={ () => <Meetings/>}/>
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
