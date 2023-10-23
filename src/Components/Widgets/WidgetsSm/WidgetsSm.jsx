/* eslint-disable no-unused-vars */
import React from 'react';
import "./WidgetsSm.css";
import { Visibility } from '@mui/icons-material';
import profile1 from "../../../assets/ProfileImages/profile1.jpg";
import profile2 from "../../../assets/ProfileImages/profile2.jpg";
import profile3 from "../../../assets/ProfileImages/profile3.jpg";
import profile4 from "../../../assets/ProfileImages/profile4.jpg";
import profile5 from "../../../assets/ProfileImages/profile5.jpg";


export default function WidgetsSm() {
  return (
    <div className='widgets-small'>
        <span className="widgetSm-title">New Join Members</span>
        <ul className="widgetSm-list">
            <li className="widgetSm-listItem">
                <img src={profile1} alt="" className="widgetSm-img" />
                <div className="widgetSm-user">
                    <span className="widgetSm-userName">Rajkumar</span>
                    <span className="widgetSm-userTitle">Software Developer</span>
                </div>
                <button className="widgetSm-button">
                    <Visibility className='widgetSm-icon'/>
                    Display
                </button>
            </li>

            <li className="widgetSm-listItem">
                <img src={profile2} alt="" className="widgetSm-img" />
                <div className="widgetSm-user">
                    <span className="widgetSm-userName">Ajay</span>
                    <span className="widgetSm-userTitle">Java Developer</span>
                </div>
                <button className="widgetSm-button">
                    <Visibility className='widgetSm-icon'/>
                    Display
                </button>
            </li>

            <li className="widgetSm-listItem">
                <img src={profile3} alt="" className="widgetSm-img" />
                <div className="widgetSm-user">
                    <span className="widgetSm-userName">Sree</span>
                    <span className="widgetSm-userTitle">LowCode Developer</span>
                </div>
                <button className="widgetSm-button">
                    <Visibility className='widgetSm-icon'/>
                    Display
                </button>
            </li>

            <li className="widgetSm-listItem">
                <img src={profile4} alt="" className="widgetSm-img" />
                <div className="widgetSm-user">
                    <span className="widgetSm-userName">Jagan</span>
                    <span className="widgetSm-userTitle">React Developer</span>
                </div>
                <button className="widgetSm-button">
                    <Visibility className='widgetSm-icon'/>
                    Display
                </button>
            </li>

            <li className="widgetSm-listItem">
                <img src={profile5} alt="" className="widgetSm-img" />
                <div className="widgetSm-user">
                    <span className="widgetSm-userName">Kowshik</span>
                    <span className="widgetSm-userTitle">Angular Developer</span>
                </div>
                <button className="widgetSm-button">
                    <Visibility className='widgetSm-icon'/>
                    Display
                </button>
            </li>
        </ul>
    </div>
  )
}
