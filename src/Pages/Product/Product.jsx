// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import Charts from "../../Components/Charts/Charts";
import { productData } from "../../Data.js/UserData";
import { Publish } from "@mui/icons-material";
import product2 from "../../assets/ProfileImages/product2.jpg"

export default function Product() {
  return (
    <div className="product">
      <div className="product-titleContainer">
        <h1 className="product-title">Product</h1>
        <Link to="/NewProduct">
          <button className="product-addButton">Create</button>
        </Link>
      </div>
      <div className="product-top">
        <div className="product-topLeft">
          <Charts
            className="product-chart"
            data={productData}
            dataKey="Sales"
            title="Sales Performance"
          />
        </div>
        <div className="product-topRight">
          <div className="product-infoTop">
            <img
              src={product2}
              alt=""
              className="product-img"
            />
            <span className="product-name">Headphones</span>
          </div>
          <div className="product-infoBottom">
            <div className="product-infoItem">
              <span className="product-infoKey">Id:</span>
              <span className="product-infoValue">1234</span>
            </div>
            <div className="product-infoItem">
              <span className="product-infoKey">Sales:</span>
              <span className="product-infoValue">765</span>
            </div>
            <div className="product-infoItem">
              <span className="product-infoKey">Active:</span>
              <span className="product-infoValue">Yes</span>
            </div>
            <div className="product-infoItem">
              <span className="product-infoKey">In stock:</span>
              <span className="product-infoValue">No</span>
            </div>
          </div>
        </div>
      </div>
      <div className="product-bottom">
        <form action="" className="product-form">
          <div className="product-formLeft">
            <label>Product Name</label>
            <input
              type="text"
              placeholder="headphones"
              className="product-infoName"
            />
            <label htmlFor="">In Stock</label>
            <select name="inStock" id="inStock" className="product-infoStatus">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label htmlFor="">Active</label>
            <select name="active" id="active" className="product-infoStatus">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productUpdate-right">
            <div className="productUpdate-upload">
              <img
                className="productUpdate-img"
                src={product2}
                alt=""
              />
              <div className="productUpdate-buttons">
                <label htmlFor="file" className="productUpdate-imgFile">
                  <Publish className="productupdate-imgUploader" />
                  <a>Add new image</a>
                  <input type="file" id="file" style={{ display: "none" }} />
                </label>
                <button className="productUpdate-button">Update</button>
              </div>
              
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
