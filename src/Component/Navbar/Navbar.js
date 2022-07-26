import React, { useContext } from "react";
import "./Navbar.css";
import { BiSearch } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillChatFill } from "react-icons/bs";
import { GrNotification } from "react-icons/gr";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="navbarContainer">
      <div className="navbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">My Book</span>
        </Link>
      </div>
      <div className="navbarCenter">
        <div className="searchBar">
          <BiSearch className="searchIcon"></BiSearch>
          <input
            placeholder="Search for anything on My Book"
            className="searchInput"
          />
        </div>
      </div>
      <div className="navbarRight">
        <div className="navbarLinks">
          <span className="navbarLink">Homepage</span>
          <span className="navbarLink">Timeline</span>
        </div>
        <div className="navbarIcons">
          <div className="navbarIconItem">
            <BsFillPersonFill></BsFillPersonFill>
            <span className="navbarIconBadge">1</span>
          </div>
          <div className="navbarIconItem">
            <BsFillChatFill></BsFillChatFill>
            <span className="navbarIconBadge">3</span>
          </div>
          <div className="navbarIconItem">
            <GrNotification></GrNotification>
            <span className="navbarIconBadge">2</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture ? PF + user.profilePicture : PF + "avatar.png"
            }
            className="navbarimg"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
