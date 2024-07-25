import React, { useContext } from 'react';
import AppContext from '../context/AppContext'; // Ensure correct import path

const Profile = () => {
    const { user } = useContext(AppContext);

    if (!user) {
        return <p>No user found.......Please login</p>;
    }

    return (
        <div>
            <h2>Profile</h2>
            <span>Welcome....</span>
            <p>Username: {user.userName}</p>
            <p>Password: {user.password}</p>
        </div>
    );
};

export default Profile;
