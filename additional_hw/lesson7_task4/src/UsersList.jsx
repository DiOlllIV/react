import React from 'react';
import User from './User';

const UsersList =({users}) => {
    return <ul>
                {users.map((user) => 
                    <User key={user.id} user={user} />
                )}
            </ul> 
};

export default UsersList;