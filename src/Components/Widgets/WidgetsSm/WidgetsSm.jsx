/* eslint-disable no-unused-vars */
import React from 'react';
import "./WidgetsSm.css";
import { Visibility } from '@mui/icons-material';

export default function WidgetsSm() {
  return (
    <div className='widgets-small'>
        <span className="widgetSm-title">New Join Members</span>
        <ul className="widgetSm-list">
            <li className="widgetSm-listItem">
                <img src="../src/assets/Profile images/profile1.jpg" alt="" className="widgetSm-img" />
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
                <img src="../src/assets/Profile images/profile2.jpg" alt="" className="widgetSm-img" />
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
                <img src="../src/assets/Profile images/profile4.jpg" alt="" className="widgetSm-img" />
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
                <img src="../src/assets/Profile images/profile5.jpg" alt="" className="widgetSm-img" />
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
                <img src="../src/assets/Profile images/profile6.jpg" alt="" className="widgetSm-img" />
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
