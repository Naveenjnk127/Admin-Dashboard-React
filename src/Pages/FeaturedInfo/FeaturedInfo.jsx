import "./FeaturedInfo.css";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

export default function FeaturedInfo(){
    return(
        <div className="featured">
            <div className="featured-item">
                <span className="featured-title">Revenue</span>
                <div className="featured-money-container">
                    <span className="featured-money">$2345</span>
                    <span className="featured-money-rate">-11 <ArrowDownward className="featured-icon negative"/></span>
                    <span className="featured-sub">Compared to last month</span>
                </div>
            </div>

            <div className="featured-item">
                <span className="featured-title">Sales</span>
                <div className="featured-money-container">
                    <span className="featured-money">$29835</span>
                    <span className="featured-money-rate">-12 <ArrowDownward className="featured-icon negative"/></span>
                    <span className="featured-sub">Compared to last month</span>
                </div>
            </div>

            <div className="featured-item">
                <span className="featured-title">Cost</span>
                <div className="featured-money-container">
                    <span className="featured-money">$235</span>
                    <span className="featured-money-rate">+1.1 <ArrowUpward className="featured-icon"/></span>
                    <span className="featured-sub">Compared to last month</span>
                </div>
            </div>
        </div>
    )
}