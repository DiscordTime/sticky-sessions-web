import React, {Component} from 'react';

//Css
import './Container.css';

class Container extends Component {

    constructor(props) {
        super(props);

        this.title = props.title
    }

    render() {
        return(
            <div className="containerRoot">
                <div className="containerWrapper">
                    <p className="title">{this.title}</p>
                    <div className="underline"/>
                    <div className="childWrapper">
                        {
                            this.props.children
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Container