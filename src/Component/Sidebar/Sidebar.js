import React from "react";
import "./Sidebar.css";
import { MdRssFeed } from "react-icons/md";
import { BsFillChatFill } from "react-icons/bs";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { MdGroups } from "react-icons/md";
import { IoBookmarkSharp } from "react-icons/io5";
import { BsQuestionSquare } from "react-icons/bs";
import { IoFolderOutline } from "react-icons/io5";
import { BsCalendarEvent } from "react-icons/bs";
import { MdCastForEducation } from "react-icons/md";

import { users } from "../../fakeData";
import Friends from "../Friends/Friends";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <MdRssFeed className="sidebarIcon"></MdRssFeed>
            <span className="sidebarListItemText">NewsFeed</span>
          </li>
          <li className="sidebarListItem">
            <BsFillChatFill className="sidebarIcon"></BsFillChatFill>
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <BsFillCameraVideoFill className="sidebarIcon"></BsFillCameraVideoFill>
            <span className="sidebarListItemText">Video</span>
          </li>
          <li className="sidebarListItem">
            <MdGroups className="sidebarIcon"></MdGroups>
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <IoBookmarkSharp className="sidebarIcon"></IoBookmarkSharp>
            <span className="sidebarListItemText">Bookmark</span>
          </li>
          <li className="sidebarListItem">
            <BsQuestionSquare className="sidebarIcon"></BsQuestionSquare>
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <IoBookmarkSharp className="sidebarIcon"></IoBookmarkSharp>
            <span className="sidebarListItemText">Bookmark</span>
          </li>
          <li className="sidebarListItem">
            <IoFolderOutline className="sidebarIcon"></IoFolderOutline>
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <BsCalendarEvent className="sidebarIcon"></BsCalendarEvent>
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <MdCastForEducation className="sidebarIcon"></MdCastForEducation>
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {users.map((u) => (
            <Friends key={u.id} user={u}></Friends>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
