import React from 'react';

import './Drawer.css'
import {IconButton} from "@material-ui/core";
import Icon from "@material-ui/core/Icon";

export default class Drawer extends React.Component{
    
    constructor(props) {
        super(props)

        this.menu = [
            {
                iconName: "event",
                label: "Meetings",
                enabled:true
            },
            {
                iconName: "people",
                label: "Users",
                enabled:false
            },
            {
                iconName: "dashboard",
                label: "Boards",
                enabled:false
            }
        ]

        this.state = {
            selected: 0
        }
    }

    handleItemClick(pos){
        console.log(pos)
        this.setState({selected:pos})
    }

    render(){
        return(
            <div className="drawer">
                {
                    this.menu.map((menuItem , key)=>
                        <DrawerIcon iconName={menuItem.iconName}
                                    label={menuItem.label}
                                    onClick={(pos) => this.handleItemClick(pos)}
                                    selected={key === this.state.selected}
                                    enabled={menuItem.enabled}
                                    position={key}/>
                        )
                }
            </div>
        );
    }
}

const DrawerIcon = ({selected,
                        iconName,
                        label,
                        onClick,
                        position,
                        enabled}) =>{

    const style = {
        selectedTextStyle:{
            backgroundColor: "#ff534b",
            borderRadius: "4px",
            color: "#ffffff"
        }
    }
    return (
        <div style={{display:'flex',cursor:"pointer"}} onClick={ enabled? () => onClick(position):()=>{}}>
            <IconButton className="drawerIcon">
                <Icon color={selected ? "secondary" : "disabled"}>{iconName}</Icon>
            </IconButton>
            <p className="menuItemLabel" style={selected?style.selectedTextStyle:{}}>{label}</p>
        </div>
    )
}

