import React from 'react';
//Material-UI
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    Menu
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Icon from '@material-ui/core/Icon';

import * as ROUTES from '../../constants/routes';

//CSS
import './Header.css'
//logo
import logo from '../../../assets/logo_name.svg'
import {Link} from "react-router-dom";

class Header extends React.Component {

    constructor(props) {
        super(props)
        
        this.userDialogOpen = false
        this.handleUserMenuClick = this.handleUserMenuClick.bind(this)
        this.handleQuitBtnClick = this.handleQuitBtnClick.bind(this)
  
        this.menu = [
            {
                title:"Sign out",
                onClick: this.handleQuitBtnClick        
            }
        ]
    }

    componentWillReceiveProps(props){
        this.firebaseAuth = props.firebaseAuth
        this.user = this.firebaseAuth.currentUser
    }

    handleUserMenuClick(open){
        this.userDialogOpen = open
    }

    handleQuitBtnClick() {
        this.firebaseAuth.signOut()
    }
    
    render(){

        return(
            <div>
                {
                this.user && (
                    <AppBar 
                        style={{boxShadow:'0 0 4px 0 rgba(0, 0, 0, 0.16)',
                                zIndex:'1400',
                                position:'relative'}}
                        position="static" 
                        color="default">
                        <Toolbar>
                            <IconButton 
                                onClick={this.toggleDrawer} 
                                edge="start" 
                                aria-label="Menu" 
                                color="secondary">
                                <MenuIcon/>
                            </IconButton>
                            <img 
                                src={logo} 
                                alt="Easy Prefix" 
                                style={{marginLeft:'25px'}}/>

                            <div style={{marginLeft:'auto',display:"flex",alignItems:'center'}} >
                                <Link style={{textDecoration:'None'}} to={ROUTES.NEW_MEETING}>
                                    <Button style={{
                                        width:'179px',
                                        height:'48px',
                                        boxShadow:'0 0 2px 0 rgba(0, 0, 0, 0.12)',
                                        backgroundColor:'#ff534b',
                                        textTransform: 'none',
                                        marginRight:'15px',
                                        borderRadius:'0',
                                        color:'#ffffff',
                                        display:'flex'
                                    }}>
                                        <Icon color="white">add</Icon>
                                        New session
                                    </Button>
                                </Link>
                                <UserMenu user={this.user} menu={this.menu}/>
                            </div>
                        </Toolbar>
                    </AppBar>
                )
                }
            </div>
        );
    }
}

const UserMenu = (props) => {
    const {user,menu} = props
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl)

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <div>
            <Button
                aria-label="Account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                disableTouchRipple={true}
                size="medium"
                onClick={(evt)=> setAnchorEl(evt.currentTarget)}
                >
                    <FirstLetterIcon 
                        name={user.displayName} 
                        color="#ff534b" 
                        textColor="white"/>
                    <Typography 
                        variant="subtitle2" 
                        style={{margin:' 0 10px'}}>
                        {user.displayName}
                    </Typography>
                    <Icon>arrow_drop_down</Icon>
            </Button>
            <Menu 
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            open={open}
            onClose={() => handleClose()}
            >       
                {
                    menu && (
                        menu.map(item => 
                            <MenuItem onClick={item.onClick}>
                                {item.title}
                            </MenuItem>)
                    )
                }
                
            </Menu>
        </div>
            
    )
}

const FirstLetterIcon = (props) =>{
    const {name,color,textColor} = props
    
    return(
        <div style={{
            backgroundColor:color,
            width:'30px',
            height:'30px',
            borderRadius:'50%',
            textAlign:'center',
            verticalAlign:'middle'}}>
            {name &&(
                <p style={{
                    margin:0,
                    lineHeight:'30px',
                    color:textColor
                }}> {name.split("")[0]}</p>
            )}
        </div>
    )
}
export default Header;