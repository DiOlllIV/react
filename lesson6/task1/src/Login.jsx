import React from 'react';

const Login = ({forLogIn}) => {
    return (
        <button className="btn login" 
        onClick={forLogIn}>
            Login
        </button>
    );
};

export default Login;