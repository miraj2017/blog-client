import React from "react";
import "./Friends.css";

const Friends = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="sidebarFriend">
      <img className="sidebarFriendImg" src={PF + user.profilePicture} alt="" />
      <span className="sidebarFriendName">{user.userName}</span>
    </li>
  );
};

export default Friends;
