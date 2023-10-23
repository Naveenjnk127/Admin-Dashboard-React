/* eslint-disable no-unused-vars */
import React from "react";
import "./WidgetsLg.css";

export default function WidgetsLg() {

    // eslint-disable-next-line react/prop-types
    const Button = ({type}) =>{
        return <button className={"widgetLg-button" +" "+ type}>{type}</button>
    }

  return (
    <div className="widgets-large">
      <h3 className="widgetsLg-title">Latest Transactions</h3>
      <table className="widgetLg-table">
        <tr className="widgetLg-tr">
          <th className="widgetLg-th">Customer</th>
          <th className="widgetLg-th">Date</th>
          <th className="widgetLg-th">Amount</th>
          <th className="widgetLg-th">Status</th>
        </tr>
        <tr className="widgetLg-tr">
            <td className="widgetLg-user">
                <img src="../src/assets/Profile images/profile1.jpg" alt="" className="widgetLg-img"/>
                <span className="widgetLg-name">Ajay</span>
            </td>
            <td className="widgetLg-date">22 Oct 2023</td>
            <td className="widgetLg-amount">$127.00</td>
            <td className="widgetLg-status">
                <Button type='Approved'/>
            </td>
        </tr>
        <tr className="widgetLg-tr">
            <td className="widgetLg-user">
                <img src="../src/assets/Profile images/profile2.jpg" alt="" className="widgetLg-img"/>
                <span className="widgetLg-name">Ajay</span>
            </td>
            <td className="widgetLg-date">22 Oct 2023</td>
            <td className="widgetLg-amount">$300</td>
            <td className="widgetLg-status">
                <Button type='Pending'/>
            </td>
        </tr>
        <tr className="widgetLg-tr">
            <td className="widgetLg-user">
                <img src="../src/assets/Profile images/profile3.jpg" alt="" className="widgetLg-img"/>
                <span className="widgetLg-name">Jaganath</span>
            </td>
            <td className="widgetLg-date">22 Oct 2023</td>
            <td className="widgetLg-amount">$122.00</td>
            <td className="widgetLg-status">
                <Button type='Declined'/>
            </td>
        </tr>
        <tr className="widgetLg-tr">
            <td className="widgetLg-user">
                <img src="../src/assets/Profile images/profile4.jpg" alt="" className="widgetLg-img"/>
                <span className="widgetLg-name">Naveen</span>
            </td>
            <td className="widgetLg-date">22 Oct 2023</td>
            <td className="widgetLg-amount">$400.00</td>
            <td className="widgetLg-status">
                <Button type='Approved'/>
            </td>
        </tr>
      </table>
    </div>
  );
}
