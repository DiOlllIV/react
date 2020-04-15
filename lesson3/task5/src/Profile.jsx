import React from 'react';
import UserInfo from './UserInfo';

const user = {
    firstName: 'John',
    lastName: 'Doe',
    birthDate: '1991-01-17T11:11:11.819Z',
    birthPlace: 'London'
};

const Profile = () => {
    return (
        <UserInfo userData={user} />
    );
};

export default Profile;