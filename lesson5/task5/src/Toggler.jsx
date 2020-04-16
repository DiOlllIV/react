import React, { Component } from 'react';

class Toggler extends Component {
    constructor(props){
        super(props);

        this.state ={
            value: 'Off',
            click: false,
        }
    }

    setValue = () => {

        if(!this.state.click){
            this.state.click = true;
            this.setState({
                value: this.state.value = 'On',
            });
        }

        else if(this.state.click){
            this.state.click = false;
            this.setState({
                value: this.state.value = 'Off',
            });
        }
    }

    render() {
        return(
            <button className="toggler"
                onClick={() => this.setValue()}
            >
                {this.state.value}
            </button>
        );
    }
}

export default Toggler;