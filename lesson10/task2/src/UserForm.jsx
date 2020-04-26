import React from 'react';

const UserForm = ({userData, handleChange}) => {

    return(
        <form className="user-form">
            <input
                onChange={handleChange}
                value={userData.firstName}
                type="text"
                name="firstName"
                className="user-form__input"
            />
            <input
                onChange={handleChange}
                value={userData.lastName}
                type="text"
                name="lastName"
                className="user-form__input"
            />
        </form>
    );
};


export default UserForm;