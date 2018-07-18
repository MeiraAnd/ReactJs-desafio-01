import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import "./style.scss";

class Header extends Component {
    render() {
        return (
            <Fragment>
                <header>
                    <h1>RocketBook</h1>
                </header>
            </Fragment>
        );
    }
}

render(<Header />, document.getElementById('app'));