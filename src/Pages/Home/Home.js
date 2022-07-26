import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import Newsfeed from "../../Component/Newsfeed/Newsfeed";
import Rightbar from "../../Component/Rightbar/Rightbar";
import Sidebar from "../../Component/Sidebar/Sidebar";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="homeContainer">
        <Sidebar></Sidebar>
        <Newsfeed></Newsfeed>
        <Rightbar></Rightbar>
      </div>
    </>
  );
};

export default Home;
