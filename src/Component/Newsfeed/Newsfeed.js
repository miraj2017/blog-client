import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Post from "../Post/Post";
import Share from "../Share/Share";
import "./Newsfeed.css";

const Newsfeed = ({ username }) => {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get("posts/timeline/" + user._id);

      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchPosts();
  }, [username, user._id]);
  return (
    <div className="newsfeed">
      <div className="newsfeedWrapper">
        {(!username || username === user.username) && <Share></Share>}
        {posts.map((p) => (
          <Post key={p._id} post={p}></Post>
        ))}
      </div>
    </div>
  );
};

export default Newsfeed;
