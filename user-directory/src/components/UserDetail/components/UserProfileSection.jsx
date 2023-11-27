import React from "react";
import "./UserProfileSection.css";

const UserProfileSection = ({ user }) => {
  return (
    <>
      <h3 className='header-userprofile'>Profile Page</h3>
      <div className='user-profile-card'>
        <div className='user-profile-details'>
          <div className='left-section'>
            <p>{user.name}</p>
            <p>{user.username}</p>
            <p>{user.company.catchPhrase}</p>
          </div>
          <div className='right-section'>
            <p>
              {user.address.street}, {user.address.suite}, {user.address.city},{" "}
              {user.address.zipcode}
            </p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfileSection;
