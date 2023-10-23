// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Topbar.css";
import { Language, NotificationsNoneOutlined, Settings } from "@mui/icons-material";
import admin from "../../assets/admin.png"


export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-Wrapper">
        <div className="topLeft">
            <span className="logo">Admin Dashboard</span>
            
        </div>
        <div className="topRight">
          <div className="topbar-IconContainer">
            <NotificationsNoneOutlined />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbar-IconContainer">
            <Language />
            <span className="topIconBadge">3</span>
          </div>
          <div className="topbar-IconContainer">
            <Settings />
            <span className="topIconBadge">4</span>
          </div>
          <img src={admin} alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
