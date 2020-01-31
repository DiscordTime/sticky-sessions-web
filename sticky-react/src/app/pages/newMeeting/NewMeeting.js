import React, {Component} from 'react';

//Css
import './NewMeeting.css';
import Container from "../../components/container/Container";

import {
    withStyles

} from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import MenuItem from "@material-ui/core/MenuItem";

import Header from "../../components/header/Header";
import withFirebaseAuth from "react-with-firebase-auth";
import fire from "../../constants/firebase";

const firebaseAppAuth = fire.firebaseAuth;
const providers = fire.providers;

class NewMeeting extends Component {

    constructor(props) {
        super(props);

        this.title = "New Meeting";

        this.ranges = [
            {
                value: '0-20',
                label: '0 to 20',
            },
            {
                value: '21-50',
                label: '21 to 50',
            },
            {
                value: '51-100',
                label: '51 to 100',
            }
        ];

    }

   /* async componentWillReceiveProps(nextProps, nextContext) {
        this.user = nextProps.user
        const meetings = await getMeetings(this.user)

        console.log(meetings)
    }
*/
    render() {
        return(
            <div className="containerRoot">
                <Header firebaseAuth={firebaseAppAuth}/>
                <Container title={this.title}>
                    <div className="formWrapper">
                       <div>
                           <FormBox title="INFO">

                               <TextInput
                                   label="Name"
                                   variant="outlined"
                               />

                               <TextInput
                                   label="Place"
                                   variant="outlined"
                               />

                               <div style={{display:'flex'}}>
                                   <TextInput
                                       label="Name"
                                       variant="outlined"
                                       style={{marginRight:'10px'}}
                                   />
                                   <TextInput
                                       style={{marginLeft:'10px'}}
                                       label="Name"
                                       type="date"
                                       variant="outlined"
                                   />
                               </div>

                               <TextInput
                                   label="Description"
                                   variant="outlined"
                                   multiline
                               />
                           </FormBox>
                           <FormBox title="BOARDS & SESSIONS">
                               <TextInput
                                   select
                                   variant="outlined"
                                   label="With Select"
                                   onChange={(e)=>console.log(e) }
                                   value={this.ranges}>
                                   {
                                       this.ranges.map(option => (
                                           <MenuItem key={option.value}>
                                               {option.label}
                                           </MenuItem>
                                       ))
                                   }
                               </TextInput>
                           </FormBox>
                       </div>
                        <div style={{paddingLeft:'23px'}}>
                            <FormBox title="PARTICIPANTS">
                                <TextInput
                                    label="Email"
                                    variant="outlined"
                                />
                            </FormBox>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

class FormBox extends Component {

    constructor(props) {
        super(props)

        this.title = props.title;
    }

    render() {
        return (
            <div className="formBoxContainer">
                <p className="formBoxTitle">{this.title}</p>
                <div className="formBoxChildWrapper">
                    {
                        this.props.children
                    }
                </div>
            </div>
        );
    }
}

const TextInput = withStyles({
    root: {
        width:'100%',
        marginBottom:'25px',
        '& label.Mui-focused': {
            color: '#ff534b',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                border:'solid 2px #919191'
            },
            '&:hover fieldset': {
                borderColor: 'gray',
            },
            '&.Mui-focused fieldset': {
                border:'solid 2px #ff534b',

            },
        },
    },
})(TextField);

export default withFirebaseAuth({
    providers,
    firebaseAppAuth
})(NewMeeting);
