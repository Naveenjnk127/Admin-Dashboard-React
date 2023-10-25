// eslint-disable-next-line no-unused-vars
import React from 'react';
import "./Sales.css";
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';

export default function Sales() {
  return (
    <div className='sales'>
        <h3 className="sales-heading">Product Sales</h3>
        <div className="sales">
            <div className="sales-item">
                <span className="sales-title">Revenue</span>
                <div className="sales-money-container">
                    <span className="sales-money">$2345</span>
                    <span className="sales-money-rate">-11 <ArrowDownward className="sales-icon negative"/></span>
                    <span className="sales-sub">Compared to last month</span>
                </div>
            </div>

            <div className="sales-item">
                <span className="sales-title">Sales</span>
                <div className="sales-money-container">
                    <span className="sales-money">$29835</span>
                    <span className="sales-money-rate">-12 <ArrowDownward className="sales-icon negative"/></span>
                    <span className="sales-sub">Compared to last month</span>
                </div>
            </div>

            <div className="sales-item">
                <span className="sales-title">Cost</span>
                <div className="sales-money-container">
                    <span className="sales-money">$235</span>
                    <span className="sales-money-rate">+1.1 <ArrowUpward className="sales-icon"/></span>
                    <span className="sales-sub">Compared to last month</span>
                </div>
            </div>
        </div>
    </div>
  )
}
