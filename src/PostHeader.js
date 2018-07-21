import React, { Component, Fragment} from 'react';
import logo from './logo.png';

class PostHeader extends Component {
    render() {
        return (
         <Fragment>
            
            <div className="avatar">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className="name">
                <h2>{this.props.name}</h2>
            </div>
            <div className="date">
                há{this.props.date} min
            </div>
                
        </Fragment>
        );
    }
}

export default PostHeader;