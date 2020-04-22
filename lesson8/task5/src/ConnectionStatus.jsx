import React, {Component} from 'react';

class ConnectionStatus extends Component {
    constructor(props){
        super(props);
        this.state = {
            status: 'online',
        }
    }

    updateStatus = e => {
        this.setState({
            status: e.type,
        });
    }

    componentDidMount() {
        window.addEventListener('online', this.updateStatus);
        window.addEventListener('offline', this.updateStatus);
    }

    componentWillUnmount() {
        window.removeEventListener('online', this.updateStatus);
        window.removeEventListener('offline', this.updateStatus);
    }

    setOfflineClass = status => 
        `status ${status === 'offline' ? 
            'status_offline' : ''}`;

    render() {
        return(
            <div className={this.setOfflineClass(this.state.status)}>
                {this.state.status}
            </div>
        );
    }

}

export default ConnectionStatus;