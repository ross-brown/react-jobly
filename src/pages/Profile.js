import React from "react";

import ProfileForm from "./ProfileForm";

function Profile({ editProfile }) {

  return (
    <div className="Profile">
      <h1>Profile</h1>
      <ProfileForm editProfile={editProfile} />
    </div>
  );
}

export default Profile;
