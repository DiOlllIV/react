import React, {Component} from 'react';
import Greeting from './Greeting';

class Auth extends Component {
    constructor(props){
        super(props);

        this.state ={
            isLoggedIn: false,
        };
    }

    handleLogIn = () => {
        this.setState({
            isLoggedIn: true,
        });
    }

    handleLogOut= () => {
        this.setState({
            isLoggedIn: false,
        })
    }

    render(){
        return(
            <div className="panel">
                <Greeting  isLoggedIn={this.state.isLoggedIn} />
                <div>
                {(this.state.isLoggedIn) ?
                    (<button className="btn login" 
                    onClick={this.handleLogOut}>Logout</button>) :
                    (<button className="btn logout" 
                    onClick={this.handleLogIn}>Login</button>)
                }
                </div>
            </div>
        );
    }
}
export default Auth;