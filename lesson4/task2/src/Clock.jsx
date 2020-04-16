import React, {Component} from 'react';
import moment from 'moment';
import './clock.scss';

const formatDate = offset => 
    moment().utcOffset(offset).format('LTS');

class Clock extends Component {
    constructor (props){
        super(props)
        this.state = {
            time: formatDate(props.offset),
            city: props.location
        };
        
        setInterval(() => {
            this.setState({
                time: formatDate(props.offset) 
            })
        }, 1000);
    }

    render(){
        return (
            <div className="clock">
                <div className="clock__location">
                    {this.state.city}
                </div>
                <div className="clock__time">
                    {this.state.time}
                </div>
            </div>
        );
    }
};

export default Clock;


