import React, { useContext, useRef, useState } from "react";
import "./Share.css";
import { VscFileMedia } from "react-icons/vsc";
import { MdLabel } from "react-icons/md";
import { MdOutlineRoom } from "react-icons/md";
import { BsEmojiLaughingFill } from "react-icons/bs";
import { GiCancel } from "react-icons/gi";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const Share = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useContext(AuthContext);
  const desc = useRef();
  const [file, setFile] = useState(null);
  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };

    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;

      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      await axios.post("/posts", newPost);
      window.location.reload();
    } catch (err) {}
  };
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src={
              user.profilePicture ? PF + user.profilePicture : PF + "avatar.png"
            }
            alt=""
            className="shareProfileImg"
          />
          <input
            placeholder={"what's on your mind " + user.username + "?"}
            className="shareInput"
            ref={desc}
          />
        </div>
        <hr className="shareHr" />
        {file && (
          <div className="shareImgContainer">
            <img src={URL.createObjectURL(file)} alt="" className="shareImg" />
            <GiCancel
              className="shareCancelImg"
              onClick={() => setFile(null)}
            ></GiCancel>
          </div>
        )}
        <form className="shareBottom" onSubmit={submitHandler}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <VscFileMedia
                style={{ color: "tomato" }}
                className="shareIcon"
              ></VscFileMedia>
              <span className="shareOptionText">Photo or Video</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
            <div className="shareOption">
              <MdLabel
                style={{ color: "blue" }}
                className="shareIcon"
              ></MdLabel>
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <MdOutlineRoom
                style={{ color: "green" }}
                className="shareIcon"
              ></MdOutlineRoom>
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <BsEmojiLaughingFill
                style={{ color: "goldenrod" }}
                className="shareIcon"
              ></BsEmojiLaughingFill>
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton" type="submit">
            Share
          </button>
        </form>
      </div>
    </div>
  );
};

export default Share;
