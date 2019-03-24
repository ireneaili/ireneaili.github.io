import React, { Component } from 'react';
import '../css/home.css';
import Squares from './squares';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {entry: true};
        this.switchOverlay = this.switchOverlay.bind(this);
    }

    switchOverlay() {
        this.setState({entry: false})
    }
    render() {
        var entry;
        entry = <div class="svg-wrapper">
                    <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
                        <rect class="shape" height="60" width="320" />
                    </svg>
                    <button type="button" className="text" onClick={() => this.switchOverlay()}>IRENE AI LI</button>
                </div>
        return (
            this.state.entry ? entry : <Squares />
        );
    }
}

export default Home;
