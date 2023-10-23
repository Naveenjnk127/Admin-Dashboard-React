import { Link } from "react-router-dom";
import "./Sidebar.css";
import { LineStyle,Timeline,TrendingUp,PermIdentity,Category,AttachMoney,Equalizer,MailOutline,DynamicFeed,ChatBubbleOutline,WorkOutline,ReportOutlined } from "@mui/icons-material";

export default function Sidebar(){
    return (
      <div className="sidebar">
        <div className="sidebar-wrapper">
          <div className="sidebar-menu">
            <h3 className="sidebar-title">Dashboard</h3>
            <ul className="sidebar-list">
              <Link to="/" className="link">
                <li className="sidebar-item">
                  <LineStyle className="sidebar-icon" />
                  Home
                </li>
              </Link>
              <li className="sidebar-item">
                <Timeline className="sidebar-icon" />
                Analytics
              </li>
              <li className="sidebar-item">
                <TrendingUp className="sidebar-icon" />
                Sales
              </li>
            </ul>

            <h3 className="sidebar-title">Quick Menu</h3>
            <ul className="sidebar-list">
              <Link to="/users" className="link">
                <li className="sidebar-item">
                  <PermIdentity className="sidebar-icon" />
                  Users
                </li>
              </Link>
              <Link to="/products" className="link">
                <li className="sidebar-item">
                  <Category className="sidebar-icon" />
                  Products
                </li>
              </Link>
              <li className="sidebar-item">
                <AttachMoney className="sidebar-icon" />
                Transactions
              </li>
              <li className="sidebar-item">
                <Equalizer className="sidebar-icon" />
                Reports
              </li>
            </ul>

            <h3 className="sidebar-title">Notifications</h3>
            <ul className="sidebar-list">
              <li className="sidebar-item">
                <MailOutline className="sidebar-icon" />
                Mail
              </li>
              <li className="sidebar-item">
                <DynamicFeed className="sidebar-icon" />
                Feedback
              </li>
              <li className="sidebar-item">
                <ChatBubbleOutline className="sidebar-icon" />
                Messages
              </li>
            </ul>

            <h3 className="sidebar-title">Staff</h3>
            <ul className="sidebar-list">
              <li className="sidebar-item">
                <WorkOutline className="sidebar-icon" />
                Manage
              </li>
              <li className="sidebar-item">
                <Timeline className="sidebar-icon" />
                Analysis
              </li>
              <li className="sidebar-item">
                <ReportOutlined className="sidebar-icon" />
                Reports
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
}