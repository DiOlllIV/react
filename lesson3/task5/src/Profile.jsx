import React from 'react';

const monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const getDateBirth = date => {
    const day = new Date(date).getDate();
    const year = new Date(date).getYear();
    const month = monthList[new Date(date).getMonth()];

    return `${day} ${month} ${year}`;
};

const Profile = (userData) => {
    return (
        <div className="profile">
            <span className="profile__name">
                {`${userData.user.firstName} ${userData.user.lastName}.`}
            </span>
            <span className="profile__birth">
                {`Was born ${getDateBirth(userData.user.birthDate)}
                    in ${userData.user.birthPlace}.`}
            </span>
        </div>
    );
};

export default Profile;