// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import "./User.css";
import {
  CalendarTodayOutlined,
  LocationSearchingOutlined,
  MailLockOutlined,
  PermIdentity,
  PhoneAndroidOutlined,
  Publish,} from "@mui/icons-material";

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="user-title">Edit User</h1>
        <Link to="/newUser">
            <button className="user-addButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShow-top">
            <img
              src="../src/assets/Profile images/profile1.jpg"
              alt=""
              className="user-showImg"
            />
            <div className="userShow-topTitle">
              <span className="userShow-userName">Rocky</span>
              <span className="userShow-userTitle">Software developer</span>
            </div>
          </div>
          <div className="userShow-bottom">
            <span className="userShow-bottomTitle">Account details</span>
            <div className="userShow-info">
              <PermIdentity className="userShow-icon" />
              <span className="userShow-infoTitle">rockyrockzz88</span>
            </div>
            <div className="userShow-info">
              <CalendarTodayOutlined className="userShow-icon" />
              <span className="userShow-infoTitle">22.10.2023</span>
            </div>
            <div className="userShow-bottom">
              <span className="userShow-bottomTitle">Contact details</span>
              <div className="userShow-info">
                <PhoneAndroidOutlined className="userShow-icon" />
                <span className="userShow-infoTitle">9876543210</span>
              </div>
              <div className="userShow-info">
                <MailLockOutlined className="userShow-icon" />
                <span className="userShow-infoTitle">rocky567@gmail.com</span>
              </div>
              <div className="userShow-info">
                <LocationSearchingOutlined className="userShow-icon" />
                <span className="userShow-infoTitle">Vadapalani, Chennai</span>
              </div>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdate-title">Edit</span>
          <form action="" className="userUpdate-form">
            <div className="userUpdate-left">
              <div className="userUpdate-item">
                <label className="userUpdate-labels">Username</label>
                <input
                  className="userUpdate-inputs"
                  type="text"
                  placeholder="rocky"
                ></input>
              </div>
              <div className="userUpdate-item">
                <label className="userUpdate-labels">Full Name</label>
                <input
                  className="userUpdate-inputs"
                  type="text"
                  placeholder="rajkumar"
                ></input>
              </div>
              <div className="userUpdate-item">
                <label className="userUpdate-labels">Email</label>
                <input
                  className="userUpdate-inputs"
                  type="email"
                  placeholder="rockyraj@gmail.com"
                ></input>
              </div>
              <div className="userUpdate-item">
                <label className="userUpdate-labels">Phone</label>
                <input
                  className="userUpdate-inputs"
                  type="number"
                  placeholder="9876543210"
                ></input>
              </div>
              <div className="userUpdate-item">
                <label className="userUpdate-labels">Address</label>
                <input
                  className="userUpdate-inputs"
                  type="text"
                  placeholder="Vadapalani, Chennai"
                ></input>
              </div>
            </div>
            <div className="userUpdate-right">
              <div className="userUpdate-upload">
                <img
                  className="userUpdate-img"
                  src="../src/assets/Profile images/profile1.jpg"
                  alt=""
                />
                {/* <label htmlFor="file">
                  <Publish />
                </label> */}
                <div >
                  <label htmlFor="file" className="userUpdate-imgFile">
                    <Publish className="userupdate-imgUploader" />
                    <a>Add new image</a>
                    <input type="file" id="file" style={{ display: "none" }} />
                  </label>
                </div>
                <button className="userUpdate-button">Update</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
