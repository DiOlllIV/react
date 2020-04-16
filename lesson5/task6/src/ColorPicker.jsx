import React, { Component } from 'react';

class ColorPicker extends Component{
    constructor(props){
        super(props);

        this.state = {
            text: '',
        }
    }

    checkColor = (value) => {
        this.setState({
            text: this.state.text = value,
        })
    }

    resetText = () => {
        this.setState({
            text: this.state.text = '',
        })
    }

    render() {
        return(
            <>
                <div className="picker__title">
                     {this.state.text}
                </div>
                <div>
                    <button 
                        className="picker__button picker__button_coral"
                        onMouseEnter={() => this.checkColor('Coral')}
                        onMouseOut={this.resetText}>   
                    </button>
                    <button 
                        className="picker__button picker__button_aqua"
                        onMouseEnter={() => this.checkColor('Aqua')}
                        onMouseOut={this.resetText}>
                    </button>
                    <button 
                        className="picker__button picker__button_bisque"
                        onMouseEnter={() => this.checkColor('Bisque')}
                        onMouseOut={this.resetText}>
                    </button>
                </div>

            </>
        );
    }
}

export default ColorPicker;
