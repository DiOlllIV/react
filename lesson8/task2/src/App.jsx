import React, { Component } from 'react';
import Clock from './Clock';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            visible: true,
        };
    }
    
    toggle = () => {
        this.setState({
            visible: !this.state.visible,
        });
    }

    render() {
        return (
            <div className="section">
                <button className="section__btn"
                onClick={this.toggle}>
                    Toggle
                </button>
                <div className="section__clock">{this.state.visible && <>
                    <Clock location={"London"} offset={0} />
                    <Clock location={"Paris"} offset={2} />
                    <Clock location={"Tokyo"} offset={9} /></>}
                </div>
            </div>
        );
    }
}

export default App;