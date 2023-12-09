import React from "react";
import logo from "../../assets/logo.png";
import "./Profilepic.css";

const ProfilePic = () => {
  return (
    <div className="flex items-center justify-center mb-6">
      <div className="profilepic flex items-center justify-center">
        <img src={logo} />
        <div className="count flex items-center justify-center">4</div>
      </div>
    </div>
  );
};

export default ProfilePic;
