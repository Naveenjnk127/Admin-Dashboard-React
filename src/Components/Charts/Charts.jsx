/* eslint-disable no-unused-vars */
import React ,{PureComponent} from 'react';
import "./Charts.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// eslint-disable-next-line react/prop-types
export default function Charts({title, data, dataKey, grid}) {
    


  return (
    <div className="chart">
      <h3 className="chart-title">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd"></XAxis>
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray="5 5"/>}
          <Line
            type="monotone"
            dataKey={dataKey}
            stroke="#5550bd"
            activeDot={{ r: 8 }}
          />
          {/* <Line type="monotone" dataKey="Active User" stroke="#82ca9d" /> */}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
