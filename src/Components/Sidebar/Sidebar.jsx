import { Link } from "react-router-dom";
import "./Sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Category,
  AttachMoney,
  Equalizer,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  ReportOutlined,
} from "@mui/icons-material";

export default function Sidebar() {
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
            <Link to="/analytics" className="link">
              <li className="sidebar-item">
                <Timeline className="sidebar-icon" />
                Analytics
              </li>
            </Link>
            <Link to="/sales" className="link">
              <li className="sidebar-item">
                <TrendingUp className="sidebar-icon" />
                Sales
              </li>
            </Link>
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
            <Link to="/transactions" className="link">
              <li className="sidebar-item">
                <AttachMoney className="sidebar-icon" />
                Transactions
              </li>
            </Link>
            <Link to="/reports" className="link">
              <li className="sidebar-item">
                <Equalizer className="sidebar-icon" />
                Reports
              </li>
            </Link>
          </ul>

          <h3 className="sidebar-title">Notifications</h3>
          <ul className="sidebar-list">
            <Link to="/mail" className="link">
              <li className="sidebar-item">
                <MailOutline className="sidebar-icon" />
                Mail
              </li>
            </Link>
            <Link to="/feedback" className="link">
              <li className="sidebar-item">
                <DynamicFeed className="sidebar-icon" />
                Feedback
              </li>
            </Link>
            <Link to="/Messages" className="link">
              <li className="sidebar-item">
                <ChatBubbleOutline className="sidebar-icon" />
                Messages
              </li>
            </Link>
          </ul>

          <h3 className="sidebar-title">Staff</h3>
          <ul className="sidebar-list">
            <Link to="/manage" className="link">
              <li className="sidebar-item">
                <WorkOutline className="sidebar-icon" />
                Manage
              </li>
            </Link>

            <Link to="/analysis" className="link">
              <li className="sidebar-item">
                <Timeline className="sidebar-icon" />
                Analysis
              </li>
            </Link>

            <Link to="/reports" className="link">
              <li className="sidebar-item">
                <ReportOutlined className="sidebar-icon" />
                Reports
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
