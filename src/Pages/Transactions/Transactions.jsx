/* eslint-disable no-unused-vars */
import React from "react";
import "./Transactions.css";
import { transactiondata } from "../../Data.js/UserData";
import profile1 from "../../assets/ProfileImages/profile1.jpg";
import profile2 from "../../assets/ProfileImages/profile2.jpg";
import profile3 from "../../assets/ProfileImages/profile3.jpg";
import profile4 from "../../assets/ProfileImages/profile4.jpg";

export default function Transactions() {
    // eslint-disable-next-line react/prop-types
    const Button = ({type}) =>{
        return <button className={"transaction-button" +" "+ type}>{type}</button>
    }

  return (

    <div className="transactions-large">
      <h3 className="transactionsLg-title">Latest Transactions</h3>
      <table className="transaction-table">
        <tr className="transaction-tr">
          <th className="transaction-th">Customer</th>
          <th className="transaction-th">Date</th>
          <th className="transaction-th">Amount</th>
          <th className="transaction-th">Status</th>
        </tr>

        <tbody>
          {transactiondata.map((data, index) => (
            <tr key={index} className="transaction-tr">
              <td className="transaction-user">
                <img src={data.img} alt="" className="transaction-img" />
                <span className="transaction-name">{data.customer}</span>
              </td>
              <td className="transaction-date">{data.date}</td>
              <td className="transaction-amount">{data.amount}</td>
              <td className="transaction-status">
              <Button type={data.status}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
