// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Home.css";
import FeaturedInfo from "../FeaturedInfo/FeaturedInfo";
import Charts from "../../Components/Charts/Charts";
import {UserData} from "../../Data.js/UserData";
import WidgetsSm from "../../Components/Widgets/WidgetsSm/WidgetsSm";
import WidgetsLg from "../../Components/Widgets/WidgetsLg/WidgetsLg";

export default function Home(){
    return (
        <div className="home-Page">
            <FeaturedInfo />
            <Charts data={UserData} title="User Analytics" grid dataKey="Active User"/>
            <div className="home-widgets">
                <WidgetsSm />
                <WidgetsLg />
            </div>
        </div>
    )
}