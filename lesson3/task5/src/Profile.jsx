import React from 'react';

const monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const userData = {
    firstName: 'John',
    lastName: 'Doe',
    birthDate: '1991-01-17T11:11:11.819Z',
    birthPlace: 'London'
};

const getDateBirth = date => {
    const day = new Date(date).getDate();
    const year = new Date(date).getYear();
    const month = monthList[new Date(date).getMonth()];

    return `${day} ${month} ${year}`;
};

const Profile = () => {
    return (
        <div className="profile">
            <span className="profile__name">
                {`${userData.firstName} ${userData.lastName}.`}
            </span>
            <span className="profile__birth">
                {`Was born ${getDateBirth(userData.birthDate)}
                    in ${userData.birthPlace}.`}
            </span>
        </div>
    );
};

export default Profile