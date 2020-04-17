import React from 'react';

const Logout = ({forLogOut}) => {
    return (
        <button className="btn logout" 
        onClick={forLogOut}>
            Logout
        </button>
    );
};

export default Logout;

