import React, {Component} from 'react';
import Drawer from "../../components/drawer/Drawer";

class Meetings extends Component {

    render() {
        return(
            <div class="MeetingsRoot" style={{width:'100%',height:'100vh'}}>
                <iframe  width="100%" height="100%" style={{marginTop:'-5px'}}  src={process.env.REACT_APP_HOME_URL} title="Sticky sessions"/>
            </div>
        );
    }
}

export default Meetings;
