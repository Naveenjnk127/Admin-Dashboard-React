// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Reports.css";
import PieCharts from "../../Components/PieCharts/PieCharts";
import { piechartData } from "../../Data.js/UserData";

export default function Reports() {
  return (
    <div className="reports">
      <h3 className="reports-heading">Reports</h3>
      <div className="reports-info">
        <div className="reports-leftInfo">
          <PieCharts piechartData={piechartData} title="Product Sales" />
        </div>
        <div className="reports-rightInfo">
          {piechartData.map((data) => {
            return (
              <>
                <div className="reports-rightInfoTop">
                  <img src={data.img} alt="" className="reports-img" />
                  <span className="reports-name">{data.name}</span>
                  <span className="reports-percent">{data.value}</span>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
