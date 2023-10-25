// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Messages.css";
import SearchBar from "../../Components/Searchbar/Searchbar";
import { transactiondata } from "../../Data.js/UserData";
import {  EmojiEmotionsOutlined, Image, Link, MoreHoriz, RocketLaunch, StarBorder, VideoCall } from "@mui/icons-material";

export default function Messages() {
  return (
    <div className="messages">
      <h3 className="messages-heading">Messages</h3>
      <div className="messages-tab">
        <div className="messages-tabLeft">
          <div className="messages-searchbar">
            <SearchBar onSearch="search" />
          </div>
          <div className="messages-userList">
            <span className="messages-userdata">
              {transactiondata.map((data, index) => {
                return (
                  <span className="messages-user" key={index}>
                    <span className="messags-userInfo">
                      <img src={data.img} alt="" className="messages-img" />
                      <span className="messages-name">{data.customer}</span>
                    </span>
                  </span>
                );
              })}
            </span>
          </div>
        </div>
        <div className="messages-tabRight">
          <div className="messages-rightbox">
            <div className="messages-righttopbar">
              <div className="messages-rightname">Ajay</div>
              <div className="messages-rightIconContainer">
                <MoreHoriz />
                <VideoCall />
                <StarBorder />
              </div>
            </div>
            <div className="messages-display">
              <div className="messages-part">
                
                <div className="messages-rightbottombar">
                  <div className="messages-rightIconContainer">
                    <Image />
                    <Link />
                    <EmojiEmotionsOutlined />
                  </div>
                  <input className="messages-rightInput"></input>
                  <div className="messages-sendcontainer">
                    <button className="messages-send">Send</button>
                    <RocketLaunch />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
