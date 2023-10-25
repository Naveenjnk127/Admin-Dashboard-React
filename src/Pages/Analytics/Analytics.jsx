// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Analytics.css";
// eslint-disable-next-line no-unused-vars
import ComposedCharts from "../../Components/ComposedCharts/ComposedCharts";
import Charts from "../../Components/Charts/Charts";
import { UserData } from "../../Data.js/UserData";

export default function Analytics() {
  return (
    
      
      <div className="analytics">
      <h3 className="analytics-heading">Analytics</h3>
      <Charts data={UserData} title="User Analytics" grid dataKey="Active User"/>
      </div>
    
  );
}
