import React, {Component} from 'react';
import moment from 'moment';

const formatDate = offset => 
    moment().utcOffset(offset).format('LTS');

class Clock extends Component {
    constructor (props){
        super(props)
        this.state = {
            time: formatDate(props.offset),
            city: props.location
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                time: formatDate(this.props.offset) 
            })
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
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


