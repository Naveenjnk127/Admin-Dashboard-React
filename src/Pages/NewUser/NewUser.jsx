// eslint-disable-next-line no-unused-vars
import React from 'react';
import "./NewUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUser-title">New User</h1>
      <form action="" className="newUser-form">
        <div className="newUser-item">
          <label>Username</label>
          <input type="text" placeholder="kingragnor" />
        </div>
        <div className="newUser-item">
          <label>Full Name</label>
          <input type="text" placeholder="Ragnor" />
        </div>
        <div className="newUser-item">
          <label>Email</label>
          <input type="email" placeholder="ragnor@vikings.com" />
        </div>
        <div className="newUser-item">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUser-item">
          <label>Phone</label>
          <input type="text" placeholder="xxx-xxx-xxxx" />
        </div>
        <div className="newUser-item">
          <label>Address</label>
          <input type="text" placeholder="Chennai" />
        </div>
        <div className="newUser-item">
          <label>Gender</label>
          <div className="newUser-gender">
            <input type="radio" name="gender" id="male" value="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label htmlFor="female">Female</label>
            <input type="radio" name="gender" id="others" value="others" />
            <label htmlFor="others">Others</label>
          </div>
        </div>
        <div className="newUser-item">
            <label htmlFor="">Active</label>
            <select name="active" id="active" className="newUser-select">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
        </div> 
      </form>
      <button className="newUser-create">Create</button>
    </div>
  );
}
