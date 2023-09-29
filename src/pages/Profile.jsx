import React, { useContext } from 'react';
import { Context } from '../main';
import Loader from '../component/Loader';
import "../styles/Profile.scss" // Import the SASS file

const Profile = () => {
  const { isAuthenticated, loading, user } = useContext(Context);

  return (
    <div className="profile-container">
      {loading ? (
        <div className="loader-container">
          <Loader />
        </div>
      ) : (
        <div className="profile-info">
          <h1>{user?.name}</h1>
          <p>{user?.email}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;

 