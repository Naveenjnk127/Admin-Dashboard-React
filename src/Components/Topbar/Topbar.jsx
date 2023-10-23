// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Topbar.css";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';
// import {SettingsIcon,NotificationsNoneIcon,LanguageIcon} from '@mui/icons-material/';


export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-Wrapper">
        <div className="topLeft">
            <span className="logo">Admin Dashboard</span>
            
        </div>
        <div className="topRight">
          <div className="topbar-IconContainer">
            <NotificationsNoneIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbar-IconContainer">
            <LanguageIcon />
            <span className="topIconBadge">3</span>
          </div>
          <div className="topbar-IconContainer">
            <SettingsIcon />
            <span className="topIconBadge">4</span>
          </div>
          <img src="../src/assets/admin.png" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
