import React from 'react';
import moment from 'moment';

const monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const getDateBirth = date => {
    const day = new Date(date).getDate();
    const year = new Date(date).getYear();
    const month = monthList[new Date(date).getMonth()];

    return `${day} ${month} ${year}`;
};

const formatDate = date => 
  moment(date).format("DD MMM YY");

const Profile = (props) => {
    return (
        <>
            <div className="profile__name">
                {`${props.userData.firstName} ${props.userData.lastName}`}
            </div>
            <div className="profile__birth">
                {`Was born ${formatDate(props.userData.birthDate)}
                    in ${props.userData.birthPlace}`}
            </div>
        </>
    );
};

export default Profile;