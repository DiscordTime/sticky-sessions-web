import React from 'react';
//Material-UI
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Icon from '@material-ui/core/Icon';

//logo
import logo from '../../../assets/logo_name.svg'


class Header extends React.Component {

    componentWillReceiveProps(props){
        this.user = props.user
    }

    handleQuit(){
        
    }
    
    render(){

        return(
            <div >

                {
                    this.user && (
                        <AppBar style={{boxShadow:'0 0 4px 0 rgba(0, 0, 0, 0.16)',zIndex:'1400',position:'absolute'}} position="static" color="default">
                            <Toolbar  >
                                <IconButton onClick={this.toggleDrawer} edge="start" aria-label="Menu" color="secondary">
                                    <MenuIcon />
                                </IconButton>
                                <img src={logo} alt="Easy Prefix" style={{marginLeft:'25px'}}/>
                                
                                <div style={{marginLeft:'auto'}} >
                                    <IconButton
                                        aria-label="Account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        color="inherit"
                                        size="medium"
                                        style={{borderRadius:'5%'}}>
                                        <FirstLetterIcon name={this.user.displayName} color="#ff534b" textColor="white"/>
                                        <Typography variant="subtitle2" style={{margin:' 0 10px'}} >{this.user.displayName}</Typography>
                                        <Icon>arrow_drop_down</Icon>
                                    </IconButton>
                                
                                </div>
                            </Toolbar>
                        </AppBar>
                    )
                }

            </div>
        );
    }
}

const FirstLetterIcon = (props) =>{
    const {name,color,textColor} = props
    
    return(
        <div style={{backgroundColor:color,width:'30px',height:'30px', borderRadius:'50%',textAlign:'center',verticalAlign:'middle'}}>
            {name &&(
                <p style={{margin:0,lineHeight:'30px',color:textColor}}>{name.split("")[0]}</p>
            )}
        </div>
    )
}
export default Header;